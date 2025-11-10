import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import image from "@/utils/assets/banner_image.jpeg"
import styles from "./Event.module.css";


export default function Event({
    name = "EmpresaX",
    images = image ,
    options = {
        "São Paulo": [
            { link: "/unidades/sao-paulo", value: "São Paulo" },
            { link: "/unidades/iguatemi", value: "Iguatemi" },
            { link: "/unidades/campinas", value: "Campinas" },
        ],
        "Rio de Janeiro": [
            { link: "/unidades/rio-de-janeiro", value: "Rio de Janeiro" },
            { link: "/unidades/niteroi", value: "Niterói" },
        ],
    }
}) {


    const sortOptionsbyCity = (options) => {
        const sortedOptions = {};

        Object.entries(options).forEach(([estado, cidades]) => {
            const sortedCidades = cidades.sort((a, b) => a.value.localeCompare(b.value));
            sortedOptions[estado] = sortedCidades;
        });

        return sortedOptions;
    }

    const sortedOptions = sortOptionsbyCity(options);

    const handleChange = (e) => {
        const option = e.target.value;

        // Implement navigation or other logic here
        console.log(option);
        
    }

    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperImage}>
                        <img src={images} alt="" />
                    </div>
                    <div className={styles.wrapperInfo}>
                        <h2>Eventos Corporativos</h2>
                        <p>
                            Reuniões externas entre empresas e profissionais são bastante comuns.
                            Sendo assim, há necessidade de um espaço amplo e confortável para
                            realização de diversas atividades que contribuem para o desenvolvimento
                            corporativo. Conte com a estrutura dos restaurantes {name} para conceder
                            eventos com o que há de melhor em culinária para seus funcionários,
                            parceiros e convidados.
                        </p>
                        <select
                            className={styles.select}
                            onChange={handleChange}
                        >
                            <option defaultChecked>Selecione a unidade</option>
                            {Object.entries(sortedOptions).map(([state, cities]) => (
                                <optgroup key={state} label={state}>
                                    {cities.map((city, idx) => (
                                        <option key={idx} value={city.value} >
                                            {city.value}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperImage}>
                        <img src={images} alt="" />
                    </div>
                    <div className={styles.wrapperInfo}>
                        <h2>Confraternizações</h2>
                        <p>
                            Sabe aqueles momentos entre amigos e/ou familiares que ficam guardados na 
                            memória? Pois é, muitos deles ocorrem aqui no {name}. Com um espaço acolhedor 
                            e uma culinária praticamente perfeita em sabor, fica difícil esquecer. Traga 
                            sua confraternização para um de nossos restaurantes. Sinta a verdadeira alegria 
                            e tenha ótimas recordações.
                        </p>
                        <select
                            className={styles.select}
                            onChange={handleChange}
                        >
                            <option defaultChecked>Selecione a unidade</option>
                            {Object.entries(sortedOptions).map(([state, cities]) => (
                                <optgroup key={state} label={state}>
                                    {cities.map((city, idx) => (
                                        <option key={idx} value={city.value} >
                                            {city.value}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperInfo}>
                        <h2>Aniversários</h2>
                        <p>
                            A comemoração da chegada de mais um ano para viver, com certeza, é digna de uma 
                            grande festa. E para acompanhá-la, além de um espaço requintado e confortável, 
                            nada melhor que as delícias dos pratos {name}. Nossos restaurantes estão 
                            plenamente disponíveis para receber o aniversariante e seus convidados para, 
                            juntos, realizarmos um evento inesquecível.
                        </p>
                        <select
                            className={styles.select}
                            onChange={handleChange}
                        >
                            <option defaultChecked>Selecione a unidade</option>
                            {Object.entries(sortedOptions).map(([state, cities]) => (
                                <optgroup key={state} label={state}>
                                    {cities.map((city, idx) => (
                                        <option key={idx} value={city.value} >
                                            {city.value}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                    <div className={styles.wrapperImage}>
                        <img src={images} alt="" />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.wrapperImage}>
                        <img src={images} alt="" />
                    </div>
                    <div className={styles.wrapperInfo}>
                        <h2>Casamentos</h2>
                        <p>
                            Em uma festa de matrimônio refinada, um buffet sofisticado, com entradas, pratos 
                            principais e sobremesas de sabor ímpar, é algo imprescindível. Portanto, o 
                            {name} está ao seu lado no objetivo de deixar o casal e seus convidados plenamente 
                            satisfeitos. Realize sua festa de casamento em um dos nossos restaurantes e conceda 
                            a todos os presentes uma experiência que irá engrandecer ainda mais este momento 
                            tão especial.
                        </p>
                        <select
                            className={styles.select}
                            onChange={handleChange}
                        >
                            <option defaultChecked>Selecione a unidade</option>
                            {Object.entries(sortedOptions).map(([state, cities]) => (
                                <optgroup key={state} label={state}>
                                    {cities.map((city, idx) => (
                                        <option key={idx} value={city.value} >
                                            {city.value}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}