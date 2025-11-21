const baseURL = import.meta.env.BASE_URL

export const validCompanies = [
    "casa-pellegrini", "empresa2", "empresa3" 
];

export const companies = {
    "casa-pellegrini": {
        name: "Casa Pellegrini",
        themeColor: "#8B4513",
        logo: `${baseURL}companies/casa-pellegrini/logo.png`,
        location: {
            extended: "Rua Treze de Maio, 184 - Centro, Petrópolis - RJ, 25685-231",
            street: "Rua Treze de Maio, 184",
            city: "Petrópolis",
            state: "RJ",
            number: "184",
            zipCode: "25685-231",
        },
        units: {
            quantity: 1,
            name: "Casa Pellegrini",
            value: "casa-pellegrini",
            images: [
                `${baseURL}companies/casa-pellegrini/banner_1.jpg`,
                `${baseURL}companies/casa-pellegrini/inner_restaurant_1.jpg`,
                `${baseURL}companies/casa-pellegrini/inner_restaurant_2.jpg`,
            ]

        },
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
        links: {
            facebook: "https://www.facebook.com/CasaPellegrini/",
            instagram: "https://www.instagram.com/casapellegrini/",
            whatsapp: "https://api.whatsapp.com/send/?phone=552422316110",
        }
    }
}

// ucytwat x three 6 mafia "lethal" type beat