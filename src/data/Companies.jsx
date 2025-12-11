export const validCompanies = [
    "maria-maria",
    "bar-do-betao",
    "nakka",
    "ecobier-itaipava",
    "maracatu-bar",
    "art-della-pasta",
    "picanha-na-tabua",
    "villa-gastro",
    'agua-pura'
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
//futebol7k.com/jogo
