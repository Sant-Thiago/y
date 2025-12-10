const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "villa-gastro": {
        name: "Villa's Gastrô",
        themeColor: "#130000ff",
        logo: `${baseURL}companies/villa-gastro/logo_1.jpeg`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "villasgastro2024@gmail.com",
        phone: "11 93400-0634",
        texts: [
    "O Villa’s Gastrô é um dos espaços mais queridos da região, localizado na Av. Jacu-Pêssego, 7017, na Vila Carmosina – São Paulo. Com clima leve, atendimento próximo e um espírito acolhedor de bairro, o lugar atrai quem busca boa comida, conforto e momentos descontraídos.",

    "A vibração do ambiente combina descontração com charme urbano. Seja para relaxar depois do trabalho, aproveitar um happy hour ou prolongar a noite, o Villa’s oferece iluminação aconchegante, música equilibrada e um atendimento sempre atencioso, criando a atmosfera ideal.",

    "Cada detalhe mistura simplicidade bem-feita, personalidade e cuidado. O cenário funciona tanto para encontros e aniversários quanto para pausas estratégicas no fim do dia. Independentemente do horário — de terça a domingo, das 12h às 00h — a experiência é sempre marcada por boa comida, boa vibe e conforto constante.",

    "Toda visita tem seu charme próprio: pelo cardápio, pelo ambiente acolhedor ou pela companhia escolhida. O Villa’s Gastrô consegue transformar momentos simples em lembranças especiais.",

    "Com presença forte na região leste de São Paulo, o Villa’s se tornou um ponto de encontro natural para conversas, fotos e boas histórias. Sua essência está no acolhimento, na comida preparada com carinho e no cuidado com cada detalhe do atendimento. O ambiente foi pensado para ser leve, convidativo e marcante.",

    "Misturando autenticidade, alegria e aquele espírito de bairro que todo mundo reconhece, o Villa’s Gastrô conquistou moradores e visitantes. É o tipo de lugar que transforma qualquer ocasião — do almoço ao fim de noite — em uma experiência especial."
        ],
        history: [
            {
                title: "Villa’s Gastrô Hoje: Conexão, Tradição e Boa Gastronomia na Vila Carmosina",
                year: "Atual",
                image: { 
                    src: `${baseURL}companies/villa-gastro/highlight_1.jpg`, 
                    alt: "Villa's Gastrô Atual" 
                },
                text: `
                    Hoje, o Villa’s Gastrô é uma referência querida na Vila Carmosina, zona leste de São Paulo.
                    Localizado na Av. Jacu-Pêssego, o espaço mantém sua essência: um ambiente leve, atendimento
                    amigável e a proposta de ser o ponto de encontro ideal para diferentes estilos e momentos.
                    Aberto de terça a domingo, das 12h às 00h, o restaurante segue evoluindo sem perder o carisma
                    que conquistou a vizinhança. Com boa comida, clima acolhedor e aquela energia de bairro que faz
                    a diferença, o Villa’s continua fazendo parte da rotina e das memórias de quem passa por lá —
                    seja para um almoço, um happy hour ou uma noite especial.
                `
            }
        ],
        units: [           
            {
                name: "Villa's Gastrô",
                value: "villa-gastro",
                hourly: "TER A DOM - 12h às 00h",
                phone: "11 93400-0634",
                email: "villasgastro2024@gmail.com",
                location: {
                    extended: "Av. Jacu-Pêssego, 7017 - Vila Carmosina, São Paulo - SP, 08260-005",
                    street: "Av. Jacu-Pêssego",
                    city: "São Paulo",
                    neighborhood: "Vila Carmosina",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "7017",
                    zipCode: "08260-005",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d228.59159032864648!2d-46.44669041104343!3d-23.551721316311074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce676778ceaf89:0x24bcd9114a34dccb!2sCentro%20Gastron%C3%B4mico%20Villa's%20Gastr%C3%B4!5e0!3m2!1spt-BR!2sbr!4v1765398790748!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/villa-gastro/inner_1.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/villa-gastro/inner_1.jpg`,
                    `${baseURL}companies/villa-gastro/inner_2.jpg`,
                    `${baseURL}companies/villa-gastro/inner_3.jpg`,
                    `${baseURL}companies/villa-gastro/highlight_1.jpg`,
                    `${baseURL}companies/villa-gastro/highlight_2.jpg`,
                    `${baseURL}companies/villa-gastro/highlight_3.jpg`,
                    `${baseURL}companies/villa-gastro/highlight_4.jpg`,
                    `${baseURL}companies/villa-gastro/highlight_5.jpg`,
                    `${baseURL}companies/villa-gastro/outter_1.jpg`,
                ]
            },
        ],
        images: [
            `${baseURL}companies/villa-gastro/inner_1.jpg`,
            `${baseURL}companies/villa-gastro/inner_2.jpg`,
            `${baseURL}companies/villa-gastro/inner_3.jpg`,
            `${baseURL}companies/villa-gastro/highlight_1.jpg`,
            `${baseURL}companies/villa-gastro/highlight_2.jpg`,
            `${baseURL}companies/villa-gastro/highlight_3.jpg`,
            `${baseURL}companies/villa-gastro/highlight_4.jpg`,
            `${baseURL}companies/villa-gastro/highlight_5.jpg`,
            `${baseURL}companies/villa-gastro/outter_1.jpg`,
            `${baseURL}companies/villa-gastro/inner_1.jpg`,
            `${baseURL}companies/villa-gastro/inner_2.jpg`,
            `${baseURL}companies/villa-gastro/inner_3.jpg`,
            `${baseURL}companies/villa-gastro/highlight_1.jpg`,
            `${baseURL}companies/villa-gastro/highlight_2.jpg`,
            `${baseURL}companies/villa-gastro/highlight_3.jpg`,
            `${baseURL}companies/villa-gastro/highlight_4.jpg`,
            `${baseURL}companies/villa-gastro/highlight_5.jpg`,
            `${baseURL}companies/villa-gastro/outter_1.jpg`,
        ],
        banners: [
            `${baseURL}companies/villa-gastro/inner_2.jpg`,
            `${baseURL}companies/villa-gastro/highlight_1.jpg`,
            `${baseURL}companies/villa-gastro/inner_3.jpg`,
        ],
        highlights: [
            `${baseURL}companies/villa-gastro/highlight_1.jpg`,
            `${baseURL}companies/villa-gastro/highlight_2.jpg`,
            `${baseURL}companies/villa-gastro/highlight_3.jpg`,
        ],
        cards: [
            `${baseURL}companies/villa-gastro/inner_2.jpg`,
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
            facebook: "https://www.facebook.com/p/Villas-Gastro-61575263116554/",
            instagram: "https://www.instagram.com/villasgastro",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511934000634",
        }
    },
}