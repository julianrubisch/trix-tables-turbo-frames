import { Controller } from "@hotwired/stimulus";
import Trix from "trix";
import { post } from "@rails/request.js";

export default class extends Controller {
  static values = {
    url: String,
  };

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
    this.element
      .querySelector("trix-editor")
      .editor.insertAttachment(this.attachment);
    this.element.focus();
  }
}
