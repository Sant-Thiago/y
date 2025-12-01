const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "terracinho": {
        name: "Terracinho Lounge e Bar",
        themeColor: "#000000ff",
        logo: `${baseURL}companies/terracinho/logo.jpg`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "terracinho.exemplob@gmail.com",
        phone: "(11) 97053-1689",
        texts: [
            "O Terracinho Lounge e Bar é um dos pontos mais acolhedores e animados da Cidade Tiradentes. Com uma proposta descontraída, música boa e um atendimento próximo, o espaço se tornou referência para quem busca um ambiente agradável para relaxar, confraternizar e aproveitar bons momentos em São Paulo.",

            "Conhecido pela atmosfera leve e pelo clima sempre movimentado, o Terracinho oferece uma experiência completa para quem gosta de aproveitar o dia ou a noite com conforto. Aqui, cada detalhe é pensado para receber bem: iluminação agradável, áreas amplas e um serviço sempre atencioso garantem momentos especiais para todos os públicos.",

            "O bar combina um ambiente urbano com toques modernos, criando um cenário perfeito para encontros, aniversários, confraternizações ou simplesmente para curtir a vibe do bairro. Seja no almoço, no fim de tarde ou à noite, o Terracinho mantém o mesmo padrão: energia boa, comida gostosa e um espaço feito para se sentir à vontade.",

            /*A proposta do Terracinho Lounge e Bar é simples e clara: */"Oferece experiências que unem gastronomia, música e convivência em um espaço que celebra o melhor da vida em comunidade."/* Um lugar onde cada visita tem seu próprio charme, seja pela companhia, pelo clima ou por aquela pausa merecida no meio da correria.*/,

            "Com uma presença cada vez mais forte na região, o Terracinho é o tipo de bar que convida naturalmente para fotos, encontros e boas lembranças. Sua essência está no ambiente acolhedor e no cuidado com cada detalhe, garantindo que cada passagem por lá se torne uma experiência marcante.",

            "Misturando autenticidade, simplicidade e boa energia, o Terracinho Lounge e Bar conquistou moradores e visitantes da Cidade Tiradentes. Um espaço que une sabor, descontração e aquele espírito de bairro que transforma cada momento em algo especial."
        ],
        history: [
            {
                title: "Terracinho Hoje: Experiência Acolhedora e Completa",
                year: "Atual",
                image: { src: `${baseURL}companies/terracinho/highlight_1.jpg`, alt: "Terracinho Atual" },
                text: `
                Atualmente, o Terracinho Lounge e Bar é um dos pontos mais queridos da Cidade Tiradentes.
                Com um ambiente descontraído, atendimento amigável e uma proposta que valoriza boa
                convivência, o espaço se tornou escolha frequente de moradores e visitantes que buscam
                um lugar agradável para aproveitar o dia ou a noite. O bar segue evoluindo e mantendo
                sua essência acolhedora, formada pela energia única do bairro e pelas pessoas que fazem
                parte da sua história.
                `
            }
        ],
        units: [           
            {
                name: "Terracinho Louge e Bar",
                value: "terracinho",
                hourly: "SEG - 17h às 01h | TER A DOM - 12h às 01h",
                phone: "(11) 97053-1689",
                location: {
                    extended: "R. Dona Eloá Do Valle Quadros, 426 - Cidade Tiradentes, São Paulo - SP, 08485-130",
                    street: "R. Dona Eloá Do Valle Quadros",
                    city: "São Paulo",
                    neighborhood: "Cidade Tiradentes",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "426",
                    zipCode: "08060-090",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6705.9184471009075!2d-46.414560573507195!3d-23.588977262328672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f0012c941d9%3A0xb529279ee5878b5d!2sO%20terracinho%20lounge%20bar%20%26%20restaurante!5e0!3m2!1spt-BR!2sbr!4v1764609484933!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/terracinho/inner_1.jpg`, alt: "defaulImage"},
                            title: {saloon: `Salão Principal`, quantity: "48 Pessoas"},
                            text:  `Fazemos eventos de 32 lugares, salão compartilhado com o público do restaurante. \nDisponível na segunda e quarta no almoço e de quinta a sexta no jantar.`
                        },
                        
                        
                    ],
                    "differences": [
                        {
                            icon: "car",
                            iconText: "Estacionamento Amplo e Seguro"
                        },
                        {
                            icon: "tank",
                            iconText: "Gerador de Energia Próprio"
                        },
                    ],
                },
                images: [
                    `${baseURL}companies/terracinho/inner_1.jpg`,
                    `${baseURL}companies/terracinho/highlight_1.jpg`,
                    `${baseURL}companies/terracinho/highlight_2.jpg`,
                    `${baseURL}companies/terracinho/highlight_3.jpg`,
                    `${baseURL}companies/terracinho/highlight_4.jpg`,
                    `${baseURL}companies/terracinho/highlight_5.jpg`,
                    `${baseURL}companies/terracinho/highlight_6.jpg`,
                    `${baseURL}companies/terracinho/highlight_7.jpg`,
                    `${baseURL}companies/terracinho/highlight_8.jpg`,
                    `${baseURL}companies/terracinho/highlight_9.jpg`,
                ]
            },                  
        ],
        images: [
            `${baseURL}companies/terracinho/inner_1.jpg`,
            `${baseURL}companies/terracinho/highlight_1.jpg`,
            `${baseURL}companies/terracinho/highlight_2.jpg`,
            `${baseURL}companies/terracinho/highlight_3.jpg`,
            `${baseURL}companies/terracinho/highlight_4.jpg`,
            `${baseURL}companies/terracinho/highlight_5.jpg`,
            `${baseURL}companies/terracinho/highlight_6.jpg`,
            `${baseURL}companies/terracinho/highlight_7.jpg`,
            `${baseURL}companies/terracinho/highlight_8.jpg`,
            `${baseURL}companies/terracinho/highlight_9.jpg`,
        ],
        banners: [
            `${baseURL}companies/terracinho/highlight_1.jpg`,
            `${baseURL}companies/terracinho/inner_1.jpg`,
            `${baseURL}companies/terracinho/highlight_9.jpg`,
        ],
        highlights: [
            `${baseURL}companies/terracinho/highlight_4.jpg`,
            `${baseURL}companies/terracinho/highlight_7.jpg`,
            `${baseURL}companies/terracinho/highlight_6.jpg`,
        ],
        cards: [
            `${baseURL}companies/terracinho/highlight_5.jpg`,
        ],
        menuItens: [
            {
                id: 1,
                category: "Pratos do Dia",
                itens: [
                    {
                        id: 11,
                        name: "Virado à Paulista",
                        image: `${baseURL}companies/seu-joao/food_5.jpeg`,
                        description: "Nosso Virado à Paulista suculento acompanha arroz, feijão, fritas ou legumes. Pratos da Segunda Feira.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 40.00, formatted: "R$ 40,00" }
                    },
                    {
                        id: 12,
                        name: "Strogonoff (Filé Mignon)",
                        image: `${baseURL}companies/seu-joao/food_9.png`,
                        description: "Nosso Strognoff de Filé Mignon acompanha arroz e batata palha. Prato da Terça Feira",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 43.00, formatted: "R$ 43,00" }
                    },
                    {
                        id: 13,
                        name: "Bife à Role",
                        image: defaultDish,
                        description: "Nosso maravilhoso Bife à Role acompanha arroz, feijão e purê. Prato da Terça Feira.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 36.00, formatted: "R$ 36,00" }
                    },
                    {
                        id: 14,
                        name: "Risoto de Alho Poró com Contra filé",
                        image: `${baseURL}companies/seu-joao/food_10.png`,
                        description: "Nosso imperdível Risoto de Alho Poró c/ Contra Filé acompanha arroz, couve, torresmo, farofa, banan à milanesa, bisteca, calabresa defumada e batida. Prato da Quarta Feira.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 44.90, formatted: "R$ 44,90" }
                    }
                ]
            },
            {
                id: 2,
                category: "Porções",
                itens: [
                    {
                        id: 21,
                        name: "Porção de Croquetes",
                        image: `${baseURL}companies/casa-pellegrini/food_4.png`,
                        description: "São 4 Crocantes Croquetes de Carne, Acompanha Mostarda Escura",
                        measure: { value: 4, formatted: "4 unidades" },
                        price: { value: 43.90, formatted: "R$ 43,90" }
                    },
                    {
                        id: 22,
                        name: "Porção de Batata",
                        image: `${baseURL}companies/casa-pellegrini/food_5.png`,
                        description: "Cone Médio de Batata Frita, Acompanha Nosso Famoso Molho de Alho",
                        measure: { value: "médio", formatted: "Médio" },
                        price: { value: 24.90, formatted: "R$ 24,90" }
                    },
                    {
                        id: 23,
                        name: "Porção de Frango",
                        image: `${baseURL}companies/casa-pellegrini/food_6.png`,
                        description: "Cone Médio de Frango Empanado, Acompanha Nosso Molho Especial Parmesan Garlic.",
                        measure: { value: "médio", formatted: "Médio" },
                        price: { value: 36.90, formatted: "R$ 36,90" }
                    }
                ]
            },
            {
                id: 3,
                category: "Sobremesas",
                itens: [
                    {
                        id: 31,
                        name: "Pudim",
                        image: `${baseURL}companies/seu-joao/food_19.png`,
                        description: "Sobremesa de Pudim.",
                        price: { value: 10.00, formatted: "R$ 10,00" }
                    },
                    {
                        id: 32,
                        name: "Pettit Gateau",
                        image: `${baseURL}companies/seu-joao/food_20.png`,
                        description: "Sobremesa de Pettit Gateau.",
                        price: { value: 24.00, formatted: "R$ 24,00" }
                    },
                    {
                        id: 33,
                        name: "Creme de Papaya",
                        image: `${baseURL}companies/seu-joao/food_21.png`,
                        description: "Sobremesa de Creme Papaya.",
                        price: { value: 20.00, formatted: "R$ 20,00" }
                    }
                ]
            },
            {
                id: 4,
                category: "Bebidas",
                itens: [
                    {
                        id: 41,
                        name: "Coca Comum",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_1.png`,
                        description: "Refrigerante Coca-Cola Comum Lata 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 42,
                        name: "Coca Zero",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_2.png`,
                        description: "Refrigerante Coca-Cola Zero Lata 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 43,
                        name: "Guaraná Antarctica",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_3.png`,
                        description: "Refrigerante Guaraná Antarctica Lata 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 44,
                        name: "Guaraná Antarctica Zero",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_4.png`,
                        description: "Refrigerante Guaraná Antarctica Zero Lata 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 45,
                        name: "Mate Leão",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_5.png`,
                        description: "Chá Mate Leão Garrafa 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 46,
                        name: "Água Mineral com Gás",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_6.png`,
                        description: "Água Mineral com Gás Garrafa 500ml",
                        measure: { value: 500, formatted: "500ml" },
                        price: { value: 4.90, formatted: "R$ 4,90" }
                    },
                    {
                        id: 47,
                        name: "Água Mineral Sem Gás",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_7.png`,
                        description: "Água Mineral sem Gás Garrafa 500ml",
                        measure: { value: 500, formatted: "500ml" },
                        price: { value: 4.90, formatted: "R$ 4,90" }
                    }
                ]
            }
        ],
        links: {
            facebook: "https://www.facebook.com/terracinhoclub",
            instagram: "https://www.instagram.com/terracinhoclub/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511970531689",
        }
    },
}