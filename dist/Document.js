"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
class Document {
    constructor() {
        this.documentElements = [];
    }
    addElement(element) {
        this.documentElements.push(element);
    }
    render() {
        return this.documentElements.map((e) => e.render()).join("");
    }
}
exports.Document = Document;
