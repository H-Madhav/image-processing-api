"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// /api/images?fileName=xyz&width=200&height=200
var express = require('express');
var images = express.Router();
var handleImageValidation_1 = __importDefault(require("../../middlewares/handleImageValidation"));
var handleImageProcessing_1 = __importDefault(require("../../middlewares/handleImageProcessing"));
images.get('/', [handleImageValidation_1.default, handleImageProcessing_1.default]);
exports.default = images;
