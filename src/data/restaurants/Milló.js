const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "millo": {
        name: "Milló",
        themeColor: "#161616",
        logo: `${baseURL}companies/millo/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "exemplo@gmail.com",
        phone: "11 96027-3275",
        texts: [
            "Fundado em 2010 no Morumbi, o Milló Restaurante se consolidou como uma referência para quem busca variedade, qualidade e um ambiente acolhedor. Trabalhando no sistema por quilo e também com opção de comer à vontade, o restaurante oferece pratos sempre frescos e bem servidos — perfeitos para o ritmo do dia a dia de São Paulo.",

            "O cardápio reúne influências brasileiras, italianas, mexicanas, árabes e outras culinárias, criando uma experiência rica e diversa. Entre os destaques estão o churrasco, preparado diariamente, e o crepe, um dos queridinhos dos clientes. A proposta é simples: comida saborosa, farta e com aquele toque caseiro que faz diferença.",

            "Com um espaço moderno, amplo e descontraído, o Milló é frequentado por famílias, trabalhadores da região e moradores que buscam praticidade sem abrir mão da qualidade. Cada visita oferece uma experiência leve, marcada pelo atendimento cordial e por uma seleção de pratos que acompanha o movimento da cidade.",

            "Milló: tradição, variedade e sabor que conquistaram o Morumbi e transformaram o restaurante em um ponto gastronômico indispensável no bairro.",

            "A marca se destaca pela combinação entre praticidade e excelência culinária. É o tipo de lugar que rapidamente vira parte da rotina: refeições completas, ambiente agradável, serviço ágil e opções que atendem desde quem quer apenas um prato leve até quem procura um almoço robusto no estilo caseiro.",

            "Funcionando todos os dias, o Milló acompanha o ritmo intenso de São Paulo desde as primeiras horas da manhã até o final do expediente. A proposta é clara: oferecer pratos bem executados, variedade constante e atendimento simpático ao longo de todo o dia.",

            "A atmosfera é leve e informal, perfeita para quem quer fazer uma pausa no corre-corre do Morumbi. Sua localização estratégica e o ambiente acolhedor atraem moradores, profissionais da região e visitantes que buscam um restaurante confiável, saboroso e completo.",

            "Sempre valorizando simplicidade, fartura e bom atendimento, o Milló segue fazendo parte da rotina de quem busca um lugar prático, gostoso e com aquele toque especial que só os clássicos de bairro conseguem oferecer."

        ],
        history: [
            {
                title: "Fundação do Milló: as origens (2010)",
                year: "2010",
                image: { src: `${baseURL}companies/millo/outter_1.png`, alt: "Início do Restaurante" },
                text: `
                    O Milló nasceu em 2010 no Morumbi com uma proposta simples e ambiciosa:
                    oferecer refeições variadas, frescas e feitas no capricho, mantendo a tradição
                    da culinária brasileira e ao mesmo tempo incorporando influências italianas,
                    mexicanas e árabes. Desde o início, o sistema por quilo e o modelo comer à vontade
                    conquistaram clientes pela praticidade e pela sensação de comida caseira.
                `
            },
            {
                title: "Crescimento e consolidação da marca",
                year: "2019",
                image: { src: `${baseURL}companies/millo/outter_2.png`, alt: "Evolução do Milló" },
                text: `
                    Ao longo da década, o Milló se consolidou como um dos restaurantes mais tradicionais da região.
                    O churrasco e o crepe se tornaram grandes destaques, atraindo um público ainda maior.
                    Em 2019, a marca já era reconhecida pela variedade do cardápio, pelos espaços amplos
                    e pelo atendimento constante, tornando-se referência para moradores e trabalhadores do Morumbi.
                `
            },
            {
                title: "Milló hoje: referência gastronômica no Morumbi",
                year: "Atual",
                image: { src: `${baseURL}companies/millo/outter_3.png`, alt: "Milló Atual" },
                text: `
                    Hoje, o Milló segue como uma referência gastronômica no Morumbi.
                    Mantém sua essência: comida saborosa, ambiente acolhedor e um padrão de atendimento
                    que valoriza simplicidade e qualidade. Com um público fiel e presença sólida,
                    o restaurante continua fazendo parte da rotina de quem busca praticidade,
                    variedade e refeições realmente bem preparadas todos os dias.
                `
            }
        ],
        units: [
            {
                name: "Milló Moema",
                value: "millo-jardim-paulista",
                hourly: "SEG A SEX - 11h30 às 15h",
                phone: {
                    value: 11940796750,
                    formatted:"(11) 94079-6750"
                },
                location: {
                    extended: "Alameda Santos, 831 - Jardim Paulista, São Paulo - SP, 01419-001",
                    street: "Alameda Santos",
                    neighborhood: "Jardim Paulista",
                    city: "São Paulo",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "831",
                    zipCode: "01419-001",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29254.864168410753!2d-46.66844221386226!3d-23.573542169596763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d3d5d6e1b9%3A0x4c4a4c52902ef7fd!2sMill%C3%B3%20Churrasco%20na%20Brasa!5e0!3m2!1spt-BR!2sbr!4v1764425790508!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/millo/inner_1.png`, alt: "defaulImage"},
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
                            icon: "ball",
                            iconText: "Jogos de Futebol"
                        },
                        {
                            icon: "tank",
                            iconText: "Gerador de Energia Próprio"
                        },
                    ],
                },
                images: [
                    `${baseURL}companies/millo/outter_1.png`,
                    `${baseURL}companies/millo/outter_2.png`,
                    `${baseURL}companies/millo/highlight_1.png`,
                    `${baseURL}companies/millo/highlight_2.png`,
                    `${baseURL}companies/millo/highlight_3.png`,
                    `${baseURL}companies/millo/highlight_4.png`,
                    `${baseURL}companies/millo/inner_1.png`,
                ]
            },
            {
                name: "Milló Frei Caneca",
                value: "millo-frei-caneca",
                hourly: "SEG A SEX - 06h às 16h",
                phone: {
                    value: 11991940507,
                    formatted: "(11) 99194-0507"
                },
                location: {
                    extended: "R. Frei Caneca, 1395 - Consolação, São Paulo - SP, 01307-003",
                    street: "R. Frei Caneca",
                    city: "São Paulo",
                    neighborhood: "Frei Caneca",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "1395",
                    zipCode: "01307-003",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37936.75889942769!2d-46.68435519694706!3d-23.580838728715765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ccfe0b681b%3A0x3ba91038378a1f9d!2sRestaurante%20Mill%C3%B3%20Frei%20Caneca!5e0!3m2!1spt-BR!2sbr!4v1764430091654!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/millo/inner_7.png`, alt: "defaulImage"},
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
                    `${baseURL}companies/millo/highlight_5.png`,
                    `${baseURL}companies/millo/outter_3.png`,
                    `${baseURL}companies/millo/inner_2.png`,
                    `${baseURL}companies/millo/inner_3.png`,
                    `${baseURL}companies/millo/highlight_6.png`,
                    `${baseURL}companies/millo/inner_4.png`,
                    `${baseURL}companies/millo/inner_5.png`,
                    `${baseURL}companies/millo/inner_6.png`,
                    `${baseURL}companies/millo/inner_7.png`,
                    `${baseURL}companies/millo/highlight_7.png`,

                ]
            },
            {
                name: "Milló Morumbi",
                value: "millo-morumbi",
                hourly: "SEG A SEX - 11h30 às 14h30",
                phone: {
                    value: 1151817008,
                    formatted:"(11) 5181-7008"
                },
                location: {
                    extended: "R. Joerg Bruder, 149 - Morumbi, São Paulo - SP, 04710-200",
                    street: "R. Joerg Bruder",
                    city: "São Paulo",
                    neighborhood: "Morumbi",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "149",
                    zipCode: "04710-200",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58516.351034201456!2d-46.73462435136718!3d-23.55867479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50dcd48bc049%3A0x8dc73eb6ccb81ae9!2sMill%C3%B3%20Restaurante%20Morumbi!5e0!3m2!1spt-BR!2sbr!4v1764430317214!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/millo/inner_10.png`, alt: "defaulImage"},
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
                    `${baseURL}companies/millo/outter_4.png`,
                    `${baseURL}companies/millo/outter_5.png`,
                    `${baseURL}companies/millo/inner_8.png`,
                    `${baseURL}companies/millo/inner_9.png`,
                    `${baseURL}companies/millo/inner_10.png`,
                ]
            },
            {
                name: "Milló Consolação",
                value: "millo-consolacao",
                hourly: "SEG A SEX - 11h30 às 14h45",
                phone: {
                    value: 1151817008,
                    formatted:"(11) 5181-7008"
                },
                location: {
                    extended: "R. Matias Aires, 413 - Consolação, São Paulo - SP, 01309-020",
                    street: "R. Matias Aires",
                    city: "São Paulo",
                    neighborhood: "Consolação",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "413",
                    zipCode: "01309-020",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58516.351034201456!2d-46.73462435136718!3d-23.55867479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce590656ddddc9%3A0x6f15cb66f2786a1c!2zTWlsbG8gY29uc29sYcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1764430476777!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/millo/outter_6.png`, alt: "defaulImage"},
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
                    `${baseURL}companies/millo/inner_4.png`,
                    `${baseURL}companies/millo/inner_5.png`,
                    `${baseURL}companies/millo/inner_6.png`,
                    `${baseURL}companies/millo/inner_7.png`,
                    `${baseURL}companies/millo/outter_6.png`,
                    `${baseURL}companies/millo/highlight_7.png`,

                ]
            },
            {
                name: "Milló Itaim Bibi",
                value: "millo-itaim-bibi",
                hourly: "SEG A SEX - 11h30 às 15h00",
                phone: {
                    value: 1151817008,
                    formatted:"(11) 5181-7008"
                },
                location: {
                    extended: "R. Joaquim Floriano, 473 - Itaim Bibi, São Paulo - SP, 04534-011",
                    street: "R. Joaquim Floriano",
                    city: "São Paulo",
                    neighborhood: "Itaim Bibi",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "473",
                    zipCode: "04534-011",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58516.351034201456!2d-46.73462435136718!3d-23.55867479999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce575e9631a6ab%3A0xb8111206d443c899!2sMill%C3%B3%20Churrasco%20Na%20Brasa!5e0!3m2!1spt-BR!2sbr!4v1764430571468!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/millo/inner_1.png`, alt: "defaulImage"},
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
                    `${baseURL}companies/millo/highlight_3.png`,
                    `${baseURL}companies/millo/highlight_4.png`,
                    `${baseURL}companies/millo/inner_1.png`,
                    `${baseURL}companies/millo/highlight_5.png`,
                    `${baseURL}companies/millo/outter_3.png`,
                ]
            }                  
        ],
        images: [
            `${baseURL}companies/millo/outter_1.png`,
            `${baseURL}companies/millo/outter_2.png`,
            `${baseURL}companies/millo/highlight_1.png`,
            `${baseURL}companies/millo/highlight_2.png`,
            `${baseURL}companies/millo/highlight_3.png`,
            `${baseURL}companies/millo/highlight_4.png`,
            `${baseURL}companies/millo/inner_1.png`,
            `${baseURL}companies/millo/highlight_5.png`,
            `${baseURL}companies/millo/outter_3.png`,
            `${baseURL}companies/millo/inner_2.png`,
            `${baseURL}companies/millo/inner_3.png`,
            `${baseURL}companies/millo/highlight_6.png`,
            `${baseURL}companies/millo/inner_4.png`,
            `${baseURL}companies/millo/inner_5.png`,
            `${baseURL}companies/millo/inner_6.png`,
            `${baseURL}companies/millo/inner_7.png`,
            `${baseURL}companies/millo/highlight_7.png`,
            `${baseURL}companies/millo/outter_6.png`,
            `${baseURL}companies/millo/outter_4.png`,
            `${baseURL}companies/millo/outter_5.png`,
            `${baseURL}companies/millo/inner_8.png`,
            `${baseURL}companies/millo/inner_9.png`,
            `${baseURL}companies/millo/inner_10.png`,
            `${baseURL}companies/millo/inner_11.jpg`,
            `${baseURL}companies/millo/inner_12.jpg`,
            `${baseURL}companies/millo/inner_13.jpg`,

        ],
        banners: [
            `${baseURL}companies/millo/outter_3.png`,
            `${baseURL}companies/millo/inner_8.png`,
            `${baseURL}companies/millo/inner_9.png`,
        ],
        highlights: [
            `${baseURL}companies/millo/highlight_1.png`,
            `${baseURL}companies/millo/highlight_2.png`,
            `${baseURL}companies/millo/highlight_3.png`,
        ],
        cards: [
            `${baseURL}companies/millo/inner_1.png`,
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
            facebook: "https://www.facebook.com/Millo.nabrasa",
            instagram: "https://www.instagram.com/millonabrasa/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511940796750",
        }
    },
}