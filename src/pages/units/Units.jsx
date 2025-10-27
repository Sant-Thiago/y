import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import restaurantImg from "@/utils/assets/restaurant.jpeg"
import styles from "./Units.module.css";
import { useNavigate } from "react-router-dom";


export default function Units({
    img = restaurantImg,
    options = [
        {link: "/unidades/sao-paulo",value: "São Paulo"}, 
        {link:"/unidades/iguatemi" ,value: "Iguatemi"}
    ]
}) {

    const navigate = useNavigate();

    const handleChange = (e) => {
        const link = e.target.value;

        if (link) navigate(link);
    }

    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <section className={styles.wrapper}>
                    <div className={styles.wrapperText}>
                        <h1 className={styles.textHigh}>Encontre a unidade perto de você</h1>
                        <p className={styles.text}>Temos x lojas espalhadas em todo o país.</p>

                    </div>

                    <div className={styles.division}></div>

                    <select 
                        className={styles.select}
                        onChange={handleChange}
                    >
                        <option defaultChecked>Selecione a unidade desejada</option>
                        {options && options.map((option, idx) => (
                            <option key={idx} value={option.link}>{option.value}</option>
                        ))}
                    </select>

                    <div className={styles.wrapperImg}>
                        <img src={img} alt="restaurant" className={styles.img} />
                    </div>
                </section>
            </main>

            <Footer />
        </>

    )
}