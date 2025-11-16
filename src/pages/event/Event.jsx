import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar.jsx"
import styles from "./Event.module.css";
import defaultImage from "@/utils/assets/banner_image.jpeg"

export default function Event({
    name = "EmpresaX",
}) {

    const navigate = useNavigate();
    const infos = [
        {
            image: {src: defaultImage, alt: "defaultImage" },
            title: "Eventos Corporativos",
            text: `Reuniões externas entre empresas e profissionais são bastante comuns. Sendo assim, há necessidade de um espaço amplo e confortável pararealização de diversas atividades que contribuem para o desenvolvimento corporativo. Conte com a estrutura dos restaurantes ${name} para conceder eventos com o que há de melhor em culinária para seus funcionários, parceiros e convidados.`,
            reverse: {column: false, row: true},
            imageFree: true
        },
        {
            image: {src: defaultImage, alt: "defaultImage" },
            title: "Confraternizações",
            text: `Sabe aqueles momentos entre amigos e/ou familiares que ficam guardados na memória? Pois é, muitos deles ocorrem aqui no ${name}. Com um espaço acolhedor e uma culinária praticamente perfeita em sabor, fica difícil esquecer. Traga sua confraternização para um de nossos restaurantes. Sinta a verdadeira alegria e tenha ótimas recordações.`,
            reverse: {column: false, row: false}
        },
        {
            image: {src: defaultImage, alt: "defaultImage" },
            title: "Aniversário",
            text: `A comemoração da chegada de mais um ano para viver, com certeza, é digna de uma grande festa. E para acompanhá-la, além de um espaço requintado e confortável, nada melhor que as delícias dos pratos ${name}. Nossos restaurantes estão plenamente disponíveis para receber o aniversariante e seus convidados para, juntos, realizarmos um evento inesquecível.`,
            reverse: {column: true, row: true}
        },
        {
            image: {src: defaultImage, alt: "defaultImage" },
            title: "Casamentos",
            text: `Em uma festa de matrimônio refinada, um buffet sofisticado, com entradas, pratos principais e sobremesas de sabor ímpar, é algo imprescindível. Portanto, o ${name} está ao seu lado no objetivo de deixar o casal e seus convidados plenamente satisfeitos. Realize sua festa de casamento em um dos nossos restaurantes e conceda a todos os presentes uma experiência que irá engrandecer ainda mais este momento tão especial.`,
            reverse: {column: false, row: false}
        },
    ];

    // const opt = [
    //     { state: "São Paulo", cities: ["São Paulo", "Iguatemi", ]}
    // ]

    const options = {
        "São Paulo": [
            { link: "/eventos/sao-paulo", value: "São Paulo" },
            { link: "/eventos/iguatemi", value: "Iguatemi" },
            { link: "/eventos/campinas", value: "Campinas" },
        ],
        "Rio de Janeiro": [
            { link: "/eventos/rio-de-janeiro", value: "Rio de Janeiro" },
            { link: "/eventos/niteroi", value: "Niterói" },
        ],
    };

    const sortOptionsbyCity = (options) => {
        const sortedOptions = {};

        Object.entries(options).forEach(([estado, cidades]) => {
            const sortedCidades = cidades.sort((a, b) => a.value.localeCompare(b.value));
            sortedOptions[estado] = sortedCidades;
        });

        return sortedOptions;
    }

    const sortedOptions = sortOptionsbyCity(options);
    

    const handleSelect = () => {
        navigate(link)
    }

    return (
        <>
            <Navbar />

            <main 
                className={styles.container}
            > 
                {infos.map((info, idx) => (
                    <div className={`
                        ${styles.wrapper} 
                        ${info.reverse.column ? styles.reverseColumn : ""}
                        ${info.reverse.row ? styles.reverseRow : ""}
                    `} key={idx}>
                        <div className={`
                            ${styles.wrapperImage}
                            ${info.imageFree ? styles.imageFree : ""}
                        `}>
                            <img src={info.image.src} alt={info.image.alt} />
                        </div>
                        <div className={styles.wrapperInfo}>
                            <h2>{info.title}</h2>
                            <p>
                                {info.text}
                            </p>
                            <select
                                className={styles.select}
                                onChange={(e) => navigate(e.target.value)}
                            >
                                <option defaultChecked>Selecione a unidade</option>
                                {Object.entries(sortedOptions).map(([state, cities]) => (
                                    <optgroup key={state} label={state}>
                                        {cities.map((city, idx) => (
                                            <option key={idx} value={city.link} >
                                                {city.value}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}
            </main>
            <Footer />
        </>
    )
}