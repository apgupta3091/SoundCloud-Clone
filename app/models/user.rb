class User < ApplicationRecord

    validates :username, :email, :session_token, presence: true, uniqueness:true 
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6}, allow_nil:true 

    attr_reader :password 
    after_initialize :ensure_session_token

    has_many :songs,
    primary_key: :id, 
    foreign_key: :artist_id,
    class_name: :Song 

    has_many :comments,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :Comment


    has_one_attached :profile_pic

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user 
        else
            nil 
        end
    end

    def is_password?(password)
        password_object =  BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

end