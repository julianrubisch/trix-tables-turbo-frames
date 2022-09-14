// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import Trix from "trix";
import "@rails/actiontext";

const buttonHTML =
  '<button type="button" class="trix-button trix-button--icon trix-button--icon-table" title="table" tabindex="-1"  data-action="trix-table#attachTable">table</button>';

const buttonGroupElement = document
  .querySelector("trix-editor")
  .toolbarElement.querySelector("[data-trix-button-group=file-tools]");

buttonGroupElement.insertAdjacentHTML("beforeend", buttonHTML);
