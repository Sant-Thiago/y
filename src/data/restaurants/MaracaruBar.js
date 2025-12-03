const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "maracatu-bar": {
        name: "Maracatu Bar",
        themeColor: "#e96232",
        logo: `${baseURL}companies/maracatu-bar/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "matacatu.bar.marketing@gmail.com",
        phone: "(11) 99887-0295",
        texts: [
            "O Maracatu Bar é um dos pontos mais acolhedores e queridos de Indianópolis, em São Paulo. Com um clima descontraído e atendimento sempre próximo, o espaço se tornou o destino ideal para quem busca um bar autêntico, com boa energia e aquele ambiente gostoso para curtir e conversar.",

            "A combinação de música no volume certo, iluminação aconchegante e uma equipe atenciosa cria uma atmosfera perfeita tanto para relaxar após o trabalho quanto para aproveitar a noite entre amigos. É um lugar que abraça quem chega.",

            "O espaço mistura simplicidade, estilo e um toque contemporâneo, criando o cenário ideal para happy hours, aniversários, encontros casuais ou aquela pausa estratégica no fim do dia. Cada detalhe foi pensado para unir conforto e personalidade.",

            "Cada visita tem um charme único: seja pelo cardápio, pelo clima ou pela companhia. O ambiente leve e convidativo transforma qualquer momento em algo especial.",

            "Com presença marcante em Indianópolis, o Maracatu Bar já se tornou ponto natural de encontro, fotos e boas conversas. A essência da casa está no acolhimento, na autenticidade e no cuidado com cada cliente.",

            "Misturando alegria, simplicidade bem feita e aquele espírito de bar de bairro que faz parte da vida de quem mora ou trabalha na região, o Maracatu Bar conquistou seu espaço como um dos favoritos da Zona Sul."
        ],
        history: [
            {
                title: "Maracatu Bar Hoje: Tradição e Vibrações de Indianópolis",
                year: "Atual",
                image: { src: `${baseURL}companies/maracatu-bar/highlight_1.jpg`, alt: "Maracatu Bar Indianópolis" },
                text: `
                    Hoje, o Maracatu Bar é uma referência querida em Indianópolis.
                    Mantendo sua proposta leve e acolhedora, o bar segue como ponto de encontro para moradores,
                    trabalhadores da região e quem busca um ambiente descontraído com boa comida e boa conversa.
                    Com funcionamento de quarta a domingo, o Maracatu combina clima agradável, serviço atencioso
                    e uma energia que já virou marca registrada do endereço na Alameda dos Aicás.
                `
            }

        ],
        units: [           
            {
                name: "Maracatu Bar",
                value: "maracatu-bar",
                hourly: "QUA A SEX - 17h às 01h | SAB - 12h às 01h | DOM - 12h às 22h",
                phone: "(11) 99887-0295",
                email: "matacatu.bar.marketing@gmail.com",
                location: {
                    extended: "Alameda dos Aicás, 1245 - Indianópolis, São Paulo - SP, 04086-003",
                    street: "Alameda dos Aicás",
                    city: "São Paulo",
                    neighborhood: "Indianópolis",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "1245",
                    zipCode: "04086-003",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22552.005876338142!2d-46.660788434018265!3d-23.61179566357577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b84d0b62635%3A0x2459b7791fee0d3!2sMaracatu%20Bar!5e0!3m2!1spt-BR!2sbr!4v1764685503068!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/maracatu-bar/inner_1.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/maracatu-bar/outter_1.jpg`,
                    `${baseURL}companies/maracatu-bar/outter_2.jpg`,
                    `${baseURL}companies/maracatu-bar/outter_3.jpg`,
                    `${baseURL}companies/maracatu-bar/outter_4.jpg`,
                    `${baseURL}companies/maracatu-bar/inner_1.jpg`,
                    `${baseURL}companies/maracatu-bar/inner_2.jpg`,
                    `${baseURL}companies/maracatu-bar/highlight_1.jpg`,
                    `${baseURL}companies/maracatu-bar/highlight_2.jpg`,
                    `${baseURL}companies/maracatu-bar/highlight_4.jpg`,
                    `${baseURL}companies/maracatu-bar/highlight_3.jpg`,
                ]
            },                  
        ],
        images: [
            `${baseURL}companies/maracatu-bar/outter_1.jpg`,
            `${baseURL}companies/maracatu-bar/outter_2.jpg`,
            `${baseURL}companies/maracatu-bar/outter_3.jpg`,
            `${baseURL}companies/maracatu-bar/outter_4.jpg`,
            `${baseURL}companies/maracatu-bar/inner_1.jpg`,
            `${baseURL}companies/maracatu-bar/inner_2.jpg`,
            `${baseURL}companies/maracatu-bar/highlight_1.jpg`,
            `${baseURL}companies/maracatu-bar/highlight_2.jpg`,
            `${baseURL}companies/maracatu-bar/highlight_3.jpg`,
            `${baseURL}companies/maracatu-bar/highlight_4.jpg`,
        ],
        banners: [
            `${baseURL}companies/maracatu-bar/outter_1.jpg`,
            `${baseURL}companies/maracatu-bar/inner_2.jpg`,
            `${baseURL}companies/maracatu-bar/highlight_3.jpg`,
        ],
        highlights: [
            `${baseURL}companies/maracatu-bar/highlight_1.jpg`,
            `${baseURL}companies/maracatu-bar/highlight_2.jpg`,
            `${baseURL}companies/maracatu-bar/highlight_4.jpg`,
        ],
        cards: [
            `${baseURL}companies/maracatu-bar/inner_1.jpg`,
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
            facebook: "https://www.facebook.com/profile.php?id=61577746319833/",
            instagram: "https://www.instagram.com/maracatubar/",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511998870295",
        }
    },
}