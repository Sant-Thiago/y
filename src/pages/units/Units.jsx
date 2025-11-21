import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import restaurantImg from "@/utils/assets/restaurant.jpeg"
import styles from "./Units.module.css";
import image from "@/utils/assets/banner_image.jpeg"
import { useNavigate, useParams } from "react-router-dom";
import { companies } from "../../data/Companies";
import { useEffect } from "react";


export default function Units({
    options = {
        "São Paulo": [
            { link: "/unidade/sao-paulo", value: "São Paulo" },
            { link: "/unidade/iguatemi", value: "Iguatemi" },
            { link: "/unidade/campinas", value: "Campinas" },
        ],
        "Rio de Janeiro": [
            { link: "/unidade/rio-de-janeiro", value: "Rio de Janeiro" },
            { link: "/unidade/niteroi", value: "Niterói" },
        ],
    }
}) {
    
    const { empresa } = useParams();
    const data = companies[empresa]; 

    const formatLink = (cidade) => {
        const base = import.meta.env.BASE_URL || "/";
        return `${base}${empresa}/unidade/${cidade}`;
    };
    

    const imageUnits = data.units;

    const navigate = useNavigate();

    const handleChange = (e) => {
        const option = e.target.value;

        navigate(formatLink(empresa, option));
    }

    const sortOptionsbyCity = (options) => {
        const sortedOptions = {};

        Object.entries(options).forEach(([estado, cidades]) => {
            const sortedCidades = cidades.sort((a, b) => a.value.localeCompare(b.value));
            sortedOptions[estado] = sortedCidades;
        });

        return sortedOptions;
    }

    const getQuantityUnits = (options) => {
        return Object.values(options).reduce((acc, cidades) => acc + cidades.length, 0);
    }


    const sortedOptions = sortOptionsbyCity(options);
    const quantityUnits = getQuantityUnits(options);

    useEffect(() => {
        if (data.units.quantity === 1) {
            navigate(formatLink(""));
        }
    })

    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <section className={styles.wrapper}>
                    <div className={styles.wrapperInfoText}>
                        <div className={styles.wrapperText}>
                            <h1 className={styles.textHigh}>Encontre a unidade <br />mais perto de você</h1>
                            <p className={styles.text}>Temos {quantityUnits} lojas espalhadas em todo o país.</p>
                        </div>
                        <div className={styles.division}></div>
                        <select
                            className={styles.select}
                            onChange={handleChange}
                        >
                            <option defaultChecked>Selecione a unidade desejada</option>
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

                    <div className={styles.wrapperImg}>
                        {imageUnits.length > 1 ? (
                            imageUnits.map(img => (
                                <img 
                                    src={img} 
                                    alt="restaurant" 
                                    className={`
                                        ${styles.img}
                                        ${styles.absoluteImage}
                                    `}/>
                            ))
                        ) : (
                            <img src={imageUnits} alt="restaurant" className={styles.img} />
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}