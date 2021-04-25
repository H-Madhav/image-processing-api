"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var index_1 = __importDefault(require("./routes/index"));
var app = express();
var port = 3002;
app.use('/', index_1.default);
app.listen(port, function () {
    console.log("app listening at http://localhost:" + port);
});
exports.default = app;
