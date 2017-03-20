class AddCreatorIdToChannels < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :creator_id, :integer, null: false
  end
end
