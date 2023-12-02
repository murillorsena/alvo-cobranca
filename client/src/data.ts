export const items = [
    {
        storeCode: "10001",
        storeName: "Marisa",
        storeEmail: "contato@marisa.com",
        storeContact: "(51) 98765-4321",
        shoppingName: "BSWA",
        shoppingDescription: "Bourbon Shopping Wallig",
        userName: "Tim Clarkson",
        amount: "R$ 358.404,72",
        delayedDays: 65,
        expenses: [
            {
                description: "Reserva de Área",
                amount: 0.01,
                dueDate: "05/04/2023",
                delayedDays: 1,
                status: "Vencido"
            }, {
                description: "Encargos Condominiais",
                amount: 0.01,
                dueDate: "05/04/2023",
                delayedDays: 0,
                status: "À Vencer"
            }, {
                description: "Fundo de Promoção",
                amount: 10000.00,
                dueDate: "05/04/2023",
                delayedDays: 65,
                status: "Vencido"
            }, {
                description: "Multa",
                amount: 1500.00,
                dueDate: "10/04/2023",
                delayedDays: 60,
                status: "Vencido"
            }, {
                description: "Multa Rescisória",
                amount: 10000.00,
                dueDate: "05/05/2023",
                delayedDays: 35,
                status: "Vencido"
            }, {
                description: "Aluguel Complementar",
                amount: 1500.00,
                dueDate: "10/05/2023",
                delayedDays: 30,
                status: "Vencido"
            }, {
                description: "Aluguel Mínimo",
                amount: 10000.00,
                dueDate: "05/06/2023",
                delayedDays: 4,
                status: "Vencido"
            }, {
                description: "Taxa de Cessão e Transferência",
                amount: 1500.00,
                dueDate: "10/06/2023",
                delayedDays: -1,
                status: "Vencendo"
            }, {
                description: "Nota Promissória de Condomínio",
                amount: 10000.00,
                dueDate: "05/07/2023",
                delayedDays: -26,
                status: "À Vencer"
            }, {
                description: "Nota Promissória de Aluguel",
                amount: 1089138.96,
                dueDate: "10/07/2023",
                delayedDays: 10000,
                // delayedDays: -31,
                status: "Vencido"
            }
        ],
        notifications: [
            {
                userName: "Kane Frost",
                type: "call",
                title: "Atendimento realizado",
                content: "Contato realizado com o lojista, Notificação enviada por e-mail, SMS enviado para a caixa de correspondências, Contato realizado com o lojista, Notificação enviada por e-mail, SMS enviado para a caixa de correspondências, Contato realizado com o lojista, Notificação enviada por e-mail, SMS enviado para a caixa de correspondências, Contato realizado com o lojista, Notificação enviada por e-mail, SMS enviado para a caixa de correspondências, Contato realizado com o lojista, Notificação enviada por e-mail, SMS enviado para a caixa de correspondências, Contato realizado com o lojista, Notificação enviada por e-mail, SMS enviado para a caixa de correspondências",
                // content: "/// 13/10 SINARA: Envio e-mailo automático D10. /// 20/10 SINARA: Tentei contato telefônico com Eduardo nesta data, sem sucesso. Registrei e-mail e watts, solicitando programação de pgt, informando cobrança encargos e não isenção e apontamento automático ao Serasa. Eduardo retorna contato via fone solicita boletos vct 10/2021 para pagamento nesta data, e informa que os boletos que seguem em atraso serão pagos até 29/10. ACOMPANHAR e ligar novamente.  /// 17/11 SINARA: Envio e-mail automático. /// 23/11 SINARA - Contato telefônico sem sucesso. Enviei e-mail com a planilha dos débitos solicitando uma previsão de pagamento. /// 26/11 SINARA: Conforme contato telefônico com Sr Eduardo o mesmo solicita novo contato na segunda 29/11 pois não estava conseguindo atender neste momento. LIGAR 29/11 /// 30/11 PEDRO - Contato telefonico sem sucesso. Enviei whats formalizando e solicitando retorno. /// 01/12 Pedro - Contato tefônico sem sucesso. Enviei email formalizando e enviando os boletos orignais com maior atraso (11 boletos) para que ele atualizasse e pagasse. Eduardo retonrou ligação e prometeu pagar hoje os boletos com vencimentos mais antigos até dia 20/10. E disse que pagaria dia 10/12 os vencimentos 25/10. /// 02/12 Pedro - Eduardo pagou os boletos prometidos. /// 09/12 Pedro - Ligação sem sucesso para Eduardo, enviei msg whats solicitando retorno. Quero apresentar proposta: isentar multa e ele paga um vcto a mais do que prometido para amanhã.  /// 10/12 Pedro - Contato telefonico sem sucesso. Enviei mensagem no whats que aguardamos confirmação de pegamento. /// 13.12 KARINA: Enviado E-mail Automático D10./// 16/12 Pedro - autorizada isenção da multa para pagamento dos 4 ultimos vctos. Eduardo disse que fará o pgmto amanhã. Solicitei a isenção para o financeiro. AGUARDANDO. /// 17/12 PEDRO - Enviei boletos atualizados isentos de mutla para pgamento hoje.  /// 20/12 Pedro - Pagamento confirmado /// 23/12 Pedro - Enviei email com débitos solicitando previsão de pgmto e alertando Serasa. /// 24/12 Pedro - Cliente prometeu pagar dia 28/12 os ultimos 3 vctos com isneçaõ da multa autorizado pela Juliana.  /// 27/12 Pedro Multas isentas pelo financeiro. ENVIAR BOLETOS AMANHÃ. /// 28/12 Pedro - Enviados os boletos.  /// 29/12 PEDRO - Pgmto confirmado. Enviado tabela com valores em aberto para o cliente.  /// 04/01 Pedro - Enviei email com débitos solicitando previsao de pgmto.  Eduardo ligou, programou pagamento para dia 07/01 dos mais atrasados e dia 14/01 dos outros. Pediu isenção de encargos, Juliana autorizou isenção da multa. Solicitei isenção para o Financeiro.  /// 06/01 Pedro - Enviei email confirmando o pgmto dos boletos para amanhã.  /// 07/01 Pedro - Boletos enviados por email. Ligação sem sucesso. Enviei msg whats solicitando confirmação de pgmto agendado para hoje. . /// 13/01/22 SINARA: Envio e-mail automático. /// 19/01 SINARA: Envio e-mail solicitando programação de pagamento, informando cobrança de encargos. AGUARDO RETORNO. /// 21/01 Pedro - Enviado tabela com débitos solicitando retorno com previsao de pgmto.  /// 25/01 Pedro - Conversei com Eduardo. Prometeu pagar dia 28/01 os vctos: 05/01 e 15/01. E dia 31/01 o vcto: 10/01. Ju autorizou isenção da multa. Aguardando Financeiro.  /// 28/01 Pedro - Boletos programados para hoje enviados.   /// 31/01 Pedro - Boletos programados para hoje enviados.  /// 01/02 Pedro - Marcio ligou relatando problemas com os boeltos, enviei novamente. /// 14/02/22 MAURÍCIO: enviado email automatico D3. /// 17/02 SINARA: Envio nesta data de e-mail solicitando programação de pagamento e informando cobrança encargos e apontamento automático ao Serasa. AGUARDO RETORNO. /// 21/02 Pedro - Ligação par Marcio, este pediu que tratasse com o Eduardo. Ligação sem sucesso para Eduardo. Enviai msg whats solicitando retorno.  /// 22/02 Pedro - Combinado com Eduardo pgmto de parte dos boletos atrasados no dia 28/02 com isenção da multa autorizada pela Juliana. Solicitado ao financeiro.  /// 25/02 Pedro - Liguei para Eduardo e eavisei que os boletos já estão com a multa isenta para pagamento no dia 28/02.  /// 02/03 Pedro - Conversei ocm Marcio e enviei os boletos programados para pgmto.  /// 03/03 Pedro - Pgmto confirmado.  /// 07/03 Pedro - Enviado tabela de débitos, alertando serasa e solicitando previsão de pgmto.  /// 08/03 Pedro - Conversei com Eduardo, ele prometeu pagar até dia 18/03 as parcelas 10/02. /// 14/03 Pedro - Enviado e-mail automático///18/03 Pedro - Boletos programados enviados. Envio email automatico.  /// 21/03 Pedro - Pgmto programados confirmados. /// 25/03 Pedro - Enviado tabela de débitos, alertando serasa e solicitando previsão de pgmto. /// 28/03 Pedro - Eduardo retornou programando pgmto para dia 30/03, com ienção da multa aut Ju. Solicitei ao financeiro./// 30/03 Pedro - Enviado boletos atualizados para pgmto hoje.  COntatei Marcio, ele confirmou que fariam os pagamentos hoje.   /// 05/04 Pedro - Enviado tabela de débitos, alertando serasa e solicitando previsão de pgmto. /// 07/04 Pedro - Ligação sem sucesso. enviei msg whats solicitando retorno. Eduardo retornou, disse que recebeu o e-mail, está viajando à trabalho agora mas vai passar programação de pagamento amanhã.  /// 11/04 Pedro - Enviei email solicitando retornou referente à programação de pgmto.  Eduardo ligou e passou programação de pagamento para o dia 20/04. /// 20/04 Pedro - Boletos programados enviados.  /// 22/04 Pedro - Pgmto confirmado.  /// 27/04 Pedro - Enviado tabela de débitos, alertando serasa e solicitando previsão de pgmto. /// 29/04 Pedro - Contatei Eduardo, ele disse que a esposa estava fazendo cirurgia e pediu que eu retornasse segunda-feira para programar os pgmtos. /// 02/05 Pedro - Ligação sem sucesso, enviei msg whats solicitando retorno.  Eduardo retornou, combinamos pagamento dos boletos dia 13/05 e 20/05. /// 13/05 Pedro - Enviei boletos programados por email. Enviei whats avisando do envio e solicitando confirmação de pgmto. /// 16/05 Pedro - Boletos programados, pagos. /// 19/05 Pedro - Enviei email preventivo para pagamento programao para amanhã.  /// 20/05 Pedro - Enviei boletos atualizados por email. Liguei para Eduardo e Marcio para avisar, porem sem sucesso. Enviei msg whats para Eduardo alertando o envio do boletos por email e solicitando confirmação de pgmto.  /// 23/05 Pedro - Pgmtos confirmados.  /// 25/05 Pedro - Enviei email com tabela de débitos solicitando programação de pagamento. Enviei whats informando do email e solicitando programação de pgmto. //// 26/05 Pedro - Eduardo ligou para dizer que segunda-feira terá programação de pgmot para os boletos.  /// 30/05 pedro - Ligação sem sucesso para Eduardo, enviei whats formalizando e solicitando retorno. Eduardo retonrou ligação e programou pagamento para o dia 17/06.  /// 08/06 Pedro - Envio email D5./// 15/06 Pedro - Envio de whats preventivo. /// 17/06 Pedro - Enviei os boletos programados. Liguei para Eduardo para confirmar. //23/6 JULIANA ENCAMINHOU AVISO DE ATRASO E ENCARGOS.  /// - 28/06 cliente solicitou boelto de mairo atraso para pagamentos hoje, / Mauricio enviou boletos por e-mail./// 29/6 AÇÃO COBRANÇA EFETUADA.",
                createdAt: "2023-11-16T23:16:18.167Z"
            }, {
                userName: "Kane Frost",
                type: "email",
                title: "Email enviado",
                content: "Notificação enviada por e-mail",
                createdAt: "2023-01-12T19:30:18.167Z"
            }, {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T10:15:59.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }, {
                name: "Maria",
                email: "maria@mail.com",
                phone: "(51) 98765-4321",
                role: "Fiador"
            }
        ]
    }, {
        storeCode: "10002",
        storeName: "Burger King",
        storeEmail: "contato@burgerking.com",
        shoppingName: "BSAB",
        shoppingDescription: "Bourbon Shopping Assis Brasil",
        userName: "Kane Frost",
        amount: "R$ 120.120,57",
        delayedDays: 96,
        expenses: [
            {
                description: "Aluguel Mínimo",
                amount: 2000,
                dueDate: "05/03/2023",
                delayedDays: 96
            }, {
                description: "Encargo Condominial",
                amount: 700,
                dueDate: "10/06/2023",
                delayedDays: 1
            }, {
                description: "Aluguel Complementar",
                amount: 200,
                dueDate: "15/06/2023",
                delayedDays: 6
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }, {
        storeCode: "10003",
        storeName: "Pizza Hut",
        storeEmail: "contato@pizzahut.com",
        shoppingName: "BSCA",
        shoppingDescription: "Bourbon Shopping Canoas",
        userName: "Kane Frost",
        amount: "R$ 84.889,90",
        delayedDays: 1,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 800,
                dueDate: "10/06/2023",
                delayedDays: 1
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }, {
        storeCode: "10004",
        storeName: "Spirito Santo",
        storeEmail: "contato@spiritosanto.com",
        shoppingName: "BSIP",
        shoppingDescription: "Bourbon Shopping Ipiranga",
        userName: "Kane Frost",
        amount: "R$ 59.838,44",
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 150000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }, {
        storeCode: "10005",
        storeName: "Panvel",
        storeEmail: "contato@panvel.com",
        shoppingName: "BSCT",
        shoppingDescription: "Bourbon Shopping Country",
        userName: "Kane Frost",
        amount: "R$ 53.301,14",
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 50000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }, {
        storeCode: "10006",
        storeName: "Bella Gula",
        storeEmail: "contato@bellagula.com",
        shoppingName: "BSSL",
        shoppingDescription: "Bourbon Shopping São Leopoldo",
        userName: "Kane Frost",
        amount: "R$ 46.065,67",
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 51000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ],
        notifications: [
        ]
    }, {
        storeCode: "10007",
        storeName: "Beagle",
        storeEmail: "contato@beagle.com",
        shoppingName: "BSNH",
        shoppingDescription: "Bourbon Shopping Novo Hamburgo",
        userName: "Kane Frost",
        amount: "R$ 18.93,28",
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }, {
        storeCode: "10008",
        storeName: "Vivo",
        storeEmail: "contato@vivo.com",
        shoppingName: "BSSP",
        shoppingDescription: "Bourbon Shopping São Paulo",
        userName: "Kane Frost",
        amount: "R$ 38.906,60",
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }, {
        storeCode: "10009",
        storeName: "Chillibeans",
        storeEmail: "contato@chillibeans.com",
        shoppingName: "PACL",
        shoppingDescription: "Porto Alegre CenterLar",
        userName: "Kane Frost",
        amount: "R$ 21.722,48",
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }, {
        storeCode: "10010",
        storeName: "Cinemark",
        storeEmail: "contato@cinemark.com",
        shoppingName: "MOSH",
        shoppingDescription: "Moinhos Shopping",
        userName: "Kane Frost",
        amount: "R$ 16.395,92",
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }, {
        storeCode: "10011",
        storeName: "Paquetá Esportes",
        storeEmail: "contato@paquetaesportes.com",
        shoppingName: "BSPL",
        shoppingDescription: "Bourbon Shopping San Pellegrino",
        userName: "Kane Frost",
        amount: "R$ 12.887,17",
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }, {
        storeCode: "10012",
        storeName: "Lojas Renner",
        storeEmail: "contato@lojasrenner.com",
        shoppingName: "BSTS",
        shoppingDescription: "Bourbon Shopping Teresópolis",
        userName: "Kane Frost",
        amount: "R$ 9.931,11",
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 10000000,
                dueDate: "30/05/2023",
                delayedDays: 10,
                status: "Vencido"
            }, {
                description: "Nota Promissória Condomínio",
                amount: 3000000,
                dueDate: "10/06/2023",
                delayedDays: 10,
                status: "Vencido"
            }
        ],
        notifications: [
            {
                userName: "Tim Clarkson",
                type: "message",
                title: "Mensagem enviada",
                content: "SMS enviado para a caixa de correspondências",
                createdAt: "2023-11-01T23:16:18.167Z"
            }
        ],
        representatives: [
            {
                name: "João",
                email: "joao@mail.com",
                phone: "(51) 98765-4321",
                role: "Representante Legal"
            }
        ]
    }
];