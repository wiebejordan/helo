select p.post_id, p.title, p.img, p.content, p.author_id, u.username, u.profile_picture from helo_post p
join helo_users u on p.author_id = u.user_id
where p.author_id != $1 and p.title = $2;