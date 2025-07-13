"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageElement = void 0;
const DocumentElement_1 = require("./DocumentElement");
class ImageElement extends DocumentElement_1.DocumentElement {
    constructor(imagePath) {
        super();
        this.imagePath = imagePath;
    }
    render() {
        return `[Image: ${this.imagePath}]`;
    }
}
exports.ImageElement = ImageElement;
