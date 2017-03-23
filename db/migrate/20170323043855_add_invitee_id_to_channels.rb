class AddInviteeIdToChannels < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :invitee_id, :integer
  end
end
