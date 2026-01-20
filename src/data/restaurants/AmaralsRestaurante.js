const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "amarals-restaurante": {
        name: "Amaral's Restaurante",
        themeColor: "#000",
        logo: `${baseURL}companies/amarals-restaurante/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "amaralsbarerestaurante@gmail.com",
        phone: "(11) 99247-3404",
        texts: [
            "Localizado na Avenida Dom Pedro de Alcântara, em São Bernardo do Campo, o Amaral's Restaurante & Bar é um espaço pensado para quem aprecia boa comida, atendimento de qualidade e um ambiente acolhedor.",

            "Com uma atmosfera agradável e convidativa, o Amaral's conquista logo na chegada. O atendimento é um dos pontos mais elogiados pelos clientes, com uma equipe amável e sempre disposta a receber bem.",

            "O cardápio agrada os amantes da culinária brasileira, com destaque especial para a feijoada, frequentemente recomendada por quem visita a casa, além de pratos bem servidos e saborosos.",

            "Cada detalhe reflete cuidado e simplicidade: ingredientes bem preparados, serviço rápido e uma atmosfera encantadora que proporciona uma experiência confortável e prazerosa.",

            "Seja para um almoço em família, um encontro com amigos ou uma refeição tranquila durante o dia, o Amaral's Restaurante & Bar se destaca como uma excelente opção na região.",

            "Com ótima avaliação no Google e reconhecimento do público, o Amaral's é mais do que um restaurante: é um ponto de encontro para quem valoriza sabor, bom atendimento e um ambiente onde dá vontade de voltar."
        ],
        history: [
            {
                title: "Amaral's Restaurante & Bar: Tradição, Sabor e Aconchego em São Bernardo do Campo",
                year: "Atual",
                image: { 
                src: `${baseURL}companies/amarals-restaurante/outter_1.jpg`, 
                alt: "Amaral's Restaurante & Bar São Bernardo do Campo" 
                },
                text: `
                Atualmente, o Amaral's Restaurante & Bar é reconhecido em São Bernardo do Campo
                como um espaço acolhedor e bem avaliado, localizado na Avenida Dom Pedro de Alcântara,
                no bairro Vila São Pedro | Montanhão.

                A casa se destaca pela qualidade dos pratos, pelo atendimento cordial e pelo
                serviço rápido, pontos frequentemente mencionados pelos clientes.
                A feijoada é um dos grandes destaques do cardápio, sendo amplamente recomendada,
                assim como a experiência agradável proporcionada pelo ambiente.

                Com nota 4.7 no Google, o Amaral's reafirma sua proposta de oferecer uma culinária
                bem executada em um local de atmosfera encantadora, ideal para quem busca sabor,
                conforto e bom atendimento.
                `
            }
        ],
        units: [           
            {
                name: "Amaral's Restaurante",
                value: "amarals-restaurante",
                hourly: "TER A SAB - 8h às 22h00 | DOM - 8h às 20h",
                phone: "(11) 99247-3404",
                email: "amaralsbarerestaurante@gmail.com",
                location: {
                    extended: "Avenida Dom Pedro de Alcantara, 364 Vila São Pedro, Av. Dom Pedro de Alcântara, 366 - Montanhão, São Bernardo do Campo - SP, 09784-000",
                    street: "Avenida Dom Pedro de Alcantara",
                    city: "São Bernardo do Campo",
                    neighborhood: "Vila São Pedro | Montanhão",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "364 | 366",
                    zipCode: "09784-000",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7576901402763!2d-46.525192499999996!3d-23.720345599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4142dd6660f7%3A0x2c3dfe98f83ab709!2sAmaral%C2%B4s%20Restaurante%20%26%20Bar!5e0!3m2!1spt-BR!2sbr!4v1768928462542!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/amarals-restaurante/inner_2.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/amarals-restaurante/inner_1.jpg`,
                    `${baseURL}companies/amarals-restaurante/inner_2.jpg`,
                    `${baseURL}companies/amarals-restaurante/inner_3.jpg`,
                    `${baseURL}companies/amarals-restaurante/inner_4.jpg`,
                    `${baseURL}companies/amarals-restaurante/highlight_1.jpg`,
                    `${baseURL}companies/amarals-restaurante/highlight_2.jpg`,
                    `${baseURL}companies/amarals-restaurante/highlight_3.jpg`,
                    `${baseURL}companies/amarals-restaurante/outter_1.jpg`,
                ]
            },
        ],
        images: [
            `${baseURL}companies/amarals-restaurante/inner_1.jpg`,
            `${baseURL}companies/amarals-restaurante/inner_2.jpg`,
            `${baseURL}companies/amarals-restaurante/inner_3.jpg`,
            `${baseURL}companies/amarals-restaurante/inner_4.jpg`,
            `${baseURL}companies/amarals-restaurante/highlight_1.jpg`,
            `${baseURL}companies/amarals-restaurante/highlight_2.jpg`,
            `${baseURL}companies/amarals-restaurante/highlight_3.jpg`,
            `${baseURL}companies/amarals-restaurante/outter_1.jpg`,
        ],
        banners: [
            `${baseURL}companies/amarals-restaurante/outter_1.jpg`,
            `${baseURL}companies/amarals-restaurante/highlight_1.jpg`,
            `${baseURL}companies/amarals-restaurante/inner_2.jpg`,
        ],
        highlights: [
            `${baseURL}companies/amarals-restaurante/highlight_3.jpg`,
            `${baseURL}companies/amarals-restaurante/highlight_1.jpg`,
            `${baseURL}companies/amarals-restaurante/highlight_2.jpg`,
        ],
        cards: [
            `${baseURL}companies/amarals-restaurante/inner_3.jpg`,
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
            facebook: "https://www.facebook.com/amaralsbarerestaurante/?ref=_xav_ig_profile_page_web",
            instagram: "https://www.instagram.com/amaralsbar/#",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511992473404",
        }
    },
}