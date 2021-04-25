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
Object.defineProperty(exports, "__esModule", { value: true });
var imageHelpers_1 = require("../helpers/imageHelpers");
var path = require('path');
var handleImageProcessing = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var fileName, width, height, flag, processedImageName, processedImageFlag, isCreated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileName = req.query.fileName;
                width = req.query.width;
                height = req.query.height;
                return [4 /*yield*/, imageHelpers_1.findFullImage(fileName)];
            case 1:
                flag = _a.sent();
                if (!flag) return [3 /*break*/, 6];
                if (!(!width && !height)) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(200).sendFile(path.join(__dirname, imageHelpers_1.imagePath, fileName))];
            case 2:
                processedImageName = imageHelpers_1.getProcessedImageName(fileName, width, height);
                return [4 /*yield*/, imageHelpers_1.findProcessedImage(processedImageName)];
            case 3:
                processedImageFlag = _a.sent();
                if (!processedImageFlag) return [3 /*break*/, 4];
                return [2 /*return*/, res.status(200).sendFile(path.join(__dirname, imageHelpers_1.processedImagePath, processedImageName))];
            case 4: return [4 /*yield*/, imageHelpers_1.createProcessedImage(fileName, processedImageName, width, height)];
            case 5:
                isCreated = _a.sent();
                if (isCreated) {
                    return [2 /*return*/, res.status(200).sendFile(path.join(__dirname, imageHelpers_1.processedImagePath, processedImageName))];
                }
                else {
                    return [2 /*return*/, res.status(500).send("Something bad happend")];
                }
                _a.label = 6;
            case 6: return [2 /*return*/, res.status(404).send("Image not found")];
        }
    });
}); };
exports.default = handleImageProcessing;
