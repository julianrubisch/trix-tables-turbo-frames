import { Controller } from "@hotwired/stimulus";
import Trix from "trix";
import { post } from "@rails/request.js";

export default class extends Controller {
  static values = {
    url: String,
  };

  initialize() {
    const buttonHTML =
      '<button type="button" class="trix-button trix-button--icon trix-button--icon-table" title="table" tabindex="-1" data-trix-action="attach-table" data-action="trix-table#attachTable">table</button>';
    const buttonGroupElement = this.editorElement.toolbarElement.querySelector(
      "[data-trix-button-group=file-tools]"
    );
    buttonGroupElement.insertAdjacentHTML("beforeend", buttonHTML);
  }

  connect() {
    this.element.addEventListener("turbo:submit-end", (e) => {
      this.element.closest("turbo-frame").reload();
    });
  }

  async attachTable(event) {
    const response = await post(this.urlValue);

    if (response.ok) {
      const tableAttachment = await response.json;
      this.insertTable(tableAttachment);
    } else {
    }
  }

  insertTable(tableAttachment) {
    this.attachment = new Trix.Attachment(tableAttachment);
    this.editorElement.editor.insertAttachment(this.attachment);
    this.element.focus();
  }

  get editorElement() {
    return this.element.querySelector("trix-editor");
  }
}
