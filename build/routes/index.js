"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var images_1 = __importDefault(require("./api/images"));
var express = require('express');
var routes = express.Router();
routes.get("/", function (req, res) {
    res.redirect('/api/images?fileName=fjord.jpg');
});
routes.use('/api/images', images_1.default);
exports.default = routes;
