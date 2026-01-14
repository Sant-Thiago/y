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
        email: "zuccaburger@gmail.com",
        phone: "(11) 99598-4598",
        texts: [
            "Localizado no coração de Bragança Paulista, o Taquaral Café & Restaurante Artesanal é um espaço que une sabor, conforto e um atendimento que faz o cliente se sentir em casa. Um ambiente acolhedor, ideal para quem busca boa comida e momentos agradáveis.",

            "Com clima descontraído e atendimento atencioso — frequentemente elogiado, com destaque especial para a equipe — o Taquaral Café conquista pela experiência completa, desde a recepção até o último pedido da mesa.",

            "O cardápio é o grande protagonista: burgers artesanais suculentos, bem temperados e preparados com cuidado, acompanhados de batatas fritas crocantes e porções que se destacam, como coxinhas e queijo empanado.",

            "Cada detalhe reflete a proposta da casa: ingredientes bem escolhidos, preparo artesanal e uma cozinha que valoriza sabor, textura e apresentação, entregando conforto em forma de comida.",

            "Seja para um almoço descontraído, um jantar com amigos, encontros especiais ou aquele momento de pausa para comer bem, o Taquaral Café se consolida como uma das principais referências gastronômicas da cidade.",

            "Mais do que um restaurante, o Taquaral Café é um ponto de encontro para quem aprecia burgers artesanais, atendimento humano e uma experiência que deixa vontade de voltar."
        ],
        history: [
            {
                title: "Taquaral Café Hoje: Referência em Burgers Artesanais em Bragança Paulista",
                year: "Atual",
                image: { 
                    src: `${baseURL}companies/taquaral-cafe/outter_2.jpg`, 
                    alt: "Taquaral Café Bragança Paulista" 
                },
                text: `
                    Hoje, o Taquaral Café & Restaurante Artesanal é reconhecido como um dos melhores
                    destinos para quem busca burgers artesanais em Bragança Paulista. Localizado
                    na Avenida Antonio Pires Pimentel, no Centro da cidade, a casa se tornou referência
                    por unir sabor, ambiente acolhedor e atendimento de qualidade.

                    O destaque fica para os burgers suculentos, bem temperados e preparados de forma
                    artesanal, além das porções que conquistaram o público, como as coxinhas e o
                    queijo empanado. A experiência é completada por um serviço atencioso, frequentemente
                    lembrado pelos clientes como um diferencial da casa.

                    Mesmo com percepções pontuais sobre preços ou entregas, o Taquaral Café segue
                    sendo apontado por muitos como o melhor burger da cidade, reafirmando sua missão
                    de oferecer conforto, sabor e uma experiência gastronômica marcante em cada visita.
                `
            }
        ],
        units: [           
            {
                name: "Taquaral Café",
                value: "taquaral-cafe",
                hourly: "TER - 18h30 às 23h | QUA A DOM - 12h às 15h e 18h30 às 23h",
                phone: "019999910606",
                email: "zuccaburger@gmail.com",
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
                    `${baseURL}companies/taquaral-cafe/outter_1.jpg`,
                    `${baseURL}companies/taquaral-cafe/outter_2.jpg`,
                ]
            },
        ],
        images: [
            `${baseURL}companies/taquaral-cafe/highlight_1.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_2.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_3.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_4.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_5.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_6.jpg`,
            `${baseURL}companies/taquaral-cafe/outter_1.jpg`,
            `${baseURL}companies/taquaral-cafe/outter_2.jpg`,      
            `${baseURL}companies/taquaral-cafe/highlight_3.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_4.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_5.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_6.jpg`,
      
        ],
        banners: [
            `${baseURL}companies/taquaral-cafe/highlight_6.jpg`,
            `${baseURL}companies/taquaral-cafe/outter_2.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_5.jpg`,
        ],
        highlights: [
            `${baseURL}companies/taquaral-cafe/highlight_3.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_4.jpg`,
            `${baseURL}companies/taquaral-cafe/highlight_2.jpg`,
        ],
        cards: [
            `${baseURL}companies/taquaral-cafe/outter_1.jpg`,
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