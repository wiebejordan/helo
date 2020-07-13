select u.username, u.profile_picture from helo_users u
where
u.user_id = $1;