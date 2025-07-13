import { Document } from "./Document";
import { Persistence } from "./Persistence";
import { TextElement } from "./TextElement";
import { ImageElement } from "./ImageElement";
import { NewLineElement } from "./NewLineElement";
import { TabSpaceElement } from "./TabSpaceElement";

export class DocumentEditor {
  private renderedDocument = "";

  constructor(private document: Document, private storage: Persistence) {}

  addText(text: string): void {
    this.document.addElement(new TextElement(text));
  }

  addImage(imagePath: string): void {
    this.document.addElement(new ImageElement(imagePath));
  }

  addNewLine(): void {
    this.document.addElement(new NewLineElement());
  }

  addTabSpace(): void {
    this.document.addElement(new TabSpaceElement());
  }

  renderDocument(): string {
    if (!this.renderedDocument) {
      this.renderedDocument = this.document.render();
    }
    return this.renderedDocument;
  }

  saveDocument(): void {
    this.storage.save(this.renderDocument());
  }
}
