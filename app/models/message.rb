class Message < ApplicationRecord
  validates :body, :user_id, :channel_id, presence: true

  def author
    User.find(self.user_id)
  end
end
