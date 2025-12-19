const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';
import defaultLogo from '/public/default/logo_default.png'

export default {
    "nakka": {
        name: "X",
        themeColor: "#161616",
        logo: defaultLogo,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "x@gmail.com",
        theme: "",
        phone: "(11) 92042-1757",
        texts: [
            "O X Bar é um ponto vibrante da cultura urbana, reunindo criatividade, música, gastronomia e experiências únicas em um só lugar. Com uma comunicação leve e autêntica, o X se aproxima do público, criando conexões reais e oferecendo um atendimento acolhedor que convida todos a interagir, tirar dúvidas e aproveitar o espaço ao máximo.",

            "Além dos clássicos gin, Moscow Mule e Jager Bomb, o bar conta com uma seleção exclusiva de drinks autorais. Cada drink é uma experiência sensorial completa: visual marcante, sabores criativos e combinações que agradam desde paladares curiosos até os mais exigentes. Tudo pensado para ser irresistível — no gosto e nas fotos.",

            "O espaço possui quatro ambientes distintos e cheios de personalidade. Há um salão amplo; uma área aberta com bar, mesa de DJ e sinuca; um ambiente coberto com deck; e um quintal decorado com grafites e cadeiras de praia. O rooftop, iluminado pelo céu e neons, completa a atmosfera, criando um cenário perfeito para quem busca leveza, diversão e estilo.",

            "A proposta do X Bar é oferecer uma experiência multissensorial." /*O cliente pode desfrutar de gastronomia japonesa, hambúrgueres artesanais, áreas ao ar livre no rooftop, tabacaria, headshop e até fazer uma tatuagem no estúdio próprio. Eventos de flash tattoo, skate e grafite reforçam ainda mais a essência criativa do espaço."*/,

            "O ambiente é repleto de cenários instagramáveis: paredes grafitadas, quadros artísticos e vegetação exuberante compõem um visual marcante. Como o espaço está sempre em constante transformação, cada visita entrega algo novo — mantendo o X Bar como referência cultural e visual da região.",

            "Com sua mistura de arte, gastronomia, música e lifestyle urbano, o X Bar se tornou um destino certo para quem busca experiências intensas, criativas e envolventes. Um lugar onde cada detalhe — do drink à decoração — foi pensado para inspirar, divertir e marcar presença."
        ],
        history: [
            {
                title: "A Transformação do X em Polo Cultural",
                year: "2018 — 2020",
                image: { src: `${baseURL}companies/nakka/outter_1.jpg`, alt: "Primeiros anos do X Bar" },
                text: `
                Neste período, o X começou a consolidar sua identidade ligada à cultura urbana.
                Grafites, eventos artísticos e experiências interativas passaram a fazer parte do
                cotidiano do bar, criando uma atmosfera única que conectou o público jovem e criativo.
                `
            },
            {
                title: "Expansão dos Ambientes e Novas Experiências",
                year: "2021 — 2023",
                image: { src: `${baseURL}companies/nakka/inner_4.jpg`, alt: "Expansão X Bar" },
                text: `
                O X ampliou seus ambientes, adicionando rooftop, área aberta com DJ,
                sinuca e espaços temáticos. Essa evolução trouxe novos públicos e transformou o bar
                em um verdadeiro playground cultural, misturando música, gastronomia, arte e lifestyle.
                `
            },
            {
                title: "X Hoje: Experiência Multissensorial",
                year: "Atual",
                image: { src: `${baseURL}companies/nakka/inner_3.jpg`, alt: "X Atual" },
                text: `
                Atualmente, o X Bar é referência em experiências criativas e ambientes instagramáveis.
                Drinks autorais, decoração imersiva e eventos especiais fazem do espaço um dos pontos mais
                vibrantes da região. O bar segue em constante mudança, mantendo sua essência jovem,
                artística e acolhedora.
                `
            }
        ],
        units: [
            {
                name: "X Club",
                value: "X-club",
                hourly: "QUI A SAB - 22h às 5h",
                phone: "(11) 91234-1757",
                location: {
                    extended: "Av. Amador Bueno da Veiga, 751 - Vila Lais, São Paulo - SP, 03635-000",
                    street: "Av. Amador Bueno da Veiga",
                    neighborhood: "Vila Lais",
                    city: "São Paulo",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "751",
                    zipCode: "03635-000",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.2883828888794!2d-46.53765015557384!3d-23.52212800013075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ff56f2d2a4b%3A0x723ce66fe89a1bfe!2sNaka%20Club%20-%20Penha%20de%20fran%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1764606075691!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/nakka/inner_1.png`, alt: "defaulImage"},
                            title: {saloon: `Salão Principal`, quantity: "48 Pessoas"},
                            text:  `Fazemos eventos de 32 lugares, salão compartilhado com o público do restaurante. \nDisponível na quinta a sexta.`
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
                    `${baseURL}companies/nakka/inner_1.jpg`,
                    `${baseURL}companies/nakka/inner_2.jpg`,
                    `${baseURL}companies/nakka/inner_3.jpg`,
                    `${baseURL}companies/nakka/inner_4.jpg`,
                    `${baseURL}companies/nakka/inner_5.jpg`,
                    `${baseURL}companies/nakka/inner_6.jpg`,
                    `${baseURL}companies/nakka/inner_7.jpg`,
                    `${baseURL}companies/nakka/inner_8.jpg`,
                    `${baseURL}companies/nakka/inner_9.jpg`,
                    `${baseURL}companies/nakka/inner_10.jpg`,
                    `${baseURL}companies/nakka/inner_11.jpg`,
                ]
            },
            
            {
                name: "X Bar",
                value: "X-bar",
                hourly: "TER - 20h às 00h | QUA A QUI - 19h às 01h | SEX A SAB - 19h às 03h | DOM - 17h às 00h",
                phone: "(11) 91234-0531",
                location: {
                    extended: "R. Vilma, 51 - São Miguel Paulista, São Paulo - SP, 08060-090",
                    street: "R. Vilma",
                    city: "São Paulo",
                    neighborhood: "São Miguel Paulista",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "51",
                    zipCode: "08060-090",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.926367417538!2d-46.45134091767009!3d-23.49916151880008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce618ecd345139%3A0xd5b18382b17dcefc!2sNakka%20Bar%20-%20S%C3%A3o%20miguel%20pta!5e0!3m2!1spt-BR!2sbr!4v1764607834364!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/nakka/inner_7.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/nakka/outter_1.jpg`,
                    `${baseURL}companies/nakka/inner_12.jpg`,
                    `${baseURL}companies/nakka/inner_13.jpg`,
                    `${baseURL}companies/nakka/inner_14.jpg`,
                    `${baseURL}companies/nakka/inner_15.jpg`,
                    `${baseURL}companies/nakka/inner_16.jpg`,
                    `${baseURL}companies/nakka/inner_17.jpg`,
                    `${baseURL}companies/nakka/inner_18.jpg`,
                    `${baseURL}companies/nakka/inner_19.jpg`,
                    `${baseURL}companies/nakka/inner_20.jpg`,
                    `${baseURL}companies/nakka/inner_21.jpg`,
                    `${baseURL}companies/nakka/highlight_1.jpg`,
                    `${baseURL}companies/nakka/highlight_2.jpg`,
                ]
            },                  
        ],
        images: [
            `${baseURL}companies/nakka/outter_1.jpg`,
            `${baseURL}companies/nakka/inner_12.jpg`,
            `${baseURL}companies/nakka/inner_13.jpg`,
            `${baseURL}companies/nakka/inner_14.jpg`,
            `${baseURL}companies/nakka/inner_15.jpg`,
            `${baseURL}companies/nakka/inner_16.jpg`,
            `${baseURL}companies/nakka/inner_17.jpg`,
            `${baseURL}companies/nakka/inner_18.jpg`,
            `${baseURL}companies/nakka/inner_19.jpg`,
            `${baseURL}companies/nakka/inner_20.jpg`,
            `${baseURL}companies/nakka/inner_21.jpg`,
            `${baseURL}companies/nakka/highlight_1.jpg`,
            `${baseURL}companies/nakka/highlight_2.jpg`,
            `${baseURL}companies/nakka/inner_1.jpg`,
            `${baseURL}companies/nakka/inner_2.jpg`,
            `${baseURL}companies/nakka/inner_3.jpg`,
            `${baseURL}companies/nakka/inner_4.jpg`,
            `${baseURL}companies/nakka/inner_5.jpg`,
            `${baseURL}companies/nakka/inner_6.jpg`,
            `${baseURL}companies/nakka/inner_7.jpg`,
            `${baseURL}companies/nakka/inner_8.jpg`,
            `${baseURL}companies/nakka/inner_9.jpg`,
            `${baseURL}companies/nakka/inner_10.jpg`,
            `${baseURL}companies/nakka/inner_11.jpg`,
        ],
        banners: [
            `${baseURL}companies/nakka/inner_21.jpg`,
            `${baseURL}companies/nakka/highlight_1.jpg`,
            `${baseURL}companies/nakka/highlight_2.jpg`,
        ],
        highlights: [
            `${baseURL}companies/nakka/inner_12.jpg`,
            `${baseURL}companies/nakka/inner_13.jpg`,
            `${baseURL}companies/nakka/inner_14.jpg`,
        ],
        cards: [
            `${baseURL}companies/nakka/inner_14.jpg`,
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
            facebook: "https://www.facebook.com/x",
            instagram: "https://www.instagram.com/x/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511",
        }
    },
}