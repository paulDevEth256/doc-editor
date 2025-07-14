import { Document } from "./Document";
import { Persistence } from "./infrastructure/persistance/Persistence";
import { TextElement } from "./core/elements/TextElement";
import { ImageElement } from "./core/elements/ImageElement";
import { NewLineElement } from "./core/elements/NewLineElement";
import { TabSpaceElement } from "./core/elements/TabSpaceElement";

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
