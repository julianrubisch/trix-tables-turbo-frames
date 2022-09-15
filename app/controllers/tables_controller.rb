class TablesController < ApplicationController
  layout false

  def create
    @table = ActionText::Table.create

    render json: {
      sgid: @table.attachable_sgid,
      content: render_to_string(partial: "tables/editor", locals: {table: @table}, formats: [:html])
    }
  end
end
