import styles from "./Card.module.css";
import restaurantImg from "@/utils/assets/inner_restaurant.jpg"
import ifoodImg from "@/utils/assets/ifood_banner.png"

export default function Card({
    img = restaurantImg,
    fstText = "Lorem ipsum elit",
    sndText = "Lorem",
    trdText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    btnText = "Faça Seu pedido"
}) {
    return (
            <div className={styles.card}>
                <img src={img} alt="card" className={styles.cardImage} />
                <div className={styles.gradient}></div>
                <div className={styles.texts}>
                    <p className={styles.fstText}>{fstText}</p>
                    <h2 className={styles.sndText}>{sndText}</h2>
                    <p className={styles.trdText}>{trdText}</p>
                    <button className={styles.btnCard}>{btnText}</button>
                </div>
            </div>

            // <div className={styles.card}>
            //     <img src={ifoodImg} alt="card" className={styles.cardImage} />
            //     <div className={styles.gradient}></div>
            //     <div className={styles.texts}>
            //         <p className={styles.fstText}>Peça pelo nosso</p>
            //         <h2 className={styles.sndText}>Delivery</h2>
            //         <p className={styles.trdText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            //         <button className={styles.btnCard}>Faça Seu pedido</button>
            //     </div>
            // </div>
    )
}