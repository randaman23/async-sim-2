select * from houses
join users on users.user_id = houses.user_id
where houses.user_id = $1