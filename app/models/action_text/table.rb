class ActionText::Table < ApplicationRecord
  include ActionText::Attachable

  attribute :content_type, :string, default: "text/html"

  def to_trix_content_attachment_partial_path
    "tables/editor"
  end

  def to_partial_path
    "tables/table"
  end
end
