import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./Menu.module.css";
import bannerImage from '@/utils/assets/banner_image.jpeg';
import bannerImage2 from '@/utils/assets/banner_image_2.jpeg';
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
                            <div className={styles.scroll}>
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

                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}