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
var index_1 = require("./index");
var api_1 = require("./api");
var TestCallback = /** @class */ (function () {
    function TestCallback() {
    }
    TestCallback.prototype.parseFXRequest = function (resp) {
    };
    TestCallback.prototype.parseFundInRequest = function (resp) {
    };
    TestCallback.prototype.parsePayoutRequest = function (resp) {
    };
    TestCallback.prototype.parseRefundRequest = function (resp) {
    };
    TestCallback.prototype.parseBankCheckFailRequest = function (req) {
    };
    TestCallback.prototype.parseBankCheckSuccessRequest = function (req) {
    };
    TestCallback.prototype.parseOneKeyPeopleBindRequest = function (req) {
    };
    TestCallback.prototype.parseOneKeyPeopleSignedRequest = function (req) {
    };
    TestCallback.prototype.parseProfileUpdateRequest = function (req) {
    };
    TestCallback.prototype.parseRdCheckErrorRequest = function (req) {
    };
    TestCallback.prototype.parseRdCheckSuccessRequest = function (req) {
    };
    return TestCallback;
}());
test('test openBalance', function () { return __awaiter(void 0, void 0, void 0, function () {
    var profile, toolkit, balance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                profile = index_1.Profile.of('477168296576290816', 'f8435b4f9b99662c', '806e2a2496f2380a');
                toolkit = index_1.RDToolkit.of(__dirname, profile)
                    .addAuthority('6f601da64b98a52d83cbe2141f533181878ffe84', 'qINfnmK51KhyXEruTxbh6pbdk5zOMG95').addSecret('f8435b4f9b99662c', '123456');
                return [4 /*yield*/, toolkit.openBalance('55630812')];
            case 1:
                balance = _a.sent();
                expect(balance.toArray().length).toBe(new api_1.OpenBalanceResponse().toArray().length);
                return [4 /*yield*/, index_1.RDToolkit.callback(__dirname, '477168296576290816', new Uint8Array(), new TestCallback())];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
