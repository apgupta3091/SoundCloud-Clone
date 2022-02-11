json.extract! song, :id, :title, :genre 
json.createdAt time_ago_in_words(song.created_at)


json.comments do
    song.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body
            json.commenter do 
                if comment.commenter.profile_pic.attached?
                    json.profilePic url_for(comment.commenter.profile_pic)
                else
                    json.profilePic 'https://soundwave-seeds.s3.amazonaws.com/images/saber.jpg'
                end
                json.extract! comment.commenter, :id, :username
            end
            json.commentCreatedTime time_ago_in_words(comment.created_at)
        end
    end
end


json.artist do
    json.extract! song.artist, :id, :username
    if song.artist.profile_pic.attached?
        json.profilePic url_for(song.artist.profile_pic)
    else
        json.profilePic 'https://soundwave-seeds.s3.amazonaws.com/images/saber.jpg'
    end
end

if song.cover_photo.attached? 
    json.coverPhoto url_for(song.cover_photo)
end

if song.song_file.attached? 
    json.songFile url_for(song.song_file)
end