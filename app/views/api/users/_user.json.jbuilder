json.extract! user,  :username, :id, :songs

if user.profile_pic.attached?
    json.profilePic url_for(user.profile_pic)
else
    json.profilePic 'https://soundwave-seeds.s3.amazonaws.com/images/black+default+profile+picture.jpeg'
end