drop table if exists users;

create table users(
user_id serial primary key,
username text,
password text
)


insert into users(username, password)
values('test','pass')