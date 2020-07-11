insert into helo_user (
    username,
    email,
    password,
) values (
    ${username},
    ${email},
    ${password},
    
)
returning user_id, username, email, profile_picture;