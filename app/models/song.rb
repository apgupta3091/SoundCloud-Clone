class Song < ApplicationRecord 
    validates :title, :artist_id, presence:true 
    validates :genre, inclusion: { in: ['pop', 'hip-hop', 'edm'] }
    validate :ensure_song_file
    validate :ensure_cover_photo



    belongs_to :artist,
    primary_key: :id, 
    foreign_key: :artist_id,
    class_name: :User 

    has_many :comments,
        primary_key: :id,
        foreign_key: :song_id,
        class_name: :Comment

    has_one_attached :cover_photo

    has_one_attached :song_file 

    def ensure_cover_photo
        unless self.cover_photo.attached?
            errors[:cover_photo] << " is required*"
        end
    end

    def ensure_song_file
        unless self.song_file.attached?
            errors[:song_file] << " is required*"
        end
    end
    
end