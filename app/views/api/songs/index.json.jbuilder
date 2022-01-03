@songs.each do |song|
    json.set! song.id do
        json.partial! 'song', song: song
        if song.cover_photo.attached? 
            json.set! "coverPhoto", url_for(song.cover_photo)
        else 
            json.set! "coverPhoto", ''
        end
    end
end