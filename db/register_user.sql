insert into helo_users (
    username,
    password,
    profile_picture
) values (
    ${username},
    ${password},
    ${profilePicture}
    
)
returning user_id, username, profile_picture;