import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./Menu.module.css";
import bannerImage from '@/utils/assets/banner_image.jpeg';
import bannerImage2 from '@/utils/assets/banner_image_2.jpeg';
import food1 from "@/utils/assets/food_1.jpg";
import food2 from "@/utils/assets/food_2.jpg";
import food4 from "@/utils/assets/food_4.jpg";
import wineImage from "@/utils/assets/wine.png";

import Banner from "../../components/banner/Banner";
import { useEffect, useRef, useState } from "react";
import DishModal from "../../components/modals/dish_modal/DishModal";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Menu({}) {
    const navigate = useNavigate();

    const navRef = useRef(null);
    const sectionRefs = useRef([]);
    const dishRef = useRef([]);

    const [selected, setSelected] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const [isClicking, setIsClicking] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);
    const [linkProcessed, setLinkProcessed] = useState(false);


    const [searchParams] = useSearchParams();
    const dishParam = searchParams.get("dish");

    const info = [
        {
            id: 1,
            category: "Entradinhas",
            dishes: [
                {
                    id: 429,
                    name: "Entradinha de Bruceta",
                    price: 69.00,
                    description: "Bruceta quente forradinha hahahhaaa",
                    image: food1,
                }, {
                    id: 30,
                    name: "Entradinha de Cruizinho",
                    price: 3.00,
                    description: "Cruzinho apertado bem passado",
                    image: food2,
                }
            ]
        },
        {
            id: 2,
            category: "Carnes",
            dishes: [
                {
                    id: 101,
                    name: "Picanha na Brasa",
                    price: 89.9,
                    description: "Corte nobre de picanha assada no carvão, suculenta e dourada.",
                    image: food4,
                }, {
                    id: 102,
                    name: "Costela ao Molho Barbecue",
                    price: 74.5,
                    description: "Costela bovina desfiando, coberta com molho barbecue artesanal.",
                    image: food2,
                },
            ],
        },
        {
            id: 3,
            category: "Bebidas",
            dishes: [
                {   
                    id: 201,
                    name: "Caipirinha Clássica",
                    price: 22.0,
                    description: "Feita com cachaça artesanal, limão fresco e açúcar.",
                    image: food1,
                }, {
                    id: 202,
                    name: "Suco Natural de Maracujá",
                    price: 12.0,
                    description: "Suco natural e gelado, feito com polpa fresca de maracujá.",
                    image: food2,
                },    
            ],
        },
    ]

    const handleCloseModal = () => {
        setSelectedDish(null);

        // Remove o parâmetro dish da URL sem recarregar a página
        const params = new URLSearchParams(searchParams);
        params.delete("dish");
        navigate({ search: params.toString() }, { replace: true });
    };

    const handleClickDish = (dish) => {
        setSelectedDish(dish);
    }

    const handleClick = (index) => {
        const element = sectionRefs.current[index];
        const offset = -100;
        
        if (!element) return;

        const top = element.getBoundingClientRect().top + window.scrollY + offset;
        
        setSelected(index);
        setIsClicking(true);

        window.scrollTo({
            top,
            behavior: "smooth"
        })

        setTimeout(() => setIsClicking(false), 500);
    };

    useEffect(() => {
        if (!dishParam || linkProcessed) return;
        
        // Achar o prato com base no ID da URL
        const foundDish = info.flatMap(cat => cat.dishes).find(d => d.id == dishParam);
        if (!foundDish) return
            
        // Rolar até a categoria do prato
        if (dishRef.current[dishParam]) {
            const el = dishRef.current[dishParam];
            const top = el.getBoundingClientRect().top + window.scrollY - 320;
            setTimeout(() => {
                window.scrollTo({ top, behavior: "smooth" });
            }, 300);
        }

            // Esperar rolar e abrir o modal
        setTimeout(() => {
            setSelectedDish(foundDish);
            setLinkProcessed(true);
        }, 600);
    }, [dishParam, info]);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        setNavHeight(nav.offsetHeight);

        const originalNavTop = nav.getBoundingClientRect().top + window.scrollY;

        const handleScroll = () => {
            const scrollY = window.scrollY;

            setIsFixed(scrollY >= originalNavTop);

            if (isClicking) return;

            const offset = -150;
            sectionRefs.current.forEach((section, idx) => {
                if (!section) return;

                const top = section.getBoundingClientRect().top + window.scrollY + offset;
                const bottom = top + section.offsetHeight;

                if (window.scrollY >= top && window.scrollY < bottom) {
                    setSelected(idx);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClicking]);

    return (
        <>
            <Navbar 
                hideAfterScroll={true}
            />
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
                    <div 
                        ref={navRef} 
                        className={`${styles.wrapperNav} ${isFixed ? styles.fixed : ""}`}
                    >
                        <div className={styles.lineTop}></div>
                        <button className={styles.wineButton}>
                            <img src={wineImage} alt="wine" />
                        </button>
                        {info && (
                            <ul className={styles.navbar}>
                                {info.map((it, idx) => (
                                    <li 
                                        key={idx}
                                        onClick={() => handleClick(idx)}
                                    >
                                        <a 
                                            className={selected == idx ? styles.active : ""}
                                        >
                                            {it.category}
                                            <div className={selected == idx ? styles.border : ""}></div>
                                        </a>
                                    </li>

                                ))

                                }
                            </ul>
                        )}
                        <div className={styles.lineBottom}></div>
                    </div>

                    {isFixed && <div style={{ height: navHeight + 16}}></div>}

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
                                                onClick={() => { handleClickDish(dish) }}
                                                ref={(el) => (dishRef.current[dish.id] = el)}
                                            >
                                                <div className={styles.wrapperImage}>
                                                    <img src={dish.image} alt="comida" />
                                                </div>
                                                <div className={styles.wrapperInfoFood}>
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
                </section>
                {selectedDish && (
                    <DishModal 
                        {...selectedDish}
                        onClose={handleCloseModal}
                    />
                )}
            </main>
            <Footer />
        </>
    )
}