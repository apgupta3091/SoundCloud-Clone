json.extract! song, :id, :title, :genre 
json.createdAt time_ago_in_words(song.created_at)



json.artist do
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
    json.coverPhoto 'https://soundwave2-dev.s3.amazonaws.com/1gxouq8fafnfyf3s7b70r8jr5g6a'
end

if song.song_file.attached? 
    json.songFile url_for(song.song_file)
else
    json.songFile ''
end