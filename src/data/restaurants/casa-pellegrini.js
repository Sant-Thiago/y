// Augusto Nicodemos
/*
    Quer o site mas não quer pagar caro.
    Se assustar ao ver valores.
    Não tem base do valor de mercado de tal serviço.
    É do tipo que prefere pagar um valor unico ao inves de mensalidades.
    É aberto para propostas
*/
/* 
    Iniciei conversa: 27/11/2025
    Bloquear acesso em 02/12/2025
*/

const baseURL = import.meta.env.BASE_URL
import defaultDish from '/src/utils/assets/default_dish.jpg';


export default {
"casa-pellegrini": {
        name: "Casa Pellegrini",
        themeColor: "#3d0e0e",
        logo: `${baseURL}companies/casa-pellegrini/logo.png`,
        cnpj: {
            value: 12345678000099,
            formatted: "12.345.678/0000-99",
        },
        email: "augustonicodemus@gmail.com",
        phone: "(24) 2231-6110",
        texts: [
            "Um cardápio completo com os clássicos. \n Hambúrgueres artesanais, sanduíches especiais, porções, caldos, saladas e sobremesas marcantes — tudo com ingredientes selecionados. \n Para acompanhar, sucos naturais, chopes, cervejas, drinks clássicos e autorais. E para brindar, vinhos tintos, brancos, rosés, espumantes e rótulos exclusivos da Casa Pellegrini.",
            "O Casa Pellegrini é um restaurante tradicional de Petrópolis, conhecido pela combinação entre boa comida, ambiente acolhedor e um atendimento que valoriza cada cliente. Nosso cardápio reúne os pratos que fazem parte da identidade da casa: hambúrgueres artesanais, sanduíches especiais, porções variadas, massas e opções clássicas pensadas para todos os gostos. Cada preparo é feito com ingredientes selecionados e foco total na qualidade.",
            "Com um clima descontraído e moderno, o Casa Pellegrini se tornou ponto de encontro para quem busca sabor, conforto e uma experiência gastronômica leve e marcante. Aqui, cada visita é uma oportunidade de aproveitar boas refeições, bons momentos e a essência do que mais gostamos de oferecer: comida bem feita e hospitalidade de verdade.",        
            
            "Casa Pellegrini: sabor, história e acolhimento servidos todos os dias.",
            "A Casa Pellegrini é um dos bares e restaurantes mais tradicionais e queridos de Petrópolis, reconhecida por unir história, sabor e aquele atendimento descontraído que faz todo mundo se sentir em casa. Localizada no coração da cidade, a casa se consolidou ao longo dos anos como ponto de encontro para amigos, famílias e visitantes que buscam boa comida, bebidas geladas e um ambiente sempre acolhedor.",
            "Pioneira no preparo de hambúrguer artesanal na região, a Casa Pellegrini também se destaca pelos sanduíches generosos, pelo famoso molho de alho — marca registrada da casa — e pelas porções bem servidas que acompanham perfeitamente uma boa cerveja. Com um cardápio variado, oferecemos desde petiscos clássicos até massas, pratos executivos, caldos, sobremesas e opções ideais tanto para um almoço rápido quanto para um jantar completo.",
            "A atmosfera é leve, informal e animada, atraindo públicos de todas as idades. À noite, a casa costuma ficar movimentada, mesmo durante a semana, graças ao clima descontraído e ao excelente custo-benefício. Para acompanhar, contamos com uma seleção de bebidas que inclui chopp, cervejas sempre geladas e onze sabores de caipirinhas — da tradicional de limão às versões com morango, manga e maracujá.",
            "Aberta diariamente das 11h à meia-noite (com a cozinha funcionando até 01h30 às sextas e sábados), a Casa Pellegrini mantém sua identidade simples e autêntica: não é um espaço luxuoso, mas é um lugar onde se come bem, bebe melhor ainda e sempre se é atendido com simpatia e eficiência. Um ambiente que combina tradição, qualidade e preços justos — e que, por isso, se tornou parte da rotina e das memórias afetivas de muitos petropolitanos."
        ],
        history: [
            {
                title: "O início de uma tradição petropolitana",
                year: "1990",
                image: { src: `${baseURL}companies/casa-pellegrini/inner_restaurant_2.jpg`, alt: "Imagem do Restaurante" },
                text: `
                    A Casa Pellegrini nasceu no coração de Petrópolis com a proposta de ser um bar e restaurante acolhedor, simples e honesto — daqueles que rapidamente viram ponto de encontro da cidade. 
                    Desde os primeiros anos, o foco era claro: comida boa, preços justos e um atendimento informal, mas sempre simpático e eficiente. Foi desse espírito caseiro que surgiram os primeiros sanduíches que logo se tornariam famosos entre moradores e visitantes.
                `
            },
            {
                title: "O pioneiro do hambúrguer artesanal na cidade",
                year: "2000",
                image: { src: `${baseURL}companies/casa-pellegrini/inner_restaurant_1.jpg`, alt: "Imagem do Restaurante" },
                text: `
                    Com o tempo, a casa ganhou destaque por algo que se tornaria sua marca registrada: o hambúrguer artesanal. Muito antes da moda gourmet, a Casa Pellegrini já servia hambúrguer feito na chapa, suculento, bem temperado, e acompanhado por ingredientes frescos.
                    O sucesso foi imediato. A cada noite, jovens, famílias e trabalhadores lotavam o salão — até nos dias de semana — buscando sabor, simplicidade e aquela cerveja incrivelmente gelada, conhecida como uma das melhores da região.
                `
            },
            {
                title: "A consolidação: sanduíches, massas, petiscos e o famoso molho de alho",
                year: "2010",
                image: { src: `${baseURL}companies/casa-pellegrini/banner_3.jpg`, alt: "Imagem do Restaurante" },
                text: `
                    O cardápio cresceu junto com a clientela. Vieram as massas bem servidas, os petiscos para dividir, as porções generosas, os caldos caseiros e, claro, o icônico molho de alho — hoje inseparável das batatas fritas.
                    A variedade de drinks e as capirinhas em diversos sabores fortaleceram ainda mais a identidade do lugar. A Casa Pellegrini virou um espaço democrático: do almoço executivo ao jantar descontraído, sempre com qualidade e bom custo-benefício.
                `
            },
            {
                title: "Casa Pellegrini hoje: um clássico de Petrópolis",
                year: "Atual",
                image: { src: `${baseURL}companies/casa-pellegrini/banner_1.jpg`, alt: "Imagem do Restaurante" },
                text: `
                    Atualmente, a Casa Pellegrini continua como um dos restaurantes mais queridos e frequentados da cidade. Aberta todos os dias, funcionando até tarde, mantém viva a essência que conquistou gerações: boa comida, bebida gelada e um ambiente que faz qualquer um se sentir em casa.
                    Sem luxo exagerado — mas com muito sabor, tradição e entrega. Aqui, cada prato conta um pedaço da nossa história com Petrópolis.
                `
            }
        ],
        units: [
            {
                name: "Casa Pellegrini",
                value: "casa-pellegrini",
                hourly: "DOM A QUI - 11h às 00:00h | SEX A SAB - 11h às 01:30h",
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
                    linkMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.617777338797!2d-43.18276181918622!3d-22.50461940636588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9908077a9a1a29%3A0xf57c6c57443ad9c0!2sCasa%20Pellegrini!5e0!3m2!1spt-BR!2sbr!4v1763756459035!5m2!1spt-BR!2sbr"
                },
                info: {
                    "saloons": [
                        {
                            image: {src: `${baseURL}companies/casa-pellegrini/inner_restaurant_1.jpg`, alt: "defaulImage"},
                            title: {saloon: `Salão Principal`, quantity: "16 Pessoas"},
                            text:  `Fazemos eventos de 8 lugares, salão compartilhado com o público do restaurante. \nDisponível na quinta e sexta no almoço e de quinta a sábado no jantar.`
                        },
                        {
                            image: {src: `${baseURL}companies/casa-pellegrini/inner_restaurant_2.jpg`, alt: "defaulImage"},
                            title: {saloon: `Salão Segundo Andar`, quantity: "16 Pessoas"},
                            text:  `Fazemos eventos de 8 a 16 lugares, salão compartilhado com o público do restaurante. \nSalão exclusivo e confortaveis para eventos acima de 8 pessoas com capacidade máxima de 16 pessoas. \nDisponível na quinta e sexta no almoço e de quinta a sábado no jantar.`
                        }
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
            `${baseURL}companies/casa-pellegrini/banner_5.jpg`,
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