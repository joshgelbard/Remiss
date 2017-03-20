class CreateChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.string :channel_type, null: false
      t.text :purpose
      t.index :name, unique: true
      t.timestamps
    end
  end
end
