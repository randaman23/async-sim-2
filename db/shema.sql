drop table if exists users;

create table users(
user_id serial primary key,
username text,
password text
)


insert into users(username, password)
values('test','pass')

create table houses(
house_id serial primary key,
user_id int references users(user_id),
property_name text,
description text,
address text,
city text, 
state text,
zip int,
image text,
loan_amount int,
monthly_mortgage int,
desired_rent int
)

insert into houses(user_id, property_name, description, address, city, state, zip, image, loan_amount, monthly_mortgage, desired_rent)
values(2, 'yes', 'something', 'add', 'city', 'state', 884848, 'image', 1, 1, 1 )