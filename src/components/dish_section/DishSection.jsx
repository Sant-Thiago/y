import { useRef } from "react";
import styles from "./DishSection.module.css";

export default function DishSection({
    info,
    onClick,
    sectionRefs,
    ref
}) {

    return (
        <section className={styles.wrapperFoods}>
            {info && info.map((it, idx) => (
                <div 
                    key={it.id}
                    className={styles.cotainerFoods}
                    ref={(el) => (sectionRefs.current[idx] = el)}
                >
                    <div className={styles.titleFoods}>
                        <p>{it.category}</p>
                    </div>
                    
                    <div className={styles.foods}>
                        <h2>{it.category}</h2>
                        <div className={styles.wrapperCards}>
                            {it.dishes.map((dish) => (
                                <div 
                                    className={styles.card}
                                    onClick={() => { /*handleSelectDish(dish)*/ onClick(dish) }}
                                    ref={(el) => (ref.current[dish.id] = el)}
                                >
                                    <div className={styles.wrapperImage}>
                                        <img src={dish.image} alt="comida" />
                                    </div>
                                    <div className={styles.wrapperinfoFoodsFood}>
                                        <h3 className={styles.title}>{it.name}</h3>
                                        <div className={styles.priceAndCode}>
                                            <p className={styles.price}>
                                                {dish.price.toLocaleString("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                })} 
                                            </p>
                                            <p className={styles.code}>
                                                Cód: {dish.id}
                                            </p>
                                        </div>
                                        <p className={styles.description}>
                                            {dish.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}