class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      t.text :body, null: false
      t.index :user_id
      t.index :channel_id
      t.timestamps
    end
  end
end
