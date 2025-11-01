import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./Menu.module.css";
import bannerImage from '@/utils/assets/banner_image.jpeg';
import bannerImage2 from '@/utils/assets/banner_image_2.jpeg';
import food1 from "@/utils/assets/food_1.jpg";
import food2 from "@/utils/assets/food_2.jpg";
import food4 from "@/utils/assets/food_4.jpg";

import Banner from "../../components/banner/Banner";
import { useState } from "react";

export default function Menu({}) {
    const [selected, setSelected] = useState(0);

    const cardapioInfo = [
        {type: "Entrada", itens: []},
        {type: "Carnes", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Entrada", itens: []},
        {type: "Carnes", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Entrada", itens: []},
        {type: "Carnes", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Entrada", itens: []},
        {type: "Carnes", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Entrada", itens: []},
        {type: "Carnes", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Entrada", itens: []},
        {type: "Carnes", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Entrada", itens: []},
        {type: "Carnes", itens: []},
        {type: "Bebidas", itens: []},
        {type: "Carta de Vinhos", itens: []},
    ];

    const pratos = [
        {img: food1, name: "Entradinha de Bruceta", price: 69.00, code: 420, description: "Bruceta quente forradinha hahahah"},
        {img: food4, name: "Entradinha de Cruzinho", price: 3.00, code: 30, description: "Cruzinho apertado bem passado"}
    ]

    const handleClick = (index) => {
        setSelected(index);
    };

    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <section className={styles.banner}>
                    <Banner 
                        height={"400px"}
                        timeTransition={5000}
                        images={[{img: bannerImage}, {img: bannerImage2}, {img: bannerImage}]}
                        arrowOn={false}
                   />
                </section>
                <section className={styles.cardapio}>
                    <div className={styles.wrapperNav}>
                        <button>wine</button>
                        {cardapioInfo && (
                            <ul className={styles.navbar}>
                                {cardapioInfo.map((it, idx) => (
                                    <li 
                                        key={idx}
                                        onClick={() => handleClick(idx)}
                                    >
                                        <a 
                                            className={selected == idx ? styles.active : ""}
                                        >
                                            {it.type}
                                            <div className={selected == idx ? styles.border : ""}></div>
                                        </a>
                                    </li>

                                ))

                                }
                            </ul>
                        )}
                        <div className={styles.lineBottom}></div>
                    </div>

                    <div className={styles.wrapperFoods}>
                        <div className={styles.titleWrapperFoods}>
                            <p>Entradinhas</p>
                        </div>
                        
                        <div className={styles.foods}>
                            <h2>Entradinhas</h2>
                            <div className={styles.wrapperCards}>
                                {pratos && pratos.map((it, idx) => (
                                    <div className={styles.card}>
                                        <div className={styles.wrapperImage}>
                                            <img src={it.img} alt="comida" />
                                        </div>
                                        <div className={styles.wrapperInfoFood}>
                                            <h3 className={styles.title}>{it.name}</h3>
                                            <div className={styles.priceAndCode}>
                                                <p className={styles.price}>
                                                    {it.price.toLocaleString("pt-BR", {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    })} 
                                                </p>
                                                <p className={styles.code}>
                                                    Cód: {it.code}
                                                </p>
                                            </div>
                                            <p className={styles.description}>
                                                {it.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}