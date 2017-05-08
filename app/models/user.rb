# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username,
            presence: true,
            uniqueness: true,
            length: { minimum: 1, maximum: 20 },
            format: /\A[a-zA-Z0-9_-]*\z/
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :password_digest, presence: true

  after_initialize :ensure_session_token
  after_save :join_default_channels

  attr_reader :password

  has_many :channel_memberships, dependent: :destroy
  has_many :channels, through: :channel_memberships
  has_many :messages

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def join_channel(channel)
    if channel
      ChannelMembership.create(channel_id: channel.id, user_id: self.id)
    end
  end

  private

  def join_default_channels
    general = Channel.find_by_name('general')
    jmc = Channel.find_by_name('join_more_channels')
    join_channel(general)
    join_channel(jmc)
  end

end
