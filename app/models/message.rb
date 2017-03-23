# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :body, :user_id, :channel_id, presence: true

  after_commit { MessageRelayJob.perform_later(self, self.channel) }

  belongs_to :author,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :channel

end
