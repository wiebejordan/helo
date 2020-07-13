create table helo_post(
    post_id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer REFERENCES helo_users(user_id)
);