"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Authority = exports.Client = exports.Decrypt = exports.Encrypt = exports.Encoder = exports.Profile = void 0;
var openpgp_1 = require("openpgp");
var path = __importStar(require("node:path"));
var fs = __importStar(require("node:fs"));
var lru_cache_1 = require("lru-cache");
var axios_1 = __importDefault(require("axios"));
var uuid_1 = require("uuid");
var api_1 = require("./api");
var Profile = /** @class */ (function () {
    function Profile(appId, clientFingerprint, serverFingerprint, privateKey, publicKey) {
        this.appId = appId;
        this.clientFingerprint = clientFingerprint;
        this.serverFingerprint = serverFingerprint;
        this.privateKey = privateKey;
        this.publicKey = publicKey;
    }
    Profile.of = function (appId, clientFingerprint, serverFingerprint, privateKey, publicKey) {
        return new Profile(appId, clientFingerprint, serverFingerprint, privateKey || null, publicKey || null);
    };
    Profile.prototype.copy = function (privateKey, publicKey) {
        return new Profile(this.appId, this.clientFingerprint, this.serverFingerprint, privateKey, publicKey);
    };
    Profile.prototype.getAppId = function () {
        return this.appId;
    };
    Profile.prototype.getClientFingerprint = function () {
        return this.clientFingerprint;
    };
    Profile.prototype.getServerFingerprint = function () {
        return this.serverFingerprint;
    };
    Profile.prototype.getPrivateKey = function () {
        return this.privateKey;
    };
    Profile.prototype.getPublicKey = function () {
        return this.publicKey;
    };
    Profile.prototype.toString = function () {
        return "Profile{appId='".concat(this.appId, "', clientFingerprint='").concat(this.clientFingerprint, "', serverFingerprint='").concat(this.serverFingerprint, "'}");
    };
    return Profile;
}());
exports.Profile = Profile;
var CA_PRIVATE_SECRET = new lru_cache_1.LRUCache({ max: 1000 });
var Encoder = /** @class */ (function () {
    function Encoder(caFilePath) {
        var _this = this;
        //this.generateKeyPair('Chirs Zhou', 'chirs.zhou@rs.group', '').then(r => {});
        this.PGP_KEY_PAIR = new lru_cache_1.LRUCache({
            max: 1000,
            // async method to use for cache.fetch(), for stale-while-revalidate type of behavior
            fetchMethod: function (profile, oldValue, _a) {
                var signal = _a.signal;
                return __awaiter(_this, void 0, void 0, function () {
                    var privateKeyPath, publicKeyPath, privateKeyPwd, privateKeyArmored, publicKeyArmored, publicKey, privateKey, _b;
                    var _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                privateKeyPath = path.join(caFilePath, profile.getAppId(), profile.getClientFingerprint(), 'private.key');
                                publicKeyPath = path.join(caFilePath, profile.getServerFingerprint(), 'public.key');
                                privateKeyPwd = CA_PRIVATE_SECRET.get(profile.getClientFingerprint()) || '';
                                privateKeyArmored = fs.readFileSync(privateKeyPath, { encoding: 'utf8' });
                                publicKeyArmored = fs.readFileSync(publicKeyPath, { encoding: 'utf8' });
                                return [4 /*yield*/, (0, openpgp_1.readKey)({ armoredKey: publicKeyArmored })];
                            case 1:
                                publicKey = _d.sent();
                                _b = openpgp_1.decryptKey;
                                _c = {};
                                return [4 /*yield*/, (0, openpgp_1.readPrivateKey)({ armoredKey: privateKeyArmored })];
                            case 2: return [4 /*yield*/, _b.apply(void 0, [(_c.privateKey = _d.sent(),
                                        _c.passphrase = privateKeyPwd,
                                        _c)])];
                            case 3:
                                privateKey = _d.sent();
                                return [2 /*return*/, profile.copy(privateKey, publicKey)];
                        }
                    });
                });
            }
        });
    }
    Encoder.of = function (caFilePath) {
        return new Encoder(caFilePath);
    };
    Encoder.addSecret = function (clientFingerprint, privateKeyPwd) {
        CA_PRIVATE_SECRET.set(clientFingerprint, privateKeyPwd);
    };
    Encoder.prototype.loadKeyPair = function (profile) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.PGP_KEY_PAIR.fetch(profile)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Encoder;
}());
exports.Encoder = Encoder;
function Encrypt(privateKey, publicKey, data) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = openpgp_1.encrypt;
                    _b = {};
                    return [4 /*yield*/, (0, openpgp_1.createMessage)({ binary: data })];
                case 1: return [4 /*yield*/, _a.apply(void 0, [(_b.message = _c.sent(),
                            _b.encryptionKeys = publicKey,
                            _b.signingKeys = privateKey,
                            _b.format = 'armored',
                            _b)])];
                case 2: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.Encrypt = Encrypt;
function Decrypt(privateKey, publicKey, data) {
    return __awaiter(this, void 0, void 0, function () {
        var decryptionResult, _a;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = openpgp_1.decrypt;
                    _b = {};
                    return [4 /*yield*/, (0, openpgp_1.readMessage)({ armoredMessage: Buffer.from(data).toString('utf-8') })];
                case 1: return [4 /*yield*/, _a.apply(void 0, [(_b.message = _c.sent(),
                            _b.verificationKeys = publicKey,
                            _b.decryptionKeys = privateKey,
                            _b.format = 'binary',
                            _b)])];
                case 2:
                    decryptionResult = _c.sent();
                    return [2 /*return*/, decryptionResult.data];
            }
        });
    });
}
exports.Decrypt = Decrypt;
var USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36';
var Client = /** @class */ (function () {
    function Client(appId) {
        this.headers = {
            'User-Agent': USER_AGENT,
            'Content-Encoding': 'utf-8',
            'x-rd-app-id': appId
        };
    }
    Client.of = function (appId) {
        return new Client(appId);
    };
    Client.prototype.authorization = function (authorization) {
        this.headers['Authorization'] = authorization;
        return this;
    };
    Client.prototype.requestId = function () {
        return (0, uuid_1.v4)().replace(/-/g, '');
    };
    Client.prototype.sendForm = function (url, params, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response, formData, key, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        response = void 0;
                        if (!params.hasOwnProperty('mediaFile')) return [3 /*break*/, 2];
                        this.headers['Content-Type'] = 'multipart/form-data';
                        formData = new FormData();
                        formData.append('mediaFile', data, params['mediaFile']);
                        for (key in params) {
                            if (key != 'mediaFile') {
                                formData.append(key, params[key]);
                            }
                        }
                        return [4 /*yield*/, axios_1["default"].post(url, formData, { headers: this.headers })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                        return [4 /*yield*/, axios_1["default"].post(url, params, { headers: this.headers })];
                    case 3:
                        response = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, response.data];
                    case 5:
                        error_1 = _a.sent();
                        throw error_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.sendProto = function (profile, url, requestData) {
        return __awaiter(this, void 0, void 0, function () {
            var encryptedData, buffer, bytes, response, api, decryptedData, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Encrypt(profile.getPrivateKey(), profile.getPublicKey(), requestData)];
                    case 1:
                        encryptedData = _a.sent();
                        buffer = Buffer.from(encryptedData.toString(), 'utf8');
                        bytes = api_1.ApiReq.fromObject({
                            reqId: this.requestId(),
                            timestamp: Date.now().toString(),
                            content: new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength),
                            clientKeyId: profile.getClientFingerprint(),
                            rdKeyId: profile.getServerFingerprint()
                        }).serializeBinary();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 8, , 9]);
                        this.headers['Content-Type'] = 'application/x-protobuf';
                        return [4 /*yield*/, axios_1["default"].post(url, bytes.buffer, {
                                headers: this.headers,
                                responseType: 'arraybuffer'
                            })];
                    case 3:
                        response = _a.sent();
                        if (!(response.status == 200)) return [3 /*break*/, 6];
                        api = api_1.ApiResp.deserializeBinary(new Uint8Array(response.data));
                        if (!(api.code == 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Decrypt(profile.getPrivateKey(), profile.getPublicKey(), api.body)];
                    case 4:
                        decryptedData = _a.sent();
                        return [2 /*return*/, decryptedData];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        console.info("response headers:".concat(response.headers));
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_2 = _a.sent();
                        console.error("Request sendProto exception: ".concat(error_2.message));
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, new Uint8Array()];
                }
            });
        });
    };
    return Client;
}());
exports.Client = Client;
var accountCache = new lru_cache_1.LRUCache({ max: 1000 });
var Authority = /** @class */ (function () {
    function Authority(url) {
        var _this = this;
        this.authorizationCache = new lru_cache_1.LRUCache({
            max: 1000,
            // how long to live in ms
            ttl: 1000 * 60 * 60,
            // async method to use for cache.fetch(), for stale-while-revalidate type of behavior
            fetchMethod: function (appId, oldValue, _a) {
                var signal = _a.signal;
                return __awaiter(_this, void 0, void 0, function () {
                    var app, response, data;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                app = accountCache.get(appId);
                                if (!app) {
                                    throw new Error("This appId certificate is not found. Please use the 'Metadata.addAccount()' method to add it.");
                                }
                                return [4 /*yield*/, Client.of(appId).sendForm(url, {
                                        grant_type: 'client_credentials',
                                        client_id: app[0],
                                        client_secret: app[1]
                                    }, null)];
                            case 1:
                                response = _b.sent();
                                data = new Map(Object.entries(response));
                                if (data.get('error')) {
                                    throw new Error(data.get('error'));
                                }
                                else {
                                    return [2 /*return*/, "".concat(data.get('token_type'), " ").concat(data.get('access_token'))];
                                }
                                return [2 /*return*/];
                        }
                    });
                });
            }
        });
    }
    Authority.of = function (url) {
        return new Authority(url);
    };
    Authority.addAuthority = function (appId, clientId, clientSecret) {
        accountCache.set(appId, [clientId, clientSecret]);
    };
    Authority.prototype.authorization = function (appId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.authorizationCache.fetch(appId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        console.error("Failed to retrieve authorization: ".concat(error_3.message));
                        throw new Error("Failed to retrieve authorization: ".concat(error_3.message));
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Authority;
}());
exports.Authority = Authority;
