class Song < ApplicationRecord 
    validates :title, :artist_id, presence:true 
    validates :genre, inclusion: { in: ['pop', 'hip-hop', 'alternative', 'electronic'] }
    validates :song_file_validation

    belongs_to :artist,
    primary_key: :id, 
    foreign_key: :artist_id,
    class_name: :User 

    has_one_attached :cover_photo

    has_one_attached :song_file 

    def song_file_validation 
        unless self.song_file.attached?
            errors[:song_file] << 'is required *' 
        end
    end
end