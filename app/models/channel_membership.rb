# == Schema Information
#
# Table name: channel_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMembership < ApplicationRecord
  validates :user, :channel, presence: true
  validates :user, uniqueness: { scope: :channel_id }
  belongs_to :user
  belongs_to :channel
end
