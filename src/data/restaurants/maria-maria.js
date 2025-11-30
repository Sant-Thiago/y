import defaultDish from '/src/utils/assets/default_dish.jpg';
const baseURL = import.meta.env.BASE_URL

export default {
    "maria-maria": {
        name: "Maria Maria Bar e Restaurante",
        themeColor: ``/*#fff100*/,
        logo: `${baseURL}companies/maria-maria/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "kdlrestaurante@gmail.com",
        phone: "(19) 98336-2834",
        texts: [
            "O Maria Maria Bar e Restaurante nasceu da paixão pela comida caseira, feita com ingredientes selecionados e aquele cuidado que lembra cozinha de família. Massas, carnes, petiscos e pratos brasileiros são preparados sempre fresquinhos, mantendo o equilíbrio entre tradição, simplicidade e sabor.",

            "Aqui, o cardápio combina criatividade e conforto: opções leves, pratos do dia, porções generosas e aquele tempero que remete ao quintal de casa. Um espaço descontraído, perfeito para almoçar, relaxar ou brindar com os amigos depois de um dia corrido.",

            "Inspirado nas canções que atravessam gerações, o Maria Maria carrega um clima leve e acolhedor. Cada visita é um convite para sentar, conversar, aproveitar bons momentos e desfrutar de uma culinária honesta, preparada sempre com carinho e atenção aos detalhes.",

            "Maria Maria Bar e Restaurante: comida de verdade, sabor caseiro e um ambiente que abraça.",

            "Localizado na Av. Washington Luiz, 725 — no Jardim Leonor, em Campinas — o Maria Maria é conhecido por unir simplicidade, tempero caseiro e um atendimento que faz o cliente se sentir à vontade. É o tipo de lugar que vira parada obrigatória para quem busca qualidade e preço justo.",

            "Com pratos bem servidos, carnes suculentas, massas, petiscos e receitas tradicionais, o restaurante atende tanto quem quer um almoço rápido quanto quem prefere comer com calma. Nosso compromisso sempre foi oferecer comida gostosa, fresquinha e preparada diariamente.",

            "A atmosfera leve e familiar transforma o espaço em ponto de encontro ideal para almoçar, conversar ou aproveitar uma pausa no dia. O ótimo custo-benefício e o cardápio variado fazem do Maria Maria uma escolha constante entre moradores, trabalhadores e visitantes do bairro.",

            "Aberto para atendimento presencial e delivery, o Maria Maria Bar e Restaurante mantém sua essência: comida boa, atendimento simpático e um ambiente que combina paz, descontração e aquele gostinho de casa."
        ],
        history: [
            {
                title: "Maria Maria Bar e Restaurante: sabor autêntico, acolhimento e aquele clima de quintal que faz parte da vida do bairro.",
                year: "Atual",
                image: { 
                    src: `${baseURL}companies/maria-maria/outter_3.jpg`, 
                    alt: "Imagem do Restaurante" 
                },
                text: `
                    Inspirado em uma canção que atravessa gerações, o Maria Maria Bar e Restaurante se tornou um ponto querido na Av. Washington Luiz, 725, no Jardim Leonor.
                    A casa segue firme na proposta que marcou sua história: comida caseira, ambiente descontraído e um atendimento sempre cordial.
                    Um espaço simples, leve e acolhedor — desses que rapidamente se tornam parte da rotina de quem vive ou trabalha na região.
                `
            }
        ],
        units: [
            {
                name: "Maria Maria Bar e Restauranrate",
                value: "maria-maria",
                hourly: "SEG, TER e QUI - 10h30 às 14h | SEX - 10h30 às 15h | SAB A DOM - 11h30 às 15h",
                location: {
                    extended: "Av. Washington Luíz, 725 - Jardim Leonor, Campinas - SP, 13041-005",
                    street: "Av. Washington Luíz",
                    city: "Campinas",
                    neighborhood: "Jardim Leonor",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "725",
                    zipCode: "13041-005",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29398.846655581205!2d-47.05846534401824!3d-22.91868780096033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf120d20288b%3A0x47a38c3e53fe142b!2sMaria%20Maria%20Bar%20e%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1764460689989!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/maria-maria/inner_1.jpg`, alt: "defaulImage"},
                            title: {saloon: `Salão Principal`, quantity: "48 Pessoas"},
                            text:  `Fazemos eventos de 32 lugares, salão compartilhado com o público do restaurante. \nDisponível na segunda e quarta no almoço e de quinta a sábado no jantar.`
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
                    `${baseURL}companies/maria-maria/outter_1.jpg`,
                    `${baseURL}companies/maria-maria/outter_2.jpg`,
                    `${baseURL}companies/maria-maria/outter_3.jpg`,
                    `${baseURL}companies/maria-maria/outter_4.jpg`,
                    `${baseURL}companies/maria-maria/outter_5.jpg`,
                    `${baseURL}companies/maria-maria/inner_1.jpg`,
                    `${baseURL}companies/maria-maria/inner_2.jpg`,
                    `${baseURL}companies/maria-maria/inner_3.jpg`,
                    `${baseURL}companies/maria-maria/highlight_1.jpg`,
                    `${baseURL}companies/maria-maria/highlight_2.jpg`,
                    `${baseURL}companies/maria-maria/highlight_3.jpg`,
                ]
            }
        ],
        images: [
            `${baseURL}companies/maria-maria/outter_1.jpg`,
            `${baseURL}companies/maria-maria/outter_2.jpg`,
            `${baseURL}companies/maria-maria/outter_3.jpg`,
            `${baseURL}companies/maria-maria/outter_4.jpg`,
            `${baseURL}companies/maria-maria/outter_5.jpg`,
            `${baseURL}companies/maria-maria/inner_1.jpg`,
            `${baseURL}companies/maria-maria/inner_2.jpg`,
            `${baseURL}companies/maria-maria/inner_3.jpg`,
            `${baseURL}companies/maria-maria/highlight_1.jpg`,
            `${baseURL}companies/maria-maria/highlight_2.jpg`,
            `${baseURL}companies/maria-maria/highlight_3.jpg`,
        ],
        banners: [
            `${baseURL}companies/maria-maria/outter_4.jpg`,
            `${baseURL}companies/maria-maria/outter_3.jpg`,
            `${baseURL}companies/maria-maria/outter_1.jpg`,
        ],
        highlights: [
            `${baseURL}companies/maria-maria/highlight_3.jpg`,
            `${baseURL}companies/maria-maria/highlight_1.jpg`,
            `${baseURL}companies/maria-maria/highlight_2.jpg`,
        ],
        cards: [
            `${baseURL}companies/maria-maria/inner_3.jpg`,
        ],
        menuItens: [
            {
                id: 1,
                category: "Pratos Especiais",
                itens: [
                    {
                        id: 11,
                        name: "Escondidinho Pequeno",
                        image: defaultDish,
                        description: "Purê de mandioca, jabá desfiado, mussarela e Catupiry",
                        // measure: { value: "?", formatted: "?" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 86.00, formatted: "R$ 86,00" 
                                },
                                id: 110
                            },  
                            { 
                                label: "(2 Pessoas)",
                                price: {
                                    value: 99.00, formatted: "R$ 99,00" 
                                },
                                id: 111
                            },  
                        ],
                    },
                    {
                        id: 12,
                        name: "Costelinha ao Molho Barbecue",
                        image: `${baseURL}companies/sertao-bar-e-restaurante/food_1.jpg`,
                        description: "Com arroz e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 99.00, formatted: "R$ 99,00" 
                                },
                                id: 120
                            },  
                            { 
                                label: "(2 Pessoas)",
                                price: {
                                    value: 123.00, formatted: "R$ 123,00" 
                                },
                                id: 121
                            },  
                        ],
                    },
                ]
            },
            {
                id: 2,
                category: "Baião",
                itens: [
                {
                    id: 21,
                    name: "Baião de Dois Tradicional",
                    image: `${baseURL}companies/sertao-bar-e-restaurante/food_2.jpg`,
                    description: "Jabá desfiado, feijão de corda, arroz, linguiça, queijo coalho e carne de sol com mandioca.",
                    // measure: { value: "?", formatted: "?" },
                    options: [
                        { 
                            label: "(1 Pessoa)",
                            price: {
                                value: 99.00, formatted: "R$ 99,00" 
                            },
                            id: 210
                        },  
                        { 
                            label: "(2 Pessoas)",
                            price: {
                                value: 150.00, formatted: "R$ 150,00" 
                            },
                            id: 211
                        },  
                    ],
                },
                {
                    id: 22,
                    name: "Baião de Dois Bovina",
                    image: `${baseURL}companies/sertao-bar-e-restaurante/food_3.jpg`,
                    description: "Jabá desfiado, feijão de corda, arroz, linguiça e queijo coalho.",
                    // measure: { value: "?", formatted: "?" },
                    options: [
                        { 
                            label: "(1 Pessoa)",
                            price: {
                                value: 99.00, formatted: "R$ 99,00" 
                            },
                            id: 220
                        },  
                        { 
                            label: "(2 Pessoas)",
                            price: {
                                value: 150.00, formatted: "R$ 150,00" 
                            },
                            id: 221
                        },  
                    ],
                },
                {
                    id: 23,
                    name: "Baião de Dois com Picanha",
                    image: `${baseURL}companies/sertao-bar-e-restaurante/food_4.jpg`,
                    description: "Jabá desfiado, feijão de corda, arroz, linguiça e queijo coalho.",
                    // measure: { value: "?", formatted: "?" },
                    options: [
                        { 
                            label: "(1 Pessoa)",
                            price: {
                                value: 160.00, formatted: "R$ 160,00" 
                            },
                            id: 230
                        },  
                        { 
                            label: "(2 Pessoas)",
                            price: {
                                value: 210.00, formatted: "R$ 210,00" 
                            },
                            id: 231
                        },  
                    ],
                },
                
                ]
            },
            {
                id: 3,
                category: "Aves",
                itens: [
                {
                    id: 31,
                    name: "Filé de Frango à Parmegiana",
                    image: `${baseURL}companies/sertao-bar-e-restaurante/food_5.jpg`,
                    description: "Com arroz e fritas.",
                    // measure: { value: "?", formatted: "?" },
                    options: [
                        {
                            label: "(1 Pessoa)",
                            price: { value: 80.00, formatted: "R$ 80,00" },
                            id: 310
                        },
                        {
                            label: "(2 Pessoas)",
                            price: { value: 105.00, formatted: "R$ 105,00" },
                            id: 311
                        }
                    ],
                },
                {
                    id: 32,
                    name: "Filé de Frango Grelhado",
                    image: defaultDish,
                    description: "Com arroz e graga e Fritas.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 95.00, formatted: "R$ 95,00" }
                },
                {
                    id: 33,
                    name: "Filé de Frango à Milanesa",
                    image: defaultDish,
                    description: "Com arroz e batata souté.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 95.00, formatted: "R$ 95,00" }
                }
                ]
            },
            {
                id: 4,
                category: "Pirão",
                itens: [
                    {
                        id: 41,
                        name: "Pirão de Carne Seca",
                        image: defaultDish,
                        description: "Pirão levar.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 28.00, formatted: "R$ 28,00" }
                    },
                ]
            },
            {
                id: 5,
                category: "Salada",
                itens: [
                    {
                        id: 51,
                        name: "Salada De Alface",
                        image: defaultDish,
                        description: "Tomate, cebola e cenoura",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 15.00, formatted: "R$ 15,00" }
                    },
                    {
                        id: 52,
                        name: "Salada Mista",
                        image: defaultDish,
                        description: "Alface, tomate, cebola, cenoura, beterraba, batata e azeitona",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 44.00, formatted: "R$ 44,00" }
                    },
                    {
                        id: 53,
                        name: "Salada Completa",
                        image: defaultDish,
                        description: "Alface, tomate, cebola, ervilha, azeitona, cenoura, beterraba, brócolis, ovos, presunto, mussarela, palmito, vagem e batata",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 59.90, formatted: "R$ 59,90" }
                    }
                ]
            },
            {
                id: 6,
                category: "Carnes",
                itens: [
                    {
                        id: 61,
                        name: "Contra Filé à Parmegiana",
                        image: `${baseURL}companies/sertao-bar-e-restaurante/food_6.jpg`,
                        description: "Com arroz e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        options: [
                            {
                                label: "(1 Pessoa)",
                                price: { value: 90.00, formatted: "R$ 90,00" },
                                id: 610
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 145.00, formatted: "R$ 145,00" },
                                id: 611
                            }
                        ],
                    },
                    {
                        id: 62,
                        name: "Picanha Grelhada",
                        image: `${baseURL}companies/sertao-bar-e-restaurante/food_7.jpg`,
                        description: "Com fritas, farofa, vinagrete e arroz",
                        // measure: { value: "?", formatted: "?" },
                        options: [
                            {
                                label: "(1 Pessoa)",
                                price: { value: 115.00, formatted: "R$ 115,00" },
                                id: 620
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 150.00, formatted: "R$ 150,00" },
                                id: 621
                            }
                        ],
                    },
                    {
                        id: 63,
                        name: "Filé Mignon à Parmegiana",
                        image: `${baseURL}companies/sertao-bar-e-restaurante/food_8.jpg`,
                        description: "Com arroz e fritas",
                        // measure: { value: "?", formatted: "?" },
                        options: [
                            {
                                label: "(1 Pessoa)",
                                price: { value: 95.00, formatted: "R$ 95,00" },
                                id: 630
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 139.90, formatted: "R$ 139,90" },
                                id: 631
                            }
                        ],
                    }
                ]
            },
            {
                id: 7,
                category: "Peixes",
                itens: [
                {
                    id: 71,
                    name: "Filé de Tilápia à Milanesa",
                    image: defaultDish,
                    description: "Com arroz e grega e purê",
                    // measure: { value: "?", formatted: "?" },
                    options: [
                        {
                            label: "(1 Pessoa)",
                            price: { value: 85.00, formatted: "R$ 85,00" },
                            id: 710
                        },
                        {
                            label: "(2 Pessoas)",
                            price: { value: 109.00, formatted: "R$ 109,00" },
                            id: 711
                        }
                    ],
                },
                {
                    id: 72,
                    name: "Filé de Tilápia ao Mol de Camarão",
                    image: defaultDish,
                    description: "Com arroz e grega e purê.",
                    // measure: { value: "?", formatted: "?" },
                    options: [
                        {
                            label: "(1 Pessoa)",
                            price: { value: 90.00, formatted: "R$ 90,00" },
                            id: 720
                        },
                        {
                            label: "(2 Pessoas)",
                            price: { value: 130.00, formatted: "R$ 130,00" },
                            id: 721
                        },
                    ],
                },
                {
                    id: 73,
                    name: "Salmão Grelhado",
                    image: defaultDish,
                    description: "Com arroz e grega e legumes.",
                    // measure: { value: "?", formatted: "?" },
                    options: [
                        {
                            label: "(1 Pessoa)",
                            price: { value: 119.00, formatted: "R$ 119,00" },
                            id: 730
                        },
                        {
                            label: "(2 Pessoas)",
                            price: { value: 160.00, formatted: "R$ 160,00" },
                            id: 731
                        },
                    ],
                },
                ]
            }, 
            {
                id: 8,
                category: "Guarnições",
                itens: [
                {
                    id: 81,
                    name: "Ovo Frito",
                    image: defaultDish,
                    description: "Unidade",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 7.00, formatted: "R$ 7,00" },
                },
                {
                    id: 82,
                    name: "Banana à Milanesa",
                    image: defaultDish,
                    description: "Unidade",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 7.00, formatted: "R$ 7,00" },
                },
                {
                    id: 83,
                    name: "Luinguiça Frita",
                    image: defaultDish,
                    description: "Unidade",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 9.00, formatted: "R$ 9,00" },
                },
                ]
            }, 
            {
                id: 9,
                category: "Kids",
                itens: [
                    {
                        id: 91,
                        name: "Frango Grelhado",
                        image: defaultDish,
                        description: "Frango Grelhado com Arroz, Tomate e Fritas",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 33.00, formatted: "R$ 33,00" },
                    },
                    {
                        id: 92,
                        name: "Nuggets",
                        image: defaultDish,
                        description: "Nuggets com Arroz e Fritas",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 33.00, formatted: "R$ 33,00" },
                    },
                    {
                        id: 93,
                        name: "Filé Mignon",
                        image: defaultDish,
                        description: "Filé Mignon com Arroz e Fritas",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 38.00, formatted: "R$ 38,00" },
                    },
                ]
            }, 
            {
                id: 10,
                category: "Porções",
                itens: [
                    {
                        id: 101,
                        name: "Dadinhos",
                        image: defaultDish,
                        description: "Dadinho 06 Unidades",
                        options: [
                            {
                                label: "6 Unidades",
                                measure: { value: 6, formatted: "6 Un." },
                                price: { value: 25.00, formatted: "R$ 25,00" },
                                id: 1010
                            },
                            {
                                label: "12 Unidades",
                                measure: { value: 12, formatted: "12 Un." },
                                price: { value: 36.00, formatted: "R$ 36,00" },
                                id: 1011
                            },
                        ],
                    },
                    {
                        id: 102,
                        name: "Batata Frita",
                        image: defaultDish,
                        description: "Batatas fritas",
                        options: [
                            {
                                label: "Média",
                                price: { value: 33.00, formatted: "R$ 33,00" },
                            },
                            {
                                label: "Grande",
                                price: { value: 40.00, formatted: "R$ 40,00" },
                            },
                        ],
                    },
                    {
                        id: 103,
                        name: "Queijo Coalho na Chapa",
                        image: `${baseURL}companies/sertao-bar-e-restaurante/food_9.jpg`,
                        description: "Filé Mignon com Arroz e Fritas",
                        price: { value: 80.00, formatted: "R$ 80,00" },
                    },
                ]
            }, 
            {
                id: 11,
                category: "Sobremas",
                itens: [
                    {
                        id: 111,
                        name: "Mousse de Chocolate",
                        image: defaultDish,
                        description: "Mousse de Chocolate",
                        price: { value: 17.00, formatted: "R$ 17,00" },
                    },
                    {
                        id: 112,
                        name: "Torta Holandesa",
                        image: defaultDish,
                        description: "Torta Holandesa",
                        price: { value: 17.00, formatted: "R$ 17,00" },
                    },
                    {
                        id: 113,
                        name: "Jaca em Calda",
                        image: defaultDish,
                        description: "Jaca em Calda",
                        price: { value: 18.90, formatted: "R$ 18,90" },
                    },
                ]
            }, 
            {
                id: 12,
                category: "Refrigerantes",
                itens: [
                    {
                        id: 121,
                        name: "Coca-Cola Original",
                        image: `${baseURL}companies/sertao-bar-e-restaurante/drinks_1.jpg`,
                        description: "Coca-Cola Original 2l",
                        measure: { value: 2, formatted: "2L" },
                        price: { value: 17.99, formatted: "R$ 17,99" },
                    },
                    {
                        id: 122,
                        name: "Guaraná Antárctica",
                        image: `${baseURL}companies/sertao-bar-e-restaurante/drinks_2.jpg`,
                        description: "Guaraná Antárctica 2l",
                        measure: { value: 2, formatted: "R$ 2L" },
                        price: { value: 17.99, formatted: "R$ 17,99" },
                    },
                    {
                        id: 123,
                        name: "Água Mineral",
                        image: defaultDish,
                        description: "Água Mineral",
                        price: { value: 6.00, formatted: "R$ 6,00" },
                    },
                ]
            }, 
            
        ],
        links: {
            facebook: "https://www.facebook.com/mariamaria.restaurante.campinas/?locale=pt_BR",
            instagram: "https://www.instagram.com/mariamaria_barerestaurante/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5519983362834",
        }
    }
}