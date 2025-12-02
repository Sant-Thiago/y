import { useEffect, useRef, useState } from "react";
import styles from "./DishSection.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function DishSection({
    info,
    onClick,
    sectionRefs,
    ref
}) {

    const hasMoreThanOne = (it) => {
        if (!it.options) return false;

        return it.options.length > 1;
    }

    const hasMeasure = (it) => {
        return it.options?.measure;
    }

    // estado: map dishId -> quantidade
    const [quantities, setQuantities] = useState({});

    // inicializa quantities quando info muda (mantém quantidades existentes)
    useEffect(() => {
        setQuantities(prev => {
            const next = { ...prev };
            info.forEach(category => {
                category.itens.forEach(dish => {
                    if (next[dish.id] === undefined) next[dish.id] = 0;
                });
            });
            return next;
        });
    }, [info]);

    const handleAdd = (dishId) => {
        setQuantities(prev => ({
            ...prev,
            [dishId]: (prev[dishId] || 0) + 1
        }));
    };

    const handleRemove = (dishId) => {
        setQuantities(prev => ({
            ...prev,
            [dishId]: Math.max(0, (prev[dishId] || 0) - 1)
        }));
    };

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
                            {it.itens.map((dish, index) => (
                                <div 
                                    className={styles.card}
                                    onClick={() => { onClick(dish) }}
                                    ref={(el) => (ref.current[dish.id] = el)}
                                >
                                    <div className={styles.wrapperImage}>
                                        <img src={dish.image} alt="comida" />
                                    </div>
                                    {!hasMoreThanOne(dish) ? (
                                        <div className={styles.wrapperInfoFoods}>
                                            <div className={styles.wrapperTitleAndSelect}>
                                                <h3 className={styles.title}>{dish.name} {dish.measure?.formatted}{/*{dish.options?.[0].weight}*/}</h3>
                                                <div className={styles.wrapperSelect}>
                                                    {quantities && quantities[dish.id] !== 0 && 
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation(); // impede o onClick do card
                                                                handleRemove(dish.id);
                                                            }}
                                                            aria-label={`Remover ${dish.name}`}
                                                            className={styles.buttonItem}
                                                        >
                                                            <FaMinus />
                                                        </button>
                                                    }
                                                    
                                                    <p>
                                                        {quantities[dish.id] ?? 0}
                                                    </p>
                                                    
                                                    <button
                                                        className={styles.buttonItem}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleAdd(dish.id);
                                                        }}
                                                        aria-label={`Adicionar ${dish.name}`}
                                                    >
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={styles.priceAndCode}>
                                                <p className={styles.price}>
                                                    {/* {dish.options?.[0].price.toLocaleString("pt-BR", {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    })}  */}
                                                    {dish.price.formatted}
                                                </p>
                                                <p className={styles.code}>
                                                    {/* Cód: {dish.options?.[0].code} */}
                                                    Cód: {dish.id}
                                                </p>
                                            </div>
                                            <p className={styles.description}>
                                                {dish.description}
                                            </p>
                                        </div>
                                    ):(
                                        <div className={styles.wrapperInfoFoods}>
                                            <h3 className={styles.title}>{dish.name} {hasMeasure(dish.options?.[0]) && ( dish.options?.[0]?.measure + " / " + dish.options?.[1]?.measure ) }</h3>
                                            <p className={styles.description}>
                                                {dish.description}
                                            </p>
                                            <div className={styles.wrapperNameAndPriceAndCode}>
                                                {dish.options?.map(opt => (
                                                    <div className={styles.nameAndPriceAndCode}>
                                                        <p className={styles.nameAndLabel}>{dish.name} {opt.label}{" "}</p>
                                                        <p className={styles.priceAndCode}>
                                                            {opt.price.formatted} - ({opt.id})
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}