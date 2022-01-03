json.extract! songs, :id, :title, :genre 



json.uploader do
    json.extract! song.artist, :id, :username
    if song.artist.profile_pic.attached?
        json.profilePic url_for(song.artist.profile_pic)
    else
        json.profilePic ''
    end
end

if song.cover_photo.attached? 
    json.coverPhoto url_for(song.cover_photo)
else 
    json.coverPhoto ''
end

if song.song_file.attached? 
    json.songFile url_for(song.song_file)
end