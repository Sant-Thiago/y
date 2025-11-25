import defaultImage from "@/utils/assets/banner_image.jpeg" 
import styles from "./EventSaloons.module.css"
import { useParams } from "react-router-dom"
import { companies } from "../../../data/Companies";

export default function EventSaloons() {

    const { empresa } = useParams();
    const data = companies[empresa];

    return (
        <section 
            id="capacidades"
            className={styles.wrapperInfoSaloons}
        >
            <div className={styles.title}>
                <h3>Conheça nossos salões</h3>
            </div>
            <div className={styles.wrapperImages}>
                {data.units[0].info["saloons"].map((info, idx) => (
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