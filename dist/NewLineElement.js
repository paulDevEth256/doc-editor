"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewLineElement = void 0;
const DocumentElement_1 = require("./DocumentElement");
class NewLineElement extends DocumentElement_1.DocumentElement {
    render() {
        return "\n";
    }
}
exports.NewLineElement = NewLineElement;
