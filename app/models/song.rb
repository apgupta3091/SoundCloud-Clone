class Song < ApplicationRecord 
    validates :title, :artist_id, presence:true 
    validates :genre, inclusion: { in: ['pop', 'hip-hop', 'edm'] }
    validates :song_file, presence:true
    validates :cover_photo, presence:true  



    belongs_to :artist,
    primary_key: :id, 
    foreign_key: :artist_id,
    class_name: :User 

    has_one_attached :cover_photo

    has_one_attached :song_file 

    
end