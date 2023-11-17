export const items = [
    {
        storeCode: "10001",
        storeName: "Marisa",
        storeEmail: "contato@marisa.com",
        storeContact: "(51) 98765-4321",
        shoppingName: "BSWA",
        shoppingDescription: "Bourbon Shopping Wallig",
        userName: "Tim Clarkson",
        amount: "R$ 6.875.719,23",
        delayedDays: 65,
        expenses: [
            {
                description: "Aluguel Mínimo",
                amount: 0.01,
                dueDate: "05/04/2023",
                delayedDays: 1,
                status: "Vencido"
            }, {
                description: "Aluguel Mínimo",
                amount: 0.01,
                dueDate: "05/04/2023",
                delayedDays: 0,
                status: "À Vencer"
            }, {
                description: "Aluguel Mínimo",
                amount: 10000.00,
                dueDate: "05/04/2023",
                delayedDays: 65,
                status: "Vencido"
            }, {
                description: "Encargo Condominial",
                amount: 1500.00,
                dueDate: "10/04/2023",
                delayedDays: 60,
                status: "Vencido"
            }, {
                description: "Aluguel Mínimo",
                amount: 10000.00,
                dueDate: "05/05/2023",
                delayedDays: 35,
                status: "Vencido"
            }, {
                description: "Encargo Condominial",
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
                description: "Encargo Condominial",
                amount: 1500.00,
                dueDate: "10/06/2023",
                delayedDays: -1,
                status: "Vencendo"
            }, {
                description: "Aluguel Mínimo",
                amount: 10000.00,
                dueDate: "05/07/2023",
                delayedDays: -26,
                status: "À Vencer"
            }, {
                description: "Encargo Condominial",
                amount: 1500.00,
                dueDate: "10/07/2023",
                delayedDays: -31,
                status: "Vencido"
            }
        ],
        notifications: [
            {
                id: 1,
                userName: "Kane Frost",
                type: "call",
                label: "Atendimento realizado",
                content: "Contato realizado com o lojista",
                createdAt: "2023-11-16T23:16:18.167Z"
            }, {
                id: 2,
                userName: "Kane Frost",
                type: "email",
                label: "Email enviado",
                content: "Notificação enviada por e-mail",
                createdAt: "2023-01-12T23:16:18.167Z"
            }, {
                id: 3,
                userName: "Tim Clarkson",
                type: "message",
                label: "Mensagem enviada",
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
        amount: 2900,
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
        notifications: [],
        representatives: []
    }, {
        storeCode: "10003",
        storeName: "Pizza Hut",
        storeEmail: "contato@pizzahut.com",
        shoppingName: "BSCA",
        shoppingDescription: "Bourbon Shopping Canoas",
        userName: "Kane Frost",
        amount: 800,
        delayedDays: 1,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 800,
                dueDate: "10/06/2023",
                delayedDays: 1
            }
        ]    
    }, {
        storeCode: "10004",
        storeName: "Spirito Santo",
        storeEmail: "contato@spiritosanto.com",
        shoppingName: "BSIP",
        shoppingDescription: "Bourbon Shopping Ipiranga",
        userName: "Kane Frost",
        amount: 150000,
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 150000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ]    
    }, {
        storeCode: "10005",
        storeName: "Panvel",
        storeEmail: "contato@panvel.com",
        shoppingName: "BSCT",
        shoppingDescription: "Bourbon Shopping Country",
        userName: "Kane Frost",
        amount: 50000,
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 50000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ]    
    }, {
        storeCode: "10006",
        storeName: "Bella Gula",
        storeEmail: "contato@bellagula.com",
        shoppingName: "BSSL",
        shoppingDescription: "Bourbon Shopping São Leopoldo",
        userName: "Kane Frost",
        amount: 51000,
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 51000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ]
    }, {
        storeCode: "10007",
        storeName: "Beagle",
        storeEmail: "contato@beagle.com",
        shoppingName: "BSNH",
        shoppingDescription: "Bourbon Shopping Novo Hamburgo",
        userName: "Kane Frost",
        amount: 100000,
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ]    
    }, {
        storeCode: "10008",
        storeName: "Vivo",
        storeEmail: "contato@vivo.com",
        shoppingName: "BSSP",
        shoppingDescription: "Bourbon Shopping São Paulo",
        userName: "Kane Frost",
        amount: 100000,
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ]    
    }, {
        storeCode: "10009",
        storeName: "Chillibeans",
        storeEmail: "contato@chillibeans.com",
        shoppingName: "PACL",
        shoppingDescription: "Porto Alegre CenterLar",
        userName: "Kane Frost",
        amount: 100000,
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ]    
    }, {
        storeCode: "10010",
        storeName: "Cinemark",
        storeEmail: "contato@cinemark.com",
        shoppingName: "MOSH",
        shoppingDescription: "Moinhos Shopping",
        userName: "Kane Frost",
        amount: 100000,
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ]    
    }, {
        storeCode: "10011",
        storeName: "Paquetá Esportes",
        storeEmail: "contato@paquetaesportes.com",
        shoppingName: "BSPL",
        shoppingDescription: "Bourbon Shopping San Pellegrino",
        userName: "Kane Frost",
        amount: 100000,
        delayedDays: 10,
        expenses: [
            {
                description: "Encargo Condominial",
                amount: 100000,
                dueDate: "30/05/2023",
                delayedDays: 10
            }
        ]    
    }, {
        storeCode: "10012",
        storeName: "Lojas Renner",
        storeEmail: "contato@lojasrenner.com",
        shoppingName: "BSTS",
        shoppingDescription: "Bourbon Shopping Teresópolis",
        userName: "Kane Frost",
        amount: 100000,
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
        ]    
    }
];