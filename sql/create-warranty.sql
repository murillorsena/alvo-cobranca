drop table warranty;

create table warranty (
	id serial primary key,
	description text not null unique
);

insert into warranty (description) values ('Fiador');
insert into warranty (description) values ('Carta Fiança');
insert into warranty (description) values ('Seguro Fiança');
insert into warranty (description) values ('Caução');
insert into warranty (description) values ('Benfeitoria\Equipamentos');
insert into warranty (description) values ('Sem Garantia');
insert into warranty (description) values ('Pagamento Antecipado');
insert into warranty (description) values ('Título de Capitalização');
insert into warranty (description) values ('Hipoteca');
insert into warranty (description) values ('CredPago');

select * from warranty;
