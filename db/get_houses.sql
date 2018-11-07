select * from houses
join users on users.user_id = houses.user_id
where user_id = $1