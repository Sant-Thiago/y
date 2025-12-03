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
            facebook: "https://www.facebook.com/mariamaria.restaurante.campinas/?locale=pt_BR",
            instagram: "https://www.instagram.com/mariamaria_barerestaurante/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5519983362834",
        }
    }
}