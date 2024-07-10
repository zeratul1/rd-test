"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OpenRdtRequest_one_of_decls, _OpenFpsRequest_one_of_decls, _OpenTtRequest_one_of_decls, _OpenChatsRequest_one_of_decls, _McpPayerAddress_one_of_decls, _MttPayerAddress_one_of_decls, _FpsReceivingParty_one_of_decls, _OpenBalanceRequest_one_of_decls, _OpenOrderDetailRequest_one_of_decls, _OpenBalanceResponse_one_of_decls, _OpenOrderDetailResponse_one_of_decls, _OpenPayoutResultRequest_one_of_decls, _OrderDetailData_one_of_decls, _OpenBalanceData_one_of_decls, _OpenSubAccountData_one_of_decls, _OpenFundInRequest_one_of_decls, _OpenRefundRequest_one_of_decls, _OpenRefundDetail_one_of_decls, _RdtReceivingParty_one_of_decls, _TtReceivingParty_one_of_decls, _ChatsReceivingParty_one_of_decls, _QueryLimitParam_one_of_decls, _QueryLimitResponse_one_of_decls, _QueryLimitData_one_of_decls, _OpenAccountQueryRequest_one_of_decls, _OpenAccountQueryResponse_one_of_decls, _OpenAccountQueryData_one_of_decls, _DownloadBillData_one_of_decls, _DownloadBillRequest_one_of_decls, _DownloadBillResponse_one_of_decls, _FX_one_of_decls, _FXQuoteBulkRequest_one_of_decls, _FXQuoteBulkResponse_one_of_decls, _FXQuoteBulkData_one_of_decls, _FXRateData_one_of_decls, _FXQuoteRequest_one_of_decls, _FXQuoteResponse_one_of_decls, _FXQuoteData_one_of_decls, _FXBookRequest_one_of_decls, _FXBookResponse_one_of_decls, _FXBookData_one_of_decls, _FXEnquiryRequest_one_of_decls, _FXEnquiryResponse_one_of_decls, _FXEnquiryData_one_of_decls, _FXOrderResponse_one_of_decls, _FXOrderDetailData_one_of_decls, _CallbackRequest_one_of_decls, _ApiReq_one_of_decls, _ApiResp_one_of_decls, _Reason_one_of_decls;
exports.__esModule = true;
exports.FXEnquiryRequest = exports.FXBookData = exports.FXBookResponse = exports.FXBookRequest = exports.FXQuoteData = exports.FXQuoteResponse = exports.FXQuoteRequest = exports.FXRateData = exports.FXQuoteBulkData = exports.FXQuoteBulkResponse = exports.FXQuoteBulkRequest = exports.FXOrderStatus = exports.FXDirection = exports.FX = exports.DownloadBillResponse = exports.DownloadBillRequest = exports.DownloadBillData = exports.OpenAccountQueryData = exports.OpenAccountQueryResponse = exports.OpenAccountQueryRequest = exports.QueryLimitData = exports.QueryLimitResponse = exports.QueryLimitParam = exports.ChatsReceivingParty = exports.TtReceivingParty = exports.RdtReceivingParty = exports.OpenRefundDetail = exports.OpenRefundRequest = exports.OpenFundInRequest = exports.OpenSubAccountData = exports.OpenBalanceData = exports.OrderDetailData = exports.OpenPayoutResultRequest = exports.OpenOrderDetailResponse = exports.OpenBalanceResponse = exports.OpenOrderDetailRequest = exports.OpenBalanceRequest = exports.FpsReceivingParty = exports.MttPayerAddress = exports.McpPayerAddress = exports.OpenChatsRequest = exports.OpenTtRequest = exports.OpenFpsRequestFpsTxnCcy = exports.OpenFpsRequest = exports.OpenRdtRequest = exports.PaymentBusinessType = exports.OpenOrderStatus = exports.TxnPurpose = exports.TxnProxyType = exports.OpenPaymentErrorCode = void 0;
exports.Reason = exports.ApiResp = exports.ApiReq = exports.CallbackRequest = exports.FXOrderDetailData = exports.FXOrderResponse = exports.FXEnquiryData = exports.FXEnquiryResponse = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 5.26.1
 * source: api.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
var pb_1 = __importStar(require("google-protobuf"));
var OpenPaymentErrorCode;
(function (OpenPaymentErrorCode) {
    OpenPaymentErrorCode[OpenPaymentErrorCode["_UNKNOWN_OPEC"] = 0] = "_UNKNOWN_OPEC";
    OpenPaymentErrorCode[OpenPaymentErrorCode["PAYMENT_ERROR"] = 6001] = "PAYMENT_ERROR";
    OpenPaymentErrorCode[OpenPaymentErrorCode["PARAMS_ERROR"] = 6002] = "PARAMS_ERROR";
    OpenPaymentErrorCode[OpenPaymentErrorCode["WALLET_NOT_EXISTS"] = 6101] = "WALLET_NOT_EXISTS";
    OpenPaymentErrorCode[OpenPaymentErrorCode["WALLET_INSUFFICIENT_FUND"] = 6102] = "WALLET_INSUFFICIENT_FUND";
    OpenPaymentErrorCode[OpenPaymentErrorCode["WALLET_STATUS_INVALID"] = 6103] = "WALLET_STATUS_INVALID";
    OpenPaymentErrorCode[OpenPaymentErrorCode["WALLET_SHOULD_NOT_SAME"] = 6104] = "WALLET_SHOULD_NOT_SAME";
    OpenPaymentErrorCode[OpenPaymentErrorCode["TRANSFER_LIMIT"] = 6201] = "TRANSFER_LIMIT";
    OpenPaymentErrorCode[OpenPaymentErrorCode["TRANSACTION_LIMIT"] = 6202] = "TRANSACTION_LIMIT";
    OpenPaymentErrorCode[OpenPaymentErrorCode["FRAUD_RULE_HIT"] = 6203] = "FRAUD_RULE_HIT";
    OpenPaymentErrorCode[OpenPaymentErrorCode["INVALID_BIC"] = 6204] = "INVALID_BIC";
    OpenPaymentErrorCode[OpenPaymentErrorCode["INVALID_PAYEE_ACCOUNT_NAME"] = 6205] = "INVALID_PAYEE_ACCOUNT_NAME";
    OpenPaymentErrorCode[OpenPaymentErrorCode["INVALID_PAYEE_ACCOUNT_NO"] = 6206] = "INVALID_PAYEE_ACCOUNT_NO";
    OpenPaymentErrorCode[OpenPaymentErrorCode["FPS_REJECTED"] = 6207] = "FPS_REJECTED";
    OpenPaymentErrorCode[OpenPaymentErrorCode["COLLECTION_LIMIT"] = 6208] = "COLLECTION_LIMIT";
    OpenPaymentErrorCode[OpenPaymentErrorCode["TRANSACTION_IS_DUPLICATE"] = 6209] = "TRANSACTION_IS_DUPLICATE";
    OpenPaymentErrorCode[OpenPaymentErrorCode["TRANSACTION_CANNOT_BE_FOUND"] = 6003] = "TRANSACTION_CANNOT_BE_FOUND";
})(OpenPaymentErrorCode = exports.OpenPaymentErrorCode || (exports.OpenPaymentErrorCode = {}));
var TxnProxyType;
(function (TxnProxyType) {
    TxnProxyType[TxnProxyType["_UNKNOWN_TYPE"] = 0] = "_UNKNOWN_TYPE";
    TxnProxyType[TxnProxyType["M"] = 1] = "M";
    TxnProxyType[TxnProxyType["B"] = 2] = "B";
    TxnProxyType[TxnProxyType["E"] = 3] = "E";
    TxnProxyType[TxnProxyType["S"] = 4] = "S";
})(TxnProxyType = exports.TxnProxyType || (exports.TxnProxyType = {}));
var TxnPurpose;
(function (TxnPurpose) {
    TxnPurpose[TxnPurpose["_UNKNOWN_TP"] = 0] = "_UNKNOWN_TP";
    TxnPurpose[TxnPurpose["GOD"] = 1] = "GOD";
    TxnPurpose[TxnPurpose["CTF"] = 2] = "CTF";
    TxnPurpose[TxnPurpose["STR"] = 3] = "STR";
    TxnPurpose[TxnPurpose["OTF"] = 4] = "OTF";
})(TxnPurpose = exports.TxnPurpose || (exports.TxnPurpose = {}));
var OpenOrderStatus;
(function (OpenOrderStatus) {
    OpenOrderStatus[OpenOrderStatus["_UNKNOWN_OPS"] = 0] = "_UNKNOWN_OPS";
    OpenOrderStatus[OpenOrderStatus["SUBMITTED"] = 1] = "SUBMITTED";
    OpenOrderStatus[OpenOrderStatus["SUCCESSFUL"] = 2] = "SUCCESSFUL";
    OpenOrderStatus[OpenOrderStatus["FAILED"] = 3] = "FAILED";
    OpenOrderStatus[OpenOrderStatus["CANCELLED"] = 4] = "CANCELLED";
    OpenOrderStatus[OpenOrderStatus["REFUNDED"] = 5] = "REFUNDED";
    OpenOrderStatus[OpenOrderStatus["REJECT"] = 6] = "REJECT";
})(OpenOrderStatus = exports.OpenOrderStatus || (exports.OpenOrderStatus = {}));
var PaymentBusinessType;
(function (PaymentBusinessType) {
    PaymentBusinessType[PaymentBusinessType["PAYMENT_BUSINESS_TYPE_UNKNOWN"] = 0] = "PAYMENT_BUSINESS_TYPE_UNKNOWN";
    PaymentBusinessType[PaymentBusinessType["PAYMENT_BUSINESS_TYPE_FUND_IN"] = 1] = "PAYMENT_BUSINESS_TYPE_FUND_IN";
    PaymentBusinessType[PaymentBusinessType["PAYMENT_BUSINESS_TYPE_PAY_OUT"] = 2] = "PAYMENT_BUSINESS_TYPE_PAY_OUT";
    PaymentBusinessType[PaymentBusinessType["PAYMENT_BUSINESS_TYPE_REFUND"] = 3] = "PAYMENT_BUSINESS_TYPE_REFUND";
    PaymentBusinessType[PaymentBusinessType["FX_BUSINESS_TYPE_SUCCESS"] = 4] = "FX_BUSINESS_TYPE_SUCCESS";
    PaymentBusinessType[PaymentBusinessType["PROFILE_UPDATE"] = 5] = "PROFILE_UPDATE";
    PaymentBusinessType[PaymentBusinessType["ONE_KEY_PEOPLE_BIND"] = 6] = "ONE_KEY_PEOPLE_BIND";
    PaymentBusinessType[PaymentBusinessType["ONE_KEY_PEOPLE_SIGNED"] = 7] = "ONE_KEY_PEOPLE_SIGNED";
    PaymentBusinessType[PaymentBusinessType["RD_CHECK_ERROR"] = 8] = "RD_CHECK_ERROR";
    PaymentBusinessType[PaymentBusinessType["RD_CHECK_SUCCESS"] = 9] = "RD_CHECK_SUCCESS";
    PaymentBusinessType[PaymentBusinessType["BANK_CHECK_FAIL"] = 10] = "BANK_CHECK_FAIL";
    PaymentBusinessType[PaymentBusinessType["BANK_CHECK_SUCCESS"] = 11] = "BANK_CHECK_SUCCESS";
})(PaymentBusinessType = exports.PaymentBusinessType || (exports.PaymentBusinessType = {}));
var OpenRdtRequest = /** @class */ (function (_super) {
    __extends(OpenRdtRequest, _super);
    function OpenRdtRequest(data) {
        var _this = _super.call(this) || this;
        _OpenRdtRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenRdtRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("currency" in data && data.currency != undefined) {
                _this.currency = data.currency;
            }
            if ("amount" in data && data.amount != undefined) {
                _this.amount = data.amount;
            }
            if ("messageToPayee" in data && data.messageToPayee != undefined) {
                _this.messageToPayee = data.messageToPayee;
            }
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
            if ("outOrderNo" in data && data.outOrderNo != undefined) {
                _this.outOrderNo = data.outOrderNo;
            }
            if ("receivingParty" in data && data.receivingParty != undefined) {
                _this.receivingParty = data.receivingParty;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenRdtRequest.prototype, "currency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRdtRequest.prototype, "amount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRdtRequest.prototype, "messageToPayee", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRdtRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRdtRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRdtRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRdtRequest.prototype, "outOrderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRdtRequest.prototype, "receivingParty", {
        get: function () {
            return pb_1.Message.getWrapperField(this, RdtReceivingParty, 9);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRdtRequest.prototype, "has_receivingParty", {
        get: function () {
            return pb_1.Message.getField(this, 9) != null;
        },
        enumerable: false,
        configurable: true
    });
    OpenRdtRequest.fromObject = function (data) {
        var message = new OpenRdtRequest({});
        if (data.currency != null) {
            message.currency = data.currency;
        }
        if (data.amount != null) {
            message.amount = data.amount;
        }
        if (data.messageToPayee != null) {
            message.messageToPayee = data.messageToPayee;
        }
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        if (data.outOrderNo != null) {
            message.outOrderNo = data.outOrderNo;
        }
        if (data.receivingParty != null) {
            message.receivingParty = RdtReceivingParty.fromObject(data.receivingParty);
        }
        return message;
    };
    OpenRdtRequest.prototype.toObject = function () {
        var data = {};
        if (this.currency != null) {
            data.currency = this.currency;
        }
        if (this.amount != null) {
            data.amount = this.amount;
        }
        if (this.messageToPayee != null) {
            data.messageToPayee = this.messageToPayee;
        }
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        if (this.outOrderNo != null) {
            data.outOrderNo = this.outOrderNo;
        }
        if (this.receivingParty != null) {
            data.receivingParty = this.receivingParty.toObject();
        }
        return data;
    };
    OpenRdtRequest.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.currency.length)
            writer.writeString(1, this.currency);
        if (this.amount != 0)
            writer.writeInt64(2, this.amount);
        if (this.messageToPayee.length)
            writer.writeString(3, this.messageToPayee);
        if (this.accountId != "0")
            writer.writeInt64String(4, this.accountId);
        if (this.requestId.length)
            writer.writeString(6, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(7, this.institutionId);
        if (this.outOrderNo.length)
            writer.writeString(8, this.outOrderNo);
        if (this.has_receivingParty)
            writer.writeMessage(9, this.receivingParty, function () { return _this.receivingParty.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    OpenRdtRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenRdtRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.currency = reader.readString();
                    break;
                case 2:
                    message.amount = reader.readInt64();
                    break;
                case 3:
                    message.messageToPayee = reader.readString();
                    break;
                case 4:
                    message.accountId = reader.readInt64String();
                    break;
                case 6:
                    message.requestId = reader.readString();
                    break;
                case 7:
                    message.institutionId = reader.readInt64String();
                    break;
                case 8:
                    message.outOrderNo = reader.readString();
                    break;
                case 9:
                    reader.readMessage(message.receivingParty, function () { return message.receivingParty = RdtReceivingParty.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenRdtRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenRdtRequest.deserializeBinary = function (bytes) {
        return OpenRdtRequest.deserialize(bytes);
    };
    return OpenRdtRequest;
}(pb_1.Message));
exports.OpenRdtRequest = OpenRdtRequest;
_OpenRdtRequest_one_of_decls = new WeakMap();
var OpenFpsRequest = /** @class */ (function (_super) {
    __extends(OpenFpsRequest, _super);
    function OpenFpsRequest(data) {
        var _this = _super.call(this) || this;
        _OpenFpsRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenFpsRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("currency" in data && data.currency != undefined) {
                _this.currency = data.currency;
            }
            if ("amount" in data && data.amount != undefined) {
                _this.amount = data.amount;
            }
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("messageToPayee" in data && data.messageToPayee != undefined) {
                _this.messageToPayee = data.messageToPayee;
            }
            if ("receivingParty" in data && data.receivingParty != undefined) {
                _this.receivingParty = data.receivingParty;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
            if ("outOrderNo" in data && data.outOrderNo != undefined) {
                _this.outOrderNo = data.outOrderNo;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenFpsRequest.prototype, "currency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, OpenFpsRequestFpsTxnCcy._UNKNOWN_FTC);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFpsRequest.prototype, "amount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFpsRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFpsRequest.prototype, "messageToPayee", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFpsRequest.prototype, "receivingParty", {
        get: function () {
            return pb_1.Message.getWrapperField(this, FpsReceivingParty, 5);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFpsRequest.prototype, "has_receivingParty", {
        get: function () {
            return pb_1.Message.getField(this, 5) != null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFpsRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFpsRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFpsRequest.prototype, "outOrderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenFpsRequest.fromObject = function (data) {
        var message = new OpenFpsRequest({});
        if (data.currency != null) {
            message.currency = data.currency;
        }
        if (data.amount != null) {
            message.amount = data.amount;
        }
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.messageToPayee != null) {
            message.messageToPayee = data.messageToPayee;
        }
        if (data.receivingParty != null) {
            message.receivingParty = FpsReceivingParty.fromObject(data.receivingParty);
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        if (data.outOrderNo != null) {
            message.outOrderNo = data.outOrderNo;
        }
        return message;
    };
    OpenFpsRequest.prototype.toObject = function () {
        var data = {};
        if (this.currency != null) {
            data.currency = this.currency;
        }
        if (this.amount != null) {
            data.amount = this.amount;
        }
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.messageToPayee != null) {
            data.messageToPayee = this.messageToPayee;
        }
        if (this.receivingParty != null) {
            data.receivingParty = this.receivingParty.toObject();
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        if (this.outOrderNo != null) {
            data.outOrderNo = this.outOrderNo;
        }
        return data;
    };
    OpenFpsRequest.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.currency != OpenFpsRequestFpsTxnCcy._UNKNOWN_FTC)
            writer.writeEnum(1, this.currency);
        if (this.amount != 0)
            writer.writeInt64(2, this.amount);
        if (this.accountId != "0")
            writer.writeInt64String(3, this.accountId);
        if (this.messageToPayee.length)
            writer.writeString(4, this.messageToPayee);
        if (this.has_receivingParty)
            writer.writeMessage(5, this.receivingParty, function () { return _this.receivingParty.serialize(writer); });
        if (this.requestId.length)
            writer.writeString(6, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(7, this.institutionId);
        if (this.outOrderNo.length)
            writer.writeString(8, this.outOrderNo);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenFpsRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenFpsRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.currency = reader.readEnum();
                    break;
                case 2:
                    message.amount = reader.readInt64();
                    break;
                case 3:
                    message.accountId = reader.readInt64String();
                    break;
                case 4:
                    message.messageToPayee = reader.readString();
                    break;
                case 5:
                    reader.readMessage(message.receivingParty, function () { return message.receivingParty = FpsReceivingParty.deserialize(reader); });
                    break;
                case 6:
                    message.requestId = reader.readString();
                    break;
                case 7:
                    message.institutionId = reader.readInt64String();
                    break;
                case 8:
                    message.outOrderNo = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenFpsRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenFpsRequest.deserializeBinary = function (bytes) {
        return OpenFpsRequest.deserialize(bytes);
    };
    return OpenFpsRequest;
}(pb_1.Message));
exports.OpenFpsRequest = OpenFpsRequest;
_OpenFpsRequest_one_of_decls = new WeakMap();
var OpenFpsRequestFpsTxnCcy;
(function (OpenFpsRequestFpsTxnCcy) {
    OpenFpsRequestFpsTxnCcy[OpenFpsRequestFpsTxnCcy["_UNKNOWN_FTC"] = 0] = "_UNKNOWN_FTC";
    OpenFpsRequestFpsTxnCcy[OpenFpsRequestFpsTxnCcy["HKD"] = 1] = "HKD";
    OpenFpsRequestFpsTxnCcy[OpenFpsRequestFpsTxnCcy["CNY"] = 2] = "CNY";
})(OpenFpsRequestFpsTxnCcy = exports.OpenFpsRequestFpsTxnCcy || (exports.OpenFpsRequestFpsTxnCcy = {}));
var OpenTtRequest = /** @class */ (function (_super) {
    __extends(OpenTtRequest, _super);
    function OpenTtRequest(data) {
        var _this = _super.call(this) || this;
        _OpenTtRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenTtRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("currency" in data && data.currency != undefined) {
                _this.currency = data.currency;
            }
            if ("amount" in data && data.amount != undefined) {
                _this.amount = data.amount;
            }
            if ("messageToPayee" in data && data.messageToPayee != undefined) {
                _this.messageToPayee = data.messageToPayee;
            }
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("receivingParty" in data && data.receivingParty != undefined) {
                _this.receivingParty = data.receivingParty;
            }
            if ("purpose" in data && data.purpose != undefined) {
                _this.purpose = data.purpose;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
            if ("outOrderNo" in data && data.outOrderNo != undefined) {
                _this.outOrderNo = data.outOrderNo;
            }
            if ("payerAddress" in data && data.payerAddress != undefined) {
                _this.payerAddress = data.payerAddress;
            }
            if ("feeMode" in data && data.feeMode != undefined) {
                _this.feeMode = data.feeMode;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenTtRequest.prototype, "currency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "amount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "messageToPayee", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "receivingParty", {
        get: function () {
            return pb_1.Message.getWrapperField(this, TtReceivingParty, 5);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "has_receivingParty", {
        get: function () {
            return pb_1.Message.getField(this, 5) != null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "purpose", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, TxnPurpose._UNKNOWN_TP);
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "outOrderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 9, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "payerAddress", {
        get: function () {
            return pb_1.Message.getWrapperField(this, MttPayerAddress, 10);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 10, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "has_payerAddress", {
        get: function () {
            return pb_1.Message.getField(this, 10) != null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenTtRequest.prototype, "feeMode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 11, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 11, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenTtRequest.fromObject = function (data) {
        var message = new OpenTtRequest({});
        if (data.currency != null) {
            message.currency = data.currency;
        }
        if (data.amount != null) {
            message.amount = data.amount;
        }
        if (data.messageToPayee != null) {
            message.messageToPayee = data.messageToPayee;
        }
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.receivingParty != null) {
            message.receivingParty = TtReceivingParty.fromObject(data.receivingParty);
        }
        if (data.purpose != null) {
            message.purpose = data.purpose;
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        if (data.outOrderNo != null) {
            message.outOrderNo = data.outOrderNo;
        }
        if (data.payerAddress != null) {
            message.payerAddress = MttPayerAddress.fromObject(data.payerAddress);
        }
        if (data.feeMode != null) {
            message.feeMode = data.feeMode;
        }
        return message;
    };
    OpenTtRequest.prototype.toObject = function () {
        var data = {};
        if (this.currency != null) {
            data.currency = this.currency;
        }
        if (this.amount != null) {
            data.amount = this.amount;
        }
        if (this.messageToPayee != null) {
            data.messageToPayee = this.messageToPayee;
        }
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.receivingParty != null) {
            data.receivingParty = this.receivingParty.toObject();
        }
        if (this.purpose != null) {
            data.purpose = this.purpose;
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        if (this.outOrderNo != null) {
            data.outOrderNo = this.outOrderNo;
        }
        if (this.payerAddress != null) {
            data.payerAddress = this.payerAddress.toObject();
        }
        if (this.feeMode != null) {
            data.feeMode = this.feeMode;
        }
        return data;
    };
    OpenTtRequest.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.currency.length)
            writer.writeString(1, this.currency);
        if (this.amount != 0)
            writer.writeInt64(2, this.amount);
        if (this.messageToPayee.length)
            writer.writeString(3, this.messageToPayee);
        if (this.accountId != "0")
            writer.writeInt64String(4, this.accountId);
        if (this.has_receivingParty)
            writer.writeMessage(5, this.receivingParty, function () { return _this.receivingParty.serialize(writer); });
        if (this.purpose != TxnPurpose._UNKNOWN_TP)
            writer.writeEnum(6, this.purpose);
        if (this.requestId.length)
            writer.writeString(7, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(8, this.institutionId);
        if (this.outOrderNo.length)
            writer.writeString(9, this.outOrderNo);
        if (this.has_payerAddress)
            writer.writeMessage(10, this.payerAddress, function () { return _this.payerAddress.serialize(writer); });
        if (this.feeMode != 0)
            writer.writeInt32(11, this.feeMode);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenTtRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenTtRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.currency = reader.readString();
                    break;
                case 2:
                    message.amount = reader.readInt64();
                    break;
                case 3:
                    message.messageToPayee = reader.readString();
                    break;
                case 4:
                    message.accountId = reader.readInt64String();
                    break;
                case 5:
                    reader.readMessage(message.receivingParty, function () { return message.receivingParty = TtReceivingParty.deserialize(reader); });
                    break;
                case 6:
                    message.purpose = reader.readEnum();
                    break;
                case 7:
                    message.requestId = reader.readString();
                    break;
                case 8:
                    message.institutionId = reader.readInt64String();
                    break;
                case 9:
                    message.outOrderNo = reader.readString();
                    break;
                case 10:
                    reader.readMessage(message.payerAddress, function () { return message.payerAddress = MttPayerAddress.deserialize(reader); });
                    break;
                case 11:
                    message.feeMode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenTtRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenTtRequest.deserializeBinary = function (bytes) {
        return OpenTtRequest.deserialize(bytes);
    };
    return OpenTtRequest;
}(pb_1.Message));
exports.OpenTtRequest = OpenTtRequest;
_OpenTtRequest_one_of_decls = new WeakMap();
var OpenChatsRequest = /** @class */ (function (_super) {
    __extends(OpenChatsRequest, _super);
    function OpenChatsRequest(data) {
        var _this = _super.call(this) || this;
        _OpenChatsRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenChatsRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("currency" in data && data.currency != undefined) {
                _this.currency = data.currency;
            }
            if ("amount" in data && data.amount != undefined) {
                _this.amount = data.amount;
            }
            if ("messageToPayee" in data && data.messageToPayee != undefined) {
                _this.messageToPayee = data.messageToPayee;
            }
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("receivingParty" in data && data.receivingParty != undefined) {
                _this.receivingParty = data.receivingParty;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
            if ("outOrderNo" in data && data.outOrderNo != undefined) {
                _this.outOrderNo = data.outOrderNo;
            }
            if ("purpose" in data && data.purpose != undefined) {
                _this.purpose = data.purpose;
            }
            if ("payerAddress" in data && data.payerAddress != undefined) {
                _this.payerAddress = data.payerAddress;
            }
            if ("feeMode" in data && data.feeMode != undefined) {
                _this.feeMode = data.feeMode;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenChatsRequest.prototype, "currency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "amount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "messageToPayee", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "receivingParty", {
        get: function () {
            return pb_1.Message.getWrapperField(this, ChatsReceivingParty, 5);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "has_receivingParty", {
        get: function () {
            return pb_1.Message.getField(this, 5) != null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "outOrderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "purpose", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 9, TxnPurpose._UNKNOWN_TP);
        },
        set: function (value) {
            pb_1.Message.setField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "payerAddress", {
        get: function () {
            return pb_1.Message.getWrapperField(this, McpPayerAddress, 10);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 10, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "has_payerAddress", {
        get: function () {
            return pb_1.Message.getField(this, 10) != null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenChatsRequest.prototype, "feeMode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 11, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 11, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenChatsRequest.fromObject = function (data) {
        var message = new OpenChatsRequest({});
        if (data.currency != null) {
            message.currency = data.currency;
        }
        if (data.amount != null) {
            message.amount = data.amount;
        }
        if (data.messageToPayee != null) {
            message.messageToPayee = data.messageToPayee;
        }
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.receivingParty != null) {
            message.receivingParty = ChatsReceivingParty.fromObject(data.receivingParty);
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        if (data.outOrderNo != null) {
            message.outOrderNo = data.outOrderNo;
        }
        if (data.purpose != null) {
            message.purpose = data.purpose;
        }
        if (data.payerAddress != null) {
            message.payerAddress = McpPayerAddress.fromObject(data.payerAddress);
        }
        if (data.feeMode != null) {
            message.feeMode = data.feeMode;
        }
        return message;
    };
    OpenChatsRequest.prototype.toObject = function () {
        var data = {};
        if (this.currency != null) {
            data.currency = this.currency;
        }
        if (this.amount != null) {
            data.amount = this.amount;
        }
        if (this.messageToPayee != null) {
            data.messageToPayee = this.messageToPayee;
        }
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.receivingParty != null) {
            data.receivingParty = this.receivingParty.toObject();
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        if (this.outOrderNo != null) {
            data.outOrderNo = this.outOrderNo;
        }
        if (this.purpose != null) {
            data.purpose = this.purpose;
        }
        if (this.payerAddress != null) {
            data.payerAddress = this.payerAddress.toObject();
        }
        if (this.feeMode != null) {
            data.feeMode = this.feeMode;
        }
        return data;
    };
    OpenChatsRequest.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.currency.length)
            writer.writeString(1, this.currency);
        if (this.amount != 0)
            writer.writeInt64(2, this.amount);
        if (this.messageToPayee.length)
            writer.writeString(3, this.messageToPayee);
        if (this.accountId != 0)
            writer.writeInt64(4, this.accountId);
        if (this.has_receivingParty)
            writer.writeMessage(5, this.receivingParty, function () { return _this.receivingParty.serialize(writer); });
        if (this.requestId.length)
            writer.writeString(6, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(7, this.institutionId);
        if (this.outOrderNo.length)
            writer.writeString(8, this.outOrderNo);
        if (this.purpose != TxnPurpose._UNKNOWN_TP)
            writer.writeEnum(9, this.purpose);
        if (this.has_payerAddress)
            writer.writeMessage(10, this.payerAddress, function () { return _this.payerAddress.serialize(writer); });
        if (this.feeMode != 0)
            writer.writeInt32(11, this.feeMode);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenChatsRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenChatsRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.currency = reader.readString();
                    break;
                case 2:
                    message.amount = reader.readInt64();
                    break;
                case 3:
                    message.messageToPayee = reader.readString();
                    break;
                case 4:
                    message.accountId = reader.readInt64();
                    break;
                case 5:
                    reader.readMessage(message.receivingParty, function () { return message.receivingParty = ChatsReceivingParty.deserialize(reader); });
                    break;
                case 6:
                    message.requestId = reader.readString();
                    break;
                case 7:
                    message.institutionId = reader.readInt64String();
                    break;
                case 8:
                    message.outOrderNo = reader.readString();
                    break;
                case 9:
                    message.purpose = reader.readEnum();
                    break;
                case 10:
                    reader.readMessage(message.payerAddress, function () { return message.payerAddress = McpPayerAddress.deserialize(reader); });
                    break;
                case 11:
                    message.feeMode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenChatsRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenChatsRequest.deserializeBinary = function (bytes) {
        return OpenChatsRequest.deserialize(bytes);
    };
    return OpenChatsRequest;
}(pb_1.Message));
exports.OpenChatsRequest = OpenChatsRequest;
_OpenChatsRequest_one_of_decls = new WeakMap();
var McpPayerAddress = /** @class */ (function (_super) {
    __extends(McpPayerAddress, _super);
    function McpPayerAddress(data) {
        var _this = _super.call(this) || this;
        _McpPayerAddress_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _McpPayerAddress_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("address" in data && data.address != undefined) {
                _this.address = data.address;
            }
            if ("countryRegion" in data && data.countryRegion != undefined) {
                _this.countryRegion = data.countryRegion;
            }
        }
        return _this;
    }
    Object.defineProperty(McpPayerAddress.prototype, "address", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(McpPayerAddress.prototype, "countryRegion", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    McpPayerAddress.fromObject = function (data) {
        var message = new McpPayerAddress({});
        if (data.address != null) {
            message.address = data.address;
        }
        if (data.countryRegion != null) {
            message.countryRegion = data.countryRegion;
        }
        return message;
    };
    McpPayerAddress.prototype.toObject = function () {
        var data = {};
        if (this.address != null) {
            data.address = this.address;
        }
        if (this.countryRegion != null) {
            data.countryRegion = this.countryRegion;
        }
        return data;
    };
    McpPayerAddress.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.address.length)
            writer.writeString(1, this.address);
        if (this.countryRegion.length)
            writer.writeString(2, this.countryRegion);
        if (!w)
            return writer.getResultBuffer();
    };
    McpPayerAddress.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new McpPayerAddress();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.address = reader.readString();
                    break;
                case 2:
                    message.countryRegion = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    McpPayerAddress.prototype.serializeBinary = function () {
        return this.serialize();
    };
    McpPayerAddress.deserializeBinary = function (bytes) {
        return McpPayerAddress.deserialize(bytes);
    };
    return McpPayerAddress;
}(pb_1.Message));
exports.McpPayerAddress = McpPayerAddress;
_McpPayerAddress_one_of_decls = new WeakMap();
var MttPayerAddress = /** @class */ (function (_super) {
    __extends(MttPayerAddress, _super);
    function MttPayerAddress(data) {
        var _this = _super.call(this) || this;
        _MttPayerAddress_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _MttPayerAddress_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("address" in data && data.address != undefined) {
                _this.address = data.address;
            }
            if ("countryRegion" in data && data.countryRegion != undefined) {
                _this.countryRegion = data.countryRegion;
            }
        }
        return _this;
    }
    Object.defineProperty(MttPayerAddress.prototype, "address", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MttPayerAddress.prototype, "countryRegion", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    MttPayerAddress.fromObject = function (data) {
        var message = new MttPayerAddress({});
        if (data.address != null) {
            message.address = data.address;
        }
        if (data.countryRegion != null) {
            message.countryRegion = data.countryRegion;
        }
        return message;
    };
    MttPayerAddress.prototype.toObject = function () {
        var data = {};
        if (this.address != null) {
            data.address = this.address;
        }
        if (this.countryRegion != null) {
            data.countryRegion = this.countryRegion;
        }
        return data;
    };
    MttPayerAddress.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.address.length)
            writer.writeString(1, this.address);
        if (this.countryRegion.length)
            writer.writeString(2, this.countryRegion);
        if (!w)
            return writer.getResultBuffer();
    };
    MttPayerAddress.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MttPayerAddress();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.address = reader.readString();
                    break;
                case 2:
                    message.countryRegion = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    MttPayerAddress.prototype.serializeBinary = function () {
        return this.serialize();
    };
    MttPayerAddress.deserializeBinary = function (bytes) {
        return MttPayerAddress.deserialize(bytes);
    };
    return MttPayerAddress;
}(pb_1.Message));
exports.MttPayerAddress = MttPayerAddress;
_MttPayerAddress_one_of_decls = new WeakMap();
var FpsReceivingParty = /** @class */ (function (_super) {
    __extends(FpsReceivingParty, _super);
    function FpsReceivingParty(data) {
        var _this = _super.call(this) || this;
        _FpsReceivingParty_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FpsReceivingParty_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("bankId" in data && data.bankId != undefined) {
                _this.bankId = data.bankId;
            }
            if ("accountName" in data && data.accountName != undefined) {
                _this.accountName = data.accountName;
            }
            if ("proxyValue" in data && data.proxyValue != undefined) {
                _this.proxyValue = data.proxyValue;
            }
            if ("proxyType" in data && data.proxyType != undefined) {
                _this.proxyType = data.proxyType;
            }
        }
        return _this;
    }
    Object.defineProperty(FpsReceivingParty.prototype, "bankId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FpsReceivingParty.prototype, "accountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FpsReceivingParty.prototype, "proxyValue", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FpsReceivingParty.prototype, "proxyType", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, TxnProxyType._UNKNOWN_TYPE);
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    FpsReceivingParty.fromObject = function (data) {
        var message = new FpsReceivingParty({});
        if (data.bankId != null) {
            message.bankId = data.bankId;
        }
        if (data.accountName != null) {
            message.accountName = data.accountName;
        }
        if (data.proxyValue != null) {
            message.proxyValue = data.proxyValue;
        }
        if (data.proxyType != null) {
            message.proxyType = data.proxyType;
        }
        return message;
    };
    FpsReceivingParty.prototype.toObject = function () {
        var data = {};
        if (this.bankId != null) {
            data.bankId = this.bankId;
        }
        if (this.accountName != null) {
            data.accountName = this.accountName;
        }
        if (this.proxyValue != null) {
            data.proxyValue = this.proxyValue;
        }
        if (this.proxyType != null) {
            data.proxyType = this.proxyType;
        }
        return data;
    };
    FpsReceivingParty.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.bankId.length)
            writer.writeString(1, this.bankId);
        if (this.accountName.length)
            writer.writeString(2, this.accountName);
        if (this.proxyValue.length)
            writer.writeString(3, this.proxyValue);
        if (this.proxyType != TxnProxyType._UNKNOWN_TYPE)
            writer.writeEnum(4, this.proxyType);
        if (!w)
            return writer.getResultBuffer();
    };
    FpsReceivingParty.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FpsReceivingParty();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.bankId = reader.readString();
                    break;
                case 2:
                    message.accountName = reader.readString();
                    break;
                case 3:
                    message.proxyValue = reader.readString();
                    break;
                case 4:
                    message.proxyType = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FpsReceivingParty.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FpsReceivingParty.deserializeBinary = function (bytes) {
        return FpsReceivingParty.deserialize(bytes);
    };
    return FpsReceivingParty;
}(pb_1.Message));
exports.FpsReceivingParty = FpsReceivingParty;
_FpsReceivingParty_one_of_decls = new WeakMap();
var OpenBalanceRequest = /** @class */ (function (_super) {
    __extends(OpenBalanceRequest, _super);
    function OpenBalanceRequest(data) {
        var _this = _super.call(this) || this;
        _OpenBalanceRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenBalanceRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenBalanceRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenBalanceRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenBalanceRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenBalanceRequest.fromObject = function (data) {
        var message = new OpenBalanceRequest({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        return message;
    };
    OpenBalanceRequest.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        return data;
    };
    OpenBalanceRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.requestId.length)
            writer.writeString(2, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(3, this.institutionId);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenBalanceRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenBalanceRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.requestId = reader.readString();
                    break;
                case 3:
                    message.institutionId = reader.readInt64String();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenBalanceRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenBalanceRequest.deserializeBinary = function (bytes) {
        return OpenBalanceRequest.deserialize(bytes);
    };
    return OpenBalanceRequest;
}(pb_1.Message));
exports.OpenBalanceRequest = OpenBalanceRequest;
_OpenBalanceRequest_one_of_decls = new WeakMap();
var OpenOrderDetailRequest = /** @class */ (function (_super) {
    __extends(OpenOrderDetailRequest, _super);
    function OpenOrderDetailRequest(data) {
        var _this = _super.call(this) || this;
        _OpenOrderDetailRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenOrderDetailRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("orderNo" in data && data.orderNo != undefined) {
                _this.orderNo = data.orderNo;
            }
            if ("outOrderNo" in data && data.outOrderNo != undefined) {
                _this.outOrderNo = data.outOrderNo;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenOrderDetailRequest.prototype, "orderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenOrderDetailRequest.prototype, "outOrderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenOrderDetailRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenOrderDetailRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenOrderDetailRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenOrderDetailRequest.fromObject = function (data) {
        var message = new OpenOrderDetailRequest({});
        if (data.orderNo != null) {
            message.orderNo = data.orderNo;
        }
        if (data.outOrderNo != null) {
            message.outOrderNo = data.outOrderNo;
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        return message;
    };
    OpenOrderDetailRequest.prototype.toObject = function () {
        var data = {};
        if (this.orderNo != null) {
            data.orderNo = this.orderNo;
        }
        if (this.outOrderNo != null) {
            data.outOrderNo = this.outOrderNo;
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        return data;
    };
    OpenOrderDetailRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.orderNo.length)
            writer.writeString(1, this.orderNo);
        if (this.outOrderNo.length)
            writer.writeString(2, this.outOrderNo);
        if (this.requestId.length)
            writer.writeString(3, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(4, this.institutionId);
        if (this.accountId != "0")
            writer.writeInt64String(5, this.accountId);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenOrderDetailRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenOrderDetailRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.orderNo = reader.readString();
                    break;
                case 2:
                    message.outOrderNo = reader.readString();
                    break;
                case 3:
                    message.requestId = reader.readString();
                    break;
                case 4:
                    message.institutionId = reader.readInt64String();
                    break;
                case 5:
                    message.accountId = reader.readInt64String();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenOrderDetailRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenOrderDetailRequest.deserializeBinary = function (bytes) {
        return OpenOrderDetailRequest.deserialize(bytes);
    };
    return OpenOrderDetailRequest;
}(pb_1.Message));
exports.OpenOrderDetailRequest = OpenOrderDetailRequest;
_OpenOrderDetailRequest_one_of_decls = new WeakMap();
var OpenBalanceResponse = /** @class */ (function (_super) {
    __extends(OpenBalanceResponse, _super);
    function OpenBalanceResponse(data) {
        var _this = _super.call(this) || this;
        _OpenBalanceResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenBalanceResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenBalanceResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenBalanceResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenBalanceResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, OpenBalanceData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenBalanceResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    OpenBalanceResponse.fromObject = function (data) {
        var message = new OpenBalanceResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = OpenBalanceData.fromObject(data.data);
        }
        return message;
    };
    OpenBalanceResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    OpenBalanceResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    OpenBalanceResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenBalanceResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = OpenBalanceData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenBalanceResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenBalanceResponse.deserializeBinary = function (bytes) {
        return OpenBalanceResponse.deserialize(bytes);
    };
    return OpenBalanceResponse;
}(pb_1.Message));
exports.OpenBalanceResponse = OpenBalanceResponse;
_OpenBalanceResponse_one_of_decls = new WeakMap();
var OpenOrderDetailResponse = /** @class */ (function (_super) {
    __extends(OpenOrderDetailResponse, _super);
    function OpenOrderDetailResponse(data) {
        var _this = _super.call(this) || this;
        _OpenOrderDetailResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenOrderDetailResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenOrderDetailResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenOrderDetailResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenOrderDetailResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, OrderDetailData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenOrderDetailResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    OpenOrderDetailResponse.fromObject = function (data) {
        var message = new OpenOrderDetailResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = OrderDetailData.fromObject(data.data);
        }
        return message;
    };
    OpenOrderDetailResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    OpenOrderDetailResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    OpenOrderDetailResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenOrderDetailResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = OrderDetailData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenOrderDetailResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenOrderDetailResponse.deserializeBinary = function (bytes) {
        return OpenOrderDetailResponse.deserialize(bytes);
    };
    return OpenOrderDetailResponse;
}(pb_1.Message));
exports.OpenOrderDetailResponse = OpenOrderDetailResponse;
_OpenOrderDetailResponse_one_of_decls = new WeakMap();
var OpenPayoutResultRequest = /** @class */ (function (_super) {
    __extends(OpenPayoutResultRequest, _super);
    function OpenPayoutResultRequest(data) {
        var _this = _super.call(this) || this;
        _OpenPayoutResultRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenPayoutResultRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenPayoutResultRequest.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenPayoutResultRequest.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenPayoutResultRequest.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, OrderDetailData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenPayoutResultRequest.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    OpenPayoutResultRequest.fromObject = function (data) {
        var message = new OpenPayoutResultRequest({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = OrderDetailData.fromObject(data.data);
        }
        return message;
    };
    OpenPayoutResultRequest.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    OpenPayoutResultRequest.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    OpenPayoutResultRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenPayoutResultRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = OrderDetailData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenPayoutResultRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenPayoutResultRequest.deserializeBinary = function (bytes) {
        return OpenPayoutResultRequest.deserialize(bytes);
    };
    return OpenPayoutResultRequest;
}(pb_1.Message));
exports.OpenPayoutResultRequest = OpenPayoutResultRequest;
_OpenPayoutResultRequest_one_of_decls = new WeakMap();
var OrderDetailData = /** @class */ (function (_super) {
    __extends(OrderDetailData, _super);
    function OrderDetailData(data) {
        var _this = _super.call(this) || this;
        _OrderDetailData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OrderDetailData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("orderNo" in data && data.orderNo != undefined) {
                _this.orderNo = data.orderNo;
            }
            if ("outOrderNo" in data && data.outOrderNo != undefined) {
                _this.outOrderNo = data.outOrderNo;
            }
            if ("productCode" in data && data.productCode != undefined) {
                _this.productCode = data.productCode;
            }
            if ("orderStatus" in data && data.orderStatus != undefined) {
                _this.orderStatus = data.orderStatus;
            }
            if ("orderAmount" in data && data.orderAmount != undefined) {
                _this.orderAmount = data.orderAmount;
            }
            if ("feeAmount" in data && data.feeAmount != undefined) {
                _this.feeAmount = data.feeAmount;
            }
            if ("currency" in data && data.currency != undefined) {
                _this.currency = data.currency;
            }
            if ("feeCurrency" in data && data.feeCurrency != undefined) {
                _this.feeCurrency = data.feeCurrency;
            }
            if ("messageToPayee" in data && data.messageToPayee != undefined) {
                _this.messageToPayee = data.messageToPayee;
            }
            if ("payerBankId" in data && data.payerBankId != undefined) {
                _this.payerBankId = data.payerBankId;
            }
            if ("payeeBankId" in data && data.payeeBankId != undefined) {
                _this.payeeBankId = data.payeeBankId;
            }
            if ("payeeBankName" in data && data.payeeBankName != undefined) {
                _this.payeeBankName = data.payeeBankName;
            }
            if ("payerAccountName" in data && data.payerAccountName != undefined) {
                _this.payerAccountName = data.payerAccountName;
            }
            if ("payerAccountNumber" in data && data.payerAccountNumber != undefined) {
                _this.payerAccountNumber = data.payerAccountNumber;
            }
            if ("payeeAccountName" in data && data.payeeAccountName != undefined) {
                _this.payeeAccountName = data.payeeAccountName;
            }
            if ("payeeAccountNumber" in data && data.payeeAccountNumber != undefined) {
                _this.payeeAccountNumber = data.payeeAccountNumber;
            }
            if ("payerSwiftCode" in data && data.payerSwiftCode != undefined) {
                _this.payerSwiftCode = data.payerSwiftCode;
            }
            if ("payeeSwiftCode" in data && data.payeeSwiftCode != undefined) {
                _this.payeeSwiftCode = data.payeeSwiftCode;
            }
            if ("payeeIntermediarySwiftCode" in data && data.payeeIntermediarySwiftCode != undefined) {
                _this.payeeIntermediarySwiftCode = data.payeeIntermediarySwiftCode;
            }
            if ("routingCode" in data && data.routingCode != undefined) {
                _this.routingCode = data.routingCode;
            }
            if ("proxyType" in data && data.proxyType != undefined) {
                _this.proxyType = data.proxyType;
            }
            if ("proxyValue" in data && data.proxyValue != undefined) {
                _this.proxyValue = data.proxyValue;
            }
            if ("createTime" in data && data.createTime != undefined) {
                _this.createTime = data.createTime;
            }
            if ("refundTime" in data && data.refundTime != undefined) {
                _this.refundTime = data.refundTime;
            }
            if ("finishTime" in data && data.finishTime != undefined) {
                _this.finishTime = data.finishTime;
            }
            if ("payerBankName" in data && data.payerBankName != undefined) {
                _this.payerBankName = data.payerBankName;
            }
            if ("feeMode" in data && data.feeMode != undefined) {
                _this.feeMode = data.feeMode;
            }
        }
        return _this;
    }
    Object.defineProperty(OrderDetailData.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "orderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "outOrderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "productCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "orderStatus", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, OpenOrderStatus._UNKNOWN_OPS);
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "orderAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "feeAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "currency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "feeCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 9, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "messageToPayee", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 10, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 10, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payerBankId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 11, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 11, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payeeBankId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 12, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 12, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payeeBankName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 13, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 13, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payerAccountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 14, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 14, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payerAccountNumber", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 15, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 15, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payeeAccountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 16, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 16, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payeeAccountNumber", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 17, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 17, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payerSwiftCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 18, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 18, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payeeSwiftCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 19, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 19, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payeeIntermediarySwiftCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 20, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 20, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "routingCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 21, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 21, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "proxyType", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 22, TxnProxyType._UNKNOWN_TYPE);
        },
        set: function (value) {
            pb_1.Message.setField(this, 22, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "proxyValue", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 23, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 23, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "createTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 24, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 24, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "refundTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 25, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 25, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "finishTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 26, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 26, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "payerBankName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 27, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 27, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderDetailData.prototype, "feeMode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 28, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 28, value);
        },
        enumerable: false,
        configurable: true
    });
    OrderDetailData.fromObject = function (data) {
        var message = new OrderDetailData({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.orderNo != null) {
            message.orderNo = data.orderNo;
        }
        if (data.outOrderNo != null) {
            message.outOrderNo = data.outOrderNo;
        }
        if (data.productCode != null) {
            message.productCode = data.productCode;
        }
        if (data.orderStatus != null) {
            message.orderStatus = data.orderStatus;
        }
        if (data.orderAmount != null) {
            message.orderAmount = data.orderAmount;
        }
        if (data.feeAmount != null) {
            message.feeAmount = data.feeAmount;
        }
        if (data.currency != null) {
            message.currency = data.currency;
        }
        if (data.feeCurrency != null) {
            message.feeCurrency = data.feeCurrency;
        }
        if (data.messageToPayee != null) {
            message.messageToPayee = data.messageToPayee;
        }
        if (data.payerBankId != null) {
            message.payerBankId = data.payerBankId;
        }
        if (data.payeeBankId != null) {
            message.payeeBankId = data.payeeBankId;
        }
        if (data.payeeBankName != null) {
            message.payeeBankName = data.payeeBankName;
        }
        if (data.payerAccountName != null) {
            message.payerAccountName = data.payerAccountName;
        }
        if (data.payerAccountNumber != null) {
            message.payerAccountNumber = data.payerAccountNumber;
        }
        if (data.payeeAccountName != null) {
            message.payeeAccountName = data.payeeAccountName;
        }
        if (data.payeeAccountNumber != null) {
            message.payeeAccountNumber = data.payeeAccountNumber;
        }
        if (data.payerSwiftCode != null) {
            message.payerSwiftCode = data.payerSwiftCode;
        }
        if (data.payeeSwiftCode != null) {
            message.payeeSwiftCode = data.payeeSwiftCode;
        }
        if (data.payeeIntermediarySwiftCode != null) {
            message.payeeIntermediarySwiftCode = data.payeeIntermediarySwiftCode;
        }
        if (data.routingCode != null) {
            message.routingCode = data.routingCode;
        }
        if (data.proxyType != null) {
            message.proxyType = data.proxyType;
        }
        if (data.proxyValue != null) {
            message.proxyValue = data.proxyValue;
        }
        if (data.createTime != null) {
            message.createTime = data.createTime;
        }
        if (data.refundTime != null) {
            message.refundTime = data.refundTime;
        }
        if (data.finishTime != null) {
            message.finishTime = data.finishTime;
        }
        if (data.payerBankName != null) {
            message.payerBankName = data.payerBankName;
        }
        if (data.feeMode != null) {
            message.feeMode = data.feeMode;
        }
        return message;
    };
    OrderDetailData.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.orderNo != null) {
            data.orderNo = this.orderNo;
        }
        if (this.outOrderNo != null) {
            data.outOrderNo = this.outOrderNo;
        }
        if (this.productCode != null) {
            data.productCode = this.productCode;
        }
        if (this.orderStatus != null) {
            data.orderStatus = this.orderStatus;
        }
        if (this.orderAmount != null) {
            data.orderAmount = this.orderAmount;
        }
        if (this.feeAmount != null) {
            data.feeAmount = this.feeAmount;
        }
        if (this.currency != null) {
            data.currency = this.currency;
        }
        if (this.feeCurrency != null) {
            data.feeCurrency = this.feeCurrency;
        }
        if (this.messageToPayee != null) {
            data.messageToPayee = this.messageToPayee;
        }
        if (this.payerBankId != null) {
            data.payerBankId = this.payerBankId;
        }
        if (this.payeeBankId != null) {
            data.payeeBankId = this.payeeBankId;
        }
        if (this.payeeBankName != null) {
            data.payeeBankName = this.payeeBankName;
        }
        if (this.payerAccountName != null) {
            data.payerAccountName = this.payerAccountName;
        }
        if (this.payerAccountNumber != null) {
            data.payerAccountNumber = this.payerAccountNumber;
        }
        if (this.payeeAccountName != null) {
            data.payeeAccountName = this.payeeAccountName;
        }
        if (this.payeeAccountNumber != null) {
            data.payeeAccountNumber = this.payeeAccountNumber;
        }
        if (this.payerSwiftCode != null) {
            data.payerSwiftCode = this.payerSwiftCode;
        }
        if (this.payeeSwiftCode != null) {
            data.payeeSwiftCode = this.payeeSwiftCode;
        }
        if (this.payeeIntermediarySwiftCode != null) {
            data.payeeIntermediarySwiftCode = this.payeeIntermediarySwiftCode;
        }
        if (this.routingCode != null) {
            data.routingCode = this.routingCode;
        }
        if (this.proxyType != null) {
            data.proxyType = this.proxyType;
        }
        if (this.proxyValue != null) {
            data.proxyValue = this.proxyValue;
        }
        if (this.createTime != null) {
            data.createTime = this.createTime;
        }
        if (this.refundTime != null) {
            data.refundTime = this.refundTime;
        }
        if (this.finishTime != null) {
            data.finishTime = this.finishTime;
        }
        if (this.payerBankName != null) {
            data.payerBankName = this.payerBankName;
        }
        if (this.feeMode != null) {
            data.feeMode = this.feeMode;
        }
        return data;
    };
    OrderDetailData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.orderNo.length)
            writer.writeString(2, this.orderNo);
        if (this.outOrderNo.length)
            writer.writeString(3, this.outOrderNo);
        if (this.productCode.length)
            writer.writeString(4, this.productCode);
        if (this.orderStatus != OpenOrderStatus._UNKNOWN_OPS)
            writer.writeEnum(5, this.orderStatus);
        if (this.orderAmount != 0)
            writer.writeInt64(6, this.orderAmount);
        if (this.feeAmount != 0)
            writer.writeInt64(7, this.feeAmount);
        if (this.currency.length)
            writer.writeString(8, this.currency);
        if (this.feeCurrency.length)
            writer.writeString(9, this.feeCurrency);
        if (this.messageToPayee.length)
            writer.writeString(10, this.messageToPayee);
        if (this.payerBankId.length)
            writer.writeString(11, this.payerBankId);
        if (this.payeeBankId.length)
            writer.writeString(12, this.payeeBankId);
        if (this.payeeBankName.length)
            writer.writeString(13, this.payeeBankName);
        if (this.payerAccountName.length)
            writer.writeString(14, this.payerAccountName);
        if (this.payerAccountNumber.length)
            writer.writeString(15, this.payerAccountNumber);
        if (this.payeeAccountName.length)
            writer.writeString(16, this.payeeAccountName);
        if (this.payeeAccountNumber.length)
            writer.writeString(17, this.payeeAccountNumber);
        if (this.payerSwiftCode.length)
            writer.writeString(18, this.payerSwiftCode);
        if (this.payeeSwiftCode.length)
            writer.writeString(19, this.payeeSwiftCode);
        if (this.payeeIntermediarySwiftCode.length)
            writer.writeString(20, this.payeeIntermediarySwiftCode);
        if (this.routingCode.length)
            writer.writeString(21, this.routingCode);
        if (this.proxyType != TxnProxyType._UNKNOWN_TYPE)
            writer.writeEnum(22, this.proxyType);
        if (this.proxyValue.length)
            writer.writeString(23, this.proxyValue);
        if (this.createTime.length)
            writer.writeString(24, this.createTime);
        if (this.refundTime.length)
            writer.writeString(25, this.refundTime);
        if (this.finishTime.length)
            writer.writeString(26, this.finishTime);
        if (this.payerBankName.length)
            writer.writeString(27, this.payerBankName);
        if (this.feeMode.length)
            writer.writeString(28, this.feeMode);
        if (!w)
            return writer.getResultBuffer();
    };
    OrderDetailData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OrderDetailData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.orderNo = reader.readString();
                    break;
                case 3:
                    message.outOrderNo = reader.readString();
                    break;
                case 4:
                    message.productCode = reader.readString();
                    break;
                case 5:
                    message.orderStatus = reader.readEnum();
                    break;
                case 6:
                    message.orderAmount = reader.readInt64();
                    break;
                case 7:
                    message.feeAmount = reader.readInt64();
                    break;
                case 8:
                    message.currency = reader.readString();
                    break;
                case 9:
                    message.feeCurrency = reader.readString();
                    break;
                case 10:
                    message.messageToPayee = reader.readString();
                    break;
                case 11:
                    message.payerBankId = reader.readString();
                    break;
                case 12:
                    message.payeeBankId = reader.readString();
                    break;
                case 13:
                    message.payeeBankName = reader.readString();
                    break;
                case 14:
                    message.payerAccountName = reader.readString();
                    break;
                case 15:
                    message.payerAccountNumber = reader.readString();
                    break;
                case 16:
                    message.payeeAccountName = reader.readString();
                    break;
                case 17:
                    message.payeeAccountNumber = reader.readString();
                    break;
                case 18:
                    message.payerSwiftCode = reader.readString();
                    break;
                case 19:
                    message.payeeSwiftCode = reader.readString();
                    break;
                case 20:
                    message.payeeIntermediarySwiftCode = reader.readString();
                    break;
                case 21:
                    message.routingCode = reader.readString();
                    break;
                case 22:
                    message.proxyType = reader.readEnum();
                    break;
                case 23:
                    message.proxyValue = reader.readString();
                    break;
                case 24:
                    message.createTime = reader.readString();
                    break;
                case 25:
                    message.refundTime = reader.readString();
                    break;
                case 26:
                    message.finishTime = reader.readString();
                    break;
                case 27:
                    message.payerBankName = reader.readString();
                    break;
                case 28:
                    message.feeMode = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OrderDetailData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OrderDetailData.deserializeBinary = function (bytes) {
        return OrderDetailData.deserialize(bytes);
    };
    return OrderDetailData;
}(pb_1.Message));
exports.OrderDetailData = OrderDetailData;
_OrderDetailData_one_of_decls = new WeakMap();
var OpenBalanceData = /** @class */ (function (_super) {
    __extends(OpenBalanceData, _super);
    function OpenBalanceData(data) {
        var _this = _super.call(this) || this;
        _OpenBalanceData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [3], __classPrivateFieldGet(_this, _OpenBalanceData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("accountName" in data && data.accountName != undefined) {
                _this.accountName = data.accountName;
            }
            if ("subAccountList" in data && data.subAccountList != undefined) {
                _this.subAccountList = data.subAccountList;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenBalanceData.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenBalanceData.prototype, "accountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenBalanceData.prototype, "subAccountList", {
        get: function () {
            return pb_1.Message.getRepeatedWrapperField(this, OpenSubAccountData, 3);
        },
        set: function (value) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenBalanceData.fromObject = function (data) {
        var message = new OpenBalanceData({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.accountName != null) {
            message.accountName = data.accountName;
        }
        if (data.subAccountList != null) {
            message.subAccountList = data.subAccountList.map(function (item) { return OpenSubAccountData.fromObject(item); });
        }
        return message;
    };
    OpenBalanceData.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.accountName != null) {
            data.accountName = this.accountName;
        }
        if (this.subAccountList != null) {
            data.subAccountList = this.subAccountList.map(function (item) { return item.toObject(); });
        }
        return data;
    };
    OpenBalanceData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.accountName.length)
            writer.writeString(2, this.accountName);
        if (this.subAccountList.length)
            writer.writeRepeatedMessage(3, this.subAccountList, function (item) { return item.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    OpenBalanceData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenBalanceData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.accountName = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.subAccountList, function () { return pb_1.Message.addToRepeatedWrapperField(message, 3, OpenSubAccountData.deserialize(reader), OpenSubAccountData); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenBalanceData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenBalanceData.deserializeBinary = function (bytes) {
        return OpenBalanceData.deserialize(bytes);
    };
    return OpenBalanceData;
}(pb_1.Message));
exports.OpenBalanceData = OpenBalanceData;
_OpenBalanceData_one_of_decls = new WeakMap();
var OpenSubAccountData = /** @class */ (function (_super) {
    __extends(OpenSubAccountData, _super);
    function OpenSubAccountData(data) {
        var _this = _super.call(this) || this;
        _OpenSubAccountData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenSubAccountData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("currency" in data && data.currency != undefined) {
                _this.currency = data.currency;
            }
            if ("ledgerBalance" in data && data.ledgerBalance != undefined) {
                _this.ledgerBalance = data.ledgerBalance;
            }
            if ("availableBalance" in data && data.availableBalance != undefined) {
                _this.availableBalance = data.availableBalance;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenSubAccountData.prototype, "currency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenSubAccountData.prototype, "ledgerBalance", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenSubAccountData.prototype, "availableBalance", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenSubAccountData.fromObject = function (data) {
        var message = new OpenSubAccountData({});
        if (data.currency != null) {
            message.currency = data.currency;
        }
        if (data.ledgerBalance != null) {
            message.ledgerBalance = data.ledgerBalance;
        }
        if (data.availableBalance != null) {
            message.availableBalance = data.availableBalance;
        }
        return message;
    };
    OpenSubAccountData.prototype.toObject = function () {
        var data = {};
        if (this.currency != null) {
            data.currency = this.currency;
        }
        if (this.ledgerBalance != null) {
            data.ledgerBalance = this.ledgerBalance;
        }
        if (this.availableBalance != null) {
            data.availableBalance = this.availableBalance;
        }
        return data;
    };
    OpenSubAccountData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.currency.length)
            writer.writeString(1, this.currency);
        if (this.ledgerBalance != 0)
            writer.writeInt64(2, this.ledgerBalance);
        if (this.availableBalance != 0)
            writer.writeInt64(3, this.availableBalance);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenSubAccountData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenSubAccountData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.currency = reader.readString();
                    break;
                case 2:
                    message.ledgerBalance = reader.readInt64();
                    break;
                case 3:
                    message.availableBalance = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenSubAccountData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenSubAccountData.deserializeBinary = function (bytes) {
        return OpenSubAccountData.deserialize(bytes);
    };
    return OpenSubAccountData;
}(pb_1.Message));
exports.OpenSubAccountData = OpenSubAccountData;
_OpenSubAccountData_one_of_decls = new WeakMap();
var OpenFundInRequest = /** @class */ (function (_super) {
    __extends(OpenFundInRequest, _super);
    function OpenFundInRequest(data) {
        var _this = _super.call(this) || this;
        _OpenFundInRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenFundInRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("orderNo" in data && data.orderNo != undefined) {
                _this.orderNo = data.orderNo;
            }
            if ("productCode" in data && data.productCode != undefined) {
                _this.productCode = data.productCode;
            }
            if ("orderStatus" in data && data.orderStatus != undefined) {
                _this.orderStatus = data.orderStatus;
            }
            if ("currency" in data && data.currency != undefined) {
                _this.currency = data.currency;
            }
            if ("orderAmount" in data && data.orderAmount != undefined) {
                _this.orderAmount = data.orderAmount;
            }
            if ("netAmount" in data && data.netAmount != undefined) {
                _this.netAmount = data.netAmount;
            }
            if ("feeAmount" in data && data.feeAmount != undefined) {
                _this.feeAmount = data.feeAmount;
            }
            if ("feeCurrency" in data && data.feeCurrency != undefined) {
                _this.feeCurrency = data.feeCurrency;
            }
            if ("messageToPayee" in data && data.messageToPayee != undefined) {
                _this.messageToPayee = data.messageToPayee;
            }
            if ("payerAccountName" in data && data.payerAccountName != undefined) {
                _this.payerAccountName = data.payerAccountName;
            }
            if ("payerAccountNumber" in data && data.payerAccountNumber != undefined) {
                _this.payerAccountNumber = data.payerAccountNumber;
            }
            if ("payerBankId" in data && data.payerBankId != undefined) {
                _this.payerBankId = data.payerBankId;
            }
            if ("payerBankSwiftCode" in data && data.payerBankSwiftCode != undefined) {
                _this.payerBankSwiftCode = data.payerBankSwiftCode;
            }
            if ("createTime" in data && data.createTime != undefined) {
                _this.createTime = data.createTime;
            }
            if ("finishTime" in data && data.finishTime != undefined) {
                _this.finishTime = data.finishTime;
            }
            if ("accountName" in data && data.accountName != undefined) {
                _this.accountName = data.accountName;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenFundInRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "orderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "productCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "orderStatus", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, OpenOrderStatus._UNKNOWN_OPS);
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "currency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "orderAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "netAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "feeAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "feeCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 9, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "messageToPayee", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 10, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 10, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "payerAccountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 11, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 11, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "payerAccountNumber", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 12, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 12, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "payerBankId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 13, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 13, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "payerBankSwiftCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 14, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 14, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "createTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 15, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 15, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "finishTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 16, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 16, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenFundInRequest.prototype, "accountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 17, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 17, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenFundInRequest.fromObject = function (data) {
        var message = new OpenFundInRequest({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.orderNo != null) {
            message.orderNo = data.orderNo;
        }
        if (data.productCode != null) {
            message.productCode = data.productCode;
        }
        if (data.orderStatus != null) {
            message.orderStatus = data.orderStatus;
        }
        if (data.currency != null) {
            message.currency = data.currency;
        }
        if (data.orderAmount != null) {
            message.orderAmount = data.orderAmount;
        }
        if (data.netAmount != null) {
            message.netAmount = data.netAmount;
        }
        if (data.feeAmount != null) {
            message.feeAmount = data.feeAmount;
        }
        if (data.feeCurrency != null) {
            message.feeCurrency = data.feeCurrency;
        }
        if (data.messageToPayee != null) {
            message.messageToPayee = data.messageToPayee;
        }
        if (data.payerAccountName != null) {
            message.payerAccountName = data.payerAccountName;
        }
        if (data.payerAccountNumber != null) {
            message.payerAccountNumber = data.payerAccountNumber;
        }
        if (data.payerBankId != null) {
            message.payerBankId = data.payerBankId;
        }
        if (data.payerBankSwiftCode != null) {
            message.payerBankSwiftCode = data.payerBankSwiftCode;
        }
        if (data.createTime != null) {
            message.createTime = data.createTime;
        }
        if (data.finishTime != null) {
            message.finishTime = data.finishTime;
        }
        if (data.accountName != null) {
            message.accountName = data.accountName;
        }
        return message;
    };
    OpenFundInRequest.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.orderNo != null) {
            data.orderNo = this.orderNo;
        }
        if (this.productCode != null) {
            data.productCode = this.productCode;
        }
        if (this.orderStatus != null) {
            data.orderStatus = this.orderStatus;
        }
        if (this.currency != null) {
            data.currency = this.currency;
        }
        if (this.orderAmount != null) {
            data.orderAmount = this.orderAmount;
        }
        if (this.netAmount != null) {
            data.netAmount = this.netAmount;
        }
        if (this.feeAmount != null) {
            data.feeAmount = this.feeAmount;
        }
        if (this.feeCurrency != null) {
            data.feeCurrency = this.feeCurrency;
        }
        if (this.messageToPayee != null) {
            data.messageToPayee = this.messageToPayee;
        }
        if (this.payerAccountName != null) {
            data.payerAccountName = this.payerAccountName;
        }
        if (this.payerAccountNumber != null) {
            data.payerAccountNumber = this.payerAccountNumber;
        }
        if (this.payerBankId != null) {
            data.payerBankId = this.payerBankId;
        }
        if (this.payerBankSwiftCode != null) {
            data.payerBankSwiftCode = this.payerBankSwiftCode;
        }
        if (this.createTime != null) {
            data.createTime = this.createTime;
        }
        if (this.finishTime != null) {
            data.finishTime = this.finishTime;
        }
        if (this.accountName != null) {
            data.accountName = this.accountName;
        }
        return data;
    };
    OpenFundInRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.orderNo.length)
            writer.writeString(2, this.orderNo);
        if (this.productCode.length)
            writer.writeString(3, this.productCode);
        if (this.orderStatus != OpenOrderStatus._UNKNOWN_OPS)
            writer.writeEnum(4, this.orderStatus);
        if (this.currency.length)
            writer.writeString(5, this.currency);
        if (this.orderAmount != 0)
            writer.writeInt64(6, this.orderAmount);
        if (this.netAmount != 0)
            writer.writeInt64(7, this.netAmount);
        if (this.feeAmount != 0)
            writer.writeInt64(8, this.feeAmount);
        if (this.feeCurrency.length)
            writer.writeString(9, this.feeCurrency);
        if (this.messageToPayee.length)
            writer.writeString(10, this.messageToPayee);
        if (this.payerAccountName.length)
            writer.writeString(11, this.payerAccountName);
        if (this.payerAccountNumber.length)
            writer.writeString(12, this.payerAccountNumber);
        if (this.payerBankId.length)
            writer.writeString(13, this.payerBankId);
        if (this.payerBankSwiftCode.length)
            writer.writeString(14, this.payerBankSwiftCode);
        if (this.createTime.length)
            writer.writeString(15, this.createTime);
        if (this.finishTime.length)
            writer.writeString(16, this.finishTime);
        if (this.accountName.length)
            writer.writeString(17, this.accountName);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenFundInRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenFundInRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.orderNo = reader.readString();
                    break;
                case 3:
                    message.productCode = reader.readString();
                    break;
                case 4:
                    message.orderStatus = reader.readEnum();
                    break;
                case 5:
                    message.currency = reader.readString();
                    break;
                case 6:
                    message.orderAmount = reader.readInt64();
                    break;
                case 7:
                    message.netAmount = reader.readInt64();
                    break;
                case 8:
                    message.feeAmount = reader.readInt64();
                    break;
                case 9:
                    message.feeCurrency = reader.readString();
                    break;
                case 10:
                    message.messageToPayee = reader.readString();
                    break;
                case 11:
                    message.payerAccountName = reader.readString();
                    break;
                case 12:
                    message.payerAccountNumber = reader.readString();
                    break;
                case 13:
                    message.payerBankId = reader.readString();
                    break;
                case 14:
                    message.payerBankSwiftCode = reader.readString();
                    break;
                case 15:
                    message.createTime = reader.readString();
                    break;
                case 16:
                    message.finishTime = reader.readString();
                    break;
                case 17:
                    message.accountName = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenFundInRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenFundInRequest.deserializeBinary = function (bytes) {
        return OpenFundInRequest.deserialize(bytes);
    };
    return OpenFundInRequest;
}(pb_1.Message));
exports.OpenFundInRequest = OpenFundInRequest;
_OpenFundInRequest_one_of_decls = new WeakMap();
var OpenRefundRequest = /** @class */ (function (_super) {
    __extends(OpenRefundRequest, _super);
    function OpenRefundRequest(data) {
        var _this = _super.call(this) || this;
        _OpenRefundRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenRefundRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenRefundRequest.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundRequest.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundRequest.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, OpenRefundDetail, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundRequest.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    OpenRefundRequest.fromObject = function (data) {
        var message = new OpenRefundRequest({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = OpenRefundDetail.fromObject(data.data);
        }
        return message;
    };
    OpenRefundRequest.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    OpenRefundRequest.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    OpenRefundRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenRefundRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = OpenRefundDetail.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenRefundRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenRefundRequest.deserializeBinary = function (bytes) {
        return OpenRefundRequest.deserialize(bytes);
    };
    return OpenRefundRequest;
}(pb_1.Message));
exports.OpenRefundRequest = OpenRefundRequest;
_OpenRefundRequest_one_of_decls = new WeakMap();
var OpenRefundDetail = /** @class */ (function (_super) {
    __extends(OpenRefundDetail, _super);
    function OpenRefundDetail(data) {
        var _this = _super.call(this) || this;
        _OpenRefundDetail_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenRefundDetail_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("outOrderNo" in data && data.outOrderNo != undefined) {
                _this.outOrderNo = data.outOrderNo;
            }
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("orderNo" in data && data.orderNo != undefined) {
                _this.orderNo = data.orderNo;
            }
            if ("productCode" in data && data.productCode != undefined) {
                _this.productCode = data.productCode;
            }
            if ("orderStatus" in data && data.orderStatus != undefined) {
                _this.orderStatus = data.orderStatus;
            }
            if ("currency" in data && data.currency != undefined) {
                _this.currency = data.currency;
            }
            if ("orderAmount" in data && data.orderAmount != undefined) {
                _this.orderAmount = data.orderAmount;
            }
            if ("feeAmount" in data && data.feeAmount != undefined) {
                _this.feeAmount = data.feeAmount;
            }
            if ("feeCurrency" in data && data.feeCurrency != undefined) {
                _this.feeCurrency = data.feeCurrency;
            }
            if ("refundAmount" in data && data.refundAmount != undefined) {
                _this.refundAmount = data.refundAmount;
            }
            if ("refundCurrency" in data && data.refundCurrency != undefined) {
                _this.refundCurrency = data.refundCurrency;
            }
            if ("refundTime" in data && data.refundTime != undefined) {
                _this.refundTime = data.refundTime;
            }
            if ("refundReason" in data && data.refundReason != undefined) {
                _this.refundReason = data.refundReason;
            }
            if ("refundOrderNo" in data && data.refundOrderNo != undefined) {
                _this.refundOrderNo = data.refundOrderNo;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenRefundDetail.prototype, "outOrderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "orderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "productCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "orderStatus", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, OpenOrderStatus._UNKNOWN_OPS);
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "currency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "orderAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "feeAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 9, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "feeCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 10, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 10, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "refundAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 11, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 11, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "refundCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 12, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 12, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "refundTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 13, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 13, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "refundReason", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 14, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 14, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenRefundDetail.prototype, "refundOrderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 15, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 15, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenRefundDetail.fromObject = function (data) {
        var message = new OpenRefundDetail({});
        if (data.outOrderNo != null) {
            message.outOrderNo = data.outOrderNo;
        }
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.orderNo != null) {
            message.orderNo = data.orderNo;
        }
        if (data.productCode != null) {
            message.productCode = data.productCode;
        }
        if (data.orderStatus != null) {
            message.orderStatus = data.orderStatus;
        }
        if (data.currency != null) {
            message.currency = data.currency;
        }
        if (data.orderAmount != null) {
            message.orderAmount = data.orderAmount;
        }
        if (data.feeAmount != null) {
            message.feeAmount = data.feeAmount;
        }
        if (data.feeCurrency != null) {
            message.feeCurrency = data.feeCurrency;
        }
        if (data.refundAmount != null) {
            message.refundAmount = data.refundAmount;
        }
        if (data.refundCurrency != null) {
            message.refundCurrency = data.refundCurrency;
        }
        if (data.refundTime != null) {
            message.refundTime = data.refundTime;
        }
        if (data.refundReason != null) {
            message.refundReason = data.refundReason;
        }
        if (data.refundOrderNo != null) {
            message.refundOrderNo = data.refundOrderNo;
        }
        return message;
    };
    OpenRefundDetail.prototype.toObject = function () {
        var data = {};
        if (this.outOrderNo != null) {
            data.outOrderNo = this.outOrderNo;
        }
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.orderNo != null) {
            data.orderNo = this.orderNo;
        }
        if (this.productCode != null) {
            data.productCode = this.productCode;
        }
        if (this.orderStatus != null) {
            data.orderStatus = this.orderStatus;
        }
        if (this.currency != null) {
            data.currency = this.currency;
        }
        if (this.orderAmount != null) {
            data.orderAmount = this.orderAmount;
        }
        if (this.feeAmount != null) {
            data.feeAmount = this.feeAmount;
        }
        if (this.feeCurrency != null) {
            data.feeCurrency = this.feeCurrency;
        }
        if (this.refundAmount != null) {
            data.refundAmount = this.refundAmount;
        }
        if (this.refundCurrency != null) {
            data.refundCurrency = this.refundCurrency;
        }
        if (this.refundTime != null) {
            data.refundTime = this.refundTime;
        }
        if (this.refundReason != null) {
            data.refundReason = this.refundReason;
        }
        if (this.refundOrderNo != null) {
            data.refundOrderNo = this.refundOrderNo;
        }
        return data;
    };
    OpenRefundDetail.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.outOrderNo.length)
            writer.writeString(1, this.outOrderNo);
        if (this.accountId != "0")
            writer.writeInt64String(2, this.accountId);
        if (this.orderNo.length)
            writer.writeString(3, this.orderNo);
        if (this.productCode.length)
            writer.writeString(4, this.productCode);
        if (this.orderStatus != OpenOrderStatus._UNKNOWN_OPS)
            writer.writeEnum(5, this.orderStatus);
        if (this.currency.length)
            writer.writeString(6, this.currency);
        if (this.orderAmount != 0)
            writer.writeInt64(7, this.orderAmount);
        if (this.feeAmount != 0)
            writer.writeInt64(9, this.feeAmount);
        if (this.feeCurrency.length)
            writer.writeString(10, this.feeCurrency);
        if (this.refundAmount != 0)
            writer.writeInt64(11, this.refundAmount);
        if (this.refundCurrency.length)
            writer.writeString(12, this.refundCurrency);
        if (this.refundTime.length)
            writer.writeString(13, this.refundTime);
        if (this.refundReason.length)
            writer.writeString(14, this.refundReason);
        if (this.refundOrderNo.length)
            writer.writeString(15, this.refundOrderNo);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenRefundDetail.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenRefundDetail();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.outOrderNo = reader.readString();
                    break;
                case 2:
                    message.accountId = reader.readInt64String();
                    break;
                case 3:
                    message.orderNo = reader.readString();
                    break;
                case 4:
                    message.productCode = reader.readString();
                    break;
                case 5:
                    message.orderStatus = reader.readEnum();
                    break;
                case 6:
                    message.currency = reader.readString();
                    break;
                case 7:
                    message.orderAmount = reader.readInt64();
                    break;
                case 9:
                    message.feeAmount = reader.readInt64();
                    break;
                case 10:
                    message.feeCurrency = reader.readString();
                    break;
                case 11:
                    message.refundAmount = reader.readInt64();
                    break;
                case 12:
                    message.refundCurrency = reader.readString();
                    break;
                case 13:
                    message.refundTime = reader.readString();
                    break;
                case 14:
                    message.refundReason = reader.readString();
                    break;
                case 15:
                    message.refundOrderNo = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenRefundDetail.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenRefundDetail.deserializeBinary = function (bytes) {
        return OpenRefundDetail.deserialize(bytes);
    };
    return OpenRefundDetail;
}(pb_1.Message));
exports.OpenRefundDetail = OpenRefundDetail;
_OpenRefundDetail_one_of_decls = new WeakMap();
var RdtReceivingParty = /** @class */ (function (_super) {
    __extends(RdtReceivingParty, _super);
    function RdtReceivingParty(data) {
        var _this = _super.call(this) || this;
        _RdtReceivingParty_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _RdtReceivingParty_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("accountName" in data && data.accountName != undefined) {
                _this.accountName = data.accountName;
            }
        }
        return _this;
    }
    Object.defineProperty(RdtReceivingParty.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RdtReceivingParty.prototype, "accountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    RdtReceivingParty.fromObject = function (data) {
        var message = new RdtReceivingParty({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.accountName != null) {
            message.accountName = data.accountName;
        }
        return message;
    };
    RdtReceivingParty.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.accountName != null) {
            data.accountName = this.accountName;
        }
        return data;
    };
    RdtReceivingParty.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.accountName.length)
            writer.writeString(2, this.accountName);
        if (!w)
            return writer.getResultBuffer();
    };
    RdtReceivingParty.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RdtReceivingParty();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.accountName = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    RdtReceivingParty.prototype.serializeBinary = function () {
        return this.serialize();
    };
    RdtReceivingParty.deserializeBinary = function (bytes) {
        return RdtReceivingParty.deserialize(bytes);
    };
    return RdtReceivingParty;
}(pb_1.Message));
exports.RdtReceivingParty = RdtReceivingParty;
_RdtReceivingParty_one_of_decls = new WeakMap();
var TtReceivingParty = /** @class */ (function (_super) {
    __extends(TtReceivingParty, _super);
    function TtReceivingParty(data) {
        var _this = _super.call(this) || this;
        _TtReceivingParty_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _TtReceivingParty_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountNumber" in data && data.accountNumber != undefined) {
                _this.accountNumber = data.accountNumber;
            }
            if ("accountName" in data && data.accountName != undefined) {
                _this.accountName = data.accountName;
            }
            if ("swiftBic" in data && data.swiftBic != undefined) {
                _this.swiftBic = data.swiftBic;
            }
            if ("intermediarySwiftBic" in data && data.intermediarySwiftBic != undefined) {
                _this.intermediarySwiftBic = data.intermediarySwiftBic;
            }
            if ("address1" in data && data.address1 != undefined) {
                _this.address1 = data.address1;
            }
            if ("address2" in data && data.address2 != undefined) {
                _this.address2 = data.address2;
            }
            if ("address3" in data && data.address3 != undefined) {
                _this.address3 = data.address3;
            }
            if ("routingCode" in data && data.routingCode != undefined) {
                _this.routingCode = data.routingCode;
            }
        }
        return _this;
    }
    Object.defineProperty(TtReceivingParty.prototype, "accountNumber", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TtReceivingParty.prototype, "accountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TtReceivingParty.prototype, "swiftBic", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TtReceivingParty.prototype, "intermediarySwiftBic", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TtReceivingParty.prototype, "address1", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TtReceivingParty.prototype, "address2", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TtReceivingParty.prototype, "address3", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TtReceivingParty.prototype, "routingCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    TtReceivingParty.fromObject = function (data) {
        var message = new TtReceivingParty({});
        if (data.accountNumber != null) {
            message.accountNumber = data.accountNumber;
        }
        if (data.accountName != null) {
            message.accountName = data.accountName;
        }
        if (data.swiftBic != null) {
            message.swiftBic = data.swiftBic;
        }
        if (data.intermediarySwiftBic != null) {
            message.intermediarySwiftBic = data.intermediarySwiftBic;
        }
        if (data.address1 != null) {
            message.address1 = data.address1;
        }
        if (data.address2 != null) {
            message.address2 = data.address2;
        }
        if (data.address3 != null) {
            message.address3 = data.address3;
        }
        if (data.routingCode != null) {
            message.routingCode = data.routingCode;
        }
        return message;
    };
    TtReceivingParty.prototype.toObject = function () {
        var data = {};
        if (this.accountNumber != null) {
            data.accountNumber = this.accountNumber;
        }
        if (this.accountName != null) {
            data.accountName = this.accountName;
        }
        if (this.swiftBic != null) {
            data.swiftBic = this.swiftBic;
        }
        if (this.intermediarySwiftBic != null) {
            data.intermediarySwiftBic = this.intermediarySwiftBic;
        }
        if (this.address1 != null) {
            data.address1 = this.address1;
        }
        if (this.address2 != null) {
            data.address2 = this.address2;
        }
        if (this.address3 != null) {
            data.address3 = this.address3;
        }
        if (this.routingCode != null) {
            data.routingCode = this.routingCode;
        }
        return data;
    };
    TtReceivingParty.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountNumber.length)
            writer.writeString(1, this.accountNumber);
        if (this.accountName.length)
            writer.writeString(2, this.accountName);
        if (this.swiftBic.length)
            writer.writeString(3, this.swiftBic);
        if (this.intermediarySwiftBic.length)
            writer.writeString(4, this.intermediarySwiftBic);
        if (this.address1.length)
            writer.writeString(5, this.address1);
        if (this.address2.length)
            writer.writeString(6, this.address2);
        if (this.address3.length)
            writer.writeString(7, this.address3);
        if (this.routingCode.length)
            writer.writeString(8, this.routingCode);
        if (!w)
            return writer.getResultBuffer();
    };
    TtReceivingParty.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TtReceivingParty();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountNumber = reader.readString();
                    break;
                case 2:
                    message.accountName = reader.readString();
                    break;
                case 3:
                    message.swiftBic = reader.readString();
                    break;
                case 4:
                    message.intermediarySwiftBic = reader.readString();
                    break;
                case 5:
                    message.address1 = reader.readString();
                    break;
                case 6:
                    message.address2 = reader.readString();
                    break;
                case 7:
                    message.address3 = reader.readString();
                    break;
                case 8:
                    message.routingCode = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    TtReceivingParty.prototype.serializeBinary = function () {
        return this.serialize();
    };
    TtReceivingParty.deserializeBinary = function (bytes) {
        return TtReceivingParty.deserialize(bytes);
    };
    return TtReceivingParty;
}(pb_1.Message));
exports.TtReceivingParty = TtReceivingParty;
_TtReceivingParty_one_of_decls = new WeakMap();
var ChatsReceivingParty = /** @class */ (function (_super) {
    __extends(ChatsReceivingParty, _super);
    function ChatsReceivingParty(data) {
        var _this = _super.call(this) || this;
        _ChatsReceivingParty_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _ChatsReceivingParty_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountNumber" in data && data.accountNumber != undefined) {
                _this.accountNumber = data.accountNumber;
            }
            if ("accountName" in data && data.accountName != undefined) {
                _this.accountName = data.accountName;
            }
            if ("swiftBic" in data && data.swiftBic != undefined) {
                _this.swiftBic = data.swiftBic;
            }
            if ("intermediarySwiftBic" in data && data.intermediarySwiftBic != undefined) {
                _this.intermediarySwiftBic = data.intermediarySwiftBic;
            }
            if ("address1" in data && data.address1 != undefined) {
                _this.address1 = data.address1;
            }
            if ("address2" in data && data.address2 != undefined) {
                _this.address2 = data.address2;
            }
            if ("address3" in data && data.address3 != undefined) {
                _this.address3 = data.address3;
            }
        }
        return _this;
    }
    Object.defineProperty(ChatsReceivingParty.prototype, "accountNumber", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatsReceivingParty.prototype, "accountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatsReceivingParty.prototype, "swiftBic", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatsReceivingParty.prototype, "intermediarySwiftBic", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatsReceivingParty.prototype, "address1", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatsReceivingParty.prototype, "address2", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChatsReceivingParty.prototype, "address3", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    ChatsReceivingParty.fromObject = function (data) {
        var message = new ChatsReceivingParty({});
        if (data.accountNumber != null) {
            message.accountNumber = data.accountNumber;
        }
        if (data.accountName != null) {
            message.accountName = data.accountName;
        }
        if (data.swiftBic != null) {
            message.swiftBic = data.swiftBic;
        }
        if (data.intermediarySwiftBic != null) {
            message.intermediarySwiftBic = data.intermediarySwiftBic;
        }
        if (data.address1 != null) {
            message.address1 = data.address1;
        }
        if (data.address2 != null) {
            message.address2 = data.address2;
        }
        if (data.address3 != null) {
            message.address3 = data.address3;
        }
        return message;
    };
    ChatsReceivingParty.prototype.toObject = function () {
        var data = {};
        if (this.accountNumber != null) {
            data.accountNumber = this.accountNumber;
        }
        if (this.accountName != null) {
            data.accountName = this.accountName;
        }
        if (this.swiftBic != null) {
            data.swiftBic = this.swiftBic;
        }
        if (this.intermediarySwiftBic != null) {
            data.intermediarySwiftBic = this.intermediarySwiftBic;
        }
        if (this.address1 != null) {
            data.address1 = this.address1;
        }
        if (this.address2 != null) {
            data.address2 = this.address2;
        }
        if (this.address3 != null) {
            data.address3 = this.address3;
        }
        return data;
    };
    ChatsReceivingParty.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountNumber.length)
            writer.writeString(1, this.accountNumber);
        if (this.accountName.length)
            writer.writeString(2, this.accountName);
        if (this.swiftBic.length)
            writer.writeString(3, this.swiftBic);
        if (this.intermediarySwiftBic.length)
            writer.writeString(4, this.intermediarySwiftBic);
        if (this.address1.length)
            writer.writeString(5, this.address1);
        if (this.address2.length)
            writer.writeString(6, this.address2);
        if (this.address3.length)
            writer.writeString(7, this.address3);
        if (!w)
            return writer.getResultBuffer();
    };
    ChatsReceivingParty.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChatsReceivingParty();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountNumber = reader.readString();
                    break;
                case 2:
                    message.accountName = reader.readString();
                    break;
                case 3:
                    message.swiftBic = reader.readString();
                    break;
                case 4:
                    message.intermediarySwiftBic = reader.readString();
                    break;
                case 5:
                    message.address1 = reader.readString();
                    break;
                case 6:
                    message.address2 = reader.readString();
                    break;
                case 7:
                    message.address3 = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    ChatsReceivingParty.prototype.serializeBinary = function () {
        return this.serialize();
    };
    ChatsReceivingParty.deserializeBinary = function (bytes) {
        return ChatsReceivingParty.deserialize(bytes);
    };
    return ChatsReceivingParty;
}(pb_1.Message));
exports.ChatsReceivingParty = ChatsReceivingParty;
_ChatsReceivingParty_one_of_decls = new WeakMap();
var QueryLimitParam = /** @class */ (function (_super) {
    __extends(QueryLimitParam, _super);
    function QueryLimitParam(data) {
        var _this = _super.call(this) || this;
        _QueryLimitParam_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _QueryLimitParam_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
        }
        return _this;
    }
    Object.defineProperty(QueryLimitParam.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitParam.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    QueryLimitParam.fromObject = function (data) {
        var message = new QueryLimitParam({});
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        return message;
    };
    QueryLimitParam.prototype.toObject = function () {
        var data = {};
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        return data;
    };
    QueryLimitParam.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.institutionId != "0")
            writer.writeInt64String(1, this.institutionId);
        if (this.accountId != "0")
            writer.writeInt64String(2, this.accountId);
        if (!w)
            return writer.getResultBuffer();
    };
    QueryLimitParam.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLimitParam();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.institutionId = reader.readInt64String();
                    break;
                case 2:
                    message.accountId = reader.readInt64String();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    QueryLimitParam.prototype.serializeBinary = function () {
        return this.serialize();
    };
    QueryLimitParam.deserializeBinary = function (bytes) {
        return QueryLimitParam.deserialize(bytes);
    };
    return QueryLimitParam;
}(pb_1.Message));
exports.QueryLimitParam = QueryLimitParam;
_QueryLimitParam_one_of_decls = new WeakMap();
var QueryLimitResponse = /** @class */ (function (_super) {
    __extends(QueryLimitResponse, _super);
    function QueryLimitResponse(data) {
        var _this = _super.call(this) || this;
        _QueryLimitResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _QueryLimitResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(QueryLimitResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, QueryLimitData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    QueryLimitResponse.fromObject = function (data) {
        var message = new QueryLimitResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = QueryLimitData.fromObject(data.data);
        }
        return message;
    };
    QueryLimitResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    QueryLimitResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    QueryLimitResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLimitResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = QueryLimitData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    QueryLimitResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    QueryLimitResponse.deserializeBinary = function (bytes) {
        return QueryLimitResponse.deserialize(bytes);
    };
    return QueryLimitResponse;
}(pb_1.Message));
exports.QueryLimitResponse = QueryLimitResponse;
_QueryLimitResponse_one_of_decls = new WeakMap();
var QueryLimitData = /** @class */ (function (_super) {
    __extends(QueryLimitData, _super);
    function QueryLimitData(data) {
        var _this = _super.call(this) || this;
        _QueryLimitData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _QueryLimitData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("limitQueryTime" in data && data.limitQueryTime != undefined) {
                _this.limitQueryTime = data.limitQueryTime;
            }
            if ("leftCollectLimit" in data && data.leftCollectLimit != undefined) {
                _this.leftCollectLimit = data.leftCollectLimit;
            }
            if ("totalCollectLimit" in data && data.totalCollectLimit != undefined) {
                _this.totalCollectLimit = data.totalCollectLimit;
            }
            if ("collectLimitCurrency" in data && data.collectLimitCurrency != undefined) {
                _this.collectLimitCurrency = data.collectLimitCurrency;
            }
            if ("leftTransferLimit" in data && data.leftTransferLimit != undefined) {
                _this.leftTransferLimit = data.leftTransferLimit;
            }
            if ("totalTransferLimit" in data && data.totalTransferLimit != undefined) {
                _this.totalTransferLimit = data.totalTransferLimit;
            }
            if ("transferLimitCurrency" in data && data.transferLimitCurrency != undefined) {
                _this.transferLimitCurrency = data.transferLimitCurrency;
            }
            if ("leftSpecialTransferLimit" in data && data.leftSpecialTransferLimit != undefined) {
                _this.leftSpecialTransferLimit = data.leftSpecialTransferLimit;
            }
            if ("totalSpecialTransferLimit" in data && data.totalSpecialTransferLimit != undefined) {
                _this.totalSpecialTransferLimit = data.totalSpecialTransferLimit;
            }
            if ("leftSpecialCollectionLimit" in data && data.leftSpecialCollectionLimit != undefined) {
                _this.leftSpecialCollectionLimit = data.leftSpecialCollectionLimit;
            }
            if ("totalSpecialCollectionLimit" in data && data.totalSpecialCollectionLimit != undefined) {
                _this.totalSpecialCollectionLimit = data.totalSpecialCollectionLimit;
            }
        }
        return _this;
    }
    Object.defineProperty(QueryLimitData.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "limitQueryTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "leftCollectLimit", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "totalCollectLimit", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "collectLimitCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "leftTransferLimit", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "totalTransferLimit", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "transferLimitCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 9, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "leftSpecialTransferLimit", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 10, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 10, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "totalSpecialTransferLimit", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 11, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 11, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "leftSpecialCollectionLimit", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 12, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 12, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QueryLimitData.prototype, "totalSpecialCollectionLimit", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 13, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 13, value);
        },
        enumerable: false,
        configurable: true
    });
    QueryLimitData.fromObject = function (data) {
        var message = new QueryLimitData({});
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.limitQueryTime != null) {
            message.limitQueryTime = data.limitQueryTime;
        }
        if (data.leftCollectLimit != null) {
            message.leftCollectLimit = data.leftCollectLimit;
        }
        if (data.totalCollectLimit != null) {
            message.totalCollectLimit = data.totalCollectLimit;
        }
        if (data.collectLimitCurrency != null) {
            message.collectLimitCurrency = data.collectLimitCurrency;
        }
        if (data.leftTransferLimit != null) {
            message.leftTransferLimit = data.leftTransferLimit;
        }
        if (data.totalTransferLimit != null) {
            message.totalTransferLimit = data.totalTransferLimit;
        }
        if (data.transferLimitCurrency != null) {
            message.transferLimitCurrency = data.transferLimitCurrency;
        }
        if (data.leftSpecialTransferLimit != null) {
            message.leftSpecialTransferLimit = data.leftSpecialTransferLimit;
        }
        if (data.totalSpecialTransferLimit != null) {
            message.totalSpecialTransferLimit = data.totalSpecialTransferLimit;
        }
        if (data.leftSpecialCollectionLimit != null) {
            message.leftSpecialCollectionLimit = data.leftSpecialCollectionLimit;
        }
        if (data.totalSpecialCollectionLimit != null) {
            message.totalSpecialCollectionLimit = data.totalSpecialCollectionLimit;
        }
        return message;
    };
    QueryLimitData.prototype.toObject = function () {
        var data = {};
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.limitQueryTime != null) {
            data.limitQueryTime = this.limitQueryTime;
        }
        if (this.leftCollectLimit != null) {
            data.leftCollectLimit = this.leftCollectLimit;
        }
        if (this.totalCollectLimit != null) {
            data.totalCollectLimit = this.totalCollectLimit;
        }
        if (this.collectLimitCurrency != null) {
            data.collectLimitCurrency = this.collectLimitCurrency;
        }
        if (this.leftTransferLimit != null) {
            data.leftTransferLimit = this.leftTransferLimit;
        }
        if (this.totalTransferLimit != null) {
            data.totalTransferLimit = this.totalTransferLimit;
        }
        if (this.transferLimitCurrency != null) {
            data.transferLimitCurrency = this.transferLimitCurrency;
        }
        if (this.leftSpecialTransferLimit != null) {
            data.leftSpecialTransferLimit = this.leftSpecialTransferLimit;
        }
        if (this.totalSpecialTransferLimit != null) {
            data.totalSpecialTransferLimit = this.totalSpecialTransferLimit;
        }
        if (this.leftSpecialCollectionLimit != null) {
            data.leftSpecialCollectionLimit = this.leftSpecialCollectionLimit;
        }
        if (this.totalSpecialCollectionLimit != null) {
            data.totalSpecialCollectionLimit = this.totalSpecialCollectionLimit;
        }
        return data;
    };
    QueryLimitData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.institutionId != "0")
            writer.writeInt64String(1, this.institutionId);
        if (this.accountId != "0")
            writer.writeInt64String(2, this.accountId);
        if (this.limitQueryTime.length)
            writer.writeString(3, this.limitQueryTime);
        if (this.leftCollectLimit != 0)
            writer.writeInt64(4, this.leftCollectLimit);
        if (this.totalCollectLimit != 0)
            writer.writeInt64(5, this.totalCollectLimit);
        if (this.collectLimitCurrency.length)
            writer.writeString(6, this.collectLimitCurrency);
        if (this.leftTransferLimit != 0)
            writer.writeInt64(7, this.leftTransferLimit);
        if (this.totalTransferLimit != 0)
            writer.writeInt64(8, this.totalTransferLimit);
        if (this.transferLimitCurrency.length)
            writer.writeString(9, this.transferLimitCurrency);
        if (this.leftSpecialTransferLimit != 0)
            writer.writeInt64(10, this.leftSpecialTransferLimit);
        if (this.totalSpecialTransferLimit != 0)
            writer.writeInt64(11, this.totalSpecialTransferLimit);
        if (this.leftSpecialCollectionLimit != 0)
            writer.writeInt64(12, this.leftSpecialCollectionLimit);
        if (this.totalSpecialCollectionLimit != 0)
            writer.writeInt64(13, this.totalSpecialCollectionLimit);
        if (!w)
            return writer.getResultBuffer();
    };
    QueryLimitData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryLimitData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.institutionId = reader.readInt64String();
                    break;
                case 2:
                    message.accountId = reader.readInt64String();
                    break;
                case 3:
                    message.limitQueryTime = reader.readString();
                    break;
                case 4:
                    message.leftCollectLimit = reader.readInt64();
                    break;
                case 5:
                    message.totalCollectLimit = reader.readInt64();
                    break;
                case 6:
                    message.collectLimitCurrency = reader.readString();
                    break;
                case 7:
                    message.leftTransferLimit = reader.readInt64();
                    break;
                case 8:
                    message.totalTransferLimit = reader.readInt64();
                    break;
                case 9:
                    message.transferLimitCurrency = reader.readString();
                    break;
                case 10:
                    message.leftSpecialTransferLimit = reader.readInt64();
                    break;
                case 11:
                    message.totalSpecialTransferLimit = reader.readInt64();
                    break;
                case 12:
                    message.leftSpecialCollectionLimit = reader.readInt64();
                    break;
                case 13:
                    message.totalSpecialCollectionLimit = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    QueryLimitData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    QueryLimitData.deserializeBinary = function (bytes) {
        return QueryLimitData.deserialize(bytes);
    };
    return QueryLimitData;
}(pb_1.Message));
exports.QueryLimitData = QueryLimitData;
_QueryLimitData_one_of_decls = new WeakMap();
var OpenAccountQueryRequest = /** @class */ (function (_super) {
    __extends(OpenAccountQueryRequest, _super);
    function OpenAccountQueryRequest(data) {
        var _this = _super.call(this) || this;
        _OpenAccountQueryRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenAccountQueryRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenAccountQueryRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenAccountQueryRequest.fromObject = function (data) {
        var message = new OpenAccountQueryRequest({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        return message;
    };
    OpenAccountQueryRequest.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        return data;
    };
    OpenAccountQueryRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.requestId.length)
            writer.writeString(2, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(3, this.institutionId);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenAccountQueryRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenAccountQueryRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.requestId = reader.readString();
                    break;
                case 3:
                    message.institutionId = reader.readInt64String();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenAccountQueryRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenAccountQueryRequest.deserializeBinary = function (bytes) {
        return OpenAccountQueryRequest.deserialize(bytes);
    };
    return OpenAccountQueryRequest;
}(pb_1.Message));
exports.OpenAccountQueryRequest = OpenAccountQueryRequest;
_OpenAccountQueryRequest_one_of_decls = new WeakMap();
var OpenAccountQueryResponse = /** @class */ (function (_super) {
    __extends(OpenAccountQueryResponse, _super);
    function OpenAccountQueryResponse(data) {
        var _this = _super.call(this) || this;
        _OpenAccountQueryResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenAccountQueryResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenAccountQueryResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, OpenAccountQueryData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    OpenAccountQueryResponse.fromObject = function (data) {
        var message = new OpenAccountQueryResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = OpenAccountQueryData.fromObject(data.data);
        }
        return message;
    };
    OpenAccountQueryResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    OpenAccountQueryResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    OpenAccountQueryResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenAccountQueryResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = OpenAccountQueryData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenAccountQueryResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenAccountQueryResponse.deserializeBinary = function (bytes) {
        return OpenAccountQueryResponse.deserialize(bytes);
    };
    return OpenAccountQueryResponse;
}(pb_1.Message));
exports.OpenAccountQueryResponse = OpenAccountQueryResponse;
_OpenAccountQueryResponse_one_of_decls = new WeakMap();
var OpenAccountQueryData = /** @class */ (function (_super) {
    __extends(OpenAccountQueryData, _super);
    function OpenAccountQueryData(data) {
        var _this = _super.call(this) || this;
        _OpenAccountQueryData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _OpenAccountQueryData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("accountName" in data && data.accountName != undefined) {
                _this.accountName = data.accountName;
            }
            if ("bankName" in data && data.bankName != undefined) {
                _this.bankName = data.bankName;
            }
            if ("bankId" in data && data.bankId != undefined) {
                _this.bankId = data.bankId;
            }
            if ("bankSwiftCode" in data && data.bankSwiftCode != undefined) {
                _this.bankSwiftCode = data.bankSwiftCode;
            }
            if ("bankLocation" in data && data.bankLocation != undefined) {
                _this.bankLocation = data.bankLocation;
            }
            if ("bankAccountNumber" in data && data.bankAccountNumber != undefined) {
                _this.bankAccountNumber = data.bankAccountNumber;
            }
            if ("messageToPayee" in data && data.messageToPayee != undefined) {
                _this.messageToPayee = data.messageToPayee;
            }
            if ("remittanceInfo" in data && data.remittanceInfo != undefined) {
                _this.remittanceInfo = data.remittanceInfo;
            }
        }
        return _this;
    }
    Object.defineProperty(OpenAccountQueryData.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryData.prototype, "accountName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryData.prototype, "bankName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryData.prototype, "bankId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryData.prototype, "bankSwiftCode", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryData.prototype, "bankLocation", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryData.prototype, "bankAccountNumber", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryData.prototype, "messageToPayee", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OpenAccountQueryData.prototype, "remittanceInfo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 9, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    OpenAccountQueryData.fromObject = function (data) {
        var message = new OpenAccountQueryData({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.accountName != null) {
            message.accountName = data.accountName;
        }
        if (data.bankName != null) {
            message.bankName = data.bankName;
        }
        if (data.bankId != null) {
            message.bankId = data.bankId;
        }
        if (data.bankSwiftCode != null) {
            message.bankSwiftCode = data.bankSwiftCode;
        }
        if (data.bankLocation != null) {
            message.bankLocation = data.bankLocation;
        }
        if (data.bankAccountNumber != null) {
            message.bankAccountNumber = data.bankAccountNumber;
        }
        if (data.messageToPayee != null) {
            message.messageToPayee = data.messageToPayee;
        }
        if (data.remittanceInfo != null) {
            message.remittanceInfo = data.remittanceInfo;
        }
        return message;
    };
    OpenAccountQueryData.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.accountName != null) {
            data.accountName = this.accountName;
        }
        if (this.bankName != null) {
            data.bankName = this.bankName;
        }
        if (this.bankId != null) {
            data.bankId = this.bankId;
        }
        if (this.bankSwiftCode != null) {
            data.bankSwiftCode = this.bankSwiftCode;
        }
        if (this.bankLocation != null) {
            data.bankLocation = this.bankLocation;
        }
        if (this.bankAccountNumber != null) {
            data.bankAccountNumber = this.bankAccountNumber;
        }
        if (this.messageToPayee != null) {
            data.messageToPayee = this.messageToPayee;
        }
        if (this.remittanceInfo != null) {
            data.remittanceInfo = this.remittanceInfo;
        }
        return data;
    };
    OpenAccountQueryData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.accountName.length)
            writer.writeString(2, this.accountName);
        if (this.bankName.length)
            writer.writeString(3, this.bankName);
        if (this.bankId.length)
            writer.writeString(4, this.bankId);
        if (this.bankSwiftCode.length)
            writer.writeString(5, this.bankSwiftCode);
        if (this.bankLocation.length)
            writer.writeString(6, this.bankLocation);
        if (this.bankAccountNumber.length)
            writer.writeString(7, this.bankAccountNumber);
        if (this.messageToPayee.length)
            writer.writeString(8, this.messageToPayee);
        if (this.remittanceInfo.length)
            writer.writeString(9, this.remittanceInfo);
        if (!w)
            return writer.getResultBuffer();
    };
    OpenAccountQueryData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenAccountQueryData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.accountName = reader.readString();
                    break;
                case 3:
                    message.bankName = reader.readString();
                    break;
                case 4:
                    message.bankId = reader.readString();
                    break;
                case 5:
                    message.bankSwiftCode = reader.readString();
                    break;
                case 6:
                    message.bankLocation = reader.readString();
                    break;
                case 7:
                    message.bankAccountNumber = reader.readString();
                    break;
                case 8:
                    message.messageToPayee = reader.readString();
                    break;
                case 9:
                    message.remittanceInfo = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    OpenAccountQueryData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    OpenAccountQueryData.deserializeBinary = function (bytes) {
        return OpenAccountQueryData.deserialize(bytes);
    };
    return OpenAccountQueryData;
}(pb_1.Message));
exports.OpenAccountQueryData = OpenAccountQueryData;
_OpenAccountQueryData_one_of_decls = new WeakMap();
var DownloadBillData = /** @class */ (function (_super) {
    __extends(DownloadBillData, _super);
    function DownloadBillData(data) {
        var _this = _super.call(this) || this;
        _DownloadBillData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _DownloadBillData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("fileUrl" in data && data.fileUrl != undefined) {
                _this.fileUrl = data.fileUrl;
            }
            if ("fileName" in data && data.fileName != undefined) {
                _this.fileName = data.fileName;
            }
        }
        return _this;
    }
    Object.defineProperty(DownloadBillData.prototype, "fileUrl", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DownloadBillData.prototype, "fileName", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    DownloadBillData.fromObject = function (data) {
        var message = new DownloadBillData({});
        if (data.fileUrl != null) {
            message.fileUrl = data.fileUrl;
        }
        if (data.fileName != null) {
            message.fileName = data.fileName;
        }
        return message;
    };
    DownloadBillData.prototype.toObject = function () {
        var data = {};
        if (this.fileUrl != null) {
            data.fileUrl = this.fileUrl;
        }
        if (this.fileName != null) {
            data.fileName = this.fileName;
        }
        return data;
    };
    DownloadBillData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.fileUrl.length)
            writer.writeString(1, this.fileUrl);
        if (this.fileName.length)
            writer.writeString(2, this.fileName);
        if (!w)
            return writer.getResultBuffer();
    };
    DownloadBillData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DownloadBillData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.fileUrl = reader.readString();
                    break;
                case 2:
                    message.fileName = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    DownloadBillData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    DownloadBillData.deserializeBinary = function (bytes) {
        return DownloadBillData.deserialize(bytes);
    };
    return DownloadBillData;
}(pb_1.Message));
exports.DownloadBillData = DownloadBillData;
_DownloadBillData_one_of_decls = new WeakMap();
var DownloadBillRequest = /** @class */ (function (_super) {
    __extends(DownloadBillRequest, _super);
    function DownloadBillRequest(data) {
        var _this = _super.call(this) || this;
        _DownloadBillRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _DownloadBillRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("billDate" in data && data.billDate != undefined) {
                _this.billDate = data.billDate;
            }
            if ("currency" in data && data.currency != undefined) {
                _this.currency = data.currency;
            }
        }
        return _this;
    }
    Object.defineProperty(DownloadBillRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DownloadBillRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DownloadBillRequest.prototype, "billDate", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DownloadBillRequest.prototype, "currency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    DownloadBillRequest.fromObject = function (data) {
        var message = new DownloadBillRequest({});
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.billDate != null) {
            message.billDate = data.billDate;
        }
        if (data.currency != null) {
            message.currency = data.currency;
        }
        return message;
    };
    DownloadBillRequest.prototype.toObject = function () {
        var data = {};
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.billDate != null) {
            data.billDate = this.billDate;
        }
        if (this.currency != null) {
            data.currency = this.currency;
        }
        return data;
    };
    DownloadBillRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.institutionId != "0")
            writer.writeInt64String(1, this.institutionId);
        if (this.accountId != "0")
            writer.writeInt64String(2, this.accountId);
        if (this.billDate.length)
            writer.writeString(3, this.billDate);
        if (this.currency.length)
            writer.writeString(4, this.currency);
        if (!w)
            return writer.getResultBuffer();
    };
    DownloadBillRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DownloadBillRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.institutionId = reader.readInt64String();
                    break;
                case 2:
                    message.accountId = reader.readInt64String();
                    break;
                case 3:
                    message.billDate = reader.readString();
                    break;
                case 4:
                    message.currency = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    DownloadBillRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    DownloadBillRequest.deserializeBinary = function (bytes) {
        return DownloadBillRequest.deserialize(bytes);
    };
    return DownloadBillRequest;
}(pb_1.Message));
exports.DownloadBillRequest = DownloadBillRequest;
_DownloadBillRequest_one_of_decls = new WeakMap();
var DownloadBillResponse = /** @class */ (function (_super) {
    __extends(DownloadBillResponse, _super);
    function DownloadBillResponse(data) {
        var _this = _super.call(this) || this;
        _DownloadBillResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _DownloadBillResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(DownloadBillResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DownloadBillResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DownloadBillResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, DownloadBillData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DownloadBillResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    DownloadBillResponse.fromObject = function (data) {
        var message = new DownloadBillResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = DownloadBillData.fromObject(data.data);
        }
        return message;
    };
    DownloadBillResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    DownloadBillResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    DownloadBillResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DownloadBillResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = DownloadBillData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    DownloadBillResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    DownloadBillResponse.deserializeBinary = function (bytes) {
        return DownloadBillResponse.deserialize(bytes);
    };
    return DownloadBillResponse;
}(pb_1.Message));
exports.DownloadBillResponse = DownloadBillResponse;
_DownloadBillResponse_one_of_decls = new WeakMap();
var FX = /** @class */ (function (_super) {
    __extends(FX, _super);
    function FX(data) {
        var _this = _super.call(this) || this;
        _FX_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FX_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") { }
        return _this;
    }
    FX.fromObject = function (data) {
        var message = new FX({});
        return message;
    };
    FX.prototype.toObject = function () {
        var data = {};
        return data;
    };
    FX.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (!w)
            return writer.getResultBuffer();
    };
    FX.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FX();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                default: reader.skipField();
            }
        }
        return message;
    };
    FX.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FX.deserializeBinary = function (bytes) {
        return FX.deserialize(bytes);
    };
    return FX;
}(pb_1.Message));
exports.FX = FX;
_FX_one_of_decls = new WeakMap();
var FXDirection;
(function (FXDirection) {
    FXDirection[FXDirection["_UNKNOWN_OPS"] = 0] = "_UNKNOWN_OPS";
    FXDirection[FXDirection["BUY"] = 1] = "BUY";
    FXDirection[FXDirection["SELL"] = 2] = "SELL";
})(FXDirection = exports.FXDirection || (exports.FXDirection = {}));
var FXOrderStatus;
(function (FXOrderStatus) {
    FXOrderStatus[FXOrderStatus["_UNKNOWN_STATUS"] = 0] = "_UNKNOWN_STATUS";
    FXOrderStatus[FXOrderStatus["SUBMITTED"] = 1] = "SUBMITTED";
    FXOrderStatus[FXOrderStatus["SUCCESSFUL"] = 2] = "SUCCESSFUL";
    FXOrderStatus[FXOrderStatus["FAILED"] = 3] = "FAILED";
    FXOrderStatus[FXOrderStatus["CANCELLED"] = 4] = "CANCELLED";
    FXOrderStatus[FXOrderStatus["REFUNDED"] = 5] = "REFUNDED";
})(FXOrderStatus = exports.FXOrderStatus || (exports.FXOrderStatus = {}));
var FXQuoteBulkRequest = /** @class */ (function (_super) {
    __extends(FXQuoteBulkRequest, _super);
    function FXQuoteBulkRequest(data) {
        var _this = _super.call(this) || this;
        _FXQuoteBulkRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXQuoteBulkRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
        }
        return _this;
    }
    Object.defineProperty(FXQuoteBulkRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteBulkRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteBulkRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    FXQuoteBulkRequest.fromObject = function (data) {
        var message = new FXQuoteBulkRequest({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        return message;
    };
    FXQuoteBulkRequest.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        return data;
    };
    FXQuoteBulkRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.requestId.length)
            writer.writeString(6, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(7, this.institutionId);
        if (!w)
            return writer.getResultBuffer();
    };
    FXQuoteBulkRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXQuoteBulkRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 6:
                    message.requestId = reader.readString();
                    break;
                case 7:
                    message.institutionId = reader.readInt64String();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXQuoteBulkRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXQuoteBulkRequest.deserializeBinary = function (bytes) {
        return FXQuoteBulkRequest.deserialize(bytes);
    };
    return FXQuoteBulkRequest;
}(pb_1.Message));
exports.FXQuoteBulkRequest = FXQuoteBulkRequest;
_FXQuoteBulkRequest_one_of_decls = new WeakMap();
var FXQuoteBulkResponse = /** @class */ (function (_super) {
    __extends(FXQuoteBulkResponse, _super);
    function FXQuoteBulkResponse(data) {
        var _this = _super.call(this) || this;
        _FXQuoteBulkResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXQuoteBulkResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(FXQuoteBulkResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteBulkResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteBulkResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, FXQuoteBulkData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteBulkResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    FXQuoteBulkResponse.fromObject = function (data) {
        var message = new FXQuoteBulkResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = FXQuoteBulkData.fromObject(data.data);
        }
        return message;
    };
    FXQuoteBulkResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    FXQuoteBulkResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    FXQuoteBulkResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXQuoteBulkResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = FXQuoteBulkData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXQuoteBulkResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXQuoteBulkResponse.deserializeBinary = function (bytes) {
        return FXQuoteBulkResponse.deserialize(bytes);
    };
    return FXQuoteBulkResponse;
}(pb_1.Message));
exports.FXQuoteBulkResponse = FXQuoteBulkResponse;
_FXQuoteBulkResponse_one_of_decls = new WeakMap();
var FXQuoteBulkData = /** @class */ (function (_super) {
    __extends(FXQuoteBulkData, _super);
    function FXQuoteBulkData(data) {
        var _this = _super.call(this) || this;
        _FXQuoteBulkData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [2], __classPrivateFieldGet(_this, _FXQuoteBulkData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("rateList" in data && data.rateList != undefined) {
                _this.rateList = data.rateList;
            }
        }
        return _this;
    }
    Object.defineProperty(FXQuoteBulkData.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteBulkData.prototype, "rateList", {
        get: function () {
            return pb_1.Message.getRepeatedWrapperField(this, FXRateData, 2);
        },
        set: function (value) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    FXQuoteBulkData.fromObject = function (data) {
        var message = new FXQuoteBulkData({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.rateList != null) {
            message.rateList = data.rateList.map(function (item) { return FXRateData.fromObject(item); });
        }
        return message;
    };
    FXQuoteBulkData.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.rateList != null) {
            data.rateList = this.rateList.map(function (item) { return item.toObject(); });
        }
        return data;
    };
    FXQuoteBulkData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.rateList.length)
            writer.writeRepeatedMessage(2, this.rateList, function (item) { return item.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    FXQuoteBulkData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXQuoteBulkData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    reader.readMessage(message.rateList, function () { return pb_1.Message.addToRepeatedWrapperField(message, 2, FXRateData.deserialize(reader), FXRateData); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXQuoteBulkData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXQuoteBulkData.deserializeBinary = function (bytes) {
        return FXQuoteBulkData.deserialize(bytes);
    };
    return FXQuoteBulkData;
}(pb_1.Message));
exports.FXQuoteBulkData = FXQuoteBulkData;
_FXQuoteBulkData_one_of_decls = new WeakMap();
var FXRateData = /** @class */ (function (_super) {
    __extends(FXRateData, _super);
    function FXRateData(data) {
        var _this = _super.call(this) || this;
        _FXRateData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXRateData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("sellCurrency" in data && data.sellCurrency != undefined) {
                _this.sellCurrency = data.sellCurrency;
            }
            if ("buyCurrency" in data && data.buyCurrency != undefined) {
                _this.buyCurrency = data.buyCurrency;
            }
            if ("baseCurrency" in data && data.baseCurrency != undefined) {
                _this.baseCurrency = data.baseCurrency;
            }
            if ("termCurrency" in data && data.termCurrency != undefined) {
                _this.termCurrency = data.termCurrency;
            }
            if ("rate" in data && data.rate != undefined) {
                _this.rate = data.rate;
            }
        }
        return _this;
    }
    Object.defineProperty(FXRateData.prototype, "sellCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXRateData.prototype, "buyCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXRateData.prototype, "baseCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXRateData.prototype, "termCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXRateData.prototype, "rate", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    FXRateData.fromObject = function (data) {
        var message = new FXRateData({});
        if (data.sellCurrency != null) {
            message.sellCurrency = data.sellCurrency;
        }
        if (data.buyCurrency != null) {
            message.buyCurrency = data.buyCurrency;
        }
        if (data.baseCurrency != null) {
            message.baseCurrency = data.baseCurrency;
        }
        if (data.termCurrency != null) {
            message.termCurrency = data.termCurrency;
        }
        if (data.rate != null) {
            message.rate = data.rate;
        }
        return message;
    };
    FXRateData.prototype.toObject = function () {
        var data = {};
        if (this.sellCurrency != null) {
            data.sellCurrency = this.sellCurrency;
        }
        if (this.buyCurrency != null) {
            data.buyCurrency = this.buyCurrency;
        }
        if (this.baseCurrency != null) {
            data.baseCurrency = this.baseCurrency;
        }
        if (this.termCurrency != null) {
            data.termCurrency = this.termCurrency;
        }
        if (this.rate != null) {
            data.rate = this.rate;
        }
        return data;
    };
    FXRateData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.sellCurrency.length)
            writer.writeString(1, this.sellCurrency);
        if (this.buyCurrency.length)
            writer.writeString(2, this.buyCurrency);
        if (this.baseCurrency.length)
            writer.writeString(3, this.baseCurrency);
        if (this.termCurrency.length)
            writer.writeString(4, this.termCurrency);
        if (this.rate != 0)
            writer.writeInt64(5, this.rate);
        if (!w)
            return writer.getResultBuffer();
    };
    FXRateData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXRateData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.sellCurrency = reader.readString();
                    break;
                case 2:
                    message.buyCurrency = reader.readString();
                    break;
                case 3:
                    message.baseCurrency = reader.readString();
                    break;
                case 4:
                    message.termCurrency = reader.readString();
                    break;
                case 5:
                    message.rate = reader.readInt64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXRateData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXRateData.deserializeBinary = function (bytes) {
        return FXRateData.deserialize(bytes);
    };
    return FXRateData;
}(pb_1.Message));
exports.FXRateData = FXRateData;
_FXRateData_one_of_decls = new WeakMap();
var FXQuoteRequest = /** @class */ (function (_super) {
    __extends(FXQuoteRequest, _super);
    function FXQuoteRequest(data) {
        var _this = _super.call(this) || this;
        _FXQuoteRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXQuoteRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("sellCurrency" in data && data.sellCurrency != undefined) {
                _this.sellCurrency = data.sellCurrency;
            }
            if ("buyCurrency" in data && data.buyCurrency != undefined) {
                _this.buyCurrency = data.buyCurrency;
            }
            if ("direction" in data && data.direction != undefined) {
                _this.direction = data.direction;
            }
            if ("quoteAmount" in data && data.quoteAmount != undefined) {
                _this.quoteAmount = data.quoteAmount;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
        }
        return _this;
    }
    Object.defineProperty(FXQuoteRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteRequest.prototype, "sellCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteRequest.prototype, "buyCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteRequest.prototype, "direction", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, FXDirection._UNKNOWN_OPS);
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteRequest.prototype, "quoteAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    FXQuoteRequest.fromObject = function (data) {
        var message = new FXQuoteRequest({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.sellCurrency != null) {
            message.sellCurrency = data.sellCurrency;
        }
        if (data.buyCurrency != null) {
            message.buyCurrency = data.buyCurrency;
        }
        if (data.direction != null) {
            message.direction = data.direction;
        }
        if (data.quoteAmount != null) {
            message.quoteAmount = data.quoteAmount;
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        return message;
    };
    FXQuoteRequest.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.sellCurrency != null) {
            data.sellCurrency = this.sellCurrency;
        }
        if (this.buyCurrency != null) {
            data.buyCurrency = this.buyCurrency;
        }
        if (this.direction != null) {
            data.direction = this.direction;
        }
        if (this.quoteAmount != null) {
            data.quoteAmount = this.quoteAmount;
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        return data;
    };
    FXQuoteRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.sellCurrency.length)
            writer.writeString(2, this.sellCurrency);
        if (this.buyCurrency.length)
            writer.writeString(3, this.buyCurrency);
        if (this.direction != FXDirection._UNKNOWN_OPS)
            writer.writeEnum(4, this.direction);
        if (this.quoteAmount != 0)
            writer.writeInt64(5, this.quoteAmount);
        if (this.requestId.length)
            writer.writeString(6, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(7, this.institutionId);
        if (!w)
            return writer.getResultBuffer();
    };
    FXQuoteRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXQuoteRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.sellCurrency = reader.readString();
                    break;
                case 3:
                    message.buyCurrency = reader.readString();
                    break;
                case 4:
                    message.direction = reader.readEnum();
                    break;
                case 5:
                    message.quoteAmount = reader.readInt64();
                    break;
                case 6:
                    message.requestId = reader.readString();
                    break;
                case 7:
                    message.institutionId = reader.readInt64String();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXQuoteRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXQuoteRequest.deserializeBinary = function (bytes) {
        return FXQuoteRequest.deserialize(bytes);
    };
    return FXQuoteRequest;
}(pb_1.Message));
exports.FXQuoteRequest = FXQuoteRequest;
_FXQuoteRequest_one_of_decls = new WeakMap();
var FXQuoteResponse = /** @class */ (function (_super) {
    __extends(FXQuoteResponse, _super);
    function FXQuoteResponse(data) {
        var _this = _super.call(this) || this;
        _FXQuoteResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXQuoteResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(FXQuoteResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, FXQuoteData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    FXQuoteResponse.fromObject = function (data) {
        var message = new FXQuoteResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = FXQuoteData.fromObject(data.data);
        }
        return message;
    };
    FXQuoteResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    FXQuoteResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    FXQuoteResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXQuoteResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = FXQuoteData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXQuoteResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXQuoteResponse.deserializeBinary = function (bytes) {
        return FXQuoteResponse.deserialize(bytes);
    };
    return FXQuoteResponse;
}(pb_1.Message));
exports.FXQuoteResponse = FXQuoteResponse;
_FXQuoteResponse_one_of_decls = new WeakMap();
var FXQuoteData = /** @class */ (function (_super) {
    __extends(FXQuoteData, _super);
    function FXQuoteData(data) {
        var _this = _super.call(this) || this;
        _FXQuoteData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXQuoteData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("quoteId" in data && data.quoteId != undefined) {
                _this.quoteId = data.quoteId;
            }
            if ("expireTime" in data && data.expireTime != undefined) {
                _this.expireTime = data.expireTime;
            }
            if ("rate" in data && data.rate != undefined) {
                _this.rate = data.rate;
            }
            if ("amount" in data && data.amount != undefined) {
                _this.amount = data.amount;
            }
            if ("baseCurrency" in data && data.baseCurrency != undefined) {
                _this.baseCurrency = data.baseCurrency;
            }
            if ("termCurrency" in data && data.termCurrency != undefined) {
                _this.termCurrency = data.termCurrency;
            }
        }
        return _this;
    }
    Object.defineProperty(FXQuoteData.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteData.prototype, "quoteId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteData.prototype, "expireTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteData.prototype, "rate", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteData.prototype, "amount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteData.prototype, "baseCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXQuoteData.prototype, "termCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    FXQuoteData.fromObject = function (data) {
        var message = new FXQuoteData({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.quoteId != null) {
            message.quoteId = data.quoteId;
        }
        if (data.expireTime != null) {
            message.expireTime = data.expireTime;
        }
        if (data.rate != null) {
            message.rate = data.rate;
        }
        if (data.amount != null) {
            message.amount = data.amount;
        }
        if (data.baseCurrency != null) {
            message.baseCurrency = data.baseCurrency;
        }
        if (data.termCurrency != null) {
            message.termCurrency = data.termCurrency;
        }
        return message;
    };
    FXQuoteData.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.quoteId != null) {
            data.quoteId = this.quoteId;
        }
        if (this.expireTime != null) {
            data.expireTime = this.expireTime;
        }
        if (this.rate != null) {
            data.rate = this.rate;
        }
        if (this.amount != null) {
            data.amount = this.amount;
        }
        if (this.baseCurrency != null) {
            data.baseCurrency = this.baseCurrency;
        }
        if (this.termCurrency != null) {
            data.termCurrency = this.termCurrency;
        }
        return data;
    };
    FXQuoteData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.quoteId != "0")
            writer.writeInt64String(2, this.quoteId);
        if (this.expireTime.length)
            writer.writeString(3, this.expireTime);
        if (this.rate != 0)
            writer.writeInt64(4, this.rate);
        if (this.amount != 0)
            writer.writeInt64(5, this.amount);
        if (this.baseCurrency.length)
            writer.writeString(6, this.baseCurrency);
        if (this.termCurrency.length)
            writer.writeString(7, this.termCurrency);
        if (!w)
            return writer.getResultBuffer();
    };
    FXQuoteData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXQuoteData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.quoteId = reader.readInt64String();
                    break;
                case 3:
                    message.expireTime = reader.readString();
                    break;
                case 4:
                    message.rate = reader.readInt64();
                    break;
                case 5:
                    message.amount = reader.readInt64();
                    break;
                case 6:
                    message.baseCurrency = reader.readString();
                    break;
                case 7:
                    message.termCurrency = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXQuoteData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXQuoteData.deserializeBinary = function (bytes) {
        return FXQuoteData.deserialize(bytes);
    };
    return FXQuoteData;
}(pb_1.Message));
exports.FXQuoteData = FXQuoteData;
_FXQuoteData_one_of_decls = new WeakMap();
var FXBookRequest = /** @class */ (function (_super) {
    __extends(FXBookRequest, _super);
    function FXBookRequest(data) {
        var _this = _super.call(this) || this;
        _FXBookRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXBookRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("quoteId" in data && data.quoteId != undefined) {
                _this.quoteId = data.quoteId;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
        }
        return _this;
    }
    Object.defineProperty(FXBookRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXBookRequest.prototype, "quoteId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXBookRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXBookRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    FXBookRequest.fromObject = function (data) {
        var message = new FXBookRequest({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.quoteId != null) {
            message.quoteId = data.quoteId;
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        return message;
    };
    FXBookRequest.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.quoteId != null) {
            data.quoteId = this.quoteId;
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        return data;
    };
    FXBookRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.quoteId != "0")
            writer.writeInt64String(2, this.quoteId);
        if (this.requestId.length)
            writer.writeString(3, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(4, this.institutionId);
        if (!w)
            return writer.getResultBuffer();
    };
    FXBookRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXBookRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.quoteId = reader.readInt64String();
                    break;
                case 3:
                    message.requestId = reader.readString();
                    break;
                case 4:
                    message.institutionId = reader.readInt64String();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXBookRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXBookRequest.deserializeBinary = function (bytes) {
        return FXBookRequest.deserialize(bytes);
    };
    return FXBookRequest;
}(pb_1.Message));
exports.FXBookRequest = FXBookRequest;
_FXBookRequest_one_of_decls = new WeakMap();
var FXBookResponse = /** @class */ (function (_super) {
    __extends(FXBookResponse, _super);
    function FXBookResponse(data) {
        var _this = _super.call(this) || this;
        _FXBookResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXBookResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(FXBookResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXBookResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXBookResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, FXBookData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXBookResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    FXBookResponse.fromObject = function (data) {
        var message = new FXBookResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = FXBookData.fromObject(data.data);
        }
        return message;
    };
    FXBookResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    FXBookResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    FXBookResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXBookResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = FXBookData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXBookResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXBookResponse.deserializeBinary = function (bytes) {
        return FXBookResponse.deserialize(bytes);
    };
    return FXBookResponse;
}(pb_1.Message));
exports.FXBookResponse = FXBookResponse;
_FXBookResponse_one_of_decls = new WeakMap();
var FXBookData = /** @class */ (function (_super) {
    __extends(FXBookData, _super);
    function FXBookData(data) {
        var _this = _super.call(this) || this;
        _FXBookData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXBookData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("orderNo" in data && data.orderNo != undefined) {
                _this.orderNo = data.orderNo;
            }
            if ("orderStatus" in data && data.orderStatus != undefined) {
                _this.orderStatus = data.orderStatus;
            }
            if ("createTime" in data && data.createTime != undefined) {
                _this.createTime = data.createTime;
            }
        }
        return _this;
    }
    Object.defineProperty(FXBookData.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXBookData.prototype, "orderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXBookData.prototype, "orderStatus", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, FXOrderStatus._UNKNOWN_STATUS);
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXBookData.prototype, "createTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    FXBookData.fromObject = function (data) {
        var message = new FXBookData({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.orderNo != null) {
            message.orderNo = data.orderNo;
        }
        if (data.orderStatus != null) {
            message.orderStatus = data.orderStatus;
        }
        if (data.createTime != null) {
            message.createTime = data.createTime;
        }
        return message;
    };
    FXBookData.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.orderNo != null) {
            data.orderNo = this.orderNo;
        }
        if (this.orderStatus != null) {
            data.orderStatus = this.orderStatus;
        }
        if (this.createTime != null) {
            data.createTime = this.createTime;
        }
        return data;
    };
    FXBookData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.orderNo.length)
            writer.writeString(2, this.orderNo);
        if (this.orderStatus != FXOrderStatus._UNKNOWN_STATUS)
            writer.writeEnum(3, this.orderStatus);
        if (this.createTime.length)
            writer.writeString(4, this.createTime);
        if (!w)
            return writer.getResultBuffer();
    };
    FXBookData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXBookData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.orderNo = reader.readString();
                    break;
                case 3:
                    message.orderStatus = reader.readEnum();
                    break;
                case 4:
                    message.createTime = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXBookData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXBookData.deserializeBinary = function (bytes) {
        return FXBookData.deserialize(bytes);
    };
    return FXBookData;
}(pb_1.Message));
exports.FXBookData = FXBookData;
_FXBookData_one_of_decls = new WeakMap();
var FXEnquiryRequest = /** @class */ (function (_super) {
    __extends(FXEnquiryRequest, _super);
    function FXEnquiryRequest(data) {
        var _this = _super.call(this) || this;
        _FXEnquiryRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXEnquiryRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("orderNo" in data && data.orderNo != undefined) {
                _this.orderNo = data.orderNo;
            }
            if ("quoteId" in data && data.quoteId != undefined) {
                _this.quoteId = data.quoteId;
            }
            if ("requestId" in data && data.requestId != undefined) {
                _this.requestId = data.requestId;
            }
            if ("institutionId" in data && data.institutionId != undefined) {
                _this.institutionId = data.institutionId;
            }
        }
        return _this;
    }
    Object.defineProperty(FXEnquiryRequest.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryRequest.prototype, "orderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryRequest.prototype, "quoteId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryRequest.prototype, "requestId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryRequest.prototype, "institutionId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    FXEnquiryRequest.fromObject = function (data) {
        var message = new FXEnquiryRequest({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.orderNo != null) {
            message.orderNo = data.orderNo;
        }
        if (data.quoteId != null) {
            message.quoteId = data.quoteId;
        }
        if (data.requestId != null) {
            message.requestId = data.requestId;
        }
        if (data.institutionId != null) {
            message.institutionId = data.institutionId;
        }
        return message;
    };
    FXEnquiryRequest.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.orderNo != null) {
            data.orderNo = this.orderNo;
        }
        if (this.quoteId != null) {
            data.quoteId = this.quoteId;
        }
        if (this.requestId != null) {
            data.requestId = this.requestId;
        }
        if (this.institutionId != null) {
            data.institutionId = this.institutionId;
        }
        return data;
    };
    FXEnquiryRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.orderNo.length)
            writer.writeString(2, this.orderNo);
        if (this.quoteId != "0")
            writer.writeInt64String(3, this.quoteId);
        if (this.requestId.length)
            writer.writeString(4, this.requestId);
        if (this.institutionId != "0")
            writer.writeInt64String(5, this.institutionId);
        if (!w)
            return writer.getResultBuffer();
    };
    FXEnquiryRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXEnquiryRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.orderNo = reader.readString();
                    break;
                case 3:
                    message.quoteId = reader.readInt64String();
                    break;
                case 4:
                    message.requestId = reader.readString();
                    break;
                case 5:
                    message.institutionId = reader.readInt64String();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXEnquiryRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXEnquiryRequest.deserializeBinary = function (bytes) {
        return FXEnquiryRequest.deserialize(bytes);
    };
    return FXEnquiryRequest;
}(pb_1.Message));
exports.FXEnquiryRequest = FXEnquiryRequest;
_FXEnquiryRequest_one_of_decls = new WeakMap();
var FXEnquiryResponse = /** @class */ (function (_super) {
    __extends(FXEnquiryResponse, _super);
    function FXEnquiryResponse(data) {
        var _this = _super.call(this) || this;
        _FXEnquiryResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXEnquiryResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(FXEnquiryResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, FXEnquiryData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    FXEnquiryResponse.fromObject = function (data) {
        var message = new FXEnquiryResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = FXEnquiryData.fromObject(data.data);
        }
        return message;
    };
    FXEnquiryResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    FXEnquiryResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    FXEnquiryResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXEnquiryResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = FXEnquiryData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXEnquiryResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXEnquiryResponse.deserializeBinary = function (bytes) {
        return FXEnquiryResponse.deserialize(bytes);
    };
    return FXEnquiryResponse;
}(pb_1.Message));
exports.FXEnquiryResponse = FXEnquiryResponse;
_FXEnquiryResponse_one_of_decls = new WeakMap();
var FXEnquiryData = /** @class */ (function (_super) {
    __extends(FXEnquiryData, _super);
    function FXEnquiryData(data) {
        var _this = _super.call(this) || this;
        _FXEnquiryData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXEnquiryData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("orderNo" in data && data.orderNo != undefined) {
                _this.orderNo = data.orderNo;
            }
            if ("sellCurrency" in data && data.sellCurrency != undefined) {
                _this.sellCurrency = data.sellCurrency;
            }
            if ("buyCurrency" in data && data.buyCurrency != undefined) {
                _this.buyCurrency = data.buyCurrency;
            }
            if ("sellAmount" in data && data.sellAmount != undefined) {
                _this.sellAmount = data.sellAmount;
            }
            if ("buyAmount" in data && data.buyAmount != undefined) {
                _this.buyAmount = data.buyAmount;
            }
            if ("orderStatus" in data && data.orderStatus != undefined) {
                _this.orderStatus = data.orderStatus;
            }
            if ("baseCurrency" in data && data.baseCurrency != undefined) {
                _this.baseCurrency = data.baseCurrency;
            }
            if ("termCurrency" in data && data.termCurrency != undefined) {
                _this.termCurrency = data.termCurrency;
            }
            if ("rate" in data && data.rate != undefined) {
                _this.rate = data.rate;
            }
            if ("createTime" in data && data.createTime != undefined) {
                _this.createTime = data.createTime;
            }
            if ("finishTime" in data && data.finishTime != undefined) {
                _this.finishTime = data.finishTime;
            }
        }
        return _this;
    }
    Object.defineProperty(FXEnquiryData.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "orderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "sellCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "buyCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "sellAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "buyAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "orderStatus", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, FXOrderStatus._UNKNOWN_STATUS);
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "baseCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "termCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 9, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "rate", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 10, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 10, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "createTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 11, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 11, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXEnquiryData.prototype, "finishTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 12, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 12, value);
        },
        enumerable: false,
        configurable: true
    });
    FXEnquiryData.fromObject = function (data) {
        var message = new FXEnquiryData({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.orderNo != null) {
            message.orderNo = data.orderNo;
        }
        if (data.sellCurrency != null) {
            message.sellCurrency = data.sellCurrency;
        }
        if (data.buyCurrency != null) {
            message.buyCurrency = data.buyCurrency;
        }
        if (data.sellAmount != null) {
            message.sellAmount = data.sellAmount;
        }
        if (data.buyAmount != null) {
            message.buyAmount = data.buyAmount;
        }
        if (data.orderStatus != null) {
            message.orderStatus = data.orderStatus;
        }
        if (data.baseCurrency != null) {
            message.baseCurrency = data.baseCurrency;
        }
        if (data.termCurrency != null) {
            message.termCurrency = data.termCurrency;
        }
        if (data.rate != null) {
            message.rate = data.rate;
        }
        if (data.createTime != null) {
            message.createTime = data.createTime;
        }
        if (data.finishTime != null) {
            message.finishTime = data.finishTime;
        }
        return message;
    };
    FXEnquiryData.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.orderNo != null) {
            data.orderNo = this.orderNo;
        }
        if (this.sellCurrency != null) {
            data.sellCurrency = this.sellCurrency;
        }
        if (this.buyCurrency != null) {
            data.buyCurrency = this.buyCurrency;
        }
        if (this.sellAmount != null) {
            data.sellAmount = this.sellAmount;
        }
        if (this.buyAmount != null) {
            data.buyAmount = this.buyAmount;
        }
        if (this.orderStatus != null) {
            data.orderStatus = this.orderStatus;
        }
        if (this.baseCurrency != null) {
            data.baseCurrency = this.baseCurrency;
        }
        if (this.termCurrency != null) {
            data.termCurrency = this.termCurrency;
        }
        if (this.rate != null) {
            data.rate = this.rate;
        }
        if (this.createTime != null) {
            data.createTime = this.createTime;
        }
        if (this.finishTime != null) {
            data.finishTime = this.finishTime;
        }
        return data;
    };
    FXEnquiryData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.orderNo.length)
            writer.writeString(2, this.orderNo);
        if (this.sellCurrency.length)
            writer.writeString(3, this.sellCurrency);
        if (this.buyCurrency.length)
            writer.writeString(4, this.buyCurrency);
        if (this.sellAmount != 0)
            writer.writeInt64(5, this.sellAmount);
        if (this.buyAmount != 0)
            writer.writeInt64(6, this.buyAmount);
        if (this.orderStatus != FXOrderStatus._UNKNOWN_STATUS)
            writer.writeEnum(7, this.orderStatus);
        if (this.baseCurrency.length)
            writer.writeString(8, this.baseCurrency);
        if (this.termCurrency.length)
            writer.writeString(9, this.termCurrency);
        if (this.rate != 0)
            writer.writeInt64(10, this.rate);
        if (this.createTime.length)
            writer.writeString(11, this.createTime);
        if (this.finishTime.length)
            writer.writeString(12, this.finishTime);
        if (!w)
            return writer.getResultBuffer();
    };
    FXEnquiryData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXEnquiryData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.orderNo = reader.readString();
                    break;
                case 3:
                    message.sellCurrency = reader.readString();
                    break;
                case 4:
                    message.buyCurrency = reader.readString();
                    break;
                case 5:
                    message.sellAmount = reader.readInt64();
                    break;
                case 6:
                    message.buyAmount = reader.readInt64();
                    break;
                case 7:
                    message.orderStatus = reader.readEnum();
                    break;
                case 8:
                    message.baseCurrency = reader.readString();
                    break;
                case 9:
                    message.termCurrency = reader.readString();
                    break;
                case 10:
                    message.rate = reader.readInt64();
                    break;
                case 11:
                    message.createTime = reader.readString();
                    break;
                case 12:
                    message.finishTime = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXEnquiryData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXEnquiryData.deserializeBinary = function (bytes) {
        return FXEnquiryData.deserialize(bytes);
    };
    return FXEnquiryData;
}(pb_1.Message));
exports.FXEnquiryData = FXEnquiryData;
_FXEnquiryData_one_of_decls = new WeakMap();
var FXOrderResponse = /** @class */ (function (_super) {
    __extends(FXOrderResponse, _super);
    function FXOrderResponse(data) {
        var _this = _super.call(this) || this;
        _FXOrderResponse_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXOrderResponse_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
        }
        return _this;
    }
    Object.defineProperty(FXOrderResponse.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderResponse.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderResponse.prototype, "data", {
        get: function () {
            return pb_1.Message.getWrapperField(this, FXOrderDetailData, 3);
        },
        set: function (value) {
            pb_1.Message.setWrapperField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderResponse.prototype, "has_data", {
        get: function () {
            return pb_1.Message.getField(this, 3) != null;
        },
        enumerable: false,
        configurable: true
    });
    FXOrderResponse.fromObject = function (data) {
        var message = new FXOrderResponse({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (data.data != null) {
            message.data = FXOrderDetailData.fromObject(data.data);
        }
        return message;
    };
    FXOrderResponse.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    };
    FXOrderResponse.prototype.serialize = function (w) {
        var _this = this;
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.message.length)
            writer.writeString(2, this.message);
        if (this.has_data)
            writer.writeMessage(3, this.data, function () { return _this.data.serialize(writer); });
        if (!w)
            return writer.getResultBuffer();
    };
    FXOrderResponse.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXOrderResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.message = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.data, function () { return message.data = FXOrderDetailData.deserialize(reader); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXOrderResponse.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXOrderResponse.deserializeBinary = function (bytes) {
        return FXOrderResponse.deserialize(bytes);
    };
    return FXOrderResponse;
}(pb_1.Message));
exports.FXOrderResponse = FXOrderResponse;
_FXOrderResponse_one_of_decls = new WeakMap();
var FXOrderDetailData = /** @class */ (function (_super) {
    __extends(FXOrderDetailData, _super);
    function FXOrderDetailData(data) {
        var _this = _super.call(this) || this;
        _FXOrderDetailData_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _FXOrderDetailData_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("accountId" in data && data.accountId != undefined) {
                _this.accountId = data.accountId;
            }
            if ("orderNo" in data && data.orderNo != undefined) {
                _this.orderNo = data.orderNo;
            }
            if ("sellCurrency" in data && data.sellCurrency != undefined) {
                _this.sellCurrency = data.sellCurrency;
            }
            if ("buyCurrency" in data && data.buyCurrency != undefined) {
                _this.buyCurrency = data.buyCurrency;
            }
            if ("sellAmount" in data && data.sellAmount != undefined) {
                _this.sellAmount = data.sellAmount;
            }
            if ("buyAmount" in data && data.buyAmount != undefined) {
                _this.buyAmount = data.buyAmount;
            }
            if ("orderStatus" in data && data.orderStatus != undefined) {
                _this.orderStatus = data.orderStatus;
            }
            if ("baseCurrency" in data && data.baseCurrency != undefined) {
                _this.baseCurrency = data.baseCurrency;
            }
            if ("termCurrency" in data && data.termCurrency != undefined) {
                _this.termCurrency = data.termCurrency;
            }
            if ("rate" in data && data.rate != undefined) {
                _this.rate = data.rate;
            }
            if ("createTime" in data && data.createTime != undefined) {
                _this.createTime = data.createTime;
            }
            if ("finishTime" in data && data.finishTime != undefined) {
                _this.finishTime = data.finishTime;
            }
        }
        return _this;
    }
    Object.defineProperty(FXOrderDetailData.prototype, "accountId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "orderNo", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "sellCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "buyCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "sellAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "buyAmount", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 6, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 6, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "orderStatus", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 7, FXOrderStatus._UNKNOWN_STATUS);
        },
        set: function (value) {
            pb_1.Message.setField(this, 7, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "baseCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 8, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 8, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "termCurrency", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 9, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 9, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "rate", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 10, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 10, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "createTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 11, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 11, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FXOrderDetailData.prototype, "finishTime", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 12, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 12, value);
        },
        enumerable: false,
        configurable: true
    });
    FXOrderDetailData.fromObject = function (data) {
        var message = new FXOrderDetailData({});
        if (data.accountId != null) {
            message.accountId = data.accountId;
        }
        if (data.orderNo != null) {
            message.orderNo = data.orderNo;
        }
        if (data.sellCurrency != null) {
            message.sellCurrency = data.sellCurrency;
        }
        if (data.buyCurrency != null) {
            message.buyCurrency = data.buyCurrency;
        }
        if (data.sellAmount != null) {
            message.sellAmount = data.sellAmount;
        }
        if (data.buyAmount != null) {
            message.buyAmount = data.buyAmount;
        }
        if (data.orderStatus != null) {
            message.orderStatus = data.orderStatus;
        }
        if (data.baseCurrency != null) {
            message.baseCurrency = data.baseCurrency;
        }
        if (data.termCurrency != null) {
            message.termCurrency = data.termCurrency;
        }
        if (data.rate != null) {
            message.rate = data.rate;
        }
        if (data.createTime != null) {
            message.createTime = data.createTime;
        }
        if (data.finishTime != null) {
            message.finishTime = data.finishTime;
        }
        return message;
    };
    FXOrderDetailData.prototype.toObject = function () {
        var data = {};
        if (this.accountId != null) {
            data.accountId = this.accountId;
        }
        if (this.orderNo != null) {
            data.orderNo = this.orderNo;
        }
        if (this.sellCurrency != null) {
            data.sellCurrency = this.sellCurrency;
        }
        if (this.buyCurrency != null) {
            data.buyCurrency = this.buyCurrency;
        }
        if (this.sellAmount != null) {
            data.sellAmount = this.sellAmount;
        }
        if (this.buyAmount != null) {
            data.buyAmount = this.buyAmount;
        }
        if (this.orderStatus != null) {
            data.orderStatus = this.orderStatus;
        }
        if (this.baseCurrency != null) {
            data.baseCurrency = this.baseCurrency;
        }
        if (this.termCurrency != null) {
            data.termCurrency = this.termCurrency;
        }
        if (this.rate != null) {
            data.rate = this.rate;
        }
        if (this.createTime != null) {
            data.createTime = this.createTime;
        }
        if (this.finishTime != null) {
            data.finishTime = this.finishTime;
        }
        return data;
    };
    FXOrderDetailData.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.accountId != "0")
            writer.writeInt64String(1, this.accountId);
        if (this.orderNo.length)
            writer.writeString(2, this.orderNo);
        if (this.sellCurrency.length)
            writer.writeString(3, this.sellCurrency);
        if (this.buyCurrency.length)
            writer.writeString(4, this.buyCurrency);
        if (this.sellAmount != 0)
            writer.writeInt64(5, this.sellAmount);
        if (this.buyAmount != 0)
            writer.writeInt64(6, this.buyAmount);
        if (this.orderStatus != FXOrderStatus._UNKNOWN_STATUS)
            writer.writeEnum(7, this.orderStatus);
        if (this.baseCurrency.length)
            writer.writeString(8, this.baseCurrency);
        if (this.termCurrency.length)
            writer.writeString(9, this.termCurrency);
        if (this.rate != 0)
            writer.writeInt64(10, this.rate);
        if (this.createTime.length)
            writer.writeString(11, this.createTime);
        if (this.finishTime.length)
            writer.writeString(12, this.finishTime);
        if (!w)
            return writer.getResultBuffer();
    };
    FXOrderDetailData.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FXOrderDetailData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.accountId = reader.readInt64String();
                    break;
                case 2:
                    message.orderNo = reader.readString();
                    break;
                case 3:
                    message.sellCurrency = reader.readString();
                    break;
                case 4:
                    message.buyCurrency = reader.readString();
                    break;
                case 5:
                    message.sellAmount = reader.readInt64();
                    break;
                case 6:
                    message.buyAmount = reader.readInt64();
                    break;
                case 7:
                    message.orderStatus = reader.readEnum();
                    break;
                case 8:
                    message.baseCurrency = reader.readString();
                    break;
                case 9:
                    message.termCurrency = reader.readString();
                    break;
                case 10:
                    message.rate = reader.readInt64();
                    break;
                case 11:
                    message.createTime = reader.readString();
                    break;
                case 12:
                    message.finishTime = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    FXOrderDetailData.prototype.serializeBinary = function () {
        return this.serialize();
    };
    FXOrderDetailData.deserializeBinary = function (bytes) {
        return FXOrderDetailData.deserialize(bytes);
    };
    return FXOrderDetailData;
}(pb_1.Message));
exports.FXOrderDetailData = FXOrderDetailData;
_FXOrderDetailData_one_of_decls = new WeakMap();
var CallbackRequest = /** @class */ (function (_super) {
    __extends(CallbackRequest, _super);
    function CallbackRequest(data) {
        var _this = _super.call(this) || this;
        _CallbackRequest_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _CallbackRequest_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("businessType" in data && data.businessType != undefined) {
                _this.businessType = data.businessType;
            }
            if ("data" in data && data.data != undefined) {
                _this.data = data.data;
            }
            if ("clientKeyId" in data && data.clientKeyId != undefined) {
                _this.clientKeyId = data.clientKeyId;
            }
            if ("rdKeyId" in data && data.rdKeyId != undefined) {
                _this.rdKeyId = data.rdKeyId;
            }
        }
        return _this;
    }
    Object.defineProperty(CallbackRequest.prototype, "businessType", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, PaymentBusinessType.PAYMENT_BUSINESS_TYPE_UNKNOWN);
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CallbackRequest.prototype, "data", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CallbackRequest.prototype, "clientKeyId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CallbackRequest.prototype, "rdKeyId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    CallbackRequest.fromObject = function (data) {
        var message = new CallbackRequest({});
        if (data.businessType != null) {
            message.businessType = data.businessType;
        }
        if (data.data != null) {
            message.data = data.data;
        }
        if (data.clientKeyId != null) {
            message.clientKeyId = data.clientKeyId;
        }
        if (data.rdKeyId != null) {
            message.rdKeyId = data.rdKeyId;
        }
        return message;
    };
    CallbackRequest.prototype.toObject = function () {
        var data = {};
        if (this.businessType != null) {
            data.businessType = this.businessType;
        }
        if (this.data != null) {
            data.data = this.data;
        }
        if (this.clientKeyId != null) {
            data.clientKeyId = this.clientKeyId;
        }
        if (this.rdKeyId != null) {
            data.rdKeyId = this.rdKeyId;
        }
        return data;
    };
    CallbackRequest.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.businessType != PaymentBusinessType.PAYMENT_BUSINESS_TYPE_UNKNOWN)
            writer.writeEnum(2, this.businessType);
        if (this.data.length)
            writer.writeBytes(3, this.data);
        if (this.clientKeyId.length)
            writer.writeString(4, this.clientKeyId);
        if (this.rdKeyId.length)
            writer.writeString(5, this.rdKeyId);
        if (!w)
            return writer.getResultBuffer();
    };
    CallbackRequest.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CallbackRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.businessType = reader.readEnum();
                    break;
                case 3:
                    message.data = reader.readBytes();
                    break;
                case 4:
                    message.clientKeyId = reader.readString();
                    break;
                case 5:
                    message.rdKeyId = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    CallbackRequest.prototype.serializeBinary = function () {
        return this.serialize();
    };
    CallbackRequest.deserializeBinary = function (bytes) {
        return CallbackRequest.deserialize(bytes);
    };
    return CallbackRequest;
}(pb_1.Message));
exports.CallbackRequest = CallbackRequest;
_CallbackRequest_one_of_decls = new WeakMap();
var ApiReq = /** @class */ (function (_super) {
    __extends(ApiReq, _super);
    function ApiReq(data) {
        var _this = _super.call(this) || this;
        _ApiReq_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _ApiReq_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("reqId" in data && data.reqId != undefined) {
                _this.reqId = data.reqId;
            }
            if ("timestamp" in data && data.timestamp != undefined) {
                _this.timestamp = data.timestamp;
            }
            if ("content" in data && data.content != undefined) {
                _this.content = data.content;
            }
            if ("clientKeyId" in data && data.clientKeyId != undefined) {
                _this.clientKeyId = data.clientKeyId;
            }
            if ("rdKeyId" in data && data.rdKeyId != undefined) {
                _this.rdKeyId = data.rdKeyId;
            }
        }
        return _this;
    }
    Object.defineProperty(ApiReq.prototype, "reqId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiReq.prototype, "timestamp", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "0");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiReq.prototype, "content", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiReq.prototype, "clientKeyId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 4, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiReq.prototype, "rdKeyId", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 5, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 5, value);
        },
        enumerable: false,
        configurable: true
    });
    ApiReq.fromObject = function (data) {
        var message = new ApiReq({});
        if (data.reqId != null) {
            message.reqId = data.reqId;
        }
        if (data.timestamp != null) {
            message.timestamp = data.timestamp;
        }
        if (data.content != null) {
            message.content = data.content;
        }
        if (data.clientKeyId != null) {
            message.clientKeyId = data.clientKeyId;
        }
        if (data.rdKeyId != null) {
            message.rdKeyId = data.rdKeyId;
        }
        return message;
    };
    ApiReq.prototype.toObject = function () {
        var data = {};
        if (this.reqId != null) {
            data.reqId = this.reqId;
        }
        if (this.timestamp != null) {
            data.timestamp = this.timestamp;
        }
        if (this.content != null) {
            data.content = this.content;
        }
        if (this.clientKeyId != null) {
            data.clientKeyId = this.clientKeyId;
        }
        if (this.rdKeyId != null) {
            data.rdKeyId = this.rdKeyId;
        }
        return data;
    };
    ApiReq.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.reqId.length)
            writer.writeString(1, this.reqId);
        if (this.timestamp != "0")
            writer.writeInt64String(2, this.timestamp);
        if (this.content.length)
            writer.writeBytes(3, this.content);
        if (this.clientKeyId.length)
            writer.writeString(4, this.clientKeyId);
        if (this.rdKeyId.length)
            writer.writeString(5, this.rdKeyId);
        if (!w)
            return writer.getResultBuffer();
    };
    ApiReq.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ApiReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.reqId = reader.readString();
                    break;
                case 2:
                    message.timestamp = reader.readInt64String();
                    break;
                case 3:
                    message.content = reader.readBytes();
                    break;
                case 4:
                    message.clientKeyId = reader.readString();
                    break;
                case 5:
                    message.rdKeyId = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    ApiReq.prototype.serializeBinary = function () {
        return this.serialize();
    };
    ApiReq.deserializeBinary = function (bytes) {
        return ApiReq.deserialize(bytes);
    };
    return ApiReq;
}(pb_1.Message));
exports.ApiReq = ApiReq;
_ApiReq_one_of_decls = new WeakMap();
var ApiResp = /** @class */ (function (_super) {
    __extends(ApiResp, _super);
    function ApiResp(data) {
        var _this = _super.call(this) || this;
        _ApiResp_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _ApiResp_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("reason" in data && data.reason != undefined) {
                _this.reason = data.reason;
            }
            if ("body" in data && data.body != undefined) {
                _this.body = data.body;
            }
        }
        return _this;
    }
    Object.defineProperty(ApiResp.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiResp.prototype, "reason", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApiResp.prototype, "body", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, new Uint8Array(0));
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    ApiResp.fromObject = function (data) {
        var message = new ApiResp({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.body != null) {
            message.body = data.body;
        }
        return message;
    };
    ApiResp.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.body != null) {
            data.body = this.body;
        }
        return data;
    };
    ApiResp.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.reason.length)
            writer.writeString(2, this.reason);
        if (this.body.length)
            writer.writeBytes(3, this.body);
        if (!w)
            return writer.getResultBuffer();
    };
    ApiResp.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ApiResp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.reason = reader.readString();
                    break;
                case 3:
                    message.body = reader.readBytes();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    ApiResp.prototype.serializeBinary = function () {
        return this.serialize();
    };
    ApiResp.deserializeBinary = function (bytes) {
        return ApiResp.deserialize(bytes);
    };
    return ApiResp;
}(pb_1.Message));
exports.ApiResp = ApiResp;
_ApiResp_one_of_decls = new WeakMap();
var Reason = /** @class */ (function (_super) {
    __extends(Reason, _super);
    function Reason(data) {
        var _this = _super.call(this) || this;
        _Reason_one_of_decls.set(_this, []);
        pb_1.Message.initialize(_this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(_this, _Reason_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                _this.code = data.code;
            }
            if ("reason" in data && data.reason != undefined) {
                _this.reason = data.reason;
            }
            if ("message" in data && data.message != undefined) {
                _this.message = data.message;
            }
            if ("metadata" in data && data.metadata != undefined) {
                _this.metadata = data.metadata;
            }
        }
        if (!_this.metadata)
            _this.metadata = new Map();
        return _this;
    }
    Object.defineProperty(Reason.prototype, "code", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 1, 0);
        },
        set: function (value) {
            pb_1.Message.setField(this, 1, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reason.prototype, "reason", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 2, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 2, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reason.prototype, "message", {
        get: function () {
            return pb_1.Message.getFieldWithDefault(this, 3, "");
        },
        set: function (value) {
            pb_1.Message.setField(this, 3, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reason.prototype, "metadata", {
        get: function () {
            return pb_1.Message.getField(this, 4);
        },
        set: function (value) {
            pb_1.Message.setField(this, 4, value);
        },
        enumerable: false,
        configurable: true
    });
    Reason.fromObject = function (data) {
        var message = new Reason({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.message != null) {
            message.message = data.message;
        }
        if (typeof data.metadata == "object") {
            message.metadata = new Map(Object.entries(data.metadata));
        }
        return message;
    };
    Reason.prototype.toObject = function () {
        var data = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.message != null) {
            data.message = this.message;
        }
        if (this.metadata != null) {
            data.metadata = (Object.fromEntries)(this.metadata);
        }
        return data;
    };
    Reason.prototype.serialize = function (w) {
        var writer = w || new pb_1.BinaryWriter();
        if (this.code != 0)
            writer.writeInt32(1, this.code);
        if (this.reason.length)
            writer.writeString(2, this.reason);
        if (this.message.length)
            writer.writeString(3, this.message);
        var _loop_1 = function (key, value) {
            writer.writeMessage(4, this_1.metadata, function () {
                writer.writeString(1, key);
                writer.writeString(2, value);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            _loop_1(key, value);
        }
        if (!w)
            return writer.getResultBuffer();
    };
    Reason.deserialize = function (bytes) {
        var reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Reason();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readInt32();
                    break;
                case 2:
                    message.reason = reader.readString();
                    break;
                case 3:
                    message.message = reader.readString();
                    break;
                case 4:
                    reader.readMessage(message, function () { return pb_1.Map.deserializeBinary(message.metadata, reader, reader.readString, reader.readString); });
                    break;
                default: reader.skipField();
            }
        }
        return message;
    };
    Reason.prototype.serializeBinary = function () {
        return this.serialize();
    };
    Reason.deserializeBinary = function (bytes) {
        return Reason.deserialize(bytes);
    };
    return Reason;
}(pb_1.Message));
exports.Reason = Reason;
_Reason_one_of_decls = new WeakMap();
