import { Controller } from "@hotwired/stimulus";
import { patch } from "@rails/request.js";

export default class extends Controller {
  static values = {
    url: String,
  };

  async updateCell(event) {
    const response = await patch(this.urlValue, {
      body: { value: event.target.textContent },
      query: {
        operation: "updateCell",
        row_index: event.target.dataset.rowIndex,
        column_index: event.target.dataset.columnIndex,
      },
      contentType: "application/json",
      responseKind: "json",
    });
  }
}
