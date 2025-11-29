export const validCompanies = [
    "casa-do-norte-kactos", 
    "mari-maria",
    "sertao-bar-e-restaurante", 
    "seu-joao",
    "millo",
];

const modules = import.meta.glob("./restaurants/*.js", { eager: true });
const arrayRestaurants = Object.values(modules).map(it => it.default)

export const companies = arrayRestaurants.reduce((acc, item) => {
    const key = Object.keys(item)[0]
    
    acc[key] = item[key]
    return acc;
}, {});    
// OU const companies = Object.assign({}, ...arrayRestaurants)

// ucytwat x three 6 mafia "lethal" type beat
