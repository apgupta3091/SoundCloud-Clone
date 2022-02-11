
@users.each do |user|
    json.set! user.id do 
        json.partial! 'user', user: user   
        if user.profile_pic.attached?
            json.profilePic url_for(user.profile_pic)
        else
            json.profilePic 'https://soundwave-seeds.s3.amazonaws.com/images/saber.jpg'
        end
    end
end