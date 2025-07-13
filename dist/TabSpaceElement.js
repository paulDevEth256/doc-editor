"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabSpaceElement = void 0;
const DocumentElement_1 = require("./DocumentElement");
class TabSpaceElement extends DocumentElement_1.DocumentElement {
    render() {
        return "\t";
    }
}
exports.TabSpaceElement = TabSpaceElement;
