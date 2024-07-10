import { ICallback, Profile, RDToolkit } from './index';
import {
  FXOrderResponse,
  OpenBalanceResponse,
  OpenFundInRequest,
  OpenPayoutResultRequest,
  OpenRefundRequest,
} from './api';
import { ProfileNotificationReq } from './kyc-api';

class TestCallback implements ICallback {
  parseFXRequest(resp: FXOrderResponse): void {
  }

  parseFundInRequest(resp: OpenFundInRequest): void {
  }

  parsePayoutRequest(resp: OpenPayoutResultRequest): void {
  }

  parseRefundRequest(resp: OpenRefundRequest): void {
  }

  parseBankCheckFailRequest(req: ProfileNotificationReq): void {
  }

  parseBankCheckSuccessRequest(req: ProfileNotificationReq): void {
  }

  parseOneKeyPeopleBindRequest(req: ProfileNotificationReq): void {
  }

  parseOneKeyPeopleSignedRequest(req: ProfileNotificationReq): void {
  }

  parseProfileUpdateRequest(req: ProfileNotificationReq): void {
  }

  parseRdCheckErrorRequest(req: ProfileNotificationReq): void {
  }

  parseRdCheckSuccessRequest(req: ProfileNotificationReq): void {
  }

}

test('test openBalance', async () => {
  const profile = Profile.of('477168296576290816', 'f8435b4f9b99662c', '806e2a2496f2380a');
  const toolkit = RDToolkit.of(__dirname, profile)
    .addAuthority('6f601da64b98a52d83cbe2141f533181878ffe84', 'qINfnmK51KhyXEruTxbh6pbdk5zOMG95').addSecret('f8435b4f9b99662c', '123456');

  const balance = await toolkit.openBalance('55630812');

  expect(balance.toArray().length).toBe(new OpenBalanceResponse().toArray().length);

  await RDToolkit.callback(__dirname, '477168296576290816', new Uint8Array(),new TestCallback());
});