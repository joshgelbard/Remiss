class User < ApplicationRecord
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :password_digest, :session_token, :username, presence: true
  validates :username, :session_token, uniqueness: true

  before_validation :ensure_session_token

  attr_reader :password

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
end
