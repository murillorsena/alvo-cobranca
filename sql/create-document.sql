drop table document;

create table document (
	id serial primary key,
    type text not null unique,
    description text not null unique
);

insert into document (type, description) values ('DB', 'Reserva de Área');
insert into document (type, description) values ('DC', 'Encargos Condominiais');
insert into document (type, description) values ('DD', 'Fundo de Promoção');
insert into document (type, description) values ('DE', 'Multa');
insert into document (type, description) values ('DF', 'Multa Rescisória');
insert into document (type, description) values ('DH', 'Aluguel Complementar');
insert into document (type, description) values ('DL', 'Aluguel Mínimo');
insert into document (type, description) values ('DT', 'Cessão e Transferência');
insert into document (type, description) values ('DZ', 'Pagamento Manual');
insert into document (type, description) values ('NC', 'Nota Promissória de Condomínio');
insert into document (type, description) values ('NP', 'Nota Promissória de Aluguel');
insert into document (type, description) values ('ZP', 'Lançamento de Pagamento');

select * from document;
