import { Authority, Client, Encrypt, Decrypt, Encoder, Profile } from './libs';

import {
  CallbackRequest,
  DownloadBillRequest,
  DownloadBillResponse,
  FXBookRequest,
  FXBookResponse,
  FXEnquiryRequest,
  FXEnquiryResponse,
  FXOrderResponse,
  FXQuoteBulkRequest,
  FXQuoteBulkResponse,
  FXQuoteRequest,
  FXQuoteResponse,
  OpenAccountQueryRequest,
  OpenAccountQueryResponse,
  OpenBalanceRequest,
  OpenBalanceResponse,
  OpenChatsRequest,
  OpenFpsRequest,
  OpenFundInRequest,
  OpenOrderDetailRequest,
  OpenOrderDetailResponse,
  OpenPayoutResultRequest,
  OpenRdtRequest,
  OpenRefundRequest,
  OpenTtRequest,
  PaymentBusinessType,
  QueryLimitParam,
  QueryLimitResponse,
  Reason,
} from './api';
import {
  ApplicationQueryReq,
  ApplicationQueryResp,
  ApplicationSubmissionReq,
  ApplicationSubmissionResp,
  FileUploadResp,
  ProfileDetailReq,
  ProfileDetailResp,
  ProfileFormReq,
  ProfileNotificationReq,
} from './kyc-api';

interface ICallback {
  /**
   * 处理入金详情
   */
  parseFundInRequest(resp: OpenFundInRequest): void;

  /**
   * 处理出金下单详情
   */
  parsePayoutRequest(resp: OpenPayoutResultRequest): void;

  /**
   * 处理退款详情
   */
  parseRefundRequest(resp: OpenRefundRequest): void;

  /**
   * 处理换汇详情
   */
  parseFXRequest(resp: FXOrderResponse): void;

  parseProfileUpdateRequest(req: ProfileNotificationReq): void;

  parseRdCheckErrorRequest(req: ProfileNotificationReq): void;

  parseRdCheckSuccessRequest(req: ProfileNotificationReq): void;

  parseBankCheckFailRequest(req: ProfileNotificationReq): void;

  parseBankCheckSuccessRequest(req: ProfileNotificationReq): void;

  parseOneKeyPeopleSignedRequest(req: ProfileNotificationReq): void;

  parseOneKeyPeopleBindRequest(req: ProfileNotificationReq): void;
}

class RDToolkit {
  private readonly openUrl: string;
  private readonly encoder: Encoder;
  private readonly profile: Profile;
  private readonly authority: Authority;

  private constructor(path: string, profile: Profile) {
    let oauthUrl = '/realms/rdapi/protocol/openid-connect/token';
    if ('DEV' == process.env['RD_MODE']) {
      oauthUrl = 'https://auth.uat.rdezlink.tech' + oauthUrl;
      this.openUrl = 'https://open.uat.rdezlink.tech';
    } else {
      oauthUrl = 'https://auth.rd.group' + oauthUrl;
      this.openUrl = 'https://open.rd.group';
    }
    this.profile = profile;
    this.authority = Authority.of(oauthUrl);
    this.encoder = Encoder.of(path);
  }

  public static of(path: string, profile: Profile): RDToolkit {
    return new RDToolkit(path, profile);
  }

  public static async callback(path: string, appId: string, callbackData: Uint8Array, callback: ICallback) {
    const resp = CallbackRequest.deserializeBinary(callbackData);
    const profile = await Encoder.of(path).loadKeyPair(Profile.of(appId, resp.clientKeyId, resp.rdKeyId));
    const data = await Decrypt(profile.getPrivateKey()!, profile.getPublicKey()!, resp.data) as Uint8Array;
    switch (resp.businessType) {
      case PaymentBusinessType.PAYMENT_BUSINESS_TYPE_FUND_IN:
        callback.parseFundInRequest(OpenFundInRequest.deserializeBinary(data));
        break;
      case PaymentBusinessType.PAYMENT_BUSINESS_TYPE_PAY_OUT:
        callback.parsePayoutRequest(OpenPayoutResultRequest.deserializeBinary(data));
        break;
      case PaymentBusinessType.PAYMENT_BUSINESS_TYPE_REFUND:
        callback.parseRefundRequest(OpenRefundRequest.deserializeBinary(data));
        break;
      case PaymentBusinessType.FX_BUSINESS_TYPE_SUCCESS:
        callback.parseFXRequest(FXOrderResponse.deserializeBinary(data));
        break;
    }
  }

  public addAuthority(clientId: string, clientSecret: string): RDToolkit {
    Authority.addAuthority(this.profile.getAppId(), clientId, clientSecret);
    return this;
  }

  public addSecret(clientFingerprint: string, clientSecret: string): RDToolkit {
    Encoder.addSecret(clientFingerprint, clientSecret);
    return this;
  }

  // Example method to showcase testing or internal operations
  public async keyPair(): Promise<Profile | undefined> {
    return await this.encoder.loadKeyPair(this.profile);
  }

  public async openBalance(accountId: string): Promise<OpenBalanceResponse> {
    const request = OpenBalanceRequest.fromObject({ accountId });
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/balance', request.serializeBinary());
    console.log('open balance request: ', request);
    console.log('open balance resp: ', resp);
    return OpenBalanceResponse.deserializeBinary(resp);
  }


  public async accountDetail(accountId: string): Promise<OpenAccountQueryResponse> {
    const request = OpenAccountQueryRequest.fromObject({ accountId: accountId });
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/account/detail', request.serializeBinary());
    console.log('account detail request: ', request);
    console.log('account detail resp: ', resp);
    return OpenAccountQueryResponse.deserializeBinary(resp);
  }

  public async openOutwardSubmitByRDT(request: OpenRdtRequest): Promise<Reason> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/payment/submit/rdt', request.serializeBinary());
    return Reason.deserializeBinary(resp);
  }

  public async openOutwardSubmitByFPS(request: OpenFpsRequest): Promise<Reason> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/payment/submit/fps', request.serializeBinary());
    return Reason.deserializeBinary(resp);
  }

  public async openOutwardSubmitByTT(request: OpenTtRequest): Promise<Reason> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/payment/submit/tt', request.serializeBinary());
    return Reason.deserializeBinary(resp);
  }

  public async openOutwardSubmitByCHATS(request: OpenChatsRequest): Promise<Reason> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/payment/submit/chats', request.serializeBinary());
    return Reason.deserializeBinary(resp);
  }

  public async openOrderDetail(request: OpenOrderDetailRequest): Promise<OpenOrderDetailResponse> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/payment/enquiry', request.serializeBinary());
    return OpenOrderDetailResponse.deserializeBinary(resp);
  }

  public async openQueryLimit(request: QueryLimitParam): Promise<QueryLimitResponse> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/payment/limit', request.serializeBinary());
    return QueryLimitResponse.deserializeBinary(resp);
  }

  /**
   * 对账单下载接口
   *
   * @return
   * @param request
   */
  public async openDownloadBill(request: DownloadBillRequest): Promise<DownloadBillResponse> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/bill/download', request.serializeBinary());
    return DownloadBillResponse.deserializeBinary(resp);
  }

  public async openFXQuoteBulk(request: FXQuoteBulkRequest): Promise<FXQuoteBulkResponse> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/fx/quoteBulk', request.serializeBinary());
    return FXQuoteBulkResponse.deserializeBinary(resp);
  }

  public async openFXQuote(request: FXQuoteRequest): Promise<FXQuoteResponse> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/fx/quote', request.serializeBinary());
    return FXQuoteResponse.deserializeBinary(resp);
  }

  public async openFXBook(request: FXBookRequest): Promise<FXBookResponse> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/fx/book', request.serializeBinary());
    return FXBookResponse.deserializeBinary(resp);
  }

  public async openFXEnquiry(request: FXEnquiryRequest): Promise<FXEnquiryResponse> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/wallet/fx/enquiry', request.serializeBinary());
    return FXEnquiryResponse.deserializeBinary(resp);
  }

  async submissionProfile(applicationType: number, form: ProfileFormReq, outApplicationNo: string, openNoticePush = true): Promise<ApplicationSubmissionResp> {
    const request = ApplicationSubmissionReq.fromObject({ outApplicationNo, applicationType, form, openNoticePush });
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/kyc/application/submission"', request.serializeBinary());
    return ApplicationSubmissionResp.deserializeBinary(resp);
  }

  /**
   * 钱包开户申请
   *
   * @param outApplicationNo
   * @param form
   * @param openNoticePush
   * @return
   */
  public async walletOpenApplication(outApplicationNo: string, form: ProfileFormReq, openNoticePush = true): Promise<ApplicationSubmissionResp> {
    return this.submissionProfile(1, form, outApplicationNo, openNoticePush);
  }

  /**
   * 创建档案申请
   *
   * @param outApplicationNo
   * @param form
   * @param openNoticePush
   * @return
   */
  public async createProfileApplication(outApplicationNo: string, form: ProfileFormReq, openNoticePush = true): Promise<ApplicationSubmissionResp> {
    return this.submissionProfile(2, form, outApplicationNo, openNoticePush);
  }

  /**
   * 档案更新申请
   *
   * @param outApplicationNo
   * @param form
   * @return
   */
  public async profileUpdateApplication(outApplicationNo: string, form: ProfileFormReq): Promise<ApplicationSubmissionResp> {
    return this.submissionProfile(3, form, outApplicationNo, true);
  }


  /**
   * 申请状态查询
   *
   * @return
   * @param request
   */
  public async applicationQuery(request: ApplicationQueryReq): Promise<ApplicationQueryResp> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/kyc/application/query"', request.serializeBinary());
    return ApplicationQueryResp.deserializeBinary(resp);
  }

  /**
   * 档案详情查询
   *
   * @return
   * @param request
   */
  public async profileDetail(request: ProfileDetailReq): Promise<ProfileDetailResp> {
    const keyPair = await this.keyPair();
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendProto(keyPair!, this.openUrl + '/kyc/application/detail"', request.serializeBinary());
    return ProfileDetailResp.deserializeBinary(resp);
  }

  /**
   * 文件上传查询
   *
   * @param mediaFile
   * @param file
   * @param mediaType
   * @return
   */
  public async fileUpload(mediaFile: string, file: Blob, mediaType: string): Promise<FileUploadResp> {
    const authorization = await this.authority.authorization(this.profile.getAppId());
    const resp = await Client.of(this.profile.getAppId()).authorization(authorization!).sendForm(this.openUrl + '/storage/media/putObject?mediaType=' + mediaType, { 'mediaFile': mediaFile }, file);
    return FileUploadResp.fromObject({ code: resp['code'], msg: resp['msg'], data: resp['data'] });
  }
}

export { ICallback, Profile, RDToolkit, Encrypt, Decrypt };