const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "o-canto-da-costela": {
        name: "O Canto da Costela",
        themeColor: "#67473c",
        logo: `${baseURL}companies/o-canto-da-costela/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "ocantodacostela.exemplo@gmail.com",
        phone: "(11) 4154-3330 | (11) 97569-2111",
        texts: [
            "O Canto da Costela Alphaville está localizado dentro da Hípica Manège, em Santana de Parnaíba, em um cenário único que une natureza, aconchego e experiências memoráveis. Um espaço pensado para quem busca boa comida, tranquilidade e momentos especiais em meio a uma atmosfera elegante e acolhedora.",

            "Com uma vista privilegiada e um deck que permite acompanhar de perto as montarias a cavalo, o restaurante transforma cada visita em um verdadeiro espetáculo. O ambiente é ideal tanto para encontros descontraídos quanto para confraternizações, celebrações e eventos especiais.",

            "A casa reproduz com fidelidade a tradicional costela fogo de chão, preparada lentamente para garantir sabor marcante e maciez incomparável. O cardápio é complementado por um buffet self-service com comida típica mineira, além de drinks, sucos naturais e sobremesas.",

            "Requinte, sabor, aconchego e criatividade fazem parte da essência do O Canto da Costela. Cada detalhe do espaço e do atendimento foi pensado para proporcionar conforto, bem-estar e uma experiência gastronômica completa.",

            "Seja para um almoço especial, um jantar com amigos, comemorações importantes ou até casamentos, o O Canto da Costela se destaca como um lugar versátil, acolhedor e inesquecível.",

            "Mais do que um restaurante, o O Canto da Costela é um convite para viver e compartilhar momentos únicos, em um ambiente onde a boa gastronomia se encontra com a natureza, a emoção e o cuidado em cada detalhe."
        ],
        history: [
            {
                title: "O Canto da Costela Hoje: Experiência, Natureza e Tradição em Alphaville",
                year: "Atual",
                image: { 
                    src: `${baseURL}companies/o-canto-da-costela/highlight_1.jpg`, 
                    alt: "O Canto da Costela Alphaville" 
                },
                text: `
                    Hoje, o O Canto da Costela é uma referência gastronômica em Santana de Parnaíba,
                    localizado dentro da Hípica Manège Alphaville. Unindo tradição, natureza e uma
                    proposta acolhedora, o restaurante se destaca pela experiência única que oferece
                    aos seus visitantes.

                    Com a tradicional costela fogo de chão, um buffet self-service de comida típica
                    mineira e um ambiente que valoriza a convivência e as emoções, a casa se tornou
                    o cenário ideal para encontros, celebrações e momentos inesquecíveis.

                    A missão do O Canto da Costela é clara: proporcionar emoções marcantes, servir com
                    paixão e pessoalidade, e criar experiências que vão além da gastronomia, em um
                    lugar verdadeiramente único.
                `
            }
        ],
        units: [           
            {
                name: "O Canto da Costela",
                value: "o-canto-da-costela",
                hourly: "DOM A TER - 12h às 17h | QUA A SEX - 11h45 às 16h | SAB - 11h45 às 17h",
                phone: "11 4154-3330 | 11 97569-2111",
                email: "ocantodacostela.exemplo@gmail.com",
                location: {
                    extended: "Dentro Hipica Manége Alphaville - Estrada do, Estr. Lula Chaves, 443 - Sitio Tanquinho, Santana de Parnaíba - SP, 06532-020",
                    street: "Estr. Lula Chaves",
                    city: "Santana de Parnaíba",
                    neighborhood: "Sítio Tanquinho",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "443",
                    zipCode: "06532-020",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12311.85530359762!2d-46.9021311712998!3d-23.448318805062797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1d37e7353eb7%3A0x92b30235c2232130!2sRESTAURANTE%20O%20CANTO%20DA%20COSTELA%20ALPHAVILLE%20FORNO%20ALENHA!5e0!3m2!1spt-BR!2sbr!4v1766176773836!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/o-canto-da-costela/inner_1.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/o-canto-da-costela/inner_1.jpg`,
                    `${baseURL}companies/o-canto-da-costela/inner_2.jpg`,
                    `${baseURL}companies/o-canto-da-costela/inner_3.jpg`,
                    `${baseURL}companies/o-canto-da-costela/inner_4.jpg`,
                    `${baseURL}companies/o-canto-da-costela/inner_5.jpg`,
                    `${baseURL}companies/o-canto-da-costela/inner_6.jpg`,
                    `${baseURL}companies/o-canto-da-costela/highlight_1.jpg`,
                    `${baseURL}companies/o-canto-da-costela/highlight_2.jpg`,
                    `${baseURL}companies/o-canto-da-costela/highlight_3.jpg`,
                    `${baseURL}companies/o-canto-da-costela/outter_1.jpg`,
                ]
            },
        ],
        images: [
            `${baseURL}companies/o-canto-da-costela/inner_1.jpg`,
            `${baseURL}companies/o-canto-da-costela/inner_2.jpg`,
            `${baseURL}companies/o-canto-da-costela/inner_3.jpg`,
            `${baseURL}companies/o-canto-da-costela/inner_4.jpg`,
            `${baseURL}companies/o-canto-da-costela/inner_5.jpg`,
            `${baseURL}companies/o-canto-da-costela/inner_6.jpg`,
            `${baseURL}companies/o-canto-da-costela/highlight_1.jpg`,
            `${baseURL}companies/o-canto-da-costela/highlight_2.jpg`,
            `${baseURL}companies/o-canto-da-costela/highlight_3.jpg`,
            `${baseURL}companies/o-canto-da-costela/outter_1.jpg`,
            `${baseURL}companies/o-canto-da-costela/inner_2.jpg`,
            `${baseURL}companies/o-canto-da-costela/inner_3.jpg`,
            
        ],
        banners: [
            `${baseURL}companies/o-canto-da-costela/outter_2.jpg`,
            `${baseURL}companies/o-canto-da-costela/highlight_7.jpg`,
            `${baseURL}companies/o-canto-da-costela/outter_1.jpg`,
        ],
        highlights: [
            `${baseURL}companies/o-canto-da-costela/highlight_7.jpg`,
            `${baseURL}companies/o-canto-da-costela/highlight_6.jpg`,
            `${baseURL}companies/o-canto-da-costela/food_1.jpg`,
        ],
        cards: [
            `${baseURL}companies/o-canto-da-costela/inner_2.jpg`,
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
            facebook: "https://www.facebook.com/Ocantodacostela/",
            instagram: "https://www.instagram.com/ocantodacostela/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511975692111",
        }
    },
}