const baseURL = import.meta.env.BASE_URL

export const validCompanies = [
    "casa-pellegrini", "empresa2", "empresa3" 
];

export const companies = {
    "casa-pellegrini": {
        name: "Casa Pellegrini",
        themeColor: "#8B4513",
        logo: `${baseURL}companies/casa-pellegrini/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "augustonicodemus@gmail.com",
        phone: "(24) 2231-6110",
        units: [
            {
                name: "Casa Pellegrini",
                value: "casa-pellegrini",
                location: {
                    extended: "Rua Treze de Maio, 184 - Centro, Petrópolis - RJ, 25685-231",
                    street: "Rua Treze de Maio",
                    city: "Petrópolis",
                    state: {
                        abbreviation: "RJ",
                        extended: "Rio de Janeiro",
                    },
                    number: "184",
                    zipCode: "25685-231",
                },
                images: [
                    `${baseURL}companies/casa-pellegrini/banner_1.jpg`,
                    `${baseURL}companies/casa-pellegrini/inner_restaurant_1.jpg`,
                    `${baseURL}companies/casa-pellegrini/inner_restaurant_2.jpg`,
                ]
            }
        ],
        images: [
            `${baseURL}companies/casa-pellegrini/banner_1.jpg`,
            `${baseURL}companies/casa-pellegrini/inner_restaurant_1.jpg`,
            `${baseURL}companies/casa-pellegrini/inner_restaurant_2.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_2.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_3.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_4.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_5.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_6.jpg`,
            `${baseURL}companies/casa-pellegrini/highlight_1.jpg`,
            `${baseURL}companies/casa-pellegrini/highlight_2.jpg`,
            `${baseURL}companies/casa-pellegrini/highlight_3.jpg`,
        ],
        banners: [
            `${baseURL}companies/casa-pellegrini/banner_1.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_2.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_3.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_4.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_5.jpg`,
            `${baseURL}companies/casa-pellegrini/banner_6.jpg`,
        ],
        highlights: [
            `${baseURL}companies/casa-pellegrini/highlight_1.jpg`,
            `${baseURL}companies/casa-pellegrini/highlight_2.jpg`,
            `${baseURL}companies/casa-pellegrini/highlight_3.jpg`,
        ],
        cards: [
            `${baseURL}companies/casa-pellegrini/inner_restaurant_1.jpg`,
        ],
        menuItens: [
            {
                id: 1,
                category: "Sanduíches",
                itens: [
                    {
                        id: 11,
                        name: "Brazuca Burger",
                        image: `${baseURL}companies/casa-pellegrini/food_1.png`,
                        description: "Nosso Suculento Burguer Artesanal de 125g com Queijo Cheddar Derretido, Ovo, Bacon em Cubos e Nosso Famoso Molho de Alho",
                        measure: { value: 125, formatted: "125g" },
                        price: { value: 29.90, formatted: "R$ 29,90" }
                    },
                    {
                        id: 12,
                        name: "Hambúrguer Artesanal",
                        image: `${baseURL}companies/casa-pellegrini/food_2.png`,
                        description: "Nosso Suculento Burguer Artesanal de 125g com Queijo Cheddar Derretido, Alho Poró e Molho de Casa",
                        measure: { value: 125, formatted: "125g" },
                        price: { value: 29.90, formatted: "R$ 29,90" }
                    },
                    {
                        id: 13,
                        name: "Smoked Burger",
                        image: `${baseURL}companies/casa-pellegrini/food_3.png`,
                        description: "Nosso Suculento Burguer Artesanal de 125g, com Mozarella Derretida, Cebola, Bacon em Cubos e Molho Barbecue",
                        measure: { value: 125, formatted: "125g" },
                        price: { value: 39.90, formatted: "R$ 39,90" }
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
                category: "Caldos",
                itens: [
                    {
                        id: 31,
                        name: "Caldo de Feijão Amigo",
                        image: `${baseURL}companies/casa-pellegrini/food_7.png`,
                        description: "Feijão Amigo de Feijoada! Porção de 400ml (equivalente a uma tigela de açaí).",
                        measure: { value: 400, formatted: "400ml" },
                        price: { value: 27.90, formatted: "R$ 27,90" }
                    },
                    {
                        id: 32,
                        name: "Caldo de Ervilha c/ Calabresa",
                        image: `${baseURL}companies/casa-pellegrini/food_8.png`,
                        description: "Caldo de Ervilha com Calabresa! Acompanha Torradas! Porção de 400ml.",
                        measure: { value: 400, formatted: "400ml" },
                        price: { value: 25.90, formatted: "R$ 25,90" }
                    },
                    {
                        id: 33,
                        name: "Caldo de Abóbora c/ Gorgonzola",
                        image: `${baseURL}companies/casa-pellegrini/food_9.png`,
                        description: "Caldo de Abóbora com Gorgonzola! Acompanha Torradas! Porção de 400ml.",
                        measure: { value: 400, formatted: "400ml" },
                        price: { value: 29.90, formatted: "R$ 29,90" }
                    }
                ]
            },

            {
                id: 4,
                category: "Saladas",
                itens: [
                    {
                        id: 41,
                        name: "Salada Pellegrini",
                        image: `${baseURL}companies/casa-pellegrini/food_10.png`,
                        description: "Alface Americana, Alface Roxa, Rúcula, Tomate Uva, Cenoura, e Beterrabas Raladas, Lascas de Parmesão e Molho Pesto.",
                        measure: { value: "grande", formatted: "Grande" },
                        price: { value: 36.90, formatted: "R$ 36,90" }
                    },
                    {
                        id: 42,
                        name: "Chiken Salad",
                        image: `${baseURL}companies/casa-pellegrini/food_11.png`,
                        description: "Alface Americana, Alface Roxa, Rúcula, Cenoura Ralada, Frango Grelhado em Tiras e Nosso Molho Especial.",
                        measure: { value: "grande", formatted: "Grande" },
                        price: { value: 29.90, formatted: "R$ 29,90" }
                    }
                ]
            },

            {
                id: 5,
                category: "Bebidas",
                itens: [
                    {
                        id: 51,
                        name: "Coca Comum",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_1.png`,
                        description: "Refrigerante Coca-Cola Comum Lata 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 52,
                        name: "Coca Zero",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_2.png`,
                        description: "Refrigerante Coca-Cola Zero Lata 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 53,
                        name: "Guaraná Antarctica",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_3.png`,
                        description: "Refrigerante Guaraná Antarctica Lata 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 54,
                        name: "Guaraná Antarctica Zero",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_4.png`,
                        description: "Refrigerante Guaraná Antarctica Zero Lata 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 55,
                        name: "Mate Leão",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_5.png`,
                        description: "Chá Mate Leão Garrafa 350ml",
                        measure: { value: 350, formatted: "350ml" },
                        price: { value: 8.90, formatted: "R$ 8,90" }
                    },
                    {
                        id: 56,
                        name: "Água Mineral com Gás",
                        image: `${baseURL}companies/casa-pellegrini/softDrink_6.png`,
                        description: "Água Mineral com Gás Garrafa 500ml",
                        measure: { value: 500, formatted: "500ml" },
                        price: { value: 4.90, formatted: "R$ 4,90" }
                    },
                    {
                        id: 57,
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
            facebook: "https://www.facebook.com/CasaPellegrini/",
            instagram: "https://www.instagram.com/casapellegrini/",
            whatsapp: "https://api.whatsapp.com/send/?phone=552422316110",
        }
    }
}

// ucytwat x three 6 mafia "lethal" type beat