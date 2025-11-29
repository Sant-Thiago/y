import defaultDish from '/src/utils/assets/default_dish.jpg';
const baseURL = import.meta.env.BASE_URL


export default {
    "casa-do-norte-kactos": {
        name: "Casa do Norte Kactos",
        themeColor: "#742d01",
        logo: `${baseURL}companies/casa-do-norte-kactos/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "casadonorte.exemplo@gmail.com",
        phone: "(11) 94484-1099",
        texts: [
            `   Uma cozinha feita com carinho e sabor de verdade. \n  Servimos pratos bem preparados, opções nordestinas, parmegianas, porções, caldos, além de sucos naturais e sobremesas frescas. \nAqui, cada refeição é pensada para ser completa, farta e com aquele toque caseiro que faz diferença.  \n
                Qualidade, variedade e um atendimento que valoriza quem escolhe comer bem e com confiança.
            `,
            "O Casa do Norte Kactos é um restaurante reconhecido pela união entre boa comida, ambiente acolhedor e um atendimento que realmente se importa com cada cliente. Nosso cardápio reúne opções preparadas com ingredientes selecionados e atenção total à qualidade, oferecendo pratos capazes de agradar a todos os gostos.",
            "Com um clima descontraído e contemporâneo, o Casa do Norte Kactos é o lugar ideal para quem busca sabor, conforto e uma experiência gastronômica leve e marcante. Aqui, cada visita se transforma em um momento especial, valorizado por refeições bem feitas e pela hospitalidade que faz parte da nossa essência.",
            
            "Casa do Norte Kactos: onde o sabor encontra a tradição e o acolhimento vira experiência.",
            "A Casa do Norte Kactos é um ponto querido da região, conhecida pelo clima acolhedor, pelo sabor marcante da culinária nordestina e por um atendimento que faz cada pessoa se sentir à vontade. Aqui, tradição e simplicidade se unem para criar uma experiência gostosa, leve e sempre bem servida.",
            "O ambiente combina toque caseiro com um ar contemporâneo, perfeito para famílias, grupos de amigos e quem busca uma boa refeição no dia a dia. Nossos pratos são preparados com ingredientes selecionados, receita caprichada e cuidado em cada detalhe — do tempero ao sorriso de quem recebe você.",
            "A Kactos é o tipo de lugar que conquista pela honestidade no sabor, pela fartura e pelo clima descontraído. Uma casa onde a boa comida fala alto e o acolhimento transforma cada visita em um momento especial.",
            "Casa do Norte Kactos: tradição, sabor e aquele calor humano que só o Nordeste tem."
        ],
        history: [
            {
                title: "Nossa história",
                year: "Atual",
                image: { 
                    src: `${baseURL}companies/casa-do-norte-kactos/inner_1.jpg`, 
                    alt: "Imagem do Restaurante" 
                },
                text: `
                    A Casa do Norte Kactos nasceu com a proposta de oferecer comida bem feita,
                    sabor marcante e um ambiente acolhedor. Ao longo do tempo, fomos aprimorando
                    nossas receitas e fortalecendo nossa identidade, sempre mantendo a essência
                    simples, caseira e próxima de quem nos visita. Hoje, seguimos com o mesmo
                    compromisso: servir boa comida e proporcionar uma experiência leve e agradável.
                `
            }
        ],
        units: [
            {
                name: "Casa do Norte Kactos",
                value: "casa-do-norte-kactos",
                hourly: "TER A DOM - 11h às 18h",
                location: {
                    extended: "Av. Teodoro Bernardo do Nascimento, 20 - Jardim Robru, São Paulo - SP, 08150-000",
                    street: "Av. Teodoro Bernardo do Nascimento",
                    city: "São Paulo",
                    neighborhood: "Jardim Robru",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "20",
                    zipCode: "08150-000",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.13951157833!2d-46.408355199999995!3d-23.527484099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce65002c40bdc9%3A0x32ac78544cb67af4!2sRestaurante%20e%20Casa%20do%20Norte%20Kactos!5e0!3m2!1spt-BR!2sbr!4v1764076544314!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/casa-do-norte-kactos/inner_1.jpg`, alt: "defaulImage"},
                            title: {saloon: `Salão Principal`, quantity: "16 Pessoas"},
                            text:  `Fazemos eventos de 8 lugares, salão compartilhado com o público do restaurante. \nDisponível na quinta e sexta no almoço e de quinta a sábado no jantar.`
                        },{
                            image: {src: `${baseURL}companies/casa-do-norte-kactos/inner_2.jpg`, alt: "defaulImage"},
                            title: {saloon: `Salão Interno`, quantity: "32 Pessoas"},
                            text:  `Fazemos eventos de 16 a 32 lugares, salão compartilhado com o público do restaurante. \nSalão exclusivo e confortaveis para eventos acima de 8 pessoas com capacidade máxima de 32 pessoas. \nDisponível na quinta e sexta no almoço e de quinta a sábado no jantar.`
                        }
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
                    ]
                },
                images: [
                    `${baseURL}companies/casa-do-norte-kactos/banner_1.jpg`,
                    `${baseURL}companies/casa-do-norte-kactos/inner_1.jpg`,
                    `${baseURL}companies/casa-do-norte-kactos/inner_2.jpg`,
                ]
            }
        ],
        images: [
            `${baseURL}companies/casa-do-norte-kactos/banner_1.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_1.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_2.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_3.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_4.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_5.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_6.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_7.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/food_1.png`,
            `${baseURL}companies/casa-do-norte-kactos/food_2.png`,
            `${baseURL}companies/casa-do-norte-kactos/food_3.png`,
            `${baseURL}companies/casa-do-norte-kactos/food_4.png`,
            `${baseURL}companies/casa-do-norte-kactos/food_5.png`,
        ],
        banners: [
            `${baseURL}companies/casa-do-norte-kactos/inner_1.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_2.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_3.jpg`,
            `${baseURL}companies/casa-do-norte-kactos/inner_5.jpg`,
        ],
        highlights: [
            `${baseURL}companies/casa-do-norte-kactos/food_4.png`,
            `${baseURL}companies/casa-do-norte-kactos/food_2.png`,
            `${baseURL}companies/casa-do-norte-kactos/food_3.png`,
        ],
        cards: [
            `${baseURL}companies/casa-do-norte-kactos/inner_3.jpg`,
        ],
        menuItens: [
            {
                id: 1,
                category: "Marmitex Tradicional",
                itens: [
                    {
                        id: 11,
                        name: "Marmitex de Costela Assada",
                        image: defaultDish,
                        description: "Arroz branco, feijão carioca, farofa e vinagrete",
                        // measure: { value: 125, formatted: "125g" },
                        price: { value: 30.00, formatted: "R$ 30,00" }
                    },
                    {
                        id: 12,
                        name: "Marmitex de Contra Filé",
                        image: defaultDish,
                        description: "Arroz branco, contra em tiras, feijão carioca, batata frita e vinagrete",
                        // measure: { value: 125, formatted: "125g" },
                        price: { value: 35.00, formatted: "R$ 35,00" }
                    },
                    {
                        id: 13,
                        name: "Marmitex de Arrumadinho",
                        image: defaultDish,
                        description: "Arroz branco, feijão de corda, linguiça calabresa, farofa Jabá e vinagrete",
                        // measure: { value: 125, formatted: "125g" },
                        price: { value: 33.00, formatted: "R$ 33,00" }
                    }
                ]
            },

            {
                id: 2,
                category: "Nordestinos",
                itens: [
                    {
                        id: 21,
                        name: "Baião de Dois",
                        image: defaultDish,
                        description: "Arroz, feijão de corda, linguiça calabresa, carne seca desfiada, queijo coalho e contra filé em tiras",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 60.00, formatted: "R$ 60,00" 
                                },
                                id: 210
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 120.00, formatted: "R$ 120,00" },
                                id: 211
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 180.00, formatted: "R$ 180,00" },
                                id: 212
                            }
                        ],
                    },
                    {
                        id: 22,
                        name: "Maria Bonita",
                        image: defaultDish,
                        description: "Arroz com jabá desfiado, feijão de corda, mandioca frita, contra filé em tiras e vinagrete",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 65.00, formatted: "R$ 65,00" 
                                },
                                id: 220
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 130.00, formatted: "R$ 130,00" },
                                id: 221
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 200.00, formatted: "R$ 200,00" },
                                id: 222
                            }
                        ],
                    },
                    {
                        id: 23,
                        name: "Lampião",
                        image: defaultDish,
                        description: "Arroz com jabá desfiado, feijão de corda, mandioca frita, torresmo e contra filé em tiras",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 70.00, formatted: "R$ 70,00" 
                                },
                                id: 230
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 130.00, formatted: "R$ 130,00" },
                                id: 231
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 180.00, formatted: "R$ 180,00" },
                                id: 232
                            }
                        ],
                    },
                    {
                        id: 24,
                        name: "Escondidinho de Carne Seca",
                        image: defaultDish,
                        description: "Carne seca desfiada, purê de mandioca e queijo parmesão gratinado",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 60.00, formatted: "R$ 60,00" 
                                },
                                id: 240
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 120.00, formatted: "R$ 120,00" },
                                id: 241
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 180.00, formatted: "R$ 180,00" },
                                id: 242
                            }
                        ],
                    },
                    {
                        id: 25,
                        name: "Moda Kactos",
                        image: defaultDish,
                        description: "Contra em tiras na manteiga, feijão tropeiro, mandioca frita, torresmo, banana da terra frita, arroz e vinagrete. ",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 70.00, formatted: "R$ 70,00" 
                                },
                                id: 250
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 130.00, formatted: "R$ 130,00" },
                                id: 251
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 190.00, formatted: "R$ 190,00" },
                                id: 252
                            }
                        ],
                    },
                    {
                        id: 26,
                        name: "Favada",
                        image: defaultDish,
                        description: "Linguiça, costelinha de porco, jaba, pe de porco, rabo de porco",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(2 Pessoa)",
                                price: {
                                    value: 85.00, formatted: "R$ 85,00" 
                                },
                                id: 260
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 115.00, formatted: "R$ 115,00" },
                                id: 261
                            },
                        ],
                    },
                    {
                        id: 27,
                        name: "Favada sem arroz",
                        image: defaultDish,
                        description: "Linguiça, costelinha de porco, jaba, pe de porco, rabo de porco",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(2 Pessoa)",
                                price: {
                                    value: 75.00, formatted: "R$ 75,00" 
                                },
                                id: 270
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 105.00, formatted: "R$ 105,00" },
                                id: 271
                            },
                        ],
                    },
                ]
            },

            {
                id: 3,
                category: "Parmegiana",
                itens: [
                    {
                        id: 31,
                        name: "Frango a Parmegiana",
                        image: defaultDish,
                        description: "Arroz branco, feijão carioca, batata frita e vinagrete",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 50.00, formatted: "R$ 50,00" 
                                },
                                id: 310
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 90.00, formatted: "R$ 90,00" },
                                id: 311
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 140.00, formatted: "R$ 140,00" },
                                id: 312
                            }
                        ],
                    },
                ]
            },

            {
                id: 4,
                category: "Milanesa",
                itens: [
                    {
                        id: 41,
                        name: "Filé de Frango Milanesa",
                        image: defaultDish,
                        description: "Arroz branco, feijão carioca, batata frita e vinagrete",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 45.00, formatted: "R$ 45,00" 
                                },
                                id: 410
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 85.00, formatted: "R$ 85,00" },
                                id: 411
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 115.00, formatted: "R$ 115,00" },
                                id: 412
                            }
                        ],
                    },
                    {
                        id: 42,
                        name: "Filé de Frango Milanesa",
                        image: defaultDish,
                        description: "Arroz branco, feijão carioca, batata frita e vinagrete",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 50.00, formatted: "R$ 50,00" 
                                },
                                id: 420
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 90.00, formatted: "R$ 90,00" },
                                id: 421
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 130.00, formatted: "R$ 130,00" },
                                id: 422
                            }
                        ],
                    }
                ]
            },

            {
                id: 5,
                category: "Porções",
                itens: [
                    {
                        id: 51,
                        name: "Salada simples",
                        image: defaultDish,
                        description: "Salada simples",
                        // measure: { value: 500, formatted: "500ml" },
                        price: { value: 15.00, formatted: "R$ 15,00" }
                    },
                    {
                        id: 52,
                        name: "Pirão",
                        image: defaultDish,
                        description: "Pirão",
                        // measure: { value: 500, formatted: "500ml" },
                        price: { value: 25.00, formatted: "R$ 25,00" }
                    },
                    {
                        id: 53,
                        name: "Ovo frito",
                        image: defaultDish,
                        description: "Ovo frito",
                        // measure: { value: 500, formatted: "500ml" },
                        price: { value: 3.00, formatted: "R$ 3,00" }
                    },
                    {
                        id: 54,
                        name: "Torresmo (unidade)",
                        image: defaultDish,
                        description: "Torresmo (unidade)",
                        // measure: { value: 500, formatted: "500ml" },
                        price: { value: 5.00, formatted: "R$ 5,00" }
                    },
                    {
                        id: 55,
                        name: "Porção Batata Frita",
                        image: defaultDish,
                        description: "Porção Batata Frita",
                        // measure: { value: 500, formatted: "500ml" },
                        price: { value: 30.00, formatted: "R$ 30,00" }
                    }
                ]
            },
            {
                id: 6,
                category: "Novidades",
                itens: [
                    {
                        id: 61,
                        name: "Arrumadinho",
                        image: defaultDish,
                        description: "Maravilhoso Arrumadinho",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 50.00, formatted: "R$ 50,00" 
                                },
                                id: 610
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 85.00, formatted: "R$ 85,00" },
                                id: 611
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 150.00, formatted: "R$ 150,00" },
                                id: 612
                            }
                        ],
                    },
                    {
                        id: 62,
                        name: "Costela Assada",
                        image: defaultDish,
                        description: "Suculosa Costela Assada",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 50.00, formatted: "R$ 50,00" 
                                },
                                id: 620
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 100.00, formatted: "R$ 100,00" },
                                id: 621
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 150.00, formatted: "R$ 150,00" },
                                id: 622
                            }
                        ],
                    },
                    {
                        id: 63,
                        name: "Vaca Atolada",
                        image: defaultDish,
                        description: "Irresistivel Vaca Atolada",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 40.00, formatted: "R$ 40,00" 
                                },
                                id: 630
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 70.00, formatted: "R$ 70,00" },
                                id: 631
                            },
                            {
                                label: "(3 Pessoas)",
                                price: { value: 120.00, formatted: "R$ 120,00" },
                                id: 632
                            }
                        ],
                    },
                ]
            },
            {
                id: 7,
                category: "Virado Paulista",
                itens: [
                    {
                        id: 71,
                        name: "Virado Paulista",
                        image: defaultDish,
                        description: "Arroz branco, tutu de feijão, couve, torresmo, bisteca, ovo, linguiça e banana empanada",
                        // measure: { value: 4, formatted: "4 unidades" },
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 50.00, formatted: "R$ 50,00" 
                                },
                                id: 710
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 100.00, formatted: "R$ 100,00" },
                                id: 711
                            },
                        ],
                    },
                ]
            },
            {
                id: 8,
                category: "Caldos",
                itens: [
                    {
                        id: 81,
                        name: "Caldo de Mocotó",
                        image: defaultDish,
                        description: "Caldo de Mocotó",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 30.00, formatted: "R$ 30,00" 
                        },
                    },
                    {
                        id: 82,
                        name: "Caldo Verde",
                        image: defaultDish,
                        description: "Caldo Verde",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 30.00, formatted: "R$ 30,00" 
                        },
                    },
                    {
                        id: 83,
                        name: "Feijãozinho",
                        image: defaultDish,
                        description: "Feijãozinho",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 20.00, formatted: "R$ 20,00" 
                        },
                    },
                ]
            }, 
            {
                id: 9,
                category: "Sucos de Poupa",
                itens: [
                    {
                        id: 91,
                        name: "Suco Goiaba Poupa Grande",
                        image: defaultDish,
                        description: "Suco Goiaba Poupa Grande",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 26.00, formatted: "R$ 26,00" 
                        },
                    },
                    {
                        id: 92,
                        name: "Suco Abacaxi Poupa Grande",
                        image: defaultDish,
                        description: "Suco Abacaxi Poupa Grande",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 26.00, formatted: "R$ 26,00" 
                        },
                    },
                    {
                        id: 93,
                        name: "Suco Uva Poupa Grande",
                        image: defaultDish,
                        description: "Suco Uva Poupa Grande",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 26.00, formatted: "R$ 26,00" 
                        },
                    },
                ]
            },
            {
                id: 10,
                category: "Sucos Naturais",
                itens: [
                    {
                        id: 101,
                        name: "Suco Maracuja Natural Grande",
                        image: defaultDish,
                        description: "Suco Maracuja Natural Grande",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 28.00, formatted: "R$ 28,00" 
                        },
                    },
                    {
                        id: 102,
                        name: "Suco Limão Natural Grande",
                        image: defaultDish,
                        description: "Suco Limão Natural Grande",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 28.00, formatted: "R$ 28,00" 
                        },
                    },
                    {
                        id: 103,
                        name: "Suco Laranja Natural Grande",
                        image: defaultDish,
                        description: "Suco Laranja Natural Grande",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 28.00, formatted: "R$ 28,00" 
                        },
                    },
                ]
            },
            {
                id: 11,
                category: "Sobremesas",
                itens: [
                    {
                        id: 111,
                        name: "Torta Suprise",
                        image: defaultDish,
                        description: "Torta de chocolate com castanha",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 18.00, formatted: "R$ 18,00" 
                        },
                    },
                    {
                        id: 112,
                        name: "Torta de Limão",
                        image: defaultDish,
                        description: "Massa sablee com recheio de creme de limão e marshmallow",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 18.00, formatted: "R$ 18,00" 
                        },
                    },
                    {
                        id: 113,
                        name: "Quiejo com melasso",
                        image: defaultDish,
                        description: "Quiejo com melasso",
                        // measure: { value: 4, formatted: "4 unidades" },
                        price: {
                            value: 20.00, formatted: "R$ 20,00" 
                        },
                    },
                ]
            },
            {
                id: 12,
                category: "Bebidas",
                itens: [
                    {
                        id: 121,
                        name: "Água Sem Gás",
                        image: defaultDish,
                        description: "Água sem gás",
                        price: {
                            value: 3.00, 
                            formatted: "R$ 3,00"
                        }
                    },
                    {
                        id: 122,
                        name: "Água Com Gás",
                        image: defaultDish,
                        description: "Água com gás",
                        price: {
                            value: 4.00, 
                            formatted: "R$ 4,00"
                        }
                    },
                    {
                        id: 123,
                        name: "Água Tônica",
                        image: defaultDish,
                        description: "Água tônica",
                        price: {
                            value: 7.00, 
                            formatted: "R$ 7,00"
                        }
                    }
                ]
            },
            {
                id: 13,
                category: "Cervejas",
                itens: [
                    {
                        id: 131,
                        name: "Skol lata",
                        image: defaultDish,
                        description: "Skol lata",
                        measure: {
                            value: 269,
                            formatted: "269 ml"
                        },
                        price: {
                            value: 5.00, 
                            formatted: "R$ 5,00"
                        }
                    },
                    {
                        id: 132,
                        name: "Brahma 0",
                        image: defaultDish,
                        description: "Brahma Zero",
                        measure: {
                            value: 269,
                            formatted: "269 ml"
                        },
                        price: {
                            value: 5.00, 
                            formatted: "R$ 5,00"
                        }
                    },
                    {
                        id: 133,
                        name: "Long Neck Heineken",
                        image: defaultDish,
                        description: "Long Neck Heineken",
                        price: {
                            value: 12.00, 
                            formatted: "R$ 12,00"
                        }
                    }
                ]
            },
            {
                id: 14,
                category: "Picanha",
                itens: [
                    {
                        id: 141,
                        name: "Picanha na Chapa",
                        image: defaultDish,
                        description: "Suculosa Picanha feita na Chapa",
                        options: [
                            { 
                                label: "(1 Pessoa)",
                                price: {
                                    value: 85.00, formatted: "R$ 85,00" 
                                },
                                id: 1410
                            },
                            {
                                label: "(2 Pessoas)",
                                price: { value: 155.00, formatted: "R$ 155,00" },
                                id: 1411
                            },
                        ]
                    },
                ]
            }, 
            {
                id: 15,
                category: "Massas",
                itens: [
                    {
                        id: 151,
                        name: "Macarrão",
                        image: defaultDish,
                        description: "Macarrão ao molho ou alho e óleo",
                        price: {
                            value: 25.00, formatted: "R$ 25,00" 
                        },
                    },
                ]
            }
        ],
        links: {
            instagram: "https://www.instagram.com/casadonortekactos//",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511987870411",
        }
    },
}