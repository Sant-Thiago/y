import { BiCar } from "react-icons/bi";
import { GiEnergyTank } from "react-icons/gi";
import { IoIosFootball } from "react-icons/io";
import defaultDish from '/src/utils/assets/default_dish.jpg';
const baseURL = import.meta.env.BASE_URL

export const validCompanies = [
    "casa-do-norte-kactos", "mari-maria",
    "sertao-bar-e-restaurante" 
];

export const companies = {
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
    "mari-maria": {
        name: "Mari Mariá",
        themeColor: "#4e443b",
        logo: `${baseURL}companies/mari-maria/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "valeriahenriques001@gmail.com",
        phone: "(11) 3104-5574 | +55 11 99602-0769",
        texts: [
            "O Mari Mariá combina o charme histórico do Centro de São Paulo com um cardápio diversificado e bem pensado. \nAqui, você encontra desde pratos de carnes suculentas e cortes nobres até opções vegetarianas, massas, porções e sobremesas de dar água na boca.\n Para completar a experiência, o Mari Mariá é conhecido por um cardápio variado que agrada diferentes estilos — perfeito para quem gosta de comer bem, compartilhar com amigos ou curtir uma refeição tranquila no coração da cidade.",
            "O Mari Mariá combina o charme histórico do Centro de São Paulo com um cardápio diversificado e bem pensado. Aqui, você encontra desde pratos de carnes suculentas e cortes nobres até opções vegetarianas, massas, porções e sobremesas de dar água na boca. \nTemos hambúrgueres e sanduíches artesanais, pratos com carnes como costela, lombo, músculo e bisteca; massas e grelhados caprichados; versões vegetarianas com legumes e hortaliças; petiscos e acompanhamentos crocantes e saborosos; saladas e opções leves; e por fim, sobremesas marcantes que adoçam a refeição.",
            "Com um clima descontraído e moderno, o Mari Mariá se tornou ponto de encontro para quem busca sabor, conforto e uma experiência gastronômica leve e marcante. Aqui, cada visita é uma oportunidade de aproveitar boas refeições, bons momentos e a essência do que mais gostamos de oferecer: comida bem feita e hospitalidade de verdade.",        
            
            "Mari Mariá: tradição, sabor caseiro e acolhimento no coração de São Paulo.",
            "Localizado no Largo do Café, no Centro Histórico de São Paulo, o Mari Mariá é um restaurante conhecido por unir simplicidade, comida bem feita e um atendimento sempre simpático. É o tipo de lugar que rapidamente se torna parte da rotina de quem trabalha na região e busca uma refeição saborosa com preço justo.",
            "Reconhecido pelos pratos bem servidos, massas, carnes, petiscos e pelo ambiente descontraído, o restaurante também oferece opções rápidas para o almoço, além de receitas tradicionais feitas com aquele tempero caseiro que marcou a história da casa ao longo dos anos.",
            "A atmosfera é leve, informal e acolhedora, ideal para quem deseja almoçar com tranquilidade, encontrar amigos ou simplesmente aproveitar um momento de pausa no centro da cidade. O cardápio variado e o excelente custo-benefício fazem do Mari Mariá uma escolha constante para trabalhadores, moradores e visitantes.",
            "Funcionando de segunda a sexta, das 11h às 15h30, o Mari Mariá preserva sua essência simples e verdadeira: comida boa, atendimento cordial e aquele clima que faz o cliente se sentir em casa — todos os dias."
        ],
        history: [
            {
                title: "Mari Mariá hoje: referência no Largo do Café",
                year: "Atual",
                image: { src: `${baseURL}companies/mari-maria/inner_3.png`, alt: "Imagem do Restaurante" },
                text: `
                Hoje, o Mari Mariá continua como um dos restaurantes mais tradicionais do Largo do Café.
                Funcionando diariamente no horário de almoço, mantém viva a essência que sempre definiu a casa: comida boa, ambiente acolhedor e atendimento simpático.
                Um clássico da região central — simples, honesto e parte da história gastronômica do bairro.
                `
            }
        ],
        units: [
            {
                name: "Mari Mariá",
                value: "mari-maria",
                hourly: "SEG A SEX - 11h às 15:30h",
                location: {
                    extended: "Largo do Café, 14 - 1° andar - Centro Histórico de São Paulo, São Paulo - SP, 01012-030",
                    street: "Largo do Café",
                    city: "São Paulo",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "14",
                    zipCode: "01012-030",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.618227650631!2d-46.63984431385855!3d-23.546229824174016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5854f12f0eff%3A0xd94a1c954c398f80!2sRestaurante%20Mari%20Mari%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1764176224657!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/mari-maria/inner_1.png`, alt: "defaulImage"},
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
                    `${baseURL}companies/mari-maria/outter_1.png`,
                    `${baseURL}companies/mari-maria/inner_1.png`,
                    `${baseURL}companies/mari-maria/inner_2.png`,
                    `${baseURL}companies/mari-maria/inner_3.png`,
                    `${baseURL}companies/mari-maria/inner_4.png`,
                    `${baseURL}companies/mari-maria/inner_5.png`,
                ]
            }
        ],
        images: [
            `${baseURL}companies/mari-maria/outter_1.png`,
            `${baseURL}companies/mari-maria/inner_1.png`,
            `${baseURL}companies/mari-maria/inner_2.png`,
            `${baseURL}companies/mari-maria/inner_3.png`,
            `${baseURL}companies/mari-maria/inner_4.png`,
            `${baseURL}companies/mari-maria/inner_5.png`,
            `${baseURL}companies/mari-maria/inner_3.png`,
            `${baseURL}companies/mari-maria/inner_4.png`,
            `${baseURL}companies/mari-maria/inner_5.png`,
            `${baseURL}companies/mari-maria/inner_3.png`,
            `${baseURL}companies/mari-maria/inner_4.png`,
            `${baseURL}companies/mari-maria/inner_5.png`,
        ],
        banners: [
            `${baseURL}companies/mari-maria/inner_1.png`,
            `${baseURL}companies/mari-maria/inner_3.png`,
            `${baseURL}companies/mari-maria/inner_4.png`,
        ],
        highlights: [
            `${baseURL}companies/mari-maria/food_14.png`,
            `${baseURL}companies/mari-maria/food_15.png`,
            `${baseURL}companies/mari-maria/food_16.png`,
        ],
        cards: [
            `${baseURL}companies/mari-maria/inner_2.png`,
        ],
        menuItens: [
            {
                id: 1,
                category: "Carnes",
                itens: [
                {
                    id: 11,
                    name: "Costela Suína",
                    image: `${baseURL}companies/mari-maria/food_14.png`,
                    description: "Costela Suína ao molho barbecue. A carne atinge uma maciez que se desfaz na boca, enquanto o molho barbecue, doce e levemente picante, envolve cada pedaço em um sabor inigualável.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Lombo Laqueada",
                    image: `${baseURL}companies/mari-maria/food_25.png`,
                    description: "Nossa copa lombo laqueada ao molho de goiabada, recheada com bacon, acompanhada de linguiça, alho-poró e farofa com lascas de batata frita.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Músculo Bovino",
                    image: `${baseURL}companies/mari-maria/food_26.png`,
                    description: "O clássico músculo cozido com batata em uma experiência única. Nosso corte especial de músculo bovino é cozido lentamente, absorvendo os temperos e aromas até alcançar uma textura incrivelmente macia.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Bisteca Suína Grelhada",
                    image: `${baseURL}companies/mari-maria/food_30.png`,
                    description: "Bisteca Suína Grelhada é uma experiência que encanta os sentidos! ️ Cada corte é selecionado com cuidado, garantindo uma textura e marmoreio que resultam em uma suculência incrível.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                }
                ]
            },
            {
                id: 2,
                category: "Massas",
                itens: [
                {
                    id: 11,
                    name: "Fettuccine",
                    image: `${baseURL}companies/mari-maria/food_28.png`,
                    description: "Descubra o sabor único do nosso fettuccine, uma verdadeira obra-prima gastronômica! Preparado com ingredientes selecionados como champignon, espinafre, tomate cereja e nozes, essa combinação especial é uma explosão de sabores e texturas que promete conquistar o seu paladar.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Stroganoff de alcatra",
                    image: `${baseURL}companies/mari-maria/food_29.png`,
                    description: "Deixe-se surpreender pela maravilha do nosso Stroganoff de alcatra com champignons — uma verdadeira orquestra de texturas e aromas que satisfaz os paladares mais exigentes!",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                }
                ]
            },
            {
                id: 3,
                category: "Vegetarianos / Legumes",
                itens: [
                {
                    id: 11,
                    name: "Rocambole de legumes",
                    image: `${baseURL}companies/mari-maria/food_16.png`,
                    description: "Massa de hortaliças raladas e temperadas, assada até dourar e recheada com rúcula fresca, tomate, mussarela derretida e ovos.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Abóbora assada",
                    image: `${baseURL}companies/mari-maria/food_21.png`,
                    description: "Abóbora assada lentamente até ficar dourada por fora e macia por dentro, finalizada com mel e um toque preciso de pimenta.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                }
                ]
            },
            {
                id: 4,
                category: "Petiscos / Acompanhamentos",
                itens: [
                {
                    id: 11,
                    name: "Batata Crispy com Parmesão",
                    image: `${baseURL}companies/mari-maria/food_19.png`,
                    description: "Batata Crispy com Parmesão do Mari Mariá! Crocantes e douradas no ponto certo, gratinadas com queijo parmesão e finalizadas com aquele toque de cebolinha fresca.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Feijão tropeiro",
                    image: `${baseURL}companies/mari-maria/food_23.png`,
                    description: "Feijão tropeiro no capricho: feijão bem cozido, farinha de mandioca dourada, linguiça e bacon suculentos, ovos cremosos e o toque agridoce da pimenta biquinho.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                }
                ]
            },
            {
                id: 5,
                category: "Peixes / Mar",
                itens: [
                {
                    id: 11,
                    name: "Ceviche de Tilápia",
                    image: `${baseURL}companies/mari-maria/food_20.png`,
                    description: "Ceviche de tilápia preparado na casa: cubos de peixe marinados no suco de limão até ficarem firmes e perfumados, cebola roxa fininha, tomate suculento, salsinha fresca, milho crocante e pimenta na medida.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Cuscuz moldado",
                    image: `${baseURL}companies/mari-maria/food_15.png`,
                    description: "Cuscuz moldado no capricho, úmido e aromático: peixe desfiado, farinha de milho e legumes salteados, tudo temperado na casa para entregar cor, textura e aquele sabor que conforta.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                }
                ]
            },
            {
                id: 6,
                category: "Árabe",
                itens: [
                {
                    id: 11,
                    name: "Quibe Árabe",
                    image: `${baseURL}companies/mari-maria/food_27.png`,
                    description: "O clássico quibe árabe em uma experiência culinária única! A suculência da carne combinada com o crocante e o sabor marcante das nozes cria uma harmonia irresistível em cada mordida.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                }
                ]
            },
            {
                id: 7,
                category: "Sobremesas",
                itens: [
                {
                    id: 11,
                    name: "Torata de maçã",
                    image: `${baseURL}companies/mari-maria/food_17.png`,
                    description: "Nossa Torta de Maçã com Creme de Confeiteiro é a definição de conforto e sabor.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Cheesecake com Geleia de Morango",
                    image: `${baseURL}companies/mari-maria/food_18.png`,
                    description: "O irresistível Cheesecake com Geleia de Morango do Mari Mariá Restaurante! A cremosidade perfeita do cheesecake encontra a acidez vibrante da nossa geleia artesanal de morangos frescos.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Cookie recheado",
                    image: `${baseURL}companies/mari-maria/food_22.png`,
                    description: "Nosso cookie recheado não é apenas uma sobremesa, é uma verdadeira obra-prima. Com uma base crocante e robusta, ele surpreende a cada mordida.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                },
                {
                    id: 11,
                    name: "Torta de Chocolate",
                    image: `${baseURL}companies/mari-maria/food_24.png`,
                    description: "Torta de chocolate ao leite com cobertura cremosa de chocolate branco, finalizada com raspas de chocolate.",
                    // measure: { value: "?", formatted: "?" },
                    price: { value: 99.90, formatted: "R$ 99,90" }
                }
                ]
            }
        ],
        links: {
            facebook: "https://www.facebook.com/valeriamachadohenriques/",
            instagram: "https://www.instagram.com/restaurante_mari_maria/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511996020769",
        }
    },
    "sertao-bar-e-restaurante": {
        name: "Sertão Bar e Restauranrate",
        themeColor: "",
        logo: `${baseURL}companies/sertao-bar-e-restaurante/logo.jpg`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "quintaldavila634@gmail.com",
        phone: "(11) 2916-9723 | (11) 97322-3740",
        texts: [
            "No Sertão Bar e Restaurante você encontra pratos que equilibram tradição e sabor: carnes bem preparadas, vegetais frescos, massas e petiscos — tudo feito com cuidado. É o lugar ideal para uma refeição de qualidade ou para compartilhar momentos com amigos, em um ambiente realmente acolhedor.",
    
            "O Sertão Bar e Restaurante aposta em um cardápio variado e equilibrado: cortes de carne suculentos, massas, petiscos, saladas e opções leves — perfeito para agradar diferentes gostos. O clima é descontraído, simples e convidativo, ideal para quem busca uma refeição saborosa, prática e sem complicação. A casa recebe bem, trata com atenção e faz você se sentir em casa.",
            
            "Com um ambiente moderno e descontraído, o Sertão Bar e Restaurante se tornou ponto de encontro para quem busca sabor, conforto e uma experiência gastronômica leve. Cada visita é uma oportunidade de aproveitar boas refeições, bons momentos e aquilo que a casa mais preza: comida bem feita e hospitalidade verdadeira.",
            
            "Sertão Bar e Restaurante: tradição, sabor caseiro e acolhimento no coração da cidade.",
            
            "Localizado na Av. João XXIII, o Sertão Bar e Restaurante é conhecido por unir simplicidade, comida bem feita e um atendimento sempre simpático. É o tipo de lugar que rapidamente vira parte da rotina de quem trabalha na região e busca uma refeição saborosa por um preço justo.",
            
            "Reconhecido pelos pratos bem servidos — massas, carnes, petiscos e receitas tradicionais — o restaurante também oferece opções rápidas para o almoço, sempre com aquele tempero caseiro que marcou sua história ao longo dos anos.",
            
            "A atmosfera é leve, informal e acolhedora, ideal para quem quer almoçar com tranquilidade, encontrar amigos ou aproveitar um momento de pausa no centro da cidade. O cardápio variado e o ótimo custo-benefício fazem do Sertão Bar e Restaurante uma escolha constante entre trabalhadores, moradores e visitantes.",
            
            "Funcionando de segunda a sexta, das 11h às 23h00, o Sertão Bar e Restaurante mantém sua essência simples e verdadeira: comida boa, atendimento cordial e um clima que faz o cliente se sentir em casa — todos os dias."
        ],
        history: [
            {
                title: "Sertão Bar e Restaurante: sabor autêntico e acolhimento em um espaço que faz parte da vida do bairro.",
                year: "Atual",
                image: { 
                    src: `${baseURL}companies/sertao-bar-e-restaurante/inner_3.png`, 
                    alt: "Imagem do Restaurante" 
                },
                text: `
                    Hoje, o Sertão Bar e Restaurante segue como um ponto tradicional na Av. João XXIII.
                    Funcionando diariamente no horário de almoço, mantém viva a essência que sempre definiu a casa:
                    comida boa, ambiente acolhedor e atendimento cordial.
                    Um clássico da região — simples, honesto e parte da história gastronômica local.
                `
            }
        ],
        units: [
            {
                name: "Sertão Bar e Restauranrate",
                value: "sertao-bar-e-restaurante",
                hourly: "DOM A SAB - 11h às 23h",
                location: {
                    extended: "Av. João XXIII, 634 - Vila Formosa, São Paulo - SP, 03361-000",
                    street: "Av. João XXIII",
                    city: "São Paulo",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "634",
                    zipCode: "03361-000",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.876224872345!2d-46.53730472065434!3d-23.572888499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d26f4be72ef%3A0x266a543bfa4c6ec0!2sSert%C3%A3o%20Bar%20e%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1764247168099!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/sertao-bar-e-restaurante/inner_1.png`, alt: "defaulImage"},
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
                    `${baseURL}companies/sertao-bar-e-restaurante/outter_1.png`,
                    `${baseURL}companies/sertao-bar-e-restaurante/inner_1.png`,
                    `${baseURL}companies/sertao-bar-e-restaurante/inner_3.png`,
                    `${baseURL}companies/sertao-bar-e-restaurante/highlight_1.png`,
                    `${baseURL}companies/sertao-bar-e-restaurante/highlight_3.png`,
                ]
            }
        ],
        images: [
            `${baseURL}companies/sertao-bar-e-restaurante/outter_1.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/inner_1.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/inner_2.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/inner_3.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/highlight_1.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/highlight_2.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/highlight_3.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/outter_1.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/inner_1.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/inner_3.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/highlight_1.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/highlight_3.png`,
        ],
        banners: [
            `${baseURL}companies/sertao-bar-e-restaurante/inner_1.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/inner_3.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/inner_2.png`,
        ],
        highlights: [
            `${baseURL}companies/sertao-bar-e-restaurante/highlight_1.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/highlight_2.png`,
            `${baseURL}companies/sertao-bar-e-restaurante/highlight_3.png`,
        ],
        cards: [
            `${baseURL}companies/sertao-bar-e-restaurante/inner_2.png`,
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
            facebook: "https://www.facebook.com/profile.php?id=61563577801543&locale=pt_BR",
            instagram: "https://www.instagram.com/sertaobarerestaurante_/",
            whatsapp: "https://api.whatsapp.com/send/?phone=551129169723",
        }
    }

}

// ucytwat x three 6 mafia "lethal" type beat
