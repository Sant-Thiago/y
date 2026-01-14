const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "taquaral-cafe": {
        name: "Taquaral Café",
        themeColor: "#432004",
        logo: `${baseURL}companies/taquaral-cafe/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "taquaralcafe.exemplo@gmail.com",
        phone: "(19) 99991-0606",
        texts: [
            "Localizado na Rodovia do Açúcar, em Piracicaba, o Taquaral Café é um espaço pensado para quem aprecia boa comida, café de qualidade e um ambiente acolhedor, ideal para momentos tranquilos e agradáveis.",

            "Com um clima leve e um ambiente espetacular, o Taquaral Café conquista logo na chegada. O atendimento é um dos pontos mais elogiados, com uma equipe atenciosa e sempre pronta para receber bem.",

            "O cardápio agrada os amantes da culinária artesanal, com destaque especial para as queijadas, que encantam pelo sabor, além do café, frequentemente lembrado pelos clientes como excelente.",

            "Cada detalhe da casa reflete cuidado e simplicidade: ingredientes bem preparados, serviço ágil e uma atmosfera que convida a desacelerar e aproveitar a experiência.",

            "Seja para um café da manhã, um almoço leve ou uma pausa durante o dia, o Taquaral Café se destaca como uma excelente opção para quem busca qualidade e conforto.",

            "Mais do que um café, o Taquaral Café é um ponto de encontro para quem valoriza bom atendimento, sabores marcantes e um ambiente que dá vontade de voltar."
        ],
        history: [
            {
                title: "Taquaral Café Hoje: Qualidade, Aconchego e Sabor em Piracicaba",
                year: "Atual",
                image: { 
                    src: `${baseURL}companies/taquaral-cafe/outter_2.jpg`, 
                    alt: "Taquaral Café Piracicaba" 
                },
                text: `
                    Hoje, o Taquaral Café é reconhecido como um espaço acolhedor em Piracicaba,
                    localizado na Rodovia do Açúcar, no bairro Batistada. A casa se destaca por
                    oferecer uma experiência simples e bem executada, focada em qualidade,
                    atendimento e sabores artesanais.

                    O cardápio agrada especialmente os amantes da culinária e do café, com
                    queijadas que se tornaram um dos destaques do local, além de um café
                    elogiado por quem passa pela casa. O serviço rápido e os funcionários
                    amigáveis reforçam a sensação de conforto em cada visita.

                    Com avaliação positiva no Google e reconhecimento do público, o Taquaral
                    Café reafirma sua proposta de ser um ambiente agradável, onde bom atendimento,
                    sabor e tranquilidade caminham juntos.
                `
            }
        ],
        units: [           
            {
                name: "Taquaral Café",
                value: "taquaral-cafe",
                hourly: "TER A DOM - 8h às 14h30 e TER A SAB - 11h40 às 15h | DOM - 11h40 às 14h30",
                phone: "(19) 99991-0606",
                email: "taquaralcafe.exemplo@gmail.com",
                location: {
                    extended: "Rodovia do Açúcar SP - KM 154,5 - SN - Batistada, Piracicaba - SP, 13423-070",
                    street: "Rodovia do Açúcar SP",
                    city: "Piracicaba",
                    neighborhood: "Batistada",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "SN",
                    zipCode: "13423-070",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.4384783394485!2d-47.5846155!3d-22.786210999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6256ed0a3e573%3A0xaab5a960bb7a8a29!2sTaquaral%20Caf%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1768414757272!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/taquaral-cafe/outter_2.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/taquaral-cafe/inner_1.jpg`,
                    `${baseURL}companies/taquaral-cafe/inner_2.jpg`,
                    `${baseURL}companies/taquaral-cafe/inner_6.jpg`,
                    `${baseURL}companies/taquaral-cafe/highlight_2.jpg`,
                    `${baseURL}companies/taquaral-cafe/highlight_5.jpg`,
                    `${baseURL}companies/taquaral-cafe/highlight_7.jpg`,
                    `${baseURL}companies/taquaral-cafe/outter_1.jpg`,
                    `${baseURL}companies/taquaral-cafe/outter_5.jpg`,
                    `${baseURL}companies/taquaral-cafe/outter_6.jpg`,
                    `${baseURL}companies/taquaral-cafe/outter_2.jpg`,
                ]
            },
        ],
        images: [
            `${baseURL}companies/taquaral-cafe/inner_1.jpg`,
            `${baseURL}companies/taquaral-cafe/inner_2.jpg`,
            `${baseURL}companies/taquaral-cafe/inner_3.jpg`,
            `${baseURL}companies/taquaral-cafe/inner_4.jpg`,
            `${baseURL}companies/taquaral-cafe/inner_5.jpg`,
            `${baseURL}companies/taquaral-cafe/inner_6.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_1.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_2.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_3.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_4.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_5.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_6.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_7.jpg`,
            `${baseURL}companies/taquaral-cafe/outter_1.jpg`,
            `${baseURL}companies/taquaral-cafe/outter_2.jpg`,
            `${baseURL}companies/taquaral-cafe/outter_3.jpg`,
            `${baseURL}companies/taquaral-cafe/outter_4.jpg`,
            `${baseURL}companies/taquaral-cafe/outter_5.jpg`,
            `${baseURL}companies/taquaral-cafe/outter_6.jpg`,
        ],
        banners: [
            `${baseURL}companies/taquaral-cafe/outter_3.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_1.jpg`,
            `${baseURL}companies/taquaral-cafe/inner_2.jpg`,
        ],
        highlights: [
            `${baseURL}companies/taquaral-cafe/highlight_3.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_4.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_2.jpg`,
        ],
        cards: [
            `${baseURL}companies/taquaral-cafe/inner_4.jpg`,
        ],
        menuItens: [
            {
                id: 1,
                category: "Pratos do Dia",
                itens: [
                    {
                        id: 11,
                        name: "Virado à Paulista",
                        image: `${baseURL}default/food_1.png`,
                        description: "Nosso Virado à Paulista suculento acompanha arroz, feijão, fritas ou legumes. Pratos da Segunda Feira.",
                        // measure: { value: "?", formatted: "?" },
                        price: { value: 40.00, formatted: "R$ 40,00" }
                    },
                    {
                        id: 12,
                        name: "Strogonoff (Filé Mignon)",
                        image: `${baseURL}default/food_2.png`,
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
                        image: `${baseURL}default/food_3.png`,
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
            facebook: "https://www.facebook.com/taquaralcafe/",
            instagram: "https://www.instagram.com/taquaralcafe/#",
            whatsapp: "https://api.whatsapp.com/send/?phone=5519999910606",
        }
    },
}