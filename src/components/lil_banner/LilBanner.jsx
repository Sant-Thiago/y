import styles from "./LilBanner.module.css";

export default function LilBanner({
    image,
    text
}) {
    return(
        <section className={styles.wrapperImg}>
            <img src={image} alt="" className={styles.img} />
            <div className={styles.backgroundImg}></div>
            <h1 className={styles.textImg}>{text}</h1>
        </section>
    )
}