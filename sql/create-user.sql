drop table "user";

create table user (
	id serial primary key,
	name text not null,
	email text not null unique,
	password text not null
);

insert into user (name, email, password) values ('user1', 'user1@mail.com', 'user1password');
insert into user (name, email, password) values ('user2', 'user2@mail.com', 'user2password');
