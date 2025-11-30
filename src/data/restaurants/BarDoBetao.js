import defaultDish from '/src/utils/assets/default_dish.jpg';
const baseURL = import.meta.env.BASE_URL

export default {
    "bar-do-betao": {
        name: "Bar do Betão",
        themeColor: ``/*#fff100*/,
        logo: `${baseURL}companies/bar-do-betao/logo.jpg`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "example@gmail.com",
        phone: "(12) 99721-2665",
        texts: [
            "O Bar do Betão é aquele tipo de lugar que conquista pela comida bem feita e pelo clima descontraído. Pratos caseiros, porções caprichadas e opções do dia são preparados sempre frescos, mantendo a essência simples e saborosa que o público do bairro já conhece.",

            "O cardápio mistura praticidade e conforto: pratos variados, porções generosas e aquele tempero gostoso de comida feita com atenção. É um espaço perfeito para almoçar, relaxar ou aproveitar o fim do dia com os amigos.",

            "Com um ambiente leve e acolhedor, o Bar do Betão cria aquele clima de pausa boa no meio da rotina. Música ambiente, atendimento simpático e uma atmosfera que faz o cliente se sentir em casa.",

            "Bar do Betão: comida de verdade, bom atendimento e um espaço onde a simplicidade vira aconchego.",

            "Localizado na R. Padre José Benedito Alves Monteiro, no Jardim Amália, em Caçapava, o Bar do Betão se destaca como um ponto tradicional da região. Qualidade, preço justo e aquele clima de bairro fazem parte da identidade da casa.",

            "Com pratos bem servidos, carnes, massas, petiscos e opções rápidas para o dia a dia, o restaurante atende desde quem está com pressa até quem prefere comer com calma. A proposta sempre foi oferecer comida gostosa, fresquinha e preparada diariamente.",

            "A atmosfera casual aproxima as pessoas e transforma o espaço em um ponto de encontro natural: almoço, conversa, pausa no trabalho ou aquele momento de relaxar sem pressa. O ótimo custo-benefício e o cardápio variado tornam o Bar do Betão uma escolha certeira.",

            "Aberto para atendimento presencial e delivery, o Bar do Betão segue mantendo sua essência: comida boa, ambiente leve e um atendimento que transmite proximidade e simplicidade."
        ],
        history: [
            {
                title: "Bar do Betão: comida gostosa, clima descontraído e aquele acolhimento de bairro.",
                year: "Atual",
                image: { 
                    src: `${baseURL}companies/bar-do-betao/outter_3.jpg`, 
                    alt: "Imagem do Restaurante" 
                },
                text: `
                    O Bar do Betão se tornou um ponto querido no Jardim Amália pela combinação de comida caseira e ambiente acolhedor. 
                    Sem frescura e sempre com aquele clima leve, o espaço oferece refeições bem servidas, porções tradicionais e um atendimento próximo.
                    Um lugar que faz parte da rotina da vizinhança e continua mantendo sua essência simples e gostosa.
                `
            }
        ],
        units: [
            {
                name: "Bar do Betão",
                value: "bar-do-betao",
                hourly: "TER A SEX - 15h36 às 00h | SAB - 12h36 às 19h36",
                location: {
                    extended: "R. Padre José Benedito Alves Monteiro, 330 - Jardim Amália, Caçapava - SP, 12280-016",
                    street: "R. Padre José Benedito Alves Monteiro",
                    city: "Caçapava",
                    neighborhood: "Jardim Amália",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "330",
                    zipCode: "12280-016",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14679.131500425823!2d-45.711126521507715!3d-23.10504279737375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc510048f633bb%3A0xf0652dd2c05d7118!2sBAR%20DO%20BET%C3%83O!5e0!3m2!1spt-BR!2sbr!4v1764507250245!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/bar-do-betao/inner_1.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/bar-do-betao/inner_1.jpg`,
                    `${baseURL}companies/bar-do-betao/inner_2.jpg`,
                    `${baseURL}companies/bar-do-betao/inner_3.jpg`,
                    `${baseURL}companies/bar-do-betao/inner_4.jpg`,
                    `${baseURL}companies/bar-do-betao/outter_1.jpg`,
                    `${baseURL}companies/bar-do-betao/highlight_5.jpg`,
                    `${baseURL}companies/bar-do-betao/outter_2.jpg`,
                ]
            }
        ],
        images: [
            `${baseURL}companies/bar-do-betao/inner_2.jpg`,
            `${baseURL}companies/bar-do-betao/inner_1.jpg`,
            `${baseURL}companies/bar-do-betao/inner_3.jpg`,
            `${baseURL}companies/bar-do-betao/inner_4.jpg`, 
            `${baseURL}companies/bar-do-betao/highlight_3.jpg`,
            `${baseURL}companies/bar-do-betao/highlight_4.jpg`,
            `${baseURL}companies/bar-do-betao/outter_1.jpg`,
            `${baseURL}companies/bar-do-betao/outter_2.jpg`,
            `${baseURL}companies/bar-do-betao/highlight_1.jpg`,
            `${baseURL}companies/bar-do-betao/highlight_2.jpg`,
            `${baseURL}companies/bar-do-betao/highlight_5.jpg`,
        ],
        banners: [
            `${baseURL}companies/bar-do-betao/highlight_3.jpg`,
            `${baseURL}companies/bar-do-betao/outter_2.jpg`,
            `${baseURL}companies/bar-do-betao/highlight_4.jpg`,
        ],
        highlights: [
            `${baseURL}companies/bar-do-betao/highlight_3.jpg`,
            `${baseURL}companies/bar-do-betao/highlight_1.jpg`,
            `${baseURL}companies/bar-do-betao/highlight_2.jpg`,
        ],
        cards: [
            `${baseURL}companies/bar-do-betao/inner_3.jpg`,
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
            facebook: "https://www.facebook.com/bardobetaocacapava?locale=pt_BR",
            instagram: "https://www.instagram.com/bardobetaocpv/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5512997212665",
        }
    }
}