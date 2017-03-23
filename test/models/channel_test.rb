# == Schema Information
#
# Table name: channels
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  channel_type :string           not null
#  purpose      :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  creator_id   :integer          not null
#  invitee_id   :integer
#

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
