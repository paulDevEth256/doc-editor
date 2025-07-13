import { Document } from "./Document";
import { FileStorage } from "./FileStorage";
import { DocumentEditor } from "./DocumentEditor";

const document = new Document();
const storage = new FileStorage();

const editor = new DocumentEditor(document, storage);

editor.addText("Hello, world!");
editor.addNewLine();
editor.addText("This is a real-world document editor example.");
editor.addNewLine();
editor.addTabSpace();
editor.addText("Indented text after a tab space.");
editor.addNewLine();
editor.addImage("picture.jpg");

console.log(editor.renderDocument());
editor.saveDocument();
