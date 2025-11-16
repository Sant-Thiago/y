import defaultImage from "@/utils/assets/banner_image.jpeg" 
import styles from "./EventSaloons.module.css"

export default function EventSaloons({
    selectedOption
}) {

    const infoSaloons = [
        {
            image: {src: defaultImage, alt: "defaulImage"},
            title: {saloon: `Salão ${selectedOption}`, quantity: "10 Pessoas"},
            text:  `Fazemos eventos de x lugares, salão compartilhado com o público do restaurante. \nDisponível na quinta e sexta no almoço e de quinta a sábado no jantar.`
        },
        {
            image: {src: defaultImage, alt: "defaulImage"},
            title: {saloon: `Salão Varanda`, quantity: "X Pessoas"},
            text:  `Fazemos eventos de 20 a 70 lugares, salão compartilhado com o público do restaurante. \nSalão exclusivo para eventos acima de 70 pessoas com capacidade máxima de 150 pessoas. \nDisponível na quinta e sexta no almoço e de quinta a sábado no jantar.`
        },
        {
            image: {src: defaultImage, alt: "defaulImage"},
            title: {saloon: `Salão Parquinho`, quantity: "X Pessoas"},
            text:  `Fazemos eventos de 20 a 50 lugares, salão compartilhado com o público do restaurante. \nDisponível na quinta e sexta no almoço e de quinta a sábado no jantar. Salão não climatizado.`
        },
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