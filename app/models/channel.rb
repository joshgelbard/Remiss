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
#

class Channel < ApplicationRecord
  CHANNEL_TYPES = ['CHANNEL', 'DM'].freeze
  validates :name, presence: true, uniqueness: true
  validates :channel_type, inclusion: { in: CHANNEL_TYPES }
  has_many :channel_memberships, dependent: :destroy
  has_many :members,
  through: :channel_memberships,
  source: :user

  def allow_user?(user)
    true
  end
end
