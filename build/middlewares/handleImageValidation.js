"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handleImageValidation = function (req, res, next) {
    var fileName = req.query.fileName || '';
    var width = req.query.width;
    var height = req.query.height;
    var fileNameAndExtentionArr = fileName.split('.');
    if (!fileNameAndExtentionArr[0]) {
        return res.status(400).send("Invalid fileName.");
    }
    if (!fileNameAndExtentionArr[1]) {
        return res.status(400).send("Please provide image type also.");
    }
    if (fileNameAndExtentionArr[1] && fileNameAndExtentionArr[1].toUpperCase() !== "JPG") {
        return res.status(400).send("Invalid image type. We accept only jpg");
    }
    if (fileNameAndExtentionArr[1] && fileNameAndExtentionArr[1].toUpperCase() === "JPG") {
        if (!width && !height) {
            return next();
        }
        if (Number.isNaN(parseInt(width)) || Number.isNaN(parseInt(height)) || Number(width) <= 0 || Number(height) <= 0) {
            return res.status(400).send("Try again with valid width and height.");
        }
    }
    next();
};
exports.default = handleImageValidation;
