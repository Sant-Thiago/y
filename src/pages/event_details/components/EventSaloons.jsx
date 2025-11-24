import defaultImage from "@/utils/assets/banner_image.jpeg" 
import styles from "./EventSaloons.module.css"
import { useParams } from "react-router-dom"
import { companies } from "../../../data/Companies";

export default function EventSaloons() {

    const { empresa } = useParams();
    const data = companies[empresa];

    const infoSaloons = [
        {
            image: {src: data.images[1], alt: "defaulImage"},
            title: {saloon: `Salão Principal`, quantity: "16 Pessoas"},
            text:  `Fazemos eventos de 8 lugares, salão compartilhado com o público do restaurante. \nDisponível na quinta e sexta no almoço e de quinta a sábado no jantar.`
        },
        {
            image: {src: data.images[2], alt: "defaulImage"},
            title: {saloon: `Salão Segundo Andar`, quantity: "16 Pessoas"},
            text:  `Fazemos eventos de 8 a 16 lugares, salão compartilhado com o público do restaurante. \nSalão exclusivo e confortaveis para eventos acima de 8 pessoas com capacidade máxima de 16 pessoas. \nDisponível na quinta e sexta no almoço e de quinta a sábado no jantar.`
        }
    ]

    return (
        <section 
            id="capacidades"
            className={styles.wrapperInfoSaloons}
        >
            <div className={styles.title}>
                <h3>Conheça nossos salões</h3>
            </div>
            <div className={styles.wrapperImages}>
                {infoSaloons.map((info, idx) => (
                    <div className={styles.imageAndInfo}>
                        <div className={styles.imagem}>
                            <img src={info.image.src} alt={info.image.alt} />
                        </div>
                        <div className={styles.title}>
                            <h3>{info.title.saloon}</h3>
                            <p>{info.title.quantity}</p>
                        </div>
                        <div className={styles.description}>
                            <p style={{ whiteSpace: "pre-line"}}>
                                {info.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}