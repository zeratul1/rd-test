"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RDToolkit = exports.Profile = void 0;
var libs_1 = require("./libs");
exports.Profile = libs_1.Profile;
var api_1 = require("./api");
var kyc_api_1 = require("./kyc-api");
var RDToolkit = /** @class */ (function () {
    function RDToolkit(path, profile) {
        var oauthUrl = '/realms/rdapi/protocol/openid-connect/token';
        if ('DEV' == process.env['RD_MODE']) {
            oauthUrl = 'https://auth.uat.rdezlink.tech' + oauthUrl;
            this.openUrl = 'https://open.uat.rdezlink.tech';
        }
        else {
            oauthUrl = 'https://auth.rd.group' + oauthUrl;
            this.openUrl = 'https://open.rd.group';
        }
        this.profile = profile;
        this.authority = libs_1.Authority.of(oauthUrl);
        this.encoder = libs_1.Encoder.of(path);
    }
    RDToolkit.of = function (path, profile) {
        return new RDToolkit(path, profile);
    };
    RDToolkit.callback = function (path, appId, callbackData, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, profile, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resp = api_1.CallbackRequest.deserializeBinary(callbackData);
                        return [4 /*yield*/, libs_1.Encoder.of(path).loadKeyPair(libs_1.Profile.of(appId, resp.clientKeyId, resp.rdKeyId))];
                    case 1:
                        profile = _a.sent();
                        return [4 /*yield*/, (0, libs_1.Decrypt)(profile.getPrivateKey(), profile.getPublicKey(), resp.data)];
                    case 2:
                        data = _a.sent();
                        switch (resp.businessType) {
                            case api_1.PaymentBusinessType.PAYMENT_BUSINESS_TYPE_FUND_IN:
                                callback.parseFundInRequest(api_1.OpenFundInRequest.deserializeBinary(data));
                                break;
                            case api_1.PaymentBusinessType.PAYMENT_BUSINESS_TYPE_PAY_OUT:
                                callback.parsePayoutRequest(api_1.OpenPayoutResultRequest.deserializeBinary(data));
                                break;
                            case api_1.PaymentBusinessType.PAYMENT_BUSINESS_TYPE_REFUND:
                                callback.parseRefundRequest(api_1.OpenRefundRequest.deserializeBinary(data));
                                break;
                            case api_1.PaymentBusinessType.FX_BUSINESS_TYPE_SUCCESS:
                                callback.parseFXRequest(api_1.FXOrderResponse.deserializeBinary(data));
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RDToolkit.prototype.addAuthority = function (clientId, clientSecret) {
        libs_1.Authority.addAuthority(this.profile.getAppId(), clientId, clientSecret);
        return this;
    };
    RDToolkit.prototype.addSecret = function (clientFingerprint, clientSecret) {
        libs_1.Encoder.addSecret(clientFingerprint, clientSecret);
        return this;
    };
    // Example method to showcase testing or internal operations
    RDToolkit.prototype.keyPair = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.encoder.loadKeyPair(this.profile)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RDToolkit.prototype.openBalance = function (requestId) {
        return __awaiter(this, void 0, void 0, function () {
            var request, keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = api_1.OpenBalanceRequest.fromObject({ requestId: requestId });
                        return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/balance', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.OpenBalanceResponse.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.accountDetail = function (accountId) {
        return __awaiter(this, void 0, void 0, function () {
            var request, keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = api_1.OpenAccountQueryRequest.fromObject({ accountId: accountId });
                        return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/account/detail', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.OpenAccountQueryResponse.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openOutwardSubmitByRDT = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/payment/submit/rdt', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.Reason.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openOutwardSubmitByFPS = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/payment/submit/fps', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.Reason.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openOutwardSubmitByTT = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/payment/submit/tt', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.Reason.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openOutwardSubmitByCHATS = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/payment/submit/chats', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.Reason.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openOrderDetail = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/payment/enquiry', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.OpenOrderDetailResponse.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openQueryLimit = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/payment/limit', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.QueryLimitResponse.deserializeBinary(resp)];
                }
            });
        });
    };
    /**
     * 对账单下载接口
     *
     * @return
     * @param request
     */
    RDToolkit.prototype.openDownloadBill = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/bill/download', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.DownloadBillResponse.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openFXQuoteBulk = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/fx/quoteBulk', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.FXQuoteBulkResponse.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openFXQuote = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/fx/quote', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.FXQuoteResponse.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openFXBook = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/fx/book', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.FXBookResponse.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.openFXEnquiry = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/wallet/fx/enquiry', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, api_1.FXEnquiryResponse.deserializeBinary(resp)];
                }
            });
        });
    };
    RDToolkit.prototype.submissionProfile = function (applicationType, form, outApplicationNo, openNoticePush) {
        if (openNoticePush === void 0) { openNoticePush = true; }
        return __awaiter(this, void 0, void 0, function () {
            var request, keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = kyc_api_1.ApplicationSubmissionReq.fromObject({ outApplicationNo: outApplicationNo, applicationType: applicationType, form: form, openNoticePush: openNoticePush });
                        return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/kyc/application/submission"', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, kyc_api_1.ApplicationSubmissionResp.deserializeBinary(resp)];
                }
            });
        });
    };
    /**
     * 钱包开户申请
     *
     * @param outApplicationNo
     * @param form
     * @param openNoticePush
     * @return
     */
    RDToolkit.prototype.walletOpenApplication = function (outApplicationNo, form, openNoticePush) {
        if (openNoticePush === void 0) { openNoticePush = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.submissionProfile(1, form, outApplicationNo, openNoticePush)];
            });
        });
    };
    /**
     * 创建档案申请
     *
     * @param outApplicationNo
     * @param form
     * @param openNoticePush
     * @return
     */
    RDToolkit.prototype.createProfileApplication = function (outApplicationNo, form, openNoticePush) {
        if (openNoticePush === void 0) { openNoticePush = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.submissionProfile(2, form, outApplicationNo, openNoticePush)];
            });
        });
    };
    /**
     * 档案更新申请
     *
     * @param outApplicationNo
     * @param form
     * @return
     */
    RDToolkit.prototype.profileUpdateApplication = function (outApplicationNo, form) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.submissionProfile(3, form, outApplicationNo, true)];
            });
        });
    };
    /**
     * 申请状态查询
     *
     * @return
     * @param request
     */
    RDToolkit.prototype.applicationQuery = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/kyc/application/query"', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, kyc_api_1.ApplicationQueryResp.deserializeBinary(resp)];
                }
            });
        });
    };
    /**
     * 档案详情查询
     *
     * @return
     * @param request
     */
    RDToolkit.prototype.profileDetail = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.keyPair()];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 2:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendProto(keyPair, this.openUrl + '/kyc/application/detail"', request.serializeBinary())];
                    case 3:
                        resp = _a.sent();
                        return [2 /*return*/, kyc_api_1.ProfileDetailResp.deserializeBinary(resp)];
                }
            });
        });
    };
    /**
     * 文件上传查询
     *
     * @param mediaFile
     * @param file
     * @param mediaType
     * @return
     */
    RDToolkit.prototype.fileUpload = function (mediaFile, file, mediaType) {
        return __awaiter(this, void 0, void 0, function () {
            var authorization, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authority.authorization(this.profile.getAppId())];
                    case 1:
                        authorization = _a.sent();
                        return [4 /*yield*/, libs_1.Client.of(this.profile.getAppId()).authorization(authorization).sendForm(this.openUrl + '/storage/media/putObject?mediaType=' + mediaType, { 'mediaFile': mediaFile }, file)];
                    case 2:
                        resp = _a.sent();
                        return [2 /*return*/, kyc_api_1.FileUploadResp.fromObject({ code: resp['code'], msg: resp['msg'], data: resp['data'] })];
                }
            });
        });
    };
    return RDToolkit;
}());
exports.RDToolkit = RDToolkit;
