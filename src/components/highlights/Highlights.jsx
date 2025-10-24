import styles from "./Highlights.module.css";
import food1 from "@/utils/assets/food_1.jpg";
import food2 from "@/utils/assets/food_2.jpg";
import food3 from "@/utils/assets/food_3.jpg";

export default function Highlights({
    images = [{img: food1, alt: "food 1"}, {img: food2, alt: "food 2"}, {img: food3, alt: "food 3"}]
}) {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Nossos</p>
            <h2 className={styles.high}>Destaques</h2>
            <div>
                {images.map(it => (
                    <img src={it.img} alt={it.alt} className={styles.img}/>
                ))}
            </div>
        </div>
    );
}