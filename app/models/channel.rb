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

class Channel < ApplicationRecord
  CHANNEL_TYPES = ['CHANNEL', 'DM'].freeze
  validates :name, presence: true, uniqueness: true, length: { maximum: 20 }
  validates :channel_type, inclusion: { in: CHANNEL_TYPES }

  validate :name_validator

  after_save :invite_participants

  has_many :channel_memberships, dependent: :destroy

  has_many :members,
  through: :channel_memberships,
  source: :user

  has_many :messages

  def creator
    User.find_by(id: self.creator_id)
  end

  def allow_user?(user)
    true
  end

  private

  def invite_participants
    ChannelMembership.create!(channel_id: self.id, user_id: self.creator_id)
    if self.channel_type == 'DM'
      ChannelMembership.create!(channel_id: self.id, user_id: self.invitee_id)
    end
  end

  def name_validator
    unless /^[a-zA-Z0-9_-]*$/ =~ self.name
      errors.add(:name, 'must consist only of numbers, letters, - and _')
    end
  end

end
