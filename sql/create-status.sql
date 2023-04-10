drop table status_de_negociacao;

create table status_de_negociacao (
    id serial primary key,
    description text not null unique
);

insert into status_de_negociacao (description) values ("Acordo Fechado");
insert into status_de_negociacao (description) values ("Acordo Quebrado");
insert into status_de_negociacao (description) values ("Aditivo Enviado e Aguardando Retorno");
insert into status_de_negociacao (description) values ("Aguardando Pagamento");
insert into status_de_negociacao (description) values ("Aguardando Retorno da Simulação");
insert into status_de_negociacao (description) values ("Aguardando Confecção do Aditivo");
insert into status_de_negociacao (description) values ("Aguardando Confecção do Contrato");
insert into status_de_negociacao (description) values ("Contrato Enviado e Aguardando Retorno");
insert into status_de_negociacao (description) values ("Contrato Recebido");
insert into status_de_negociacao (description) values ("Em Negociação");
insert into status_de_negociacao (description) values ("E-mail Automático");
insert into status_de_negociacao (description) values ("Estabelecendo Contato");
insert into status_de_negociacao (description) values ("Não Localizado");
insert into status_de_negociacao (description) values ("Promessa de Pagamento");
insert into status_de_negociacao (description) values ("Promessa de Pagamento \ DR");
insert into status_de_negociacao (description) values ("Quebra de Programação");
insert into status_de_negociacao (description) values ("Reunião Agendada");
insert into status_de_negociacao (description) values ("Sem Contato");
insert into status_de_negociacao (description) values ("Sem Interesse");
insert into status_de_negociacao (description) values ("Sem Previsão de Pagamento");

select * from status_de_negociacao;
