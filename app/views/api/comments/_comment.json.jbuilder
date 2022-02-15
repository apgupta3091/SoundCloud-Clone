json.extract! comment, :id, :body, :created_at
json.commenter do 
    json.extract! comment.commenter, :id, :username
    if comment.commenter.profile_pic.attached?
        json.profilePic url_for(comment.commenter.profile_pic)
    else
        json.profilePic 'https://soundwave-seeds.s3.amazonaws.com/images/black+default+profile+picture.jpeg'
    end
end