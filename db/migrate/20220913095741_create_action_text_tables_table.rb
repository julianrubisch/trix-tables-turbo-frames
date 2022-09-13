class CreateActionTextTablesTable < ActiveRecord::Migration[7.0]
  def change
    create_table :action_text_tables do |t|
      t.json :content, null: false, default: ""

      t.timestamps
    end
  end
end
