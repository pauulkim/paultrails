class User < ApplicationRecord
  validates :email, :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true } # password can be nil b/c it doesn't exist within db

  
  
  after_initialize :ensure_session_token # makes sure a user has a session token
  
  attr_reader :password # used to validate password
  
  # password setter method bc it doesn't exist within db, used for validation and to create password_digest  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  # checks if input password is the same as password_digest
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  # finds a user by their credentials
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
  
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end