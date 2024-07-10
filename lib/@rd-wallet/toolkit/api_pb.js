// source: api.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.toolkit.api.v1.ApiReq', null, global);
goog.exportSymbol('proto.toolkit.api.v1.ApiResp', null, global);
goog.exportSymbol('proto.toolkit.api.v1.CallbackRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.ChatsReceivingParty', null, global);
goog.exportSymbol('proto.toolkit.api.v1.DownloadBillData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.DownloadBillRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.DownloadBillResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.BookData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.BookRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.BookResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.Direction', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.EnquiryData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.EnquiryRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.EnquiryResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.OrderDetailData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.OrderResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.OrderStatus', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.QuoteBulkData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.QuoteBulkRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.QuoteBulkResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.QuoteData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.QuoteRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.QuoteResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FX.RateData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.FpsReceivingParty', null, global);
goog.exportSymbol('proto.toolkit.api.v1.McpPayerAddress', null, global);
goog.exportSymbol('proto.toolkit.api.v1.MttPayerAddress', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenAccountQueryData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenAccountQueryRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenAccountQueryResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenBalanceData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenBalanceRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenBalanceResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenChatsRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenFpsRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenFpsRequest.FpsTxnCcy', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenFundInRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenOrderDetailRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenOrderDetailResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenOrderStatus', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenPaymentErrorCode', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenPayoutResultRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenRdtRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenRefundDetail', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenRefundRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenSubAccountData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OpenTtRequest', null, global);
goog.exportSymbol('proto.toolkit.api.v1.OrderDetailData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.PaymentBusinessType', null, global);
goog.exportSymbol('proto.toolkit.api.v1.QueryLimitData', null, global);
goog.exportSymbol('proto.toolkit.api.v1.QueryLimitParam', null, global);
goog.exportSymbol('proto.toolkit.api.v1.QueryLimitResponse', null, global);
goog.exportSymbol('proto.toolkit.api.v1.RdtReceivingParty', null, global);
goog.exportSymbol('proto.toolkit.api.v1.Reason', null, global);
goog.exportSymbol('proto.toolkit.api.v1.TtReceivingParty', null, global);
goog.exportSymbol('proto.toolkit.api.v1.TxnProxyType', null, global);
goog.exportSymbol('proto.toolkit.api.v1.TxnPurpose', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenRdtRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenRdtRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenRdtRequest.displayName = 'proto.toolkit.api.v1.OpenRdtRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenFpsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenFpsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenFpsRequest.displayName = 'proto.toolkit.api.v1.OpenFpsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenTtRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenTtRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenTtRequest.displayName = 'proto.toolkit.api.v1.OpenTtRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenChatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenChatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenChatsRequest.displayName = 'proto.toolkit.api.v1.OpenChatsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.McpPayerAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.McpPayerAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.McpPayerAddress.displayName = 'proto.toolkit.api.v1.McpPayerAddress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.MttPayerAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.MttPayerAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.MttPayerAddress.displayName = 'proto.toolkit.api.v1.MttPayerAddress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FpsReceivingParty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FpsReceivingParty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FpsReceivingParty.displayName = 'proto.toolkit.api.v1.FpsReceivingParty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenBalanceRequest.displayName = 'proto.toolkit.api.v1.OpenBalanceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenOrderDetailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenOrderDetailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenOrderDetailRequest.displayName = 'proto.toolkit.api.v1.OpenOrderDetailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenBalanceResponse.displayName = 'proto.toolkit.api.v1.OpenBalanceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenOrderDetailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenOrderDetailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenOrderDetailResponse.displayName = 'proto.toolkit.api.v1.OpenOrderDetailResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenPayoutResultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenPayoutResultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenPayoutResultRequest.displayName = 'proto.toolkit.api.v1.OpenPayoutResultRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OrderDetailData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OrderDetailData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OrderDetailData.displayName = 'proto.toolkit.api.v1.OrderDetailData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenBalanceData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.toolkit.api.v1.OpenBalanceData.repeatedFields_, null);
};
goog.inherits(proto.toolkit.api.v1.OpenBalanceData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenBalanceData.displayName = 'proto.toolkit.api.v1.OpenBalanceData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenSubAccountData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenSubAccountData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenSubAccountData.displayName = 'proto.toolkit.api.v1.OpenSubAccountData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenFundInRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenFundInRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenFundInRequest.displayName = 'proto.toolkit.api.v1.OpenFundInRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenRefundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenRefundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenRefundRequest.displayName = 'proto.toolkit.api.v1.OpenRefundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenRefundDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenRefundDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenRefundDetail.displayName = 'proto.toolkit.api.v1.OpenRefundDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.RdtReceivingParty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.RdtReceivingParty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.RdtReceivingParty.displayName = 'proto.toolkit.api.v1.RdtReceivingParty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.TtReceivingParty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.TtReceivingParty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.TtReceivingParty.displayName = 'proto.toolkit.api.v1.TtReceivingParty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.ChatsReceivingParty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.ChatsReceivingParty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.ChatsReceivingParty.displayName = 'proto.toolkit.api.v1.ChatsReceivingParty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.QueryLimitParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.QueryLimitParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.QueryLimitParam.displayName = 'proto.toolkit.api.v1.QueryLimitParam';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.QueryLimitResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.QueryLimitResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.QueryLimitResponse.displayName = 'proto.toolkit.api.v1.QueryLimitResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.QueryLimitData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.QueryLimitData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.QueryLimitData.displayName = 'proto.toolkit.api.v1.QueryLimitData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenAccountQueryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenAccountQueryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenAccountQueryRequest.displayName = 'proto.toolkit.api.v1.OpenAccountQueryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenAccountQueryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenAccountQueryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenAccountQueryResponse.displayName = 'proto.toolkit.api.v1.OpenAccountQueryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.OpenAccountQueryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.OpenAccountQueryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.OpenAccountQueryData.displayName = 'proto.toolkit.api.v1.OpenAccountQueryData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.DownloadBillData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.DownloadBillData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.DownloadBillData.displayName = 'proto.toolkit.api.v1.DownloadBillData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.DownloadBillRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.DownloadBillRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.DownloadBillRequest.displayName = 'proto.toolkit.api.v1.DownloadBillRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.DownloadBillResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.DownloadBillResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.DownloadBillResponse.displayName = 'proto.toolkit.api.v1.DownloadBillResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.displayName = 'proto.toolkit.api.v1.FX';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.QuoteBulkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.QuoteBulkRequest.displayName = 'proto.toolkit.api.v1.FX.QuoteBulkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.QuoteBulkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.QuoteBulkResponse.displayName = 'proto.toolkit.api.v1.FX.QuoteBulkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.QuoteBulkData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.toolkit.api.v1.FX.QuoteBulkData.repeatedFields_, null);
};
goog.inherits(proto.toolkit.api.v1.FX.QuoteBulkData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.QuoteBulkData.displayName = 'proto.toolkit.api.v1.FX.QuoteBulkData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.RateData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.RateData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.RateData.displayName = 'proto.toolkit.api.v1.FX.RateData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.QuoteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.QuoteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.QuoteRequest.displayName = 'proto.toolkit.api.v1.FX.QuoteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.QuoteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.QuoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.QuoteResponse.displayName = 'proto.toolkit.api.v1.FX.QuoteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.QuoteData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.QuoteData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.QuoteData.displayName = 'proto.toolkit.api.v1.FX.QuoteData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.BookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.BookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.BookRequest.displayName = 'proto.toolkit.api.v1.FX.BookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.BookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.BookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.BookResponse.displayName = 'proto.toolkit.api.v1.FX.BookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.BookData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.BookData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.BookData.displayName = 'proto.toolkit.api.v1.FX.BookData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.EnquiryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.EnquiryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.EnquiryRequest.displayName = 'proto.toolkit.api.v1.FX.EnquiryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.EnquiryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.EnquiryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.EnquiryResponse.displayName = 'proto.toolkit.api.v1.FX.EnquiryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.EnquiryData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.EnquiryData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.EnquiryData.displayName = 'proto.toolkit.api.v1.FX.EnquiryData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.OrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.OrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.OrderResponse.displayName = 'proto.toolkit.api.v1.FX.OrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.FX.OrderDetailData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.FX.OrderDetailData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.FX.OrderDetailData.displayName = 'proto.toolkit.api.v1.FX.OrderDetailData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.CallbackRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.CallbackRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.CallbackRequest.displayName = 'proto.toolkit.api.v1.CallbackRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.ApiReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.ApiReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.ApiReq.displayName = 'proto.toolkit.api.v1.ApiReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.ApiResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.ApiResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.ApiResp.displayName = 'proto.toolkit.api.v1.ApiResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.toolkit.api.v1.Reason = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.toolkit.api.v1.Reason, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.toolkit.api.v1.Reason.displayName = 'proto.toolkit.api.v1.Reason';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenRdtRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenRdtRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenRdtRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    messagetopayee: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    requestid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    outorderno: jspb.Message.getFieldWithDefault(msg, 8, ""),
    receivingparty: (f = msg.getReceivingparty()) && proto.toolkit.api.v1.RdtReceivingParty.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenRdtRequest}
 */
proto.toolkit.api.v1.OpenRdtRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenRdtRequest;
  return proto.toolkit.api.v1.OpenRdtRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenRdtRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenRdtRequest}
 */
proto.toolkit.api.v1.OpenRdtRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetopayee(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutorderno(value);
      break;
    case 9:
      var value = new proto.toolkit.api.v1.RdtReceivingParty;
      reader.readMessage(value,proto.toolkit.api.v1.RdtReceivingParty.deserializeBinaryFromReader);
      msg.setReceivingparty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenRdtRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenRdtRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenRdtRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMessagetopayee();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      7,
      f
    );
  }
  f = message.getOutorderno();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getReceivingparty();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.toolkit.api.v1.RdtReceivingParty.serializeBinaryToWriter
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRdtRequest} returns this
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenRdtRequest} returns this
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string messageToPayee = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.getMessagetopayee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRdtRequest} returns this
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.setMessagetopayee = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 accountId = 4;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRdtRequest} returns this
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional string requestId = 6;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRdtRequest} returns this
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 institutionId = 7;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRdtRequest} returns this
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional string outOrderNo = 8;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.getOutorderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRdtRequest} returns this
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.setOutorderno = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional RdtReceivingParty receivingParty = 9;
 * @return {?proto.toolkit.api.v1.RdtReceivingParty}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.getReceivingparty = function() {
  return /** @type{?proto.toolkit.api.v1.RdtReceivingParty} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.RdtReceivingParty, 9));
};


/**
 * @param {?proto.toolkit.api.v1.RdtReceivingParty|undefined} value
 * @return {!proto.toolkit.api.v1.OpenRdtRequest} returns this
*/
proto.toolkit.api.v1.OpenRdtRequest.prototype.setReceivingparty = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenRdtRequest} returns this
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.clearReceivingparty = function() {
  return this.setReceivingparty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenRdtRequest.prototype.hasReceivingparty = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenFpsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenFpsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenFpsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    accountid: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    messagetopayee: jspb.Message.getFieldWithDefault(msg, 4, ""),
    receivingparty: (f = msg.getReceivingparty()) && proto.toolkit.api.v1.FpsReceivingParty.toObject(includeInstance, f),
    requestid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    outorderno: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenFpsRequest}
 */
proto.toolkit.api.v1.OpenFpsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenFpsRequest;
  return proto.toolkit.api.v1.OpenFpsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenFpsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenFpsRequest}
 */
proto.toolkit.api.v1.OpenFpsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.toolkit.api.v1.OpenFpsRequest.FpsTxnCcy} */ (reader.readEnum());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetopayee(value);
      break;
    case 5:
      var value = new proto.toolkit.api.v1.FpsReceivingParty;
      reader.readMessage(value,proto.toolkit.api.v1.FpsReceivingParty.deserializeBinaryFromReader);
      msg.setReceivingparty(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutorderno(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenFpsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenFpsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenFpsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
  f = message.getMessagetopayee();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReceivingparty();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.toolkit.api.v1.FpsReceivingParty.serializeBinaryToWriter
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      7,
      f
    );
  }
  f = message.getOutorderno();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.toolkit.api.v1.OpenFpsRequest.FpsTxnCcy = {
  _UNKNOWN_FTC: 0,
  HKD: 1,
  CNY: 2
};

/**
 * optional FpsTxnCcy currency = 1;
 * @return {!proto.toolkit.api.v1.OpenFpsRequest.FpsTxnCcy}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.getCurrency = function() {
  return /** @type {!proto.toolkit.api.v1.OpenFpsRequest.FpsTxnCcy} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.toolkit.api.v1.OpenFpsRequest.FpsTxnCcy} value
 * @return {!proto.toolkit.api.v1.OpenFpsRequest} returns this
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenFpsRequest} returns this
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 accountId = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFpsRequest} returns this
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional string messageToPayee = 4;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.getMessagetopayee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFpsRequest} returns this
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.setMessagetopayee = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional FpsReceivingParty receivingParty = 5;
 * @return {?proto.toolkit.api.v1.FpsReceivingParty}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.getReceivingparty = function() {
  return /** @type{?proto.toolkit.api.v1.FpsReceivingParty} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.FpsReceivingParty, 5));
};


/**
 * @param {?proto.toolkit.api.v1.FpsReceivingParty|undefined} value
 * @return {!proto.toolkit.api.v1.OpenFpsRequest} returns this
*/
proto.toolkit.api.v1.OpenFpsRequest.prototype.setReceivingparty = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenFpsRequest} returns this
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.clearReceivingparty = function() {
  return this.setReceivingparty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.hasReceivingparty = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string requestId = 6;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFpsRequest} returns this
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 institutionId = 7;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFpsRequest} returns this
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional string outOrderNo = 8;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.getOutorderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFpsRequest} returns this
 */
proto.toolkit.api.v1.OpenFpsRequest.prototype.setOutorderno = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenTtRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenTtRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenTtRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    messagetopayee: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    receivingparty: (f = msg.getReceivingparty()) && proto.toolkit.api.v1.TtReceivingParty.toObject(includeInstance, f),
    purpose: jspb.Message.getFieldWithDefault(msg, 6, 0),
    requestid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 8, "0"),
    outorderno: jspb.Message.getFieldWithDefault(msg, 9, ""),
    payeraddress: (f = msg.getPayeraddress()) && proto.toolkit.api.v1.MttPayerAddress.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenTtRequest}
 */
proto.toolkit.api.v1.OpenTtRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenTtRequest;
  return proto.toolkit.api.v1.OpenTtRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenTtRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenTtRequest}
 */
proto.toolkit.api.v1.OpenTtRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetopayee(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 5:
      var value = new proto.toolkit.api.v1.TtReceivingParty;
      reader.readMessage(value,proto.toolkit.api.v1.TtReceivingParty.deserializeBinaryFromReader);
      msg.setReceivingparty(value);
      break;
    case 6:
      var value = /** @type {!proto.toolkit.api.v1.TxnPurpose} */ (reader.readEnum());
      msg.setPurpose(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutorderno(value);
      break;
    case 10:
      var value = new proto.toolkit.api.v1.MttPayerAddress;
      reader.readMessage(value,proto.toolkit.api.v1.MttPayerAddress.deserializeBinaryFromReader);
      msg.setPayeraddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenTtRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenTtRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenTtRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMessagetopayee();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
      f
    );
  }
  f = message.getReceivingparty();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.toolkit.api.v1.TtReceivingParty.serializeBinaryToWriter
    );
  }
  f = message.getPurpose();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      8,
      f
    );
  }
  f = message.getOutorderno();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPayeraddress();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.toolkit.api.v1.MttPayerAddress.serializeBinaryToWriter
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string messageToPayee = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getMessagetopayee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.setMessagetopayee = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 accountId = 4;
 * @return {string}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional TtReceivingParty receivingParty = 5;
 * @return {?proto.toolkit.api.v1.TtReceivingParty}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getReceivingparty = function() {
  return /** @type{?proto.toolkit.api.v1.TtReceivingParty} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.TtReceivingParty, 5));
};


/**
 * @param {?proto.toolkit.api.v1.TtReceivingParty|undefined} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
*/
proto.toolkit.api.v1.OpenTtRequest.prototype.setReceivingparty = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.clearReceivingparty = function() {
  return this.setReceivingparty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.hasReceivingparty = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TxnPurpose purpose = 6;
 * @return {!proto.toolkit.api.v1.TxnPurpose}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getPurpose = function() {
  return /** @type {!proto.toolkit.api.v1.TxnPurpose} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.toolkit.api.v1.TxnPurpose} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.setPurpose = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string requestId = 7;
 * @return {string}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 institutionId = 8;
 * @return {string}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 8, value);
};


/**
 * optional string outOrderNo = 9;
 * @return {string}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getOutorderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.setOutorderno = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional MttPayerAddress payerAddress = 10;
 * @return {?proto.toolkit.api.v1.MttPayerAddress}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.getPayeraddress = function() {
  return /** @type{?proto.toolkit.api.v1.MttPayerAddress} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.MttPayerAddress, 10));
};


/**
 * @param {?proto.toolkit.api.v1.MttPayerAddress|undefined} value
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
*/
proto.toolkit.api.v1.OpenTtRequest.prototype.setPayeraddress = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenTtRequest} returns this
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.clearPayeraddress = function() {
  return this.setPayeraddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenTtRequest.prototype.hasPayeraddress = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenChatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenChatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenChatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    messagetopayee: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    receivingparty: (f = msg.getReceivingparty()) && proto.toolkit.api.v1.ChatsReceivingParty.toObject(includeInstance, f),
    requestid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 7, "0"),
    outorderno: jspb.Message.getFieldWithDefault(msg, 8, ""),
    purpose: jspb.Message.getFieldWithDefault(msg, 9, 0),
    payeraddress: (f = msg.getPayeraddress()) && proto.toolkit.api.v1.McpPayerAddress.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenChatsRequest}
 */
proto.toolkit.api.v1.OpenChatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenChatsRequest;
  return proto.toolkit.api.v1.OpenChatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenChatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenChatsRequest}
 */
proto.toolkit.api.v1.OpenChatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetopayee(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAccountid(value);
      break;
    case 5:
      var value = new proto.toolkit.api.v1.ChatsReceivingParty;
      reader.readMessage(value,proto.toolkit.api.v1.ChatsReceivingParty.deserializeBinaryFromReader);
      msg.setReceivingparty(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutorderno(value);
      break;
    case 9:
      var value = /** @type {!proto.toolkit.api.v1.TxnPurpose} */ (reader.readEnum());
      msg.setPurpose(value);
      break;
    case 10:
      var value = new proto.toolkit.api.v1.McpPayerAddress;
      reader.readMessage(value,proto.toolkit.api.v1.McpPayerAddress.deserializeBinaryFromReader);
      msg.setPayeraddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenChatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenChatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenChatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMessagetopayee();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccountid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReceivingparty();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.toolkit.api.v1.ChatsReceivingParty.serializeBinaryToWriter
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      7,
      f
    );
  }
  f = message.getOutorderno();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPurpose();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getPayeraddress();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.toolkit.api.v1.McpPayerAddress.serializeBinaryToWriter
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string messageToPayee = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getMessagetopayee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.setMessagetopayee = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 accountId = 4;
 * @return {number}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getAccountid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional ChatsReceivingParty receivingParty = 5;
 * @return {?proto.toolkit.api.v1.ChatsReceivingParty}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getReceivingparty = function() {
  return /** @type{?proto.toolkit.api.v1.ChatsReceivingParty} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.ChatsReceivingParty, 5));
};


/**
 * @param {?proto.toolkit.api.v1.ChatsReceivingParty|undefined} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
*/
proto.toolkit.api.v1.OpenChatsRequest.prototype.setReceivingparty = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.clearReceivingparty = function() {
  return this.setReceivingparty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.hasReceivingparty = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string requestId = 6;
 * @return {string}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 institutionId = 7;
 * @return {string}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};


/**
 * optional string outOrderNo = 8;
 * @return {string}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getOutorderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.setOutorderno = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional TxnPurpose purpose = 9;
 * @return {!proto.toolkit.api.v1.TxnPurpose}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getPurpose = function() {
  return /** @type {!proto.toolkit.api.v1.TxnPurpose} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.toolkit.api.v1.TxnPurpose} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.setPurpose = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional McpPayerAddress payerAddress = 10;
 * @return {?proto.toolkit.api.v1.McpPayerAddress}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.getPayeraddress = function() {
  return /** @type{?proto.toolkit.api.v1.McpPayerAddress} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.McpPayerAddress, 10));
};


/**
 * @param {?proto.toolkit.api.v1.McpPayerAddress|undefined} value
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
*/
proto.toolkit.api.v1.OpenChatsRequest.prototype.setPayeraddress = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenChatsRequest} returns this
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.clearPayeraddress = function() {
  return this.setPayeraddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenChatsRequest.prototype.hasPayeraddress = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.McpPayerAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.McpPayerAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.McpPayerAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.McpPayerAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    countryregion: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.McpPayerAddress}
 */
proto.toolkit.api.v1.McpPayerAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.McpPayerAddress;
  return proto.toolkit.api.v1.McpPayerAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.McpPayerAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.McpPayerAddress}
 */
proto.toolkit.api.v1.McpPayerAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryregion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.McpPayerAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.McpPayerAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.McpPayerAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.McpPayerAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountryregion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.toolkit.api.v1.McpPayerAddress.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.McpPayerAddress} returns this
 */
proto.toolkit.api.v1.McpPayerAddress.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string countryRegion = 2;
 * @return {string}
 */
proto.toolkit.api.v1.McpPayerAddress.prototype.getCountryregion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.McpPayerAddress} returns this
 */
proto.toolkit.api.v1.McpPayerAddress.prototype.setCountryregion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.MttPayerAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.MttPayerAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.MttPayerAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.MttPayerAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    countryregion: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.MttPayerAddress}
 */
proto.toolkit.api.v1.MttPayerAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.MttPayerAddress;
  return proto.toolkit.api.v1.MttPayerAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.MttPayerAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.MttPayerAddress}
 */
proto.toolkit.api.v1.MttPayerAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountryregion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.MttPayerAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.MttPayerAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.MttPayerAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.MttPayerAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountryregion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.toolkit.api.v1.MttPayerAddress.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.MttPayerAddress} returns this
 */
proto.toolkit.api.v1.MttPayerAddress.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string countryRegion = 2;
 * @return {string}
 */
proto.toolkit.api.v1.MttPayerAddress.prototype.getCountryregion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.MttPayerAddress} returns this
 */
proto.toolkit.api.v1.MttPayerAddress.prototype.setCountryregion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FpsReceivingParty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FpsReceivingParty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FpsReceivingParty.toObject = function(includeInstance, msg) {
  var f, obj = {
    bankid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    proxyvalue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    proxytype: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FpsReceivingParty}
 */
proto.toolkit.api.v1.FpsReceivingParty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FpsReceivingParty;
  return proto.toolkit.api.v1.FpsReceivingParty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FpsReceivingParty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FpsReceivingParty}
 */
proto.toolkit.api.v1.FpsReceivingParty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProxyvalue(value);
      break;
    case 4:
      var value = /** @type {!proto.toolkit.api.v1.TxnProxyType} */ (reader.readEnum());
      msg.setProxytype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FpsReceivingParty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FpsReceivingParty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FpsReceivingParty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBankid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProxyvalue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProxytype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string bankId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.getBankid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FpsReceivingParty} returns this
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.setBankid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string accountName = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FpsReceivingParty} returns this
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string proxyValue = 3;
 * @return {string}
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.getProxyvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FpsReceivingParty} returns this
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.setProxyvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TxnProxyType proxyType = 4;
 * @return {!proto.toolkit.api.v1.TxnProxyType}
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.getProxytype = function() {
  return /** @type {!proto.toolkit.api.v1.TxnProxyType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.toolkit.api.v1.TxnProxyType} value
 * @return {!proto.toolkit.api.v1.FpsReceivingParty} returns this
 */
proto.toolkit.api.v1.FpsReceivingParty.prototype.setProxytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    requestid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenBalanceRequest}
 */
proto.toolkit.api.v1.OpenBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenBalanceRequest;
  return proto.toolkit.api.v1.OpenBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenBalanceRequest}
 */
proto.toolkit.api.v1.OpenBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenBalanceRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenBalanceRequest} returns this
 */
proto.toolkit.api.v1.OpenBalanceRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string requestId = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenBalanceRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenBalanceRequest} returns this
 */
proto.toolkit.api.v1.OpenBalanceRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 institutionId = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenBalanceRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenBalanceRequest} returns this
 */
proto.toolkit.api.v1.OpenBalanceRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenOrderDetailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenOrderDetailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    outorderno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requestid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 4, "0"),
    accountid: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenOrderDetailRequest}
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenOrderDetailRequest;
  return proto.toolkit.api.v1.OpenOrderDetailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenOrderDetailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenOrderDetailRequest}
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderno(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutorderno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenOrderDetailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenOrderDetailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderno();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOutorderno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
      f
    );
  }
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      5,
      f
    );
  }
};


/**
 * optional string orderNo = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.getOrderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenOrderDetailRequest} returns this
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.setOrderno = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string outOrderNo = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.getOutorderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenOrderDetailRequest} returns this
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.setOutorderno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string requestId = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenOrderDetailRequest} returns this
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 institutionId = 4;
 * @return {string}
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenOrderDetailRequest} returns this
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};


/**
 * optional int64 accountId = 5;
 * @return {string}
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenOrderDetailRequest} returns this
 */
proto.toolkit.api.v1.OpenOrderDetailRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.OpenBalanceData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenBalanceResponse}
 */
proto.toolkit.api.v1.OpenBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenBalanceResponse;
  return proto.toolkit.api.v1.OpenBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenBalanceResponse}
 */
proto.toolkit.api.v1.OpenBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.OpenBalanceData;
      reader.readMessage(value,proto.toolkit.api.v1.OpenBalanceData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.OpenBalanceData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.OpenBalanceResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenBalanceResponse} returns this
 */
proto.toolkit.api.v1.OpenBalanceResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenBalanceResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenBalanceResponse} returns this
 */
proto.toolkit.api.v1.OpenBalanceResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OpenBalanceData data = 3;
 * @return {?proto.toolkit.api.v1.OpenBalanceData}
 */
proto.toolkit.api.v1.OpenBalanceResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.OpenBalanceData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.OpenBalanceData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.OpenBalanceData|undefined} value
 * @return {!proto.toolkit.api.v1.OpenBalanceResponse} returns this
*/
proto.toolkit.api.v1.OpenBalanceResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenBalanceResponse} returns this
 */
proto.toolkit.api.v1.OpenBalanceResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenBalanceResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenOrderDetailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenOrderDetailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.OrderDetailData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenOrderDetailResponse}
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenOrderDetailResponse;
  return proto.toolkit.api.v1.OpenOrderDetailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenOrderDetailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenOrderDetailResponse}
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.OrderDetailData;
      reader.readMessage(value,proto.toolkit.api.v1.OrderDetailData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenOrderDetailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenOrderDetailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.OrderDetailData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenOrderDetailResponse} returns this
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenOrderDetailResponse} returns this
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OrderDetailData data = 3;
 * @return {?proto.toolkit.api.v1.OrderDetailData}
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.OrderDetailData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.OrderDetailData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.OrderDetailData|undefined} value
 * @return {!proto.toolkit.api.v1.OpenOrderDetailResponse} returns this
*/
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenOrderDetailResponse} returns this
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenOrderDetailResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenPayoutResultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenPayoutResultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.OrderDetailData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenPayoutResultRequest}
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenPayoutResultRequest;
  return proto.toolkit.api.v1.OpenPayoutResultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenPayoutResultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenPayoutResultRequest}
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.OrderDetailData;
      reader.readMessage(value,proto.toolkit.api.v1.OrderDetailData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenPayoutResultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenPayoutResultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.OrderDetailData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenPayoutResultRequest} returns this
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenPayoutResultRequest} returns this
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OrderDetailData data = 3;
 * @return {?proto.toolkit.api.v1.OrderDetailData}
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.OrderDetailData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.OrderDetailData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.OrderDetailData|undefined} value
 * @return {!proto.toolkit.api.v1.OpenPayoutResultRequest} returns this
*/
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenPayoutResultRequest} returns this
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenPayoutResultRequest.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OrderDetailData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OrderDetailData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OrderDetailData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    orderno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    outorderno: jspb.Message.getFieldWithDefault(msg, 3, ""),
    productcode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
    orderamount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    feeamount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    currency: jspb.Message.getFieldWithDefault(msg, 8, ""),
    feecurrency: jspb.Message.getFieldWithDefault(msg, 9, ""),
    messagetopayee: jspb.Message.getFieldWithDefault(msg, 10, ""),
    payerbankid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    payeebankid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    payeebankname: jspb.Message.getFieldWithDefault(msg, 13, ""),
    payeraccountname: jspb.Message.getFieldWithDefault(msg, 14, ""),
    payeraccountnumber: jspb.Message.getFieldWithDefault(msg, 15, ""),
    payeeaccountname: jspb.Message.getFieldWithDefault(msg, 16, ""),
    payeeaccountnumber: jspb.Message.getFieldWithDefault(msg, 17, ""),
    payerswiftcode: jspb.Message.getFieldWithDefault(msg, 18, ""),
    payeeswiftcode: jspb.Message.getFieldWithDefault(msg, 19, ""),
    payeeintermediaryswiftcode: jspb.Message.getFieldWithDefault(msg, 20, ""),
    routingcode: jspb.Message.getFieldWithDefault(msg, 21, ""),
    proxytype: jspb.Message.getFieldWithDefault(msg, 22, 0),
    proxyvalue: jspb.Message.getFieldWithDefault(msg, 23, ""),
    createtime: jspb.Message.getFieldWithDefault(msg, 24, ""),
    refundtime: jspb.Message.getFieldWithDefault(msg, 25, ""),
    finishtime: jspb.Message.getFieldWithDefault(msg, 26, ""),
    payerbankname: jspb.Message.getFieldWithDefault(msg, 27, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OrderDetailData}
 */
proto.toolkit.api.v1.OrderDetailData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OrderDetailData;
  return proto.toolkit.api.v1.OrderDetailData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OrderDetailData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OrderDetailData}
 */
proto.toolkit.api.v1.OrderDetailData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutorderno(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductcode(value);
      break;
    case 5:
      var value = /** @type {!proto.toolkit.api.v1.OpenOrderStatus} */ (reader.readEnum());
      msg.setOrderstatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderamount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeeamount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeecurrency(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetopayee(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayerbankid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeebankid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeebankname(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeraccountname(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeraccountnumber(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeeaccountname(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeeaccountnumber(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayerswiftcode(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeeswiftcode(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeeintermediaryswiftcode(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoutingcode(value);
      break;
    case 22:
      var value = /** @type {!proto.toolkit.api.v1.TxnProxyType} */ (reader.readEnum());
      msg.setProxytype(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setProxyvalue(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatetime(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefundtime(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinishtime(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayerbankname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OrderDetailData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OrderDetailData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OrderDetailData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOrderno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOutorderno();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProductcode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getOrderamount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getFeeamount();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getFeecurrency();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMessagetopayee();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPayerbankid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPayeebankid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPayeebankname();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPayeraccountname();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getPayeraccountnumber();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getPayeeaccountname();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getPayeeaccountnumber();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getPayerswiftcode();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getPayeeswiftcode();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getPayeeintermediaryswiftcode();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getRoutingcode();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getProxytype();
  if (f !== 0.0) {
    writer.writeEnum(
      22,
      f
    );
  }
  f = message.getProxyvalue();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getCreatetime();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getRefundtime();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getFinishtime();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getPayerbankname();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string orderNo = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getOrderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setOrderno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string outOrderNo = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getOutorderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setOutorderno = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string productCode = 4;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getProductcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setProductcode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional OpenOrderStatus orderStatus = 5;
 * @return {!proto.toolkit.api.v1.OpenOrderStatus}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getOrderstatus = function() {
  return /** @type {!proto.toolkit.api.v1.OpenOrderStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.toolkit.api.v1.OpenOrderStatus} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setOrderstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional int64 orderAmount = 6;
 * @return {number}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getOrderamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setOrderamount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 feeAmount = 7;
 * @return {number}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getFeeamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setFeeamount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string currency = 8;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string feeCurrency = 9;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getFeecurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setFeecurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string messageToPayee = 10;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getMessagetopayee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setMessagetopayee = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string payerBankId = 11;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayerbankid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayerbankid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string payeeBankId = 12;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayeebankid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayeebankid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string payeeBankName = 13;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayeebankname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayeebankname = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string payerAccountName = 14;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayeraccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayeraccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string payerAccountNumber = 15;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayeraccountnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayeraccountnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string payeeAccountName = 16;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayeeaccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayeeaccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string payeeAccountNumber = 17;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayeeaccountnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayeeaccountnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string payerSwiftCode = 18;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayerswiftcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayerswiftcode = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string payeeSwiftCode = 19;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayeeswiftcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayeeswiftcode = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string payeeIntermediarySwiftCode = 20;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayeeintermediaryswiftcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayeeintermediaryswiftcode = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string routingCode = 21;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getRoutingcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setRoutingcode = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional TxnProxyType proxyType = 22;
 * @return {!proto.toolkit.api.v1.TxnProxyType}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getProxytype = function() {
  return /** @type {!proto.toolkit.api.v1.TxnProxyType} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {!proto.toolkit.api.v1.TxnProxyType} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setProxytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 22, value);
};


/**
 * optional string proxyValue = 23;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getProxyvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setProxyvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string createTime = 24;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getCreatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional string refundTime = 25;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getRefundtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setRefundtime = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string finishTime = 26;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getFinishtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setFinishtime = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string payerBankName = 27;
 * @return {string}
 */
proto.toolkit.api.v1.OrderDetailData.prototype.getPayerbankname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OrderDetailData} returns this
 */
proto.toolkit.api.v1.OrderDetailData.prototype.setPayerbankname = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.toolkit.api.v1.OpenBalanceData.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenBalanceData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenBalanceData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenBalanceData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenBalanceData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    accountname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subaccountlistList: jspb.Message.toObjectList(msg.getSubaccountlistList(),
    proto.toolkit.api.v1.OpenSubAccountData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenBalanceData}
 */
proto.toolkit.api.v1.OpenBalanceData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenBalanceData;
  return proto.toolkit.api.v1.OpenBalanceData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenBalanceData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenBalanceData}
 */
proto.toolkit.api.v1.OpenBalanceData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.OpenSubAccountData;
      reader.readMessage(value,proto.toolkit.api.v1.OpenSubAccountData.deserializeBinaryFromReader);
      msg.addSubaccountlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenBalanceData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenBalanceData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenBalanceData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenBalanceData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubaccountlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.toolkit.api.v1.OpenSubAccountData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenBalanceData.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenBalanceData} returns this
 */
proto.toolkit.api.v1.OpenBalanceData.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string accountName = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenBalanceData.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenBalanceData} returns this
 */
proto.toolkit.api.v1.OpenBalanceData.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated OpenSubAccountData subAccountList = 3;
 * @return {!Array<!proto.toolkit.api.v1.OpenSubAccountData>}
 */
proto.toolkit.api.v1.OpenBalanceData.prototype.getSubaccountlistList = function() {
  return /** @type{!Array<!proto.toolkit.api.v1.OpenSubAccountData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.toolkit.api.v1.OpenSubAccountData, 3));
};


/**
 * @param {!Array<!proto.toolkit.api.v1.OpenSubAccountData>} value
 * @return {!proto.toolkit.api.v1.OpenBalanceData} returns this
*/
proto.toolkit.api.v1.OpenBalanceData.prototype.setSubaccountlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.toolkit.api.v1.OpenSubAccountData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.toolkit.api.v1.OpenSubAccountData}
 */
proto.toolkit.api.v1.OpenBalanceData.prototype.addSubaccountlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.toolkit.api.v1.OpenSubAccountData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.toolkit.api.v1.OpenBalanceData} returns this
 */
proto.toolkit.api.v1.OpenBalanceData.prototype.clearSubaccountlistList = function() {
  return this.setSubaccountlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenSubAccountData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenSubAccountData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenSubAccountData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenSubAccountData.toObject = function(includeInstance, msg) {
  var f, obj = {
    currency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ledgerbalance: jspb.Message.getFieldWithDefault(msg, 2, 0),
    availablebalance: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenSubAccountData}
 */
proto.toolkit.api.v1.OpenSubAccountData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenSubAccountData;
  return proto.toolkit.api.v1.OpenSubAccountData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenSubAccountData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenSubAccountData}
 */
proto.toolkit.api.v1.OpenSubAccountData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLedgerbalance(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvailablebalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenSubAccountData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenSubAccountData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenSubAccountData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenSubAccountData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLedgerbalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAvailablebalance();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string currency = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenSubAccountData.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenSubAccountData} returns this
 */
proto.toolkit.api.v1.OpenSubAccountData.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ledgerBalance = 2;
 * @return {number}
 */
proto.toolkit.api.v1.OpenSubAccountData.prototype.getLedgerbalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenSubAccountData} returns this
 */
proto.toolkit.api.v1.OpenSubAccountData.prototype.setLedgerbalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 availableBalance = 3;
 * @return {number}
 */
proto.toolkit.api.v1.OpenSubAccountData.prototype.getAvailablebalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenSubAccountData} returns this
 */
proto.toolkit.api.v1.OpenSubAccountData.prototype.setAvailablebalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenFundInRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenFundInRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenFundInRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    orderno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    productcode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
    currency: jspb.Message.getFieldWithDefault(msg, 5, ""),
    orderamount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    netamount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    feeamount: jspb.Message.getFieldWithDefault(msg, 8, 0),
    feecurrency: jspb.Message.getFieldWithDefault(msg, 9, ""),
    messagetopayee: jspb.Message.getFieldWithDefault(msg, 10, ""),
    payeraccountname: jspb.Message.getFieldWithDefault(msg, 11, ""),
    payeraccountnumber: jspb.Message.getFieldWithDefault(msg, 12, ""),
    payerbankid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    payerbankswiftcode: jspb.Message.getFieldWithDefault(msg, 14, ""),
    createtime: jspb.Message.getFieldWithDefault(msg, 15, ""),
    finishtime: jspb.Message.getFieldWithDefault(msg, 16, ""),
    accountname: jspb.Message.getFieldWithDefault(msg, 17, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenFundInRequest}
 */
proto.toolkit.api.v1.OpenFundInRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenFundInRequest;
  return proto.toolkit.api.v1.OpenFundInRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenFundInRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenFundInRequest}
 */
proto.toolkit.api.v1.OpenFundInRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductcode(value);
      break;
    case 4:
      var value = /** @type {!proto.toolkit.api.v1.OpenOrderStatus} */ (reader.readEnum());
      msg.setOrderstatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderamount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetamount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeeamount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeecurrency(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetopayee(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeraccountname(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayeraccountnumber(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayerbankid(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayerbankswiftcode(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatetime(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinishtime(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenFundInRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenFundInRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenFundInRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOrderno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProductcode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOrderstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOrderamount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getNetamount();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getFeeamount();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getFeecurrency();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMessagetopayee();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPayeraccountname();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPayeraccountnumber();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPayerbankid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPayerbankswiftcode();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCreatetime();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getFinishtime();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string orderNo = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getOrderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setOrderno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string productCode = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getProductcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setProductcode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional OpenOrderStatus orderStatus = 4;
 * @return {!proto.toolkit.api.v1.OpenOrderStatus}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getOrderstatus = function() {
  return /** @type {!proto.toolkit.api.v1.OpenOrderStatus} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.toolkit.api.v1.OpenOrderStatus} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setOrderstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string currency = 5;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 orderAmount = 6;
 * @return {number}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getOrderamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setOrderamount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 netAmount = 7;
 * @return {number}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getNetamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setNetamount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 feeAmount = 8;
 * @return {number}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getFeeamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setFeeamount = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string feeCurrency = 9;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getFeecurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setFeecurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string messageToPayee = 10;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getMessagetopayee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setMessagetopayee = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string payerAccountName = 11;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getPayeraccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setPayeraccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string payerAccountNumber = 12;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getPayeraccountnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setPayeraccountnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string payerBankId = 13;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getPayerbankid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setPayerbankid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string payerBankSwiftCode = 14;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getPayerbankswiftcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setPayerbankswiftcode = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string createTime = 15;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getCreatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string finishTime = 16;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getFinishtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setFinishtime = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string accountName = 17;
 * @return {string}
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenFundInRequest} returns this
 */
proto.toolkit.api.v1.OpenFundInRequest.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenRefundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenRefundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenRefundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenRefundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.OpenRefundDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenRefundRequest}
 */
proto.toolkit.api.v1.OpenRefundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenRefundRequest;
  return proto.toolkit.api.v1.OpenRefundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenRefundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenRefundRequest}
 */
proto.toolkit.api.v1.OpenRefundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.OpenRefundDetail;
      reader.readMessage(value,proto.toolkit.api.v1.OpenRefundDetail.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenRefundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenRefundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenRefundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenRefundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.OpenRefundDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.OpenRefundRequest.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenRefundRequest} returns this
 */
proto.toolkit.api.v1.OpenRefundRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundRequest} returns this
 */
proto.toolkit.api.v1.OpenRefundRequest.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OpenRefundDetail data = 3;
 * @return {?proto.toolkit.api.v1.OpenRefundDetail}
 */
proto.toolkit.api.v1.OpenRefundRequest.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.OpenRefundDetail} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.OpenRefundDetail, 3));
};


/**
 * @param {?proto.toolkit.api.v1.OpenRefundDetail|undefined} value
 * @return {!proto.toolkit.api.v1.OpenRefundRequest} returns this
*/
proto.toolkit.api.v1.OpenRefundRequest.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenRefundRequest} returns this
 */
proto.toolkit.api.v1.OpenRefundRequest.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenRefundRequest.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenRefundDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenRefundDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenRefundDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    outorderno: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    orderno: jspb.Message.getFieldWithDefault(msg, 3, ""),
    productcode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
    currency: jspb.Message.getFieldWithDefault(msg, 6, ""),
    orderamount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    feeamount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    feecurrency: jspb.Message.getFieldWithDefault(msg, 10, ""),
    refundamount: jspb.Message.getFieldWithDefault(msg, 11, 0),
    refundcurrency: jspb.Message.getFieldWithDefault(msg, 12, ""),
    refundtime: jspb.Message.getFieldWithDefault(msg, 13, ""),
    refundreason: jspb.Message.getFieldWithDefault(msg, 14, ""),
    refundorderno: jspb.Message.getFieldWithDefault(msg, 15, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenRefundDetail}
 */
proto.toolkit.api.v1.OpenRefundDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenRefundDetail;
  return proto.toolkit.api.v1.OpenRefundDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenRefundDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenRefundDetail}
 */
proto.toolkit.api.v1.OpenRefundDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutorderno(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderno(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProductcode(value);
      break;
    case 5:
      var value = /** @type {!proto.toolkit.api.v1.OpenOrderStatus} */ (reader.readEnum());
      msg.setOrderstatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrderamount(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeeamount(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setFeecurrency(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRefundamount(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefundcurrency(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefundtime(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefundreason(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefundorderno(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenRefundDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenRefundDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenRefundDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutorderno();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getOrderno();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProductcode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOrderstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOrderamount();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getFeeamount();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getFeecurrency();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRefundamount();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getRefundcurrency();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getRefundtime();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getRefundreason();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getRefundorderno();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string outOrderNo = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getOutorderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setOutorderno = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 accountId = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string orderNo = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getOrderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setOrderno = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string productCode = 4;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getProductcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setProductcode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional OpenOrderStatus orderStatus = 5;
 * @return {!proto.toolkit.api.v1.OpenOrderStatus}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getOrderstatus = function() {
  return /** @type {!proto.toolkit.api.v1.OpenOrderStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.toolkit.api.v1.OpenOrderStatus} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setOrderstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string currency = 6;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 orderAmount = 7;
 * @return {number}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getOrderamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setOrderamount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 feeAmount = 9;
 * @return {number}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getFeeamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setFeeamount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string feeCurrency = 10;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getFeecurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setFeecurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 refundAmount = 11;
 * @return {number}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getRefundamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setRefundamount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string refundCurrency = 12;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getRefundcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setRefundcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string refundTime = 13;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getRefundtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setRefundtime = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string refundReason = 14;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getRefundreason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setRefundreason = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string refundOrderNo = 15;
 * @return {string}
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.getRefundorderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenRefundDetail} returns this
 */
proto.toolkit.api.v1.OpenRefundDetail.prototype.setRefundorderno = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.RdtReceivingParty.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.RdtReceivingParty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.RdtReceivingParty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.RdtReceivingParty.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    accountname: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.RdtReceivingParty}
 */
proto.toolkit.api.v1.RdtReceivingParty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.RdtReceivingParty;
  return proto.toolkit.api.v1.RdtReceivingParty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.RdtReceivingParty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.RdtReceivingParty}
 */
proto.toolkit.api.v1.RdtReceivingParty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.RdtReceivingParty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.RdtReceivingParty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.RdtReceivingParty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.RdtReceivingParty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.RdtReceivingParty.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.RdtReceivingParty} returns this
 */
proto.toolkit.api.v1.RdtReceivingParty.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string accountName = 2;
 * @return {string}
 */
proto.toolkit.api.v1.RdtReceivingParty.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.RdtReceivingParty} returns this
 */
proto.toolkit.api.v1.RdtReceivingParty.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.TtReceivingParty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.TtReceivingParty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.TtReceivingParty.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountnumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    swiftbic: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intermediaryswiftbic: jspb.Message.getFieldWithDefault(msg, 4, ""),
    address1: jspb.Message.getFieldWithDefault(msg, 5, ""),
    address2: jspb.Message.getFieldWithDefault(msg, 6, ""),
    address3: jspb.Message.getFieldWithDefault(msg, 7, ""),
    routingcode: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.TtReceivingParty}
 */
proto.toolkit.api.v1.TtReceivingParty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.TtReceivingParty;
  return proto.toolkit.api.v1.TtReceivingParty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.TtReceivingParty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.TtReceivingParty}
 */
proto.toolkit.api.v1.TtReceivingParty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountnumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwiftbic(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntermediaryswiftbic(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress1(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress2(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress3(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoutingcode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.TtReceivingParty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.TtReceivingParty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.TtReceivingParty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountnumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSwiftbic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntermediaryswiftbic();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAddress1();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAddress2();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAddress3();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRoutingcode();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string accountNumber = 1;
 * @return {string}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.getAccountnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.TtReceivingParty} returns this
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.setAccountnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string accountName = 2;
 * @return {string}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.TtReceivingParty} returns this
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string swiftBic = 3;
 * @return {string}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.getSwiftbic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.TtReceivingParty} returns this
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.setSwiftbic = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string intermediarySwiftBic = 4;
 * @return {string}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.getIntermediaryswiftbic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.TtReceivingParty} returns this
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.setIntermediaryswiftbic = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string address1 = 5;
 * @return {string}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.getAddress1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.TtReceivingParty} returns this
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.setAddress1 = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string address2 = 6;
 * @return {string}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.getAddress2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.TtReceivingParty} returns this
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.setAddress2 = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string address3 = 7;
 * @return {string}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.getAddress3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.TtReceivingParty} returns this
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.setAddress3 = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string routingCode = 8;
 * @return {string}
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.getRoutingcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.TtReceivingParty} returns this
 */
proto.toolkit.api.v1.TtReceivingParty.prototype.setRoutingcode = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.ChatsReceivingParty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.ChatsReceivingParty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.ChatsReceivingParty.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountnumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    swiftbic: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intermediaryswiftbic: jspb.Message.getFieldWithDefault(msg, 4, ""),
    address1: jspb.Message.getFieldWithDefault(msg, 5, ""),
    address2: jspb.Message.getFieldWithDefault(msg, 6, ""),
    address3: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.ChatsReceivingParty}
 */
proto.toolkit.api.v1.ChatsReceivingParty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.ChatsReceivingParty;
  return proto.toolkit.api.v1.ChatsReceivingParty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.ChatsReceivingParty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.ChatsReceivingParty}
 */
proto.toolkit.api.v1.ChatsReceivingParty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountnumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSwiftbic(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntermediaryswiftbic(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress1(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress2(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress3(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.ChatsReceivingParty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.ChatsReceivingParty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.ChatsReceivingParty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountnumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSwiftbic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntermediaryswiftbic();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAddress1();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAddress2();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAddress3();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string accountNumber = 1;
 * @return {string}
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.getAccountnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ChatsReceivingParty} returns this
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.setAccountnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string accountName = 2;
 * @return {string}
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ChatsReceivingParty} returns this
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string swiftBic = 3;
 * @return {string}
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.getSwiftbic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ChatsReceivingParty} returns this
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.setSwiftbic = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string intermediarySwiftBic = 4;
 * @return {string}
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.getIntermediaryswiftbic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ChatsReceivingParty} returns this
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.setIntermediaryswiftbic = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string address1 = 5;
 * @return {string}
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.getAddress1 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ChatsReceivingParty} returns this
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.setAddress1 = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string address2 = 6;
 * @return {string}
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.getAddress2 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ChatsReceivingParty} returns this
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.setAddress2 = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string address3 = 7;
 * @return {string}
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.getAddress3 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ChatsReceivingParty} returns this
 */
proto.toolkit.api.v1.ChatsReceivingParty.prototype.setAddress3 = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.QueryLimitParam.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.QueryLimitParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.QueryLimitParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.QueryLimitParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    institutionid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    accountid: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.QueryLimitParam}
 */
proto.toolkit.api.v1.QueryLimitParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.QueryLimitParam;
  return proto.toolkit.api.v1.QueryLimitParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.QueryLimitParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.QueryLimitParam}
 */
proto.toolkit.api.v1.QueryLimitParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.QueryLimitParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.QueryLimitParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.QueryLimitParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.QueryLimitParam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
};


/**
 * optional int64 institutionId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.QueryLimitParam.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.QueryLimitParam} returns this
 */
proto.toolkit.api.v1.QueryLimitParam.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 accountId = 2;
 * @return {string}
 */
proto.toolkit.api.v1.QueryLimitParam.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.QueryLimitParam} returns this
 */
proto.toolkit.api.v1.QueryLimitParam.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.QueryLimitResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.QueryLimitResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.QueryLimitResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.QueryLimitResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.QueryLimitData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.QueryLimitResponse}
 */
proto.toolkit.api.v1.QueryLimitResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.QueryLimitResponse;
  return proto.toolkit.api.v1.QueryLimitResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.QueryLimitResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.QueryLimitResponse}
 */
proto.toolkit.api.v1.QueryLimitResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.QueryLimitData;
      reader.readMessage(value,proto.toolkit.api.v1.QueryLimitData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.QueryLimitResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.QueryLimitResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.QueryLimitResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.QueryLimitResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.QueryLimitData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.QueryLimitResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.QueryLimitResponse} returns this
 */
proto.toolkit.api.v1.QueryLimitResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.QueryLimitResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.QueryLimitResponse} returns this
 */
proto.toolkit.api.v1.QueryLimitResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional QueryLimitData data = 3;
 * @return {?proto.toolkit.api.v1.QueryLimitData}
 */
proto.toolkit.api.v1.QueryLimitResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.QueryLimitData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.QueryLimitData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.QueryLimitData|undefined} value
 * @return {!proto.toolkit.api.v1.QueryLimitResponse} returns this
*/
proto.toolkit.api.v1.QueryLimitResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.QueryLimitResponse} returns this
 */
proto.toolkit.api.v1.QueryLimitResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.QueryLimitResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.QueryLimitData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.QueryLimitData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.QueryLimitData.toObject = function(includeInstance, msg) {
  var f, obj = {
    institutionid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    accountid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    limitquerytime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    leftcollectlimit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    totalcollectlimit: jspb.Message.getFieldWithDefault(msg, 5, 0),
    collectlimitcurrency: jspb.Message.getFieldWithDefault(msg, 6, ""),
    lefttransferlimit: jspb.Message.getFieldWithDefault(msg, 7, 0),
    totaltransferlimit: jspb.Message.getFieldWithDefault(msg, 8, 0),
    transferlimitcurrency: jspb.Message.getFieldWithDefault(msg, 9, ""),
    leftspecialtransferlimit: jspb.Message.getFieldWithDefault(msg, 10, 0),
    totalspecialtransferlimit: jspb.Message.getFieldWithDefault(msg, 11, 0),
    leftspecialcollectionlimit: jspb.Message.getFieldWithDefault(msg, 12, 0),
    totalspecialcollectionlimit: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.QueryLimitData}
 */
proto.toolkit.api.v1.QueryLimitData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.QueryLimitData;
  return proto.toolkit.api.v1.QueryLimitData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.QueryLimitData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.QueryLimitData}
 */
proto.toolkit.api.v1.QueryLimitData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLimitquerytime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLeftcollectlimit(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalcollectlimit(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectlimitcurrency(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLefttransferlimit(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotaltransferlimit(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferlimitcurrency(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLeftspecialtransferlimit(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalspecialtransferlimit(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLeftspecialcollectionlimit(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalspecialcollectionlimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.QueryLimitData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.QueryLimitData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.QueryLimitData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getLimitquerytime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLeftcollectlimit();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTotalcollectlimit();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getCollectlimitcurrency();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLefttransferlimit();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTotaltransferlimit();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getTransferlimitcurrency();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLeftspecialtransferlimit();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getTotalspecialtransferlimit();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getLeftspecialcollectionlimit();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getTotalspecialcollectionlimit();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
};


/**
 * optional int64 institutionId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 accountId = 2;
 * @return {string}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string limitQueryTime = 3;
 * @return {string}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getLimitquerytime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setLimitquerytime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 leftCollectLimit = 4;
 * @return {number}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getLeftcollectlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setLeftcollectlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 totalCollectLimit = 5;
 * @return {number}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getTotalcollectlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setTotalcollectlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string collectLimitCurrency = 6;
 * @return {string}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getCollectlimitcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setCollectlimitcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 leftTransferLimit = 7;
 * @return {number}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getLefttransferlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setLefttransferlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 totalTransferLimit = 8;
 * @return {number}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getTotaltransferlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setTotaltransferlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string transferLimitCurrency = 9;
 * @return {string}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getTransferlimitcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setTransferlimitcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 leftSpecialTransferLimit = 10;
 * @return {number}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getLeftspecialtransferlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setLeftspecialtransferlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 totalSpecialTransferLimit = 11;
 * @return {number}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getTotalspecialtransferlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setTotalspecialtransferlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 leftSpecialCollectionLimit = 12;
 * @return {number}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getLeftspecialcollectionlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setLeftspecialcollectionlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 totalSpecialCollectionLimit = 13;
 * @return {number}
 */
proto.toolkit.api.v1.QueryLimitData.prototype.getTotalspecialcollectionlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.QueryLimitData} returns this
 */
proto.toolkit.api.v1.QueryLimitData.prototype.setTotalspecialcollectionlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenAccountQueryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenAccountQueryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    requestid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 3, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenAccountQueryRequest}
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenAccountQueryRequest;
  return proto.toolkit.api.v1.OpenAccountQueryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenAccountQueryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenAccountQueryRequest}
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenAccountQueryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenAccountQueryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryRequest} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string requestId = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryRequest} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 institutionId = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryRequest} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenAccountQueryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenAccountQueryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.OpenAccountQueryData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenAccountQueryResponse}
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenAccountQueryResponse;
  return proto.toolkit.api.v1.OpenAccountQueryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenAccountQueryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenAccountQueryResponse}
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.OpenAccountQueryData;
      reader.readMessage(value,proto.toolkit.api.v1.OpenAccountQueryData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenAccountQueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenAccountQueryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.OpenAccountQueryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryResponse} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryResponse} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OpenAccountQueryData data = 3;
 * @return {?proto.toolkit.api.v1.OpenAccountQueryData}
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.OpenAccountQueryData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.OpenAccountQueryData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.OpenAccountQueryData|undefined} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryResponse} returns this
*/
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.OpenAccountQueryResponse} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.OpenAccountQueryResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.OpenAccountQueryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.OpenAccountQueryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenAccountQueryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    accountname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bankname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    bankid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    bankswiftcode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    banklocation: jspb.Message.getFieldWithDefault(msg, 6, ""),
    bankaccountnumber: jspb.Message.getFieldWithDefault(msg, 7, ""),
    messagetopayee: jspb.Message.getFieldWithDefault(msg, 8, ""),
    remittanceinfo: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData}
 */
proto.toolkit.api.v1.OpenAccountQueryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.OpenAccountQueryData;
  return proto.toolkit.api.v1.OpenAccountQueryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.OpenAccountQueryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData}
 */
proto.toolkit.api.v1.OpenAccountQueryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankswiftcode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBanklocation(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBankaccountnumber(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetopayee(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemittanceinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.OpenAccountQueryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.OpenAccountQueryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.OpenAccountQueryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBankname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBankid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBankswiftcode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBanklocation();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBankaccountnumber();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getMessagetopayee();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRemittanceinfo();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string accountName = 2;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bankName = 3;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.getBankname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.setBankname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string bankId = 4;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.getBankid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.setBankid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string bankSwiftCode = 5;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.getBankswiftcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.setBankswiftcode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string bankLocation = 6;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.getBanklocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.setBanklocation = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string bankAccountNumber = 7;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.getBankaccountnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.setBankaccountnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string messageToPayee = 8;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.getMessagetopayee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.setMessagetopayee = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string remittanceInfo = 9;
 * @return {string}
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.getRemittanceinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.OpenAccountQueryData} returns this
 */
proto.toolkit.api.v1.OpenAccountQueryData.prototype.setRemittanceinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.DownloadBillData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.DownloadBillData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.DownloadBillData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.DownloadBillData.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileurl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filename: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.DownloadBillData}
 */
proto.toolkit.api.v1.DownloadBillData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.DownloadBillData;
  return proto.toolkit.api.v1.DownloadBillData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.DownloadBillData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.DownloadBillData}
 */
proto.toolkit.api.v1.DownloadBillData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileurl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.DownloadBillData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.DownloadBillData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.DownloadBillData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.DownloadBillData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileurl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string fileUrl = 1;
 * @return {string}
 */
proto.toolkit.api.v1.DownloadBillData.prototype.getFileurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.DownloadBillData} returns this
 */
proto.toolkit.api.v1.DownloadBillData.prototype.setFileurl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fileName = 2;
 * @return {string}
 */
proto.toolkit.api.v1.DownloadBillData.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.DownloadBillData} returns this
 */
proto.toolkit.api.v1.DownloadBillData.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.DownloadBillRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.DownloadBillRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.DownloadBillRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    institutionid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    accountid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    billdate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    currency: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.DownloadBillRequest}
 */
proto.toolkit.api.v1.DownloadBillRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.DownloadBillRequest;
  return proto.toolkit.api.v1.DownloadBillRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.DownloadBillRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.DownloadBillRequest}
 */
proto.toolkit.api.v1.DownloadBillRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBilldate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.DownloadBillRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.DownloadBillRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.DownloadBillRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getBilldate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 institutionId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.DownloadBillRequest} returns this
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 accountId = 2;
 * @return {string}
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.DownloadBillRequest} returns this
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string billDate = 3;
 * @return {string}
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.getBilldate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.DownloadBillRequest} returns this
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.setBilldate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string currency = 4;
 * @return {string}
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.DownloadBillRequest} returns this
 */
proto.toolkit.api.v1.DownloadBillRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.DownloadBillResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.DownloadBillResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.DownloadBillResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.DownloadBillResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.DownloadBillData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.DownloadBillResponse}
 */
proto.toolkit.api.v1.DownloadBillResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.DownloadBillResponse;
  return proto.toolkit.api.v1.DownloadBillResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.DownloadBillResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.DownloadBillResponse}
 */
proto.toolkit.api.v1.DownloadBillResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.DownloadBillData;
      reader.readMessage(value,proto.toolkit.api.v1.DownloadBillData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.DownloadBillResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.DownloadBillResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.DownloadBillResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.DownloadBillResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.DownloadBillData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.DownloadBillResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.DownloadBillResponse} returns this
 */
proto.toolkit.api.v1.DownloadBillResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.DownloadBillResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.DownloadBillResponse} returns this
 */
proto.toolkit.api.v1.DownloadBillResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional DownloadBillData data = 3;
 * @return {?proto.toolkit.api.v1.DownloadBillData}
 */
proto.toolkit.api.v1.DownloadBillResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.DownloadBillData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.DownloadBillData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.DownloadBillData|undefined} value
 * @return {!proto.toolkit.api.v1.DownloadBillResponse} returns this
*/
proto.toolkit.api.v1.DownloadBillResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.DownloadBillResponse} returns this
 */
proto.toolkit.api.v1.DownloadBillResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.DownloadBillResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX}
 */
proto.toolkit.api.v1.FX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX;
  return proto.toolkit.api.v1.FX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX}
 */
proto.toolkit.api.v1.FX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.toolkit.api.v1.FX.Direction = {
  _UNKNOWN_OPS: 0,
  BUY: 1,
  SELL: 2
};

/**
 * @enum {number}
 */
proto.toolkit.api.v1.FX.OrderStatus = {
  _UNKNOWN_STATUS: 0,
  SUBMITTED: 1,
  SUCCESSFUL: 2,
  FAILED: 3,
  CANCELLED: 4,
  REFUNDED: 5
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.QuoteBulkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.QuoteBulkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    requestid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 7, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkRequest}
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.QuoteBulkRequest;
  return proto.toolkit.api.v1.FX.QuoteBulkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.QuoteBulkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkRequest}
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.QuoteBulkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.QuoteBulkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      7,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string requestId = 6;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 institutionId = 7;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteBulkRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.QuoteBulkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.QuoteBulkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.FX.QuoteBulkData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkResponse}
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.QuoteBulkResponse;
  return proto.toolkit.api.v1.FX.QuoteBulkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.QuoteBulkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkResponse}
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.FX.QuoteBulkData;
      reader.readMessage(value,proto.toolkit.api.v1.FX.QuoteBulkData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.QuoteBulkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.QuoteBulkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.FX.QuoteBulkData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkResponse} returns this
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkResponse} returns this
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional QuoteBulkData data = 3;
 * @return {?proto.toolkit.api.v1.FX.QuoteBulkData}
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.FX.QuoteBulkData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.FX.QuoteBulkData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.FX.QuoteBulkData|undefined} value
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkResponse} returns this
*/
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkResponse} returns this
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.FX.QuoteBulkResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.toolkit.api.v1.FX.QuoteBulkData.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.QuoteBulkData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.QuoteBulkData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.QuoteBulkData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteBulkData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    ratelistList: jspb.Message.toObjectList(msg.getRatelistList(),
    proto.toolkit.api.v1.FX.RateData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkData}
 */
proto.toolkit.api.v1.FX.QuoteBulkData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.QuoteBulkData;
  return proto.toolkit.api.v1.FX.QuoteBulkData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.QuoteBulkData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkData}
 */
proto.toolkit.api.v1.FX.QuoteBulkData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = new proto.toolkit.api.v1.FX.RateData;
      reader.readMessage(value,proto.toolkit.api.v1.FX.RateData.deserializeBinaryFromReader);
      msg.addRatelist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.QuoteBulkData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.QuoteBulkData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.QuoteBulkData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteBulkData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getRatelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.toolkit.api.v1.FX.RateData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteBulkData.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkData} returns this
 */
proto.toolkit.api.v1.FX.QuoteBulkData.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * repeated RateData rateList = 2;
 * @return {!Array<!proto.toolkit.api.v1.FX.RateData>}
 */
proto.toolkit.api.v1.FX.QuoteBulkData.prototype.getRatelistList = function() {
  return /** @type{!Array<!proto.toolkit.api.v1.FX.RateData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.toolkit.api.v1.FX.RateData, 2));
};


/**
 * @param {!Array<!proto.toolkit.api.v1.FX.RateData>} value
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkData} returns this
*/
proto.toolkit.api.v1.FX.QuoteBulkData.prototype.setRatelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.toolkit.api.v1.FX.RateData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.toolkit.api.v1.FX.RateData}
 */
proto.toolkit.api.v1.FX.QuoteBulkData.prototype.addRatelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.toolkit.api.v1.FX.RateData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.toolkit.api.v1.FX.QuoteBulkData} returns this
 */
proto.toolkit.api.v1.FX.QuoteBulkData.prototype.clearRatelistList = function() {
  return this.setRatelistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.RateData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.RateData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.RateData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.RateData.toObject = function(includeInstance, msg) {
  var f, obj = {
    sellcurrency: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buycurrency: jspb.Message.getFieldWithDefault(msg, 2, ""),
    basecurrency: jspb.Message.getFieldWithDefault(msg, 3, ""),
    termcurrency: jspb.Message.getFieldWithDefault(msg, 4, ""),
    rate: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.RateData}
 */
proto.toolkit.api.v1.FX.RateData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.RateData;
  return proto.toolkit.api.v1.FX.RateData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.RateData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.RateData}
 */
proto.toolkit.api.v1.FX.RateData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellcurrency(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuycurrency(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasecurrency(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTermcurrency(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.RateData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.RateData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.RateData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.RateData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSellcurrency();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuycurrency();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBasecurrency();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTermcurrency();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRate();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string sellCurrency = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.RateData.prototype.getSellcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.RateData} returns this
 */
proto.toolkit.api.v1.FX.RateData.prototype.setSellcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string buyCurrency = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.RateData.prototype.getBuycurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.RateData} returns this
 */
proto.toolkit.api.v1.FX.RateData.prototype.setBuycurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string baseCurrency = 3;
 * @return {string}
 */
proto.toolkit.api.v1.FX.RateData.prototype.getBasecurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.RateData} returns this
 */
proto.toolkit.api.v1.FX.RateData.prototype.setBasecurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string termCurrency = 4;
 * @return {string}
 */
proto.toolkit.api.v1.FX.RateData.prototype.getTermcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.RateData} returns this
 */
proto.toolkit.api.v1.FX.RateData.prototype.setTermcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 rate = 5;
 * @return {number}
 */
proto.toolkit.api.v1.FX.RateData.prototype.getRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.RateData} returns this
 */
proto.toolkit.api.v1.FX.RateData.prototype.setRate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.QuoteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.QuoteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    sellcurrency: jspb.Message.getFieldWithDefault(msg, 2, ""),
    buycurrency: jspb.Message.getFieldWithDefault(msg, 3, ""),
    direction: jspb.Message.getFieldWithDefault(msg, 4, 0),
    quoteamount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    requestid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 7, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.QuoteRequest}
 */
proto.toolkit.api.v1.FX.QuoteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.QuoteRequest;
  return proto.toolkit.api.v1.FX.QuoteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.QuoteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.QuoteRequest}
 */
proto.toolkit.api.v1.FX.QuoteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellcurrency(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuycurrency(value);
      break;
    case 4:
      var value = /** @type {!proto.toolkit.api.v1.FX.Direction} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQuoteamount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.QuoteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.QuoteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getSellcurrency();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBuycurrency();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getQuoteamount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      7,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string sellCurrency = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.getSellcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.setSellcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string buyCurrency = 3;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.getBuycurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.setBuycurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Direction direction = 4;
 * @return {!proto.toolkit.api.v1.FX.Direction}
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.getDirection = function() {
  return /** @type {!proto.toolkit.api.v1.FX.Direction} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.toolkit.api.v1.FX.Direction} value
 * @return {!proto.toolkit.api.v1.FX.QuoteRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional int64 quoteAmount = 5;
 * @return {number}
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.getQuoteamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.QuoteRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.setQuoteamount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string requestId = 6;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 institutionId = 7;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteRequest} returns this
 */
proto.toolkit.api.v1.FX.QuoteRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.QuoteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.QuoteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.QuoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.FX.QuoteData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.QuoteResponse}
 */
proto.toolkit.api.v1.FX.QuoteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.QuoteResponse;
  return proto.toolkit.api.v1.FX.QuoteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.QuoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.QuoteResponse}
 */
proto.toolkit.api.v1.FX.QuoteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.FX.QuoteData;
      reader.readMessage(value,proto.toolkit.api.v1.FX.QuoteData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.QuoteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.QuoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.QuoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.FX.QuoteData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.FX.QuoteResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.QuoteResponse} returns this
 */
proto.toolkit.api.v1.FX.QuoteResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteResponse} returns this
 */
proto.toolkit.api.v1.FX.QuoteResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional QuoteData data = 3;
 * @return {?proto.toolkit.api.v1.FX.QuoteData}
 */
proto.toolkit.api.v1.FX.QuoteResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.FX.QuoteData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.FX.QuoteData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.FX.QuoteData|undefined} value
 * @return {!proto.toolkit.api.v1.FX.QuoteResponse} returns this
*/
proto.toolkit.api.v1.FX.QuoteResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.FX.QuoteResponse} returns this
 */
proto.toolkit.api.v1.FX.QuoteResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.FX.QuoteResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.QuoteData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.QuoteData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    quoteid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    expiretime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rate: jspb.Message.getFieldWithDefault(msg, 4, 0),
    amount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    basecurrency: jspb.Message.getFieldWithDefault(msg, 6, ""),
    termcurrency: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.QuoteData}
 */
proto.toolkit.api.v1.FX.QuoteData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.QuoteData;
  return proto.toolkit.api.v1.FX.QuoteData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.QuoteData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.QuoteData}
 */
proto.toolkit.api.v1.FX.QuoteData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setQuoteid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpiretime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRate(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasecurrency(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTermcurrency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.QuoteData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.QuoteData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.QuoteData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getQuoteid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getExpiretime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRate();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBasecurrency();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTermcurrency();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteData} returns this
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 quoteId = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.getQuoteid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteData} returns this
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.setQuoteid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string expireTime = 3;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.getExpiretime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteData} returns this
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.setExpiretime = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 rate = 4;
 * @return {number}
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.getRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.QuoteData} returns this
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.setRate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 amount = 5;
 * @return {number}
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.QuoteData} returns this
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string baseCurrency = 6;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.getBasecurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteData} returns this
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.setBasecurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string termCurrency = 7;
 * @return {string}
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.getTermcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.QuoteData} returns this
 */
proto.toolkit.api.v1.FX.QuoteData.prototype.setTermcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.BookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.BookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.BookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    quoteid: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    requestid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 4, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.BookRequest}
 */
proto.toolkit.api.v1.FX.BookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.BookRequest;
  return proto.toolkit.api.v1.FX.BookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.BookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.BookRequest}
 */
proto.toolkit.api.v1.FX.BookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setQuoteid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.BookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.BookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.BookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getQuoteid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      4,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.BookRequest} returns this
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional int64 quoteId = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.getQuoteid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.BookRequest} returns this
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.setQuoteid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional string requestId = 3;
 * @return {string}
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.BookRequest} returns this
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 institutionId = 4;
 * @return {string}
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.BookRequest} returns this
 */
proto.toolkit.api.v1.FX.BookRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.BookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.BookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.BookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.BookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.FX.BookData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.BookResponse}
 */
proto.toolkit.api.v1.FX.BookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.BookResponse;
  return proto.toolkit.api.v1.FX.BookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.BookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.BookResponse}
 */
proto.toolkit.api.v1.FX.BookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.FX.BookData;
      reader.readMessage(value,proto.toolkit.api.v1.FX.BookData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.BookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.BookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.BookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.BookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.FX.BookData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.FX.BookResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.BookResponse} returns this
 */
proto.toolkit.api.v1.FX.BookResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.BookResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.BookResponse} returns this
 */
proto.toolkit.api.v1.FX.BookResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional BookData data = 3;
 * @return {?proto.toolkit.api.v1.FX.BookData}
 */
proto.toolkit.api.v1.FX.BookResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.FX.BookData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.FX.BookData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.FX.BookData|undefined} value
 * @return {!proto.toolkit.api.v1.FX.BookResponse} returns this
*/
proto.toolkit.api.v1.FX.BookResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.FX.BookResponse} returns this
 */
proto.toolkit.api.v1.FX.BookResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.FX.BookResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.BookData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.BookData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.BookData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.BookData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    orderno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createtime: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.BookData}
 */
proto.toolkit.api.v1.FX.BookData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.BookData;
  return proto.toolkit.api.v1.FX.BookData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.BookData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.BookData}
 */
proto.toolkit.api.v1.FX.BookData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderno(value);
      break;
    case 3:
      var value = /** @type {!proto.toolkit.api.v1.FX.OrderStatus} */ (reader.readEnum());
      msg.setOrderstatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.BookData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.BookData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.BookData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.BookData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOrderno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOrderstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCreatetime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.BookData.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.BookData} returns this
 */
proto.toolkit.api.v1.FX.BookData.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string orderNo = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.BookData.prototype.getOrderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.BookData} returns this
 */
proto.toolkit.api.v1.FX.BookData.prototype.setOrderno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OrderStatus orderStatus = 3;
 * @return {!proto.toolkit.api.v1.FX.OrderStatus}
 */
proto.toolkit.api.v1.FX.BookData.prototype.getOrderstatus = function() {
  return /** @type {!proto.toolkit.api.v1.FX.OrderStatus} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.toolkit.api.v1.FX.OrderStatus} value
 * @return {!proto.toolkit.api.v1.FX.BookData} returns this
 */
proto.toolkit.api.v1.FX.BookData.prototype.setOrderstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string createTime = 4;
 * @return {string}
 */
proto.toolkit.api.v1.FX.BookData.prototype.getCreatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.BookData} returns this
 */
proto.toolkit.api.v1.FX.BookData.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.EnquiryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.EnquiryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.EnquiryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    orderno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    quoteid: jspb.Message.getFieldWithDefault(msg, 3, "0"),
    requestid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    institutionid: jspb.Message.getFieldWithDefault(msg, 5, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.EnquiryRequest}
 */
proto.toolkit.api.v1.FX.EnquiryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.EnquiryRequest;
  return proto.toolkit.api.v1.FX.EnquiryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.EnquiryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.EnquiryRequest}
 */
proto.toolkit.api.v1.FX.EnquiryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setQuoteid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setInstitutionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.EnquiryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.EnquiryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.EnquiryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOrderno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getQuoteid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      3,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInstitutionid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      5,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryRequest} returns this
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string orderNo = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.getOrderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryRequest} returns this
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.setOrderno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 quoteId = 3;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.getQuoteid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryRequest} returns this
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.setQuoteid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 3, value);
};


/**
 * optional string requestId = 4;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryRequest} returns this
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 institutionId = 5;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.getInstitutionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryRequest} returns this
 */
proto.toolkit.api.v1.FX.EnquiryRequest.prototype.setInstitutionid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.EnquiryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.EnquiryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.EnquiryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.FX.EnquiryData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.EnquiryResponse}
 */
proto.toolkit.api.v1.FX.EnquiryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.EnquiryResponse;
  return proto.toolkit.api.v1.FX.EnquiryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.EnquiryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.EnquiryResponse}
 */
proto.toolkit.api.v1.FX.EnquiryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.FX.EnquiryData;
      reader.readMessage(value,proto.toolkit.api.v1.FX.EnquiryData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.EnquiryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.EnquiryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.EnquiryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.FX.EnquiryData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryResponse} returns this
 */
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryResponse} returns this
 */
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional EnquiryData data = 3;
 * @return {?proto.toolkit.api.v1.FX.EnquiryData}
 */
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.FX.EnquiryData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.FX.EnquiryData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.FX.EnquiryData|undefined} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryResponse} returns this
*/
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.FX.EnquiryResponse} returns this
 */
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.FX.EnquiryResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.EnquiryData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.EnquiryData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.EnquiryData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    orderno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sellcurrency: jspb.Message.getFieldWithDefault(msg, 3, ""),
    buycurrency: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sellamount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    buyamount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 7, 0),
    basecurrency: jspb.Message.getFieldWithDefault(msg, 8, ""),
    termcurrency: jspb.Message.getFieldWithDefault(msg, 9, ""),
    rate: jspb.Message.getFieldWithDefault(msg, 10, 0),
    createtime: jspb.Message.getFieldWithDefault(msg, 11, ""),
    finishtime: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.EnquiryData}
 */
proto.toolkit.api.v1.FX.EnquiryData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.EnquiryData;
  return proto.toolkit.api.v1.FX.EnquiryData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.EnquiryData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.EnquiryData}
 */
proto.toolkit.api.v1.FX.EnquiryData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellcurrency(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuycurrency(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSellamount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuyamount(value);
      break;
    case 7:
      var value = /** @type {!proto.toolkit.api.v1.FX.OrderStatus} */ (reader.readEnum());
      msg.setOrderstatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasecurrency(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTermcurrency(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRate(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatetime(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinishtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.EnquiryData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.EnquiryData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.EnquiryData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOrderno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSellcurrency();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBuycurrency();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSellamount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBuyamount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getOrderstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getBasecurrency();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTermcurrency();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRate();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getCreatetime();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getFinishtime();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string orderNo = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getOrderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setOrderno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sellCurrency = 3;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getSellcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setSellcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string buyCurrency = 4;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getBuycurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setBuycurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 sellAmount = 5;
 * @return {number}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getSellamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setSellamount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 buyAmount = 6;
 * @return {number}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getBuyamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setBuyamount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional OrderStatus orderStatus = 7;
 * @return {!proto.toolkit.api.v1.FX.OrderStatus}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getOrderstatus = function() {
  return /** @type {!proto.toolkit.api.v1.FX.OrderStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.toolkit.api.v1.FX.OrderStatus} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setOrderstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string baseCurrency = 8;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getBasecurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setBasecurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string termCurrency = 9;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getTermcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setTermcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 rate = 10;
 * @return {number}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setRate = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string createTime = 11;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getCreatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string finishTime = 12;
 * @return {string}
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.getFinishtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.EnquiryData} returns this
 */
proto.toolkit.api.v1.FX.EnquiryData.prototype.setFinishtime = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.OrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.OrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.OrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.OrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.toolkit.api.v1.FX.OrderDetailData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.OrderResponse}
 */
proto.toolkit.api.v1.FX.OrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.OrderResponse;
  return proto.toolkit.api.v1.FX.OrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.OrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.OrderResponse}
 */
proto.toolkit.api.v1.FX.OrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.toolkit.api.v1.FX.OrderDetailData;
      reader.readMessage(value,proto.toolkit.api.v1.FX.OrderDetailData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.OrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.OrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.OrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.OrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.toolkit.api.v1.FX.OrderDetailData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.FX.OrderResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.OrderResponse} returns this
 */
proto.toolkit.api.v1.FX.OrderResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.OrderResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.OrderResponse} returns this
 */
proto.toolkit.api.v1.FX.OrderResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OrderDetailData data = 3;
 * @return {?proto.toolkit.api.v1.FX.OrderDetailData}
 */
proto.toolkit.api.v1.FX.OrderResponse.prototype.getData = function() {
  return /** @type{?proto.toolkit.api.v1.FX.OrderDetailData} */ (
    jspb.Message.getWrapperField(this, proto.toolkit.api.v1.FX.OrderDetailData, 3));
};


/**
 * @param {?proto.toolkit.api.v1.FX.OrderDetailData|undefined} value
 * @return {!proto.toolkit.api.v1.FX.OrderResponse} returns this
*/
proto.toolkit.api.v1.FX.OrderResponse.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.toolkit.api.v1.FX.OrderResponse} returns this
 */
proto.toolkit.api.v1.FX.OrderResponse.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.toolkit.api.v1.FX.OrderResponse.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.FX.OrderDetailData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.FX.OrderDetailData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.OrderDetailData.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountid: jspb.Message.getFieldWithDefault(msg, 1, "0"),
    orderno: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sellcurrency: jspb.Message.getFieldWithDefault(msg, 3, ""),
    buycurrency: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sellamount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    buyamount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    orderstatus: jspb.Message.getFieldWithDefault(msg, 7, 0),
    basecurrency: jspb.Message.getFieldWithDefault(msg, 8, ""),
    termcurrency: jspb.Message.getFieldWithDefault(msg, 9, ""),
    rate: jspb.Message.getFieldWithDefault(msg, 10, 0),
    createtime: jspb.Message.getFieldWithDefault(msg, 11, ""),
    finishtime: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData}
 */
proto.toolkit.api.v1.FX.OrderDetailData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.FX.OrderDetailData;
  return proto.toolkit.api.v1.FX.OrderDetailData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.FX.OrderDetailData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData}
 */
proto.toolkit.api.v1.FX.OrderDetailData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setAccountid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderno(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellcurrency(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuycurrency(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSellamount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuyamount(value);
      break;
    case 7:
      var value = /** @type {!proto.toolkit.api.v1.FX.OrderStatus} */ (reader.readEnum());
      msg.setOrderstatus(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasecurrency(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTermcurrency(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRate(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatetime(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinishtime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.FX.OrderDetailData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.FX.OrderDetailData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.FX.OrderDetailData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountid();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      1,
      f
    );
  }
  f = message.getOrderno();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSellcurrency();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBuycurrency();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSellamount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBuyamount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getOrderstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getBasecurrency();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTermcurrency();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRate();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getCreatetime();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getFinishtime();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional int64 accountId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};


/**
 * optional string orderNo = 2;
 * @return {string}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getOrderno = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setOrderno = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sellCurrency = 3;
 * @return {string}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getSellcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setSellcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string buyCurrency = 4;
 * @return {string}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getBuycurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setBuycurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 sellAmount = 5;
 * @return {number}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getSellamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setSellamount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 buyAmount = 6;
 * @return {number}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getBuyamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setBuyamount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional OrderStatus orderStatus = 7;
 * @return {!proto.toolkit.api.v1.FX.OrderStatus}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getOrderstatus = function() {
  return /** @type {!proto.toolkit.api.v1.FX.OrderStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.toolkit.api.v1.FX.OrderStatus} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setOrderstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string baseCurrency = 8;
 * @return {string}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getBasecurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setBasecurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string termCurrency = 9;
 * @return {string}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getTermcurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setTermcurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 rate = 10;
 * @return {number}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setRate = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string createTime = 11;
 * @return {string}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getCreatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string finishTime = 12;
 * @return {string}
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.getFinishtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.FX.OrderDetailData} returns this
 */
proto.toolkit.api.v1.FX.OrderDetailData.prototype.setFinishtime = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.CallbackRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.CallbackRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.CallbackRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.CallbackRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    businesstype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    data: msg.getData_asB64(),
    clientkeyid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    rdkeyid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.CallbackRequest}
 */
proto.toolkit.api.v1.CallbackRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.CallbackRequest;
  return proto.toolkit.api.v1.CallbackRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.CallbackRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.CallbackRequest}
 */
proto.toolkit.api.v1.CallbackRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.toolkit.api.v1.PaymentBusinessType} */ (reader.readEnum());
      msg.setBusinesstype(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientkeyid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRdkeyid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.CallbackRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.CallbackRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.CallbackRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.CallbackRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBusinesstype();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getClientkeyid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRdkeyid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional PaymentBusinessType businessType = 2;
 * @return {!proto.toolkit.api.v1.PaymentBusinessType}
 */
proto.toolkit.api.v1.CallbackRequest.prototype.getBusinesstype = function() {
  return /** @type {!proto.toolkit.api.v1.PaymentBusinessType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.toolkit.api.v1.PaymentBusinessType} value
 * @return {!proto.toolkit.api.v1.CallbackRequest} returns this
 */
proto.toolkit.api.v1.CallbackRequest.prototype.setBusinesstype = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bytes data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.toolkit.api.v1.CallbackRequest.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.toolkit.api.v1.CallbackRequest.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.CallbackRequest.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.toolkit.api.v1.CallbackRequest} returns this
 */
proto.toolkit.api.v1.CallbackRequest.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string clientKeyId = 4;
 * @return {string}
 */
proto.toolkit.api.v1.CallbackRequest.prototype.getClientkeyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.CallbackRequest} returns this
 */
proto.toolkit.api.v1.CallbackRequest.prototype.setClientkeyid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string rdKeyId = 5;
 * @return {string}
 */
proto.toolkit.api.v1.CallbackRequest.prototype.getRdkeyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.CallbackRequest} returns this
 */
proto.toolkit.api.v1.CallbackRequest.prototype.setRdkeyid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.ApiReq.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.ApiReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.ApiReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.ApiReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    reqid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, "0"),
    content: msg.getContent_asB64(),
    clientkeyid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    rdkeyid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.ApiReq}
 */
proto.toolkit.api.v1.ApiReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.ApiReq;
  return proto.toolkit.api.v1.ApiReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.ApiReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.ApiReq}
 */
proto.toolkit.api.v1.ApiReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReqid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientkeyid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRdkeyid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.ApiReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.ApiReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.ApiReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.ApiReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReqid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (parseInt(f, 10) !== 0) {
    writer.writeInt64String(
      2,
      f
    );
  }
  f = message.getContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getClientkeyid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRdkeyid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string reqId = 1;
 * @return {string}
 */
proto.toolkit.api.v1.ApiReq.prototype.getReqid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ApiReq} returns this
 */
proto.toolkit.api.v1.ApiReq.prototype.setReqid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {string}
 */
proto.toolkit.api.v1.ApiReq.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ApiReq} returns this
 */
proto.toolkit.api.v1.ApiReq.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};


/**
 * optional bytes content = 3;
 * @return {!(string|Uint8Array)}
 */
proto.toolkit.api.v1.ApiReq.prototype.getContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes content = 3;
 * This is a type-conversion wrapper around `getContent()`
 * @return {string}
 */
proto.toolkit.api.v1.ApiReq.prototype.getContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContent()));
};


/**
 * optional bytes content = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContent()`
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.ApiReq.prototype.getContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.toolkit.api.v1.ApiReq} returns this
 */
proto.toolkit.api.v1.ApiReq.prototype.setContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional string clientKeyId = 4;
 * @return {string}
 */
proto.toolkit.api.v1.ApiReq.prototype.getClientkeyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ApiReq} returns this
 */
proto.toolkit.api.v1.ApiReq.prototype.setClientkeyid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string rdKeyId = 5;
 * @return {string}
 */
proto.toolkit.api.v1.ApiReq.prototype.getRdkeyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ApiReq} returns this
 */
proto.toolkit.api.v1.ApiReq.prototype.setRdkeyid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.ApiResp.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.ApiResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.ApiResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.ApiResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
    body: msg.getBody_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.ApiResp}
 */
proto.toolkit.api.v1.ApiResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.ApiResp;
  return proto.toolkit.api.v1.ApiResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.ApiResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.ApiResp}
 */
proto.toolkit.api.v1.ApiResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.ApiResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.ApiResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.ApiResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.ApiResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBody_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.ApiResp.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.ApiResp} returns this
 */
proto.toolkit.api.v1.ApiResp.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.toolkit.api.v1.ApiResp.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.ApiResp} returns this
 */
proto.toolkit.api.v1.ApiResp.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes body = 3;
 * @return {!(string|Uint8Array)}
 */
proto.toolkit.api.v1.ApiResp.prototype.getBody = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes body = 3;
 * This is a type-conversion wrapper around `getBody()`
 * @return {string}
 */
proto.toolkit.api.v1.ApiResp.prototype.getBody_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBody()));
};


/**
 * optional bytes body = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBody()`
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.ApiResp.prototype.getBody_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBody()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.toolkit.api.v1.ApiResp} returns this
 */
proto.toolkit.api.v1.ApiResp.prototype.setBody = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.toolkit.api.v1.Reason.prototype.toObject = function(opt_includeInstance) {
  return proto.toolkit.api.v1.Reason.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.toolkit.api.v1.Reason} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.Reason.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    metadataMap: (f = msg.getMetadataMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.toolkit.api.v1.Reason}
 */
proto.toolkit.api.v1.Reason.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.toolkit.api.v1.Reason;
  return proto.toolkit.api.v1.Reason.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.toolkit.api.v1.Reason} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.toolkit.api.v1.Reason}
 */
proto.toolkit.api.v1.Reason.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = msg.getMetadataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.toolkit.api.v1.Reason.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.toolkit.api.v1.Reason.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.toolkit.api.v1.Reason} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.toolkit.api.v1.Reason.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.toolkit.api.v1.Reason.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.toolkit.api.v1.Reason} returns this
 */
proto.toolkit.api.v1.Reason.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.toolkit.api.v1.Reason.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.Reason} returns this
 */
proto.toolkit.api.v1.Reason.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.toolkit.api.v1.Reason.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.toolkit.api.v1.Reason} returns this
 */
proto.toolkit.api.v1.Reason.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> metadata = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.toolkit.api.v1.Reason.prototype.getMetadataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.toolkit.api.v1.Reason} returns this
 */
proto.toolkit.api.v1.Reason.prototype.clearMetadataMap = function() {
  this.getMetadataMap().clear();
  return this;
};


/**
 * @enum {number}
 */
proto.toolkit.api.v1.OpenPaymentErrorCode = {
  _UNKNOWN_OPEC: 0,
  PAYMENT_ERROR: 6001,
  PARAMS_ERROR: 6002,
  WALLET_NOT_EXISTS: 6101,
  WALLET_INSUFFICIENT_FUND: 6102,
  WALLET_STATUS_INVALID: 6103,
  WALLET_SHOULD_NOT_SAME: 6104,
  TRANSFER_LIMIT: 6201,
  TRANSACTION_LIMIT: 6202,
  FRAUD_RULE_HIT: 6203,
  INVALID_BIC: 6204,
  INVALID_PAYEE_ACCOUNT_NAME: 6205,
  INVALID_PAYEE_ACCOUNT_NO: 6206,
  FPS_REJECTED: 6207,
  COLLECTION_LIMIT: 6208,
  TRANSACTION_IS_DUPLICATE: 6209,
  TRANSACTION_CANNOT_BE_FOUND: 6003
};

/**
 * @enum {number}
 */
proto.toolkit.api.v1.TxnProxyType = {
  _UNKNOWN_TYPE: 0,
  M: 1,
  B: 2,
  E: 3,
  S: 4
};

/**
 * @enum {number}
 */
proto.toolkit.api.v1.TxnPurpose = {
  _UNKNOWN_TP: 0,
  GOD: 1,
  CTF: 2,
  STR: 3,
  OTF: 4
};

/**
 * @enum {number}
 */
proto.toolkit.api.v1.OpenOrderStatus = {
  _UNKNOWN_OPS: 0,
  SUBMITTED: 1,
  SUCCESSFUL: 2,
  FAILED: 3,
  CANCELLED: 4,
  REFUNDED: 5,
  REJECT: 6
};

/**
 * @enum {number}
 */
proto.toolkit.api.v1.PaymentBusinessType = {
  PAYMENT_BUSINESS_TYPE_UNKNOWN: 0,
  PAYMENT_BUSINESS_TYPE_FUND_IN: 1,
  PAYMENT_BUSINESS_TYPE_PAY_OUT: 2,
  PAYMENT_BUSINESS_TYPE_REFUND: 3,
  FX_BUSINESS_TYPE_SUCCESS: 4
};

goog.object.extend(exports, proto.toolkit.api.v1);
