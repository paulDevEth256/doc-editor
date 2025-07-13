"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextElement = void 0;
const DocumentElement_1 = require("./DocumentElement");
class TextElement extends DocumentElement_1.DocumentElement {
    constructor(text) {
        super();
        this.text = text;
    }
    render() {
        return this.text;
    }
}
exports.TextElement = TextElement;
