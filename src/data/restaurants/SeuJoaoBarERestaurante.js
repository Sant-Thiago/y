const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "seu-joao": {
        name: "Seu João Bar e Restaurante",
        themeColor: "#181818ff",
        logo: `${baseURL}companies/seu-joao/logo.jpg`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "exemplo@gmail.com",
        phone: "11 96027-3275",
        texts: [
            "No Seu João Bar e Restaurante, o dia começa cedo e termina tarde. A casa é reconhecida por servir pratos que equilibram tradição, sabor e aquele cuidado de cozinha caseira. De carnes bem preparadas a opções leves, passando por massas, saladas e petiscos, tudo é feito pensando no público que busca qualidade, praticidade e refeições bem servidas no ritmo de São Paulo.",

            "O cardápio reúne diversidade e sabor: cortes suculentos, opções do dia, clássicos executivos, sobremesas tradicionais e uma seleção de bebidas que agrada a todos os perfis. O ambiente segue um estilo simples e acolhedor — perfeito para quem quer comer bem sem complicação, seja sozinho, acompanhado ou durante uma pausa no trabalho.",

            "Com espaços modernos e descontraídos, o Seu João se tornou ponto de encontro para quem busca boa comida e um clima leve. Cada visita entrega uma experiência familiar, marcada pela hospitalidade da equipe, pela constância dos pratos e por uma atmosfera que acompanha o movimento da cidade.",

            "Seu João Bar e Restaurante: tradição, sabor caseiro e acolhimento presentes em alguns dos bairros mais importantes de São Paulo.",

            "A marca se destaca por unir praticidade e sabor. É o tipo de lugar que rapidamente entra na rotina: refeições bem preparadas, atendimento direto e a sensação de estar em um ambiente simples, acessível e confiável — seja para um café da manhã completo, um almoço rápido ou um final de tarde mais descontraído.",

            "Funcionando todos os dias, das primeiras horas da manhã até o final da noite, o restaurante acompanha o ritmo intenso da cidade. A proposta é clara: oferecer pratos bem feitos e atendimento cordial desde a abertura até o fechamento.",

            "A atmosfera é leve e informal, ideal para quem busca uma pausa no corre-corre de São Paulo. Sua presença marcante nos bairros onde atua atrai moradores, trabalhadores e visitantes que procuram um lugar prático, saboroso e constante no dia a dia.",

            "Com unidades estrategicamente distribuídas em regiões movimentadas da cidade, o Seu João Bar e Restaurante reforça sua essência: simplicidade, boa comida e um atendimento consistente ao longo de todo o dia. Um ponto que segue fazendo parte da rotina de quem valoriza praticidade sem abrir mão do sabor."
        ],
        history: [
            {
                title: "Seu João Bar e Restaurante hoje: tradição em Indianópolis",
                year: "Atual",
                image: { src: `${baseURL}companies/seu-joao/outter_3.jpeg`, alt: "Imagem do Restaurante" },
                text: `
                    Hoje, o Seu João Bar e Restaurante se mantém como uma das referências gastronômicas da cidade.
                    Preserva a essência que consolidou seu nome: comida saborosa, ambiente acolhedor
                    e atendimento cordial. Uma marca que combina simplicidade, qualidade e presença constante
                    no dia a dia de quem vive ou trabalha nos bairros onde está presente.
                `
            }
        ],
        units: [
            {
                name: "Seu João Bar e Restaurante Moema",
                value: "seu-joao-moema",
                hourly: "DOM A SAB - 06h às 00h",
                phone: {
                    value: 11960273275,
                    formatted:"11 96027-3275"
                },
                location: {
                    extended: "Av. Ibirapuera, 2495 - Indianópolis, São Paulo - SP, 04029-200",
                    street: "Av. Ibirapuera",
                    neighborhood: "Moema",
                    city: "São Paulo",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "2495",
                    zipCode: "04029-200",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9627231148406!2d-46.6639439!3d-23.605669799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b0070525215%3A0x588a05e2c13d92ff!2sSeu%20Jo%C3%A3o%20Bar e Restaurante!5e0!3m2!1spt-BR!2sbr!4v1764285182956!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/seu-joao/inner_4.jpeg`, alt: "defaulImage"},
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
                    `${baseURL}companies/seu-joao/outter_1.jpeg`,
                    `${baseURL}companies/seu-joao/outter_2.jpeg`,
                    `${baseURL}companies/seu-joao/outter_3.jpeg`,
                    `${baseURL}companies/seu-joao/outter_4.jpeg`,
                    `${baseURL}companies/seu-joao/highlight_1.jpeg`,
                    `${baseURL}companies/seu-joao/inner_1.jpeg`,
                    `${baseURL}companies/seu-joao/inner_2.jpeg`,
                    `${baseURL}companies/seu-joao/inner_4.jpeg`,
                    `${baseURL}companies/seu-joao/inner_5.jpeg`,
                    `${baseURL}companies/seu-joao/inner_6.jpeg`,
                    `${baseURL}companies/seu-joao/inner_7.jpeg`,
                ]
            },
            {
                name: "Seu João Bar e Restaurante Bela Vista",
                value: "seu-joao-bela-vista",
                hourly: "DOM A SAB - 06h às 00h",
                phone: {
                    value: 11960273275,
                    formatted:"11 96027-3275"
                },
                location: {
                    extended: "Av. Brigadeiro Luís Antônio, 2150 - Bela Vista, São Paulo - SP, 01317-002",
                    street: "Av. Brigadeiro Luís Antônio",
                    city: "São Paulo",
                    neighborhood: "Bela Vista",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "2150",
                    zipCode: "01317-002",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0506196731435!2d-46.648264399999995!3d-23.5666254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59003b9ebd6b%3A0x48d2908c916f7666!2sSeu%20Jo%C3%A3o%20Bar%20e%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1764356090440!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/seu-joao/inner_9.jpeg`, alt: "defaulImage"},
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
                    `${baseURL}companies/seu-joao/highlight_2.jpeg`,
                    `${baseURL}companies/seu-joao/inner_3.jpeg`,
                    `${baseURL}companies/seu-joao/inner_8.jpeg`,
                    `${baseURL}companies/seu-joao/inner_9.jpeg`,
                    `${baseURL}companies/seu-joao/inner_10.jpeg`,
                    `${baseURL}companies/seu-joao/inner_11.jpeg`,
                    `${baseURL}companies/seu-joao/inner_12.jpeg`,
                ]
            },
            {
                name: "Seu João Bar e Restaurante Jardim Paulista",
                value: "seu-joao-jardim-paulista",
                hourly: "DOM A SAB - 06h às 00h",
                phone: {
                    value: 11949629521,
                    formatted:"11 94962-9521"
                },
                location: {
                    extended: "R. Pamplona, 1501 - Jardim Paulista, São Paulo - SP, 01405-003",
                    street: "R. Pamplona",
                    city: "São Paulo",
                    neighborhood: "Jardim Paulista",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "1501",
                    zipCode: "01405-003",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.963635178669!2d-46.662008320654316!3d-23.5697495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce590076760d87%3A0xaf9c4e7ec4e63bc5!2sSeu%20Jo%C3%A3o%20Bar%20e%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1764378968994!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/seu-joao/inner_15.jpeg`, alt: "defaulImage"},
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
                    `${baseURL}companies/seu-joao/highlight_3.jpeg`,
                    `${baseURL}companies/seu-joao/inner_14.jpeg`,
                    `${baseURL}companies/seu-joao/inner_15.jpeg`,
                    `${baseURL}companies/seu-joao/outter_5.jpeg`,
                    `${baseURL}companies/seu-joao/outter_6.jpeg`,
                ]
            }            
        ],
        images: [
            `${baseURL}companies/seu-joao/outter_1.jpeg`,
            `${baseURL}companies/seu-joao/outter_2.jpeg`,
            `${baseURL}companies/seu-joao/outter_3.jpeg`,
            `${baseURL}companies/seu-joao/outter_4.jpeg`,
            `${baseURL}companies/seu-joao/outter_5.jpeg`,
            `${baseURL}companies/seu-joao/outter_6.jpeg`,
            `${baseURL}companies/seu-joao/inner_1.jpeg`,
            `${baseURL}companies/seu-joao/inner_2.jpeg`,
            `${baseURL}companies/seu-joao/inner_3.jpeg`,
            `${baseURL}companies/seu-joao/inner_4.jpeg`,
            `${baseURL}companies/seu-joao/inner_5.jpeg`,
            `${baseURL}companies/seu-joao/inner_6.jpeg`,
            `${baseURL}companies/seu-joao/inner_7.jpeg`,
            `${baseURL}companies/seu-joao/inner_8.jpeg`,
            `${baseURL}companies/seu-joao/inner_9.jpeg`,
            `${baseURL}companies/seu-joao/inner_10.jpeg`,
            `${baseURL}companies/seu-joao/inner_11.jpeg`,
            `${baseURL}companies/seu-joao/inner_12.jpeg`,
            `${baseURL}companies/seu-joao/inner_13.jpeg`,
            `${baseURL}companies/seu-joao/inner_14.jpeg`,
            `${baseURL}companies/seu-joao/inner_15.jpeg`,
            `${baseURL}companies/seu-joao/menu.jpeg`,
            `${baseURL}companies/seu-joao/highlight_1.jpeg`,
            `${baseURL}companies/seu-joao/highlight_2.jpeg`,
            `${baseURL}companies/seu-joao/highlight_3.jpeg`,
        ],
        banners: [
            `${baseURL}companies/seu-joao/outter_3.jpeg`,
            `${baseURL}companies/seu-joao/inner_7.jpeg`,
            `${baseURL}companies/seu-joao/inner_13.jpeg`,
        ],
        highlights: [
            `${baseURL}companies/seu-joao/highlight_1.jpeg`,
            `${baseURL}companies/seu-joao/food_5.jpeg`,
            `${baseURL}companies/seu-joao/highlight_2.jpeg`,
        ],
        cards: [
            `${baseURL}companies/seu-joao/inner_1.jpeg`,
        ],
        menuItens: [
            {
                id: 1,
                category: "Matinais",
                itens: [
                    {
                        id: 11,
                        name: "Cappuccino",
                        image: `${baseURL}companies/seu-joao/drink_1.png`,
                        description: "Cappuccino.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 8.00, formatted: "R$ 8,00" }
                    },
                    {
                        id: 12,
                        name: "Café Expresso",
                        image: `${baseURL}companies/seu-joao/drink_2.png`,
                        description: "Café Expresso",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 7.00, formatted: "R$ 7,00" }
                    },
                    {
                        id: 13,
                        name: "Chá na Xícara",
                        image: defaultDish,
                        description: "Chá de Xícara",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 5.00, formatted: "R$ 5,00" }
                    }
                ]
            },
            {
                id: 2,
                category: "Tapiocas",
                itens: [
                    {
                        id: 21,
                        name: "Tapioca Manteiga",
                        image: defaultDish,
                        description: "Tapioca de Manteiga, Salgada.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 8.00, formatted: "R$ 8,00" }
                    },
                    {
                        id: 22,
                        name: "Tapioca Requeijão",
                        image: defaultDish,
                        description: "Tapioca de Requeijão, Salgada.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 12.00, formatted: "R$ 12,00" }
                    },
                    {
                        id: 23,
                        name: "Tapioca Banana c/ Chocolate",
                        image: defaultDish,
                        description: "Tapioca de Banana com Chocolate, Doce.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 17.00, formatted: "R$ 17,00" }
                    },
                    {
                        id: 33,
                        name: "Tapioca Morango c/ Nutella",
                        image: defaultDish,
                        description: "Tapioca de Morango com Nutella, Doce.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 19.00, formatted: "R$ 19,00" }
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
                category: "Pastéis",
                itens: [
                    {
                        id: 41,
                        name: "Pastél de Carne",
                        image: defaultDish,
                        description: "Pastél de Carne, Salgado.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 13.00, formatted: "R$ 13,00" }
                    },
                    {
                        id: 42,
                        name: "Pastél de Queijo",
                        image: defaultDish,
                        description: "Pastel de Queijo, Salgado.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 13.00, formatted: "R$ 13,00" }
                    },
                    {
                        id: 43,
                        name: "Pastél de Banana com Chocolate",
                        image: defaultDish,
                        description: "Pastel de Banana com Chocolate, Doces.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 16.00, formatted: "R$ 16,00" }
                    },
                    {
                        id: 44,
                        name: "Pastél de Morango com Nutella",
                        image: defaultDish,
                        description: "Pastel de Morango com Nutella, Doces.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 16.00, formatted: "R$ 16,00" }
                    }
                ]
            },
            {
                id: 5,
                category: "Panquecas",
                itens: [
                    {
                        id: 51,
                        name: "Panqueca Carne com Queijo",
                        image: defaultDish,
                        description: "Panqueca de Carne com Queijo.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 22.00, formatted: "R$ 22,00" }
                    },
                    {
                        id: 52,
                        name: "Panqueca Queijo",
                        image: defaultDish,
                        description: "Panqueca de Queijo.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 22.00, formatted: "R$ 22,00" }
                    },
                    {
                        id: 53,
                        name: "Panqueca Frango com Catupiry",
                        image: defaultDish,
                        description: "Panqueca de Frango com Catupiry.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 22.00, formatted: "R$ 22,00" }
                    }
                ]
            },
            {
                id: 6,
                category: "Cuscuz",
                itens: [
                    {
                        id: 61,
                        name: "Cuscuz Manteiga",
                        image: defaultDish,
                        description: "Cuscuz na Manteiga.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 10.00, formatted: "R$ 10,00" }
                    }, 
                    {
                        id: 62,
                        name: "Cuscuz Ovo",
                        image: defaultDish,
                        description: "Cuscuz com Ovo.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 13.00, formatted: "R$ 13,00" }
                    }, 
                    {
                        id: 63,
                        name: "Cuscuz Frango com Catupiry",
                        image: defaultDish,
                        description: "Cuscuz Frango com Catupiry.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 20.00, formatted: "R$ 20,00" }
                    }, 
                ]
            },
            {
                id: 7,
                category: "Pratos do Dia",
                itens: [
                    {
                        id: 71,
                        name: "Virado à Paulista",
                        image: `${baseURL}companies/seu-joao/food_5.jpeg`,
                        description: "Nosso Virado à Paulista suculento acompanha arroz, feijão, fritas ou legumes. Pratos da Segunda Feira.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 40.00, formatted: "R$ 40,00" }
                    },
                    {
                        id: 72,
                        name: "Strogonoff (Filé Mignon)",
                        image: `${baseURL}companies/seu-joao/food_9.png`,
                        description: "Nosso Strognoff de Filé Mignon acompanha arroz e batata palha. Prato da Terça Feira",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 43.00, formatted: "R$ 43,00" }
                    },
                    {
                        id: 73,
                        name: "Bife à Role",
                        image: defaultDish,
                        description: "Nosso maravilhoso Bife à Role acompanha arroz, feijão e purê. Prato da Terça Feira.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 36.00, formatted: "R$ 36,00" }
                    },
                    {
                        id: 74,
                        name: "Risoto de Alho Poró com Contra filé",
                        image: `${baseURL}companies/seu-joao/food_10.png`,
                        description: "Nosso imperdível Risoto de Alho Poró c/ Contra Filé acompanha arroz, couve, torresmo, farofa, banan à milanesa, bisteca, calabresa defumada e batida. Prato da Quarta Feira.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 44.90, formatted: "R$ 44,90" }
                    }
                ]
            }, {
                id: 8,
                category: "Comercial",
                itens: [
                    {
                        id: 81,
                        name: "Filé de Frango",
                        image: `${baseURL}companies/seu-joao/food_11.png`,
                        description: "Nosso Saboroso Filé de Frango acompanhado com arroz, feijão, fritas ou legumes.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 30.00, formatted: "R$ 30,00" }
                    },
                    {
                        id: 82,
                        name: "Omelete",
                        image: defaultDish,
                        description: "Omelete acompanha arroz, feijão, fritas e legumes.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 30.00, formatted: "R$ 30,00" }
                    },
                    {
                        id: 83,
                        name: "Bisteca",
                        image: defaultDish,
                        description: "Bisteca Suculenta acompanha arroz, feijão, fritas e legumas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 25.00, formatted: "R$ 25,00" }
                    },
                    {
                        id: 84,
                        name: "Contra Filé",
                        image: `${baseURL}companies/seu-joao/food_4.jpeg`,
                        description: "Nosso Delicioso Contra Filé acompanhado com arroz, feijão, fritas e legumes.",
                        price: { value: 35.00, formatted: "R$ 35,00" }
                    },
                ]
            }, {
                id: 9,
                category: "Executivos",
                itens: [
                    {
                        id: 91,
                        name: "Contra Filé à Cavalo",
                        image: `${baseURL}companies/seu-joao/food_12.png`,
                        description: "Nosso Saboroso Contra Filé à Cavalo acompanha arroz, feijão, fritas e 2 ovos.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 43.00, formatted: "R$ 43,00" }
                    },
                    {
                        id: 92,
                        name: "Contra Filé a Cubana",
                        image: `${baseURL}companies/seu-joao/food_7.jpeg`,
                        description: "Contra Filé à milanesa, banana à milanesa, arroz, feijão e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 47.00, formatted: "R$ 47,00" }
                    },
                    {
                        id: 93,
                        name: "Filé Mignon",
                        image: defaultDish,
                        description: "Filé Mignon, arroz, feijão, fritas ou legumes.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 60.00, formatted: "R$ 60,00" }
                    },
                ]
            },
            {
                id: 10,
                category: "Pratos Especiais",
                itens: [
                    {
                        id: 101,
                        name: "Tilápia",
                        image: defaultDish,
                        description: "Nosso Saboroso Tilápia acompanha arroz, fritas e salada mix. Servido Somente nos Sábados, Domingos e Feriados.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 110.00, formatted: "R$ 110,00" }
                    },
                    {
                        id: 102,
                        name: "Picanha da Casa",
                        image: defaultDish,
                        description: "Picanha, arroz, fritas, salada mix, 2 ovos, farofa e vinagrete. Servido Somente nos Sábados, Domingos e Feriados.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 145.00, formatted: "R$ 145,00" }
                    },
                    {
                        id: 103,
                        name: "Filé Mignon à Parmegiana",
                        image: defaultDish,
                        description: "Filé Mignon à Parmegiana com molho branco ou vermelho, salada mix, arroz e fritas. Servido Somente nos Sábados, Domingos e Feriados.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 150.00, formatted: "R$ 150,00" }
                    },
                ]
            },
            {
                id: 11,
                category: "Guarnições",
                itens: [
                    {
                        id: 111,
                        name: "Arroz Branco",
                        image: `${baseURL}companies/seu-joao/food_13.png`,
                        description: "Arroz Branco.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 6.00, formatted: "R$ 6,00" }
                    },
                    {
                        id: 112,
                        name: "Salada",
                        image: `${baseURL}companies/seu-joao/food_6.jpeg`,
                        description: "Salada.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 6.00, formatted: "R$ 6,00" }
                    },
                    {
                        id: 113,
                        name: "Fritas",
                        image: defaultDish,
                        description: "Fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 8.00, formatted: "R$ 8,00" }
                    },
                ]
            }, {
                id: 12,
                category: "Parmegianas",
                itens: [
                    {
                        id: 121,
                        name: "Contra Filé",
                        image: defaultDish,
                        description: "Contra Filé à Parmegiana, arroz e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 47.00, formatted: "R$ 47,00" }
                    },
                    {
                        id: 122,
                        name: "Filé de Frango",
                        image: `${baseURL}companies/seu-joao/food_14.png`,
                        description: "Filé de Frango à Parmegiana, arroz e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 40.00, formatted: "R$ 40,00" }
                    },
                    {
                        id: 123,
                        name: "Filé Mignon",
                        image: defaultDish,
                        description: "Filé Mignon à Parmegiana, arroz e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 70.00, formatted: "R$ 70,00" }
                    },
                ]
            }, {
                id: 13,
                category: "Milanesa",
                itens: [
                    {
                        id: 131,
                        name: "Contra Filé",
                        image: defaultDish,
                        description: "Contra Filé à Milanesa, arroz, feijão, legumes e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 40.00, formatted: "R$ 40,00" }
                    },
                    {
                        id: 132,
                        name: "Filé de Frango",
                        image: `${baseURL}companies/seu-joao/food_8.jpeg`,
                        description: "Filé de Frango à Milanesa, arroz, feijão, legumes e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 34.00, formatted: "R$ 34,00" }
                    },
                    {
                        id: 133,
                        name: "Filé Mignon",
                        image: defaultDish,
                        description: "Filé Mignon à Milanesa, arroz, feijão, legumes e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 63.00, formatted: "R$ 63,00" }
                    },
                ]
            },
            {
                id: 14,
                category: "Pratos Verão",
                itens: [
                    {
                        id: 141,
                        name: "Filé Mignon",
                        image: defaultDish,
                        description: "Filé Mignon, mix de folhas, tomate, palmito, cenoura e azeitona, molho de mostarda e mel.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 50.00, formatted: "R$ 50,00" }
                    },
                    {
                        id: 142,
                        name: "Filé de Saint Peter à Milanesa",
                        image: `${baseURL}companies/seu-joao/food_15.png`,
                        description: "Filé de Saint Peter à Milanesa, mix de folhas, tomate, palmito, cenoura e azeitona, molho de mostarda e mel.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 37.00, formatted: "R$ 37,00" }
                    },
                    {
                        id: 143,
                        name: "Filé de Frango Grelhado",
                        image: defaultDish,
                        description: "Filé de Frango Grelhado, mix de folhas, tomate, palmito, cenoura e azeitona, molho de mostarda e mel.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 30.00, formatted: "R$ 30,00" }
                    },
                ]
            },
            {
                id: 15,
                category: "Sucos",
                itens: [
                    {
                        id: 151,
                        name: "Sucos com Água",
                        image: defaultDish,
                        description: "Sucos com Água - Laranja, Limão, Maracujá, Manga, Goiaba, Melancia, Abacaxi, Morango, Kiwi, Acerola, Caju, Cajá, Graviola, Frutas Vermelhas, Cupuaçu, Melão, Maçã.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 9.90, formatted: "R$ 9,90" }
                    },
                    {
                        id: 152,
                        name: "Sucos com Leite",
                        image: defaultDish,
                        description: "Sucos com Leite - Laranja, Limão, Maracujá, Manga, Goiaba, Melancia, Abacaxi, Morango, Kiwi, Acerola, Caju, Cajá, Graviola, Frutas Vermelhas, Cupuaçu, Melão, Maçã.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 11.90, formatted: "R$ 11,90" }
                    },
                    {
                        id: 153,
                        name: "2 Frutas",
                        image: defaultDish,
                        description: "2 Frutas - Laranja, Limão, Maracujá, Manga, Goiaba, Melancia, Abacaxi, Morango, Kiwi, Acerola, Caju, Cajá, Graviola, Frutas Vermelhas, Cupuaçu, Melão, Maçã.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 14.90, formatted: "R$ 14,90" }
                    },
                ]
            },
            {
                id: 16,
                category: "Vitaminas",
                itens: [
                    {
                        id: 161,
                        name: "Vitamina de Iogurte com Leite",
                        image: defaultDish,
                        description: "Vitamina de Iogurte com Leite.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 9.90, formatted: "R$ 9,90" }
                    },
                    {
                        id: 162,
                        name: "Vitamina de Iogurte com Leite, Morango e Banana",
                        image: defaultDish,
                        description: "Vitamina de Iogurte com Leite, Morango e Banana.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 14.90, formatted: "R$ 14,90" }
                    },
                    {
                        id: 163,
                        name: "Vitamina de Abacate",
                        image: defaultDish,
                        description: "Vitamina de Abacate.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 11.90, formatted: "R$ 11,90" }
                    },
                ]
            },
            {
                id: 17,
                category: "Detox",
                itens: [
                    {
                        id: 171,
                        name: "Detox 1",
                        image: defaultDish,
                        description: "Detox 1 com Couve, Hortelã, Limão, Abacaxi, Gengibre e Suco de Laranja.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 16.00, formatted: "R$ 16,00" }
                    },
                    {
                        id: 172,
                        name: "Detox 2",
                        image: defaultDish,
                        description: "Detox 2 com Cenoura, Maçã, Abacaxi, Gengibre, Hortelã, Limão e Água.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 16.00, formatted: "R$ 16,00" }
                    },
                    {
                        id: 173,
                        name: "Detox 3",
                        image: defaultDish,
                        description: "Detox 3 com Maracujá, Gengibre, Couve e Água.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 16.00, formatted: "R$ 16,00" }
                    },
                ]
            },
            {
                id: 18,
                category: "Sucos Energéticos",
                itens: [
                    {
                        id: 181,
                        name: "Açaí com Água",
                        image: defaultDish,
                        description: "Suco de Açaí com Água.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 12.90, formatted: "R$ 12,90" }
                    },
                    {
                        id: 182,
                        name: "Açaí com Leite ",
                        image: defaultDish,
                        description: "Suco de Açaí com Leite.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 14.90, formatted: "R$ 14,90" }
                    },
                    {
                        id: 183,
                        name: "Açaí com Laranja",
                        image: defaultDish,
                        description: "Suco de Açaí com Laranja.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 15.90, formatted: "R$ 15,90" }
                    },
                ]
            },
            {
                id: 19,
                category: "Burguer's",
                itens: [
                    {
                        id: 191,
                        name: "X Burguer",
                        image: `${baseURL}companies/seu-joao/food_16.png`,
                        description: "X Burguer - Hamburguer com queijo prato. Acompanha fritas e maionese da casa.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 26.90, formatted: "R$ 26,90" }
                    },
                    {
                        id: 192,
                        name: "X Salada",
                        image: `${baseURL}companies/seu-joao/food_17.png`,
                        description: "X Salada - Hamburguer, queijo, alface e tomate. Acompanha fritas e maionese da casa.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 28.90, formatted: "R$ 28,90" }
                    },
                    {
                        id: 193,
                        name: "X Tudo",
                        image: `${baseURL}companies/seu-joao/food_18.png`,
                        description: "X Tudo - Hamburguer, ovo, bacon, presunto, queijo e salada. Acompanha fritas e maionese da casa.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 32.90, formatted: "R$ 32,90" }
                    },
                ]
            },
            {
                id: 20,
                category: "Sanduíches",
                itens: [
                    {
                        id: 201,
                        name: "Misto Quente",
                        image: defaultDish,
                        description: "Sanduíche de Misto Quente.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 16.00, formatted: "R$ 16,00" }
                    },
                    {
                        id: 202,
                        name: "Queijo Quente",
                        image: defaultDish,
                        description: "Sanduíche de Queijo Quente.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 28.90, formatted: "R$ 28,90" }
                    },
                    {
                        id: 203,
                        name: "Queijo Minas",
                        image: defaultDish,
                        description: "Sanduíche de Queijo Minas Quente ou Frio.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 17.00, formatted: "R$ 17,00" }
                    },
                    {
                        id: 204,
                        name: "Peito de Peru com Queijo Minas",
                        image: defaultDish,
                        description: "Sanduíche de Peito de Peru com Queijo Minas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 19.00, formatted: "R$ 19,00" }
                    },
                ]
            },
            {
                id: 21,
                category: "Beirutes",
                itens: [
                    {
                        id: 211,
                        name: "Picanha",
                        image: defaultDish,
                        description: "Beirute de Picanha acompanhado com alface, tomate, maionese, bacon, presunto, queijo, ovo e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 50.00, formatted: "R$ 50,00" }
                    },
                    {
                        id: 212,
                        name: "Filé Mignon",
                        image: defaultDish,
                        description: "Beirute de Filé Mignon acompanhado com alface, tomate, maionese, bacon, presunto, queijo, ovo e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 50.00, formatted: "R$ 50,00" }
                    },
                    {
                        id: 213,
                        name: "Carne (bife)",
                        image: defaultDish,
                        description: "Beirute de Carne acompanhado com alface, tomate, maionese, bacon, presunto, queijo, ovo e fritas.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 40.00, formatted: "R$ 40,00" }
                    },
                ]
            }, {
                id: 22,
                category: "Espetos",
                itens: [
                    {
                        id: 221,
                        name: "Alcatra",
                        image: defaultDish,
                        description: "Espeto de Alcatra com Farofa, Pão e Vinagrete.",
                        price: { value: 18.00, formatted: "R$ 18,00" }
                    },
                    {
                        id: 222,
                        name: "Frango",
                        image: defaultDish,
                        description: "Espeto de Frango com Farofa, Pão e Vinagrete.",
                        price: { value: 16.00, formatted: "R$ 16,00" }
                    },
                    {
                        id: 223,
                        name: "Calabresa",
                        image: defaultDish,
                        description: "Espeto de Calabresa com Farofa, Pão e Vinagrete.",
                        price: { value: 16.00, formatted: "R$ 16,00" }
                    }
                ]
            }, {
                id: 23,
                category: "Porções",
                itens: [
                    {
                        id: 231,
                        name: "Fritas",
                        image: defaultDish,
                        description: "Porções de Fritas.",
                        price: { value: 40.00, formatted: "R$ 40,00" }
                    },
                    {
                        id: 232,
                        name: "Salame",
                        image: defaultDish,
                        description: "Porções de Salame.",
                        price: { value: 60.00, formatted: "R$ 60,00" }
                    },
                    {
                        id: 233,
                        name: "Contra Filé",
                        image: defaultDish,
                        description: "Porções de Contra Filé.",
                        price: { value: 80.00, formatted: "R$ 80,00" }
                    }
                ]
            }, {
                id: 24,
                category: "Bebidas Diversas",
                itens: [
                    {
                        id: 241,
                        name: "Schweppes",
                        image: defaultDish,
                        description: "Bebida Schweppes.",
                        price: { value: 8.50, formatted: "R$ 8,50" }
                    },
                    {
                        id: 242,
                        name: "Toddynho",
                        image: defaultDish,
                        description: "Bebida Toddynho.",
                        price: { value: 5.50, formatted: "R$ 5,50" }
                    },
                    {
                        id: 243,
                        name: "Coca Cola",
                        image: defaultDish,
                        description: "Coca Cola.",
                        options: [
                            {
                                label: "KS 290ml",
                                measure: { value: 290, formatted: "290ml" },
                                price: { value: 8.00, formatted: "R$ 8,00" },
                                id: 2430
                            }, 
                            {
                                label: "1l",
                                measure: { value: 1000, formatted: "1l" },
                                price: { value: 13.00, formatted: "R$ 13,00" },
                                id: 2431
                            }, 
                        ]
                    }
                ]
            }, {
                id: 25,
                category: "Coquetéis",
                itens: [
                    {
                        id: 251,
                        name: "Pina Colada",
                        image: `${baseURL}companies/seu-joao/drink_3.png`,
                        description: "Pina Colada, rum bacardi, suco de abacaxi, leite de coco e leite condesado.",
                        price: { value: 35.90, formatted: "R$ 35,90" }
                    },
                    {
                        id: 252,
                        name: "Sex On The Beach",
                        image: `${baseURL}companies/seu-joao/drink_4.png`,
                        description: "Sex On The Beach, suco de laranja, licor de pêssego, vodka e xarope de cramberry.",
                        price: { value: 35.90, formatted: "R$ 35,90" }
                    },
                    {
                        id: 253,
                        name: "Gin Tônica",
                        image: `${baseURL}companies/seu-joao/drink_5.png`,
                        description: "Gin Tônica, gin, tônica antarctica, zimbro, limão siciliano e alecrim.",
                        price: { value: 34.90, formatted: "R$ 34,90" }
                    }
                ]
            }, {
                id: 26,
                category: "Caipirinhas",
                itens: [
                    {
                        id: 261,
                        name: "Seleta",
                        image: `${baseURL}companies/seu-joao/drink_6.png`,
                        description: "Caipirinha de Seleta - Kiwi, Limão, Abacaxi, Maracuja, Morango, Caju, Frutas Vermelhas.",
                        price: { value: 29.90, formatted: "R$ 29,90" }
                    },
                    {
                        id: 262,
                        name: "Velho Barreiro",
                        image: defaultDish,
                        description: "Caipirinha de Velho Barreiro - Kiwi, Limão, Abacaxi, Maracuja, Morango, Caju, Frutas Vermelhas.",
                        price: { value: 22.00, formatted: "R$ 22,00" }
                    },
                    {
                        id: 263,
                        name: "Vodka Smirnoff",
                        image: `${baseURL}companies/seu-joao/drink_7.png`,
                        description: "Caipirinha de Vodka Smirnoff - Kiwi, Limão, Abacaxi, Maracuja, Morango, Caju, Frutas Vermelhas.",
                        price: { value: 29.90, formatted: "R$ 29,90" }
                    }
                ]
            }, {
                id: 27,
                category: "Cervejas",
                itens: [
                    {
                        id: 271,
                        name: "Original",
                        image: `${baseURL}companies/seu-joao/drink_8.png`,
                        description: "Cerveja Original.",
                        options: [
                            {
                                id: 2710, 
                                label: "600ml", 
                                measure: { value: 600, formatted: "600ml"}, 
                                price: { value: 17.00, formatted: "R$ 17,00" }
                            },
                            {
                                id: 2711, 
                                label: "Lata", 
                                // measure: { value: 600, formatted: "600ml"}, 
                                price: { value: 10.00, formatted: "R$ 10,00" }
                            },
                        ],
                    },
                    {
                        id: 272,
                        name: "Heineken",
                        image: `${baseURL}companies/seu-joao/drink_9.png`,
                        description: "Cerveja Heineken.",
                        options: [
                            {
                                id: 2720, 
                                label: "600ml", 
                                measure: { value: 600, formatted: "600ml"}, 
                                price: { value: 20.00, formatted: "R$ 20,00" }
                            },
                            {
                                id: 2721, 
                                label: "Long Neck", 
                                // measure: { value: 600, formatted: "600ml"}, 
                                price: { value: 15.00, formatted: "R$ 15,00" }
                            },
                            {
                                id: 2722, 
                                label: "Lata", 
                                // measure: { value: 600, formatted: "600ml"}, 
                                price: { value: 10.00, formatted: "R$ 10,00" }
                            }
                        ],
                    },
                    {
                        id: 273,
                        name: "Serramalte",
                        image: `${baseURL}companies/seu-joao/drink_10.png`,
                        description: "Cerveja Serramalte.",
                        measure: { value: 600, formatted: "600ml"}, 
                        price: { value: 17.00, formatted: "R$ 17,00" }
                    }
                ]
            }, {
                id: 28,
                category: "Bebidas Quentes",
                itens: [
                    {
                        id: 281,
                        name: "Velho Barreiro",
                        image: defaultDish,
                        description: "Bebida Velho Barreiro.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 7.00, formatted: "R$ 7,00" }
                    },
                    {
                        id: 282,
                        name: "Pinga 51",
                        image: defaultDish,
                        description: "Bebida Pinga 51.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 7.00, formatted: "R$ 7,00" }
                    },
                    {
                        id: 283,
                        name: "Dreher",
                        image: defaultDish,
                        description: "Bebida Dreher.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 8.00, formatted: "R$ 8,00" }
                    }
                ]
            }, {
                id: 29,
                category: "Cachaças Especiais",
                itens: [
                    {
                        id: 291,
                        name: "Salinas",
                        image: defaultDish,
                        description: "Cachaça Salinas.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 12.00, formatted: "R$ 12,00" }
                    },
                    {
                        id: 292,
                        name: "Seleta",
                        image: defaultDish,
                        description: "Cachaça Seleta.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 12.00, formatted: "R$ 12,00" }
                    },
                    {
                        id: 293,
                        name: "Boazinha",
                        image: defaultDish,
                        description: "Cachaça Boazinha.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 12.00, formatted: "R$ 12,00" }
                    }
                ]
            }, {
                id: 30,
                category: "Vodkas",
                itens: [
                    {
                        id: 301,
                        name: "Smirnoff",
                        image: `${baseURL}companies/seu-joao/drink_11.png`,
                        description: "Vodka Smirnoff.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 16.00, formatted: "R$ 16,00" }
                    },
                    {
                        id: 302,
                        name: "Absolut",
                        image: `${baseURL}companies/seu-joao/drink_12.png`,
                        description: "Vodka Absolut.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 22.00, formatted: "R$ 22,00" }
                    },
                    {
                        id: 303,
                        name: "Ciroc",
                        image: defaultDish,
                        description: "Vodka Ciroc.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 30.00, formatted: "R$ 30,00" }
                    }
                ]
            }, {
                id: 31,
                category: "Tequilas",
                itens: [
                    {
                        id: 311,
                        name: "José Cuervo",
                        image: `${baseURL}companies/seu-joao/drink_13.png`,
                        description: "Dose de Tequila José Cuervo Prata ou Ouro.",
                        options: [
                            {
                                id: 3110, 
                                label: "Ouro Dose", 
                                // measure: { value: 600, formatted: "600ml"}, 
                                price: { value: 24.00, formatted: "R$ 24,00" }
                            },
                            {
                                id: 3111, 
                                label: "Prata Dose", 
                                // measure: { value: 600, formatted: "600ml"}, 
                                price: { value: 24.00, formatted: "R$ 24,00" }
                            }

                        ]
                    },
                ]
            }, {
                id: 32,
                category: "Licor's",
                itens: [
                    {
                        id: 321,
                        name: "Licor 43",
                        image: `${baseURL}companies/seu-joao/drink_14.png`,
                        description: "Licor 43.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 30.00, formatted: "R$ 30,00" }
                    },
                    {
                        id: 322,
                        name: "Licor 43 Chocolate",
                        image: defaultDish,
                        description: "Licor 43 de Chocolate.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 30.00, formatted: "R$ 30,00" }
                    },
                    {
                        id: 323,
                        name: "Amarula",
                        image: defaultDish,
                        description: "Licor Amarula.",
                        measure: { value: 0, formatted: "Dose" },
                        price: { value: 30.00, formatted: "R$ 30,00" }
                    }
                ]
            }, {
                id: 33,
                category: "Whisky's",
                itens: [
                    {
                        id: 331,
                        name: "Old Parr",
                        image: `${baseURL}companies/seu-joao/drink_16.png`,
                        description: "Whisky Old Parr.",
                        options: [
                            {
                                id: 3310,
                                label: "Dose",
                                price: { value: 30.00, formatted: "R$ 30,00" }
                            },
                            {
                                id: 3311,
                                label: "Garrafa",
                                price: { value: 250.00, formatted: "R$ 250,00" }
                            },
                        ]
                    },
                    {
                        id: 332,
                        name: "Jack Daniel's",
                        image: `${baseURL}companies/seu-joao/drink_15.png`,
                        description: "Whisky Jack Daniel's.",
                        options: [
                            {
                                id: 3320,
                                label: "Dose",
                                price: { value: 30.00, formatted: "R$ 30,00" }
                            },
                            {
                                id: 3321,
                                label: "Garrafa",
                                price: { value: 250.00, formatted: "R$ 250,00" }
                            },
                        ]
                    },
                    {
                        id: 333,
                        name: "Black Label",
                        image: `${baseURL}companies/seu-joao/drink_17.png`,
                        description: "Whisky Black Label.",
                        options: [
                            {
                                id: 3330,
                                label: "Dose",
                                price: { value: 30.00, formatted: "R$ 30,00" }
                            },
                            {
                                id: 3331,
                                label: "Garrafa",
                                price: { value: 250.00, formatted: "R$ 250,00" }
                            },
                        ]
                    }
                ]
            }
        ],
        links: {
            facebook: "https://www.facebook.com/",
            instagram: "https://www.instagram.com/seujoao_bar/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511949629521",
        }
    },
}