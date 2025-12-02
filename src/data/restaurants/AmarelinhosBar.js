const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "amarelinho-bar": {
        name: "Amarelinho Bar",
        themeColor: "#1a1a1aff",
        logo: `${baseURL}companies/amarelinho-bar/logo.jpg`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "amarelinhosguarulhosbar@gmail.com",
        phone: "(11) 2479 6622 | (11) 3631-7287",
        texts: [
            "O Amarelinho Bar é um dos pontos mais tradicionais e simpáticos de Guarulhos. Com um clima descontraído, atendimento próximo e aquela energia boa de bar de bairro, o espaço atrai quem busca um lugar agradável para curtir, conversar e aproveitar bons momentos entre amigos.",

            "A atmosfera vibrante e acolhedora faz do Amarelinho um destino certo tanto para quem quer relaxar depois do trabalho quanto para quem prefere estender a noite. Iluminação agradável, música na medida e um serviço sempre cuidadoso criam um ambiente perfeito para qualquer ocasião.",

            "Os detalhes do espaço misturam simplicidade, estilo e um toque urbano, formando o cenário ideal para encontros, aniversários, comemorações, happy hours ou aquela pausa estratégica no fim do dia. Tanto na unidade da Vila Camargos quanto na Bela Vista, o padrão é o mesmo: boa comida, boa vibe e conforto o tempo todo.",

            "Cada visita tem seu charme próprio — seja pelo clima, pelo cardápio ou pela companhia. O ambiente foi pensado para ser leve, convidativo e cheio de personalidade.",

            "Com presença marcante em Guarulhos, o Amarelinho Bar já se tornou ponto de encontro natural para fotos, boas conversas e lembranças especiais. A essência está no acolhimento, na simplicidade bem feita e no cuidado com cada detalhe do atendimento.",

            "Misturando autenticidade, alegria e aquele espírito de bairro que todos conhecem, o Amarelinho Bar conquistou moradores e visitantes. É o tipo de lugar que transforma qualquer momento em algo gostoso de viver e dividir."
        ],
        history: [
            {
                title: "Amarelinho Bar Hoje: Tradição e Convivência em Guarulhos",
                year: "Atual",
                image: { src: `${baseURL}companies/amarelinho-bar/highlight_1.jpg`, alt: "Amarelinho Bar Atual" },
                text: `
                Hoje, o Amarelinho Bar é uma referência querida em Guarulhos.
                Mantendo um ambiente leve, atendimento amigável e a proposta de ser um ponto de encontro
                para todos os estilos, o bar segue evoluindo sem perder sua essência. Seja na Vila Camargos
                ou na Bela Vista, o Amarelinho reúne boa comida, clima acolhedor e a energia que faz parte
                da história das duas unidades — sempre recebendo quem chega com simplicidade e carisma.
                `
            }
        ],
        units: [           
            {
                name: "Amarelinho Bar",
                value: "amarelinho-bar",
                hourly: "TER A QUI E DOM - 17h às 02h | SEX A SAB - 17h às 03h",
                phone: {
                    value: 11978301699,
                    formatted:"(11) 97830-1699",
                },
                email: "amarelinhosguarulhosbar@gmail.com",
                location: {
                    extended: "R. Sílvio Barbosa, 44 - Vila Camargos, Guarulhos - SP, 07111-020",
                    street: "R. Sílvio Barbosa",
                    city: "Guarulhos",
                    neighborhood: "Vila Camargos",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "44",
                    zipCode: "07111-020",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.8260525956143!2d-46.52594232394874!3d-23.46673817886497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5512a38df21%3A0x5e2a57896fd5998d!2sAmarelinhos%20Bar%20Centro!5e0!3m2!1spt-BR!2sbr!4v1764678123082!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/amarelinho-bar/inner_1.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/amarelinho-bar/inner_1.jpg`,
                    `${baseURL}companies/amarelinho-bar/inner_2.jpg`,
                    `${baseURL}companies/amarelinho-bar/inner_3.jpg`,
                    `${baseURL}companies/amarelinho-bar/inner_4.jpg`,
                    `${baseURL}companies/amarelinho-bar/highlight_1.jpg`,
                    `${baseURL}companies/amarelinho-bar/highlight_2.jpg`,
                    `${baseURL}companies/amarelinho-bar/highlight_3.jpg`,
                    `${baseURL}companies/amarelinho-bar/outter_1.jpg`,
                    `${baseURL}companies/amarelinho-bar/outter_2.jpg`,
                    `${baseURL}companies/amarelinho-bar/outter_3.jpg`,
                    `${baseURL}companies/amarelinho-bar/outter_4.jpg`,
                ]
            },
            {
                name: "Amarelinho Bar Bela Vista",
                value: "amarelinho-bar-bela-vista",
                hourly: "TER A QUI E DOM - 17h às 01h | SEX - 17h às 03h | SAB - 12h às 03h",
                phone: {
                    value: 11989689989,
                    formatted:"(11) 98968-9989",
                },
                email: "amarelinhosbarbelavista@gmail.com",
                location: {
                    extended: "Praça Juscelino Kubitschek de Oliveira, 105 - Jardim Bela Vista, Guarulhos - SP, 07133-420",
                    street: "Praça Juscelino Kubitschek de Oliveira",
                    city: "Guarulhos",
                    neighborhood: "Jardim Bela Vista",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "105",
                    zipCode: "07133-420",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.76908596647!2d-46.51721061581424!3d-23.432707202426812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8b1acd70e90f%3A0xa1257626f3856fc5!2sAmarelinhos%20Bar%20Bela%20Vista!5e0!3m2!1spt-BR!2sbr!4v1764679203013!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/amarelinho-bar/inner_1.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/amarelinho-bar/outter_5.jpg`,
                    `${baseURL}companies/amarelinho-bar/inner_5.jpg`,
                    `${baseURL}companies/amarelinho-bar/inner_6.jpg`,
                    `${baseURL}companies/amarelinho-bar/highlight_4.jpg`,
                    `${baseURL}companies/amarelinho-bar/highlight_5.jpg`,
                    `${baseURL}companies/amarelinho-bar/highlight_6.jpg`,
                ]
            },                  
        ],
        images: [
            `${baseURL}companies/amarelinho-bar/inner_1.jpg`,
            `${baseURL}companies/amarelinho-bar/inner_2.jpg`,
            `${baseURL}companies/amarelinho-bar/inner_3.jpg`,
            `${baseURL}companies/amarelinho-bar/inner_4.jpg`,
            `${baseURL}companies/amarelinho-bar/highlight_1.jpg`,
            `${baseURL}companies/amarelinho-bar/highlight_2.jpg`,
            `${baseURL}companies/amarelinho-bar/highlight_3.jpg`,
            `${baseURL}companies/amarelinho-bar/outter_1.jpg`,
            `${baseURL}companies/amarelinho-bar/outter_2.jpg`,
            `${baseURL}companies/amarelinho-bar/outter_3.jpg`,
            `${baseURL}companies/amarelinho-bar/outter_4.jpg`,
            `${baseURL}companies/amarelinho-bar/outter_5.jpg`,
            `${baseURL}companies/amarelinho-bar/inner_5.jpg`,
            `${baseURL}companies/amarelinho-bar/inner_6.jpg`,
            `${baseURL}companies/amarelinho-bar/highlight_4.jpg`,
            `${baseURL}companies/amarelinho-bar/highlight_5.jpg`,
            `${baseURL}companies/amarelinho-bar/highlight_6.jpg`,
        ],
        banners: [
            `${baseURL}companies/amarelinho-bar/outter_1.jpg`,
            `${baseURL}companies/amarelinho-bar/inner_5.jpg`,
            `${baseURL}companies/amarelinho-bar/outter_2.jpg`,
        ],
        highlights: [
            `${baseURL}companies/amarelinho-bar/highlight_1.jpg`,
            `${baseURL}companies/amarelinho-bar/highlight_2.jpg`,
            `${baseURL}companies/amarelinho-bar/highlight_4.jpg`,
        ],
        cards: [
            `${baseURL}companies/amarelinho-bar/highlight_5.jpg`,
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
            facebook: "https://www.facebook.com/AmarelinhosBarGuarulhos/",
            instagram: "https://www.instagram.com/amarelinhosbarguarulhos/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511978301699",
        }
    },
}