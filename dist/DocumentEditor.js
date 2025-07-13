"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentEditor = void 0;
const TextElement_1 = require("./TextElement");
const ImageElement_1 = require("./ImageElement");
const NewLineElement_1 = require("./NewLineElement");
const TabSpaceElement_1 = require("./TabSpaceElement");
class DocumentEditor {
    constructor(document, storage) {
        this.document = document;
        this.storage = storage;
        this.renderedDocument = "";
    }
    addText(text) {
        this.document.addElement(new TextElement_1.TextElement(text));
    }
    addImage(imagePath) {
        this.document.addElement(new ImageElement_1.ImageElement(imagePath));
    }
    addNewLine() {
        this.document.addElement(new NewLineElement_1.NewLineElement());
    }
    addTabSpace() {
        this.document.addElement(new TabSpaceElement_1.TabSpaceElement());
    }
    renderDocument() {
        if (!this.renderedDocument) {
            this.renderedDocument = this.document.render();
        }
        return this.renderedDocument;
    }
    saveDocument() {
        this.storage.save(this.renderDocument());
    }
}
exports.DocumentEditor = DocumentEditor;
