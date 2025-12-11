const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
    "agua-pura": {
        name: "Água Pura",
        themeColor: "#000",
        logo: `${baseURL}companies/agua-pura/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "aguapura.exemplo@gmail.com",
        phone: "11 97466-4275",
        texts: [
            "O Aguapura Bar e Restaurante é um ponto marcante da Vila Esperança, conhecido pela decoração rica em detalhes e pela atmosfera exótica que mistura Brasil, Índia, Tailândia, Indonésia e Ilhas Polinésias. Cada ambiente convida o visitante a uma imersão sensorial, equilibrando natureza, estilo e conforto em pleno coração de São Paulo.",

            "Seu clima vibrante e acolhedor combina iluminação quente, elementos naturais, texturas artesanais e o som ambiente que remete às paisagens de água e terra das culturas que inspiram a casa. A energia leve, somada ao atendimento próximo, cria o cenário ideal para encontros, conversas e boas experiências.",

            "O Aguapura traz personalidade própria: simplicidade bem executada, detalhes artísticos e referências ao herói MAUI, símbolo da mitologia polinésia. A temática aquática e o toque urbano se fundem de forma elegante, tornando o espaço perfeito para aniversários, celebrações, jantares especiais ou aquele descanso merecido após um dia intenso.",

            "Cada visita revela algo novo — seja pela decoração exótica, pelo cardápio sofisticado, pelo aroma das especiarias ou pela proposta de conectar pessoas através de boa comida, bons drinks e um ambiente pensado com cuidado.",

            "Com presença forte na região, o Aguapura se tornou um ponto natural de encontro. A essência da casa está no equilíbrio: água, natureza, cultura e sabor. Aqui, cada detalhe foi planejado para proporcionar uma experiência única, combinando autenticidade, aconchego e um toque de aventura.",

            "Misturando alegria, cultura e o espírito vibrante das tradições polinésias, o Aguapura conquistou moradores e visitantes. É o tipo de lugar que transforma qualquer momento — de um almoço descontraído a uma noite marcante — em uma lembrança especial."
        ],
        history: [
            {
                title: "Aguapura Hoje: Tradição, Cultura e Experiência Exótica na Vila Esperança",
                year: "Atual",
                image: { 
                    src: `${baseURL}companies/agua-pura/highlight_1.jpg`, 
                    alt: "Aguapura Atualmente" 
                },
                text: `
                    Hoje, o Aguapura é uma referência na Vila Esperança, em São Paulo, reunindo a força das 
                    culturas brasileiras, asiáticas e polinésias em um único ambiente. A casa mantém um clima leve, 
                    acolhedor e repleto de elementos que remetem à natureza e ao simbolismo da água — essência do 
                    herói MAUI, inspiração da marca.
                    
                    Com um cardápio que agrada desde os amantes de frutos do mar e carnes nobres até quem busca 
                    sushis, petiscos e pratos contemporâneos, o Aguapura continua evoluindo sem perder sua alma.
                    A proposta é simples e ao mesmo tempo profunda: oferecer boa comida, boa energia e uma 
                    experiência marcante em cada visita.
                `
            }
        ],
        units: [           
            {
                name: "Água Pura",
                value: "agua-pura",
                hourly: "QUA A DOM - 18h às 02h",
                phone: "11 97466-4275",
                email: "aguapura.exemplo@gmail.com",
                location: {
                    extended: "R. Nilza, 65 - Vila Esperança, São Paulo - SP, 03651-120",
                    street: "R. Nilza",
                    city: "São Paulo",
                    neighborhood: "Vila Esperança",
                    state: {
                        abbreviation: "SP",
                        extended: "São Paulo",
                    },
                    number: "65",
                    zipCode: "03651-120",
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14632.999117856705!2d-46.53151643879103!3d-23.523516986642576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e23fc255191%3A0x753ffa79d83746b1!2sAguapura%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1765467198920!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/agua-pura/inner_1.jpg`, alt: "defaulImage"},
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
                    `${baseURL}companies/agua-pura/inner_1.jpg`,
                    `${baseURL}companies/agua-pura/inner_2.jpg`,
                    `${baseURL}companies/agua-pura/inner_3.jpg`,
                    `${baseURL}companies/agua-pura/inner_4.jpg`,
                    `${baseURL}companies/agua-pura/inner_5.jpg`,
                    `${baseURL}companies/agua-pura/inner_6.jpg`,
                    `${baseURL}companies/agua-pura/highlight_1.jpg`,
                    `${baseURL}companies/agua-pura/highlight_2.jpg`,
                    `${baseURL}companies/agua-pura/highlight_3.jpg`,
                    `${baseURL}companies/agua-pura/outter_1.jpg`,
                ]
            },
        ],
        images: [
            `${baseURL}companies/agua-pura/inner_1.jpg`,
            `${baseURL}companies/agua-pura/inner_2.jpg`,
            `${baseURL}companies/agua-pura/inner_3.jpg`,
            `${baseURL}companies/agua-pura/inner_4.jpg`,
            `${baseURL}companies/agua-pura/inner_5.jpg`,
            `${baseURL}companies/agua-pura/inner_6.jpg`,
            `${baseURL}companies/agua-pura/inner_7.jpg`,
            `${baseURL}companies/agua-pura/highlight_1.jpg`,
            `${baseURL}companies/agua-pura/highlight_2.jpg`,
            `${baseURL}companies/agua-pura/highlight_3.jpg`,
            `${baseURL}companies/agua-pura/highlight_4.jpg`,
            `${baseURL}companies/agua-pura/highlight_5.jpg`,
            `${baseURL}companies/agua-pura/outter_1.jpg`,            
        ],
        banners: [
            `${baseURL}companies/agua-pura/inner_3.jpg`,
            `${baseURL}companies/agua-pura/highlight_2.jpg`,
            `${baseURL}companies/agua-pura/inner_4.jpg`,
        ],
        highlights: [
            `${baseURL}companies/agua-pura/highlight_1.jpg`,
            `${baseURL}companies/agua-pura/highlight_2.jpg`,
            `${baseURL}companies/agua-pura/highlight_3.jpg`,
        ],
        cards: [
            `${baseURL}companies/agua-pura/inner_2.jpg`,
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
            facebook: "https://www.facebook.com/aguapurabar/",
            instagram: "https://www.instagram.com/aguapurarestaurante",
            whatsapp: "https://api.whatsapp.com/send/?phone=5511974664275",
        }
    },
}