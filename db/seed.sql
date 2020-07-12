create table if not exists helo_users (
    user_id serial primary key,
    username varchar(20),
    password text,
    profile_picture text
);

create table if not exists post (
    post_id serial primary key,
    user_id int references helo_users(user_id),
    post_url text
);