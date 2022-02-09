json.extract! comment, :id, :body, :created_at
json.commenter do 
    json.extract! comment.commenter, :id, :username
    if comment.commenter.profile_pic.attached?
        json.profilePic url_for(comment.commenter.profile_pic)
    else
        json.profilePic ''
    end
end