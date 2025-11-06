// bug, se eu clicar em uma opção da nav, e dps clicar no wine para abrir o nav do wine, a função de deixar a nav fixed buga

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
import { IoClose } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { FaFlag, FaMapMarkerAlt } from "react-icons/fa";
import { GiGrapes, GiWineGlass } from "react-icons/gi";
import { MdWaterDrop } from "react-icons/md";

export default function Menu({
    name
}) {
    const navigate = useNavigate();

    const navRef = useRef(null);
    const sectionRefs = useRef([]);
    const sectionWinesRefs = useRef([]);
    const dishRef = useRef([]);

    const [selected, setSelected] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const [isClicking, setIsClicking] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);
    const [linkProcessed, setLinkProcessed] = useState(false);


    const [showWineMenu, setShowWineMenu] = useState(false);

    const [searchParams] = useSearchParams();
    const dishParam = searchParams.get("dish");

    const infoFoods = [
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

    const infoWines = [
        {
            id: 1,
            tag: "Destaque",
            wines: [
            {
                id: 37,
                name: "Vinho do Porto Ferreira Ruby",
                price: 119.00,
                description:
                "Tradicional vinho do Porto com aromas intensos de frutas vermelhas e final aveludado.",
                image: food1,
                country: "Portugal",
                type: "Fortificado Doce",
                location: "Vila Nova de Gaia",
                alcohol: "19.5% vol",
                grape: "Touriga Franca, Tinta Roriz, Tinta Barroca",
                volume: "750ml",
            },
            {
                id: 38,
                name: "Chandon Passion Demi-Sec",
                price: 89.00,
                description:
                "Espumante brasileiro refrescante, com notas de frutas tropicais e toque levemente adocicado.",
                image: food2,
                country: "Brasil",
                type: "Espumante Demi-Sec",
                location: "Serra Gaúcha - RS",
                alcohol: "11.8% vol",
                grape: "Chardonnay e Moscato",
                volume: "750ml",
            },
            ],
        },
        {
            id: 2,
            tag: "Argentina",
            wines: [
            {
                id: 101,
                name: "Luigi Bosca Malbec",
                price: 149.00,
                description:
                "Vinho argentino encorpado, com notas de frutas maduras e toques sutis de baunilha e especiarias.",
                image: food1,
                country: "Argentina",
                type: "Tinto Seco",
                location: "Mendoza",
                alcohol: "14.2% vol",
                grape: "Malbec",
                volume: "750ml",
            },
            {
                id: 102,
                name: "Trumpeter Chardonnay",
                price: 92.00,
                description:
                "Branco argentino com aroma de frutas tropicais e toque amanteigado, equilibrado e elegante.",
                image: food2,
                country: "Argentina",
                type: "Branco Seco",
                location: "Mendoza",
                alcohol: "13% vol",
                grape: "Chardonnay",
                volume: "750ml",
            },
            {
                id: 103,
                name: "Rutini Cabernet Malbec",
                price: 165.00,
                description:
                "Corte argentino sofisticado, com taninos macios e notas de frutas negras e especiarias.",
                image: food4,
                country: "Argentina",
                type: "Tinto Seco",
                location: "Mendoza",
                alcohol: "13.5% vol",
                grape: "Cabernet Sauvignon e Malbec",
                volume: "750ml",
            },
            {
                id: 104,
                name: "Salentein Brut Cuvée",
                price: 115.00,
                description:
                "Espumante argentino vibrante com notas de maçã verde e brioche, acidez equilibrada e perlage fina.",
                image: food2,
                country: "Argentina",
                type: "Espumante Brut",
                location: "Valle de Uco - Mendoza",
                alcohol: "12% vol",
                grape: "Chardonnay e Pinot Noir",
                volume: "750ml",
            },
            {
                id: 105,
                name: "Catena Zapata Malbec Argentino",
                price: 395.00,
                description:
                "Um dos mais icônicos vinhos argentinos, com notas profundas de frutas negras e toques defumados.",
                image: food1,
                country: "Argentina",
                type: "Tinto Premium",
                location: "Mendoza",
                alcohol: "14% vol",
                grape: "Malbec",
                volume: "750ml",
            },
            ],
        },
        ];

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
        
        const top = element.getBoundingClientRect().top + window.scrollY + offset;

        scrollOnItem(element, top, index);
    };

    const handleClickWine = (index) => {
        const element = sectionWinesRefs.current[index];        
        const offset = -140;

        const top = element.getBoundingClientRect().top + window.scrollY + offset;

        scrollOnItem(element, top, index);
    }

    const scrollOnItem = (element, top, index) => {
        if (!element) return;

        setSelected(index);
        setIsClicking(true);

        window.scrollTo({
            top,
            behavior: "smooth"
        })

        setTimeout(() => setIsClicking(false), 500);
    }

    const handleCloseWineMenu = (argument) => {
        
        setShowWineMenu(argument);
    }

    useEffect(() => {
        if (!dishParam || linkProcessed) return;
        
        // Achar o prato com base no ID da URL
        const foundDish = infoFoods.flatMap(cat => cat.dishes).find(d => d.id == dishParam);
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
    }, [dishParam, infoFoods]);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        setNavHeight(nav.offsetHeight);

        const originalNavTop = nav.getBoundingClientRect().top + window.scrollY;

        const scrollSectionRef = () => {
            const offset = -150;

            sectionRefs.current.forEach((section, idx) => {
                if (!section) return;

                const top = section.getBoundingClientRect().top + window.scrollY + offset;
                const bottom = top + section.offsetHeight;

                if (window.scrollY >= top && window.scrollY < bottom) {
                    setSelected(idx);
                }
            });
        }

        const scrollSectionWineRef = () => {
            const offset = -150;

            sectionWinesRefs.current.forEach((section, idx) => {
                if (!section) return;

                const top = section.getBoundingClientRect().top + window.scrollY + offset;
                const bottom = top + section.offsetHeight;

                if (window.scrollY >= top && window.scrollY < bottom) {
                    setSelected(idx);
                }
            });
        }


        const handleScroll = () => {
            const scrollY = window.scrollY;

            setIsFixed(scrollY >= originalNavTop);

            if (isClicking) return;

            if (showWineMenu) scrollSectionWineRef(); 
            else scrollSectionRef();
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isClicking, showWineMenu]);

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
                        className={`
                            ${styles.wrapperNav} 
                            ${isFixed ? styles.fixed : ""}
                            ${showWineMenu ? styles.block : ""}`}
                    >
                        {!showWineMenu && <div className={styles.lineTop}></div>}
                        <div className={showWineMenu ? styles.wrapperWineNav : ""}>
                            <div className={styles.wineTitle}>
                                <button 
                                    className={`${styles.wineButton} ${!showWineMenu ? styles.wineButtonAbsolute : ""}`}
                                    onClick={() => handleCloseWineMenu(!showWineMenu)}
                                >
                                    <img src={wineImage} alt="wine" />
                                </button>
                                {showWineMenu &&
                                    <p>
                                        Carta de Vinhos {name}  
                                    </p>
                                }
                            </div>
                            {showWineMenu &&
                                <div className={styles.settingAndClose}>
                                    <VscSettings 
                                        className={styles.setting}
                                    />
                                    <IoClose 
                                        onClick={() => handleCloseWineMenu(false)}
                                    />
                                </div>
                            }
                        </div>
                        {!showWineMenu && infoFoods ? (
                            <ul className={styles.navbar}>
                                {infoFoods.map((it, idx) => (
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
                        ) : (
                            <ul className={`${styles.navbarWine} ${isFixed ? styles.shadowNavWine : ""}`}>
                                {infoWines.map((it, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => handleClickWine(idx)}
                                        className={`
                                            ${styles.wineSelected} 
                                            ${selected == idx ? styles.active : ""}`}
                                    >
                                        {it.tag}
                                    </li>
                                ))}
                            </ul>
                        )

                        }
                        {!showWineMenu && <div className={styles.lineBottom}></div>}
                    </div>

                    {isFixed && <div style={{ height: navHeight + 16}}></div>}
                    {!showWineMenu ? (
                        <section className={styles.wrapperFoods}>
                            {infoFoods && infoFoods.map((it, idx) => (
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
                : (
                    <div className={styles.wineMenu}>
                        {infoWines && infoWines.map((it, idx) => (
                            <div 
                                key={it.id}
                                className={styles.cotainerWines}
                                ref={(el) => (sectionWinesRefs.current[idx] = el)}
                            >
                                <div className={styles.titleWines}>
                                    <p>{it.tag}</p>
                                </div>
                                        
                                <div className={styles.wines}>
                                    {it.wines.map((wine) => (
                                        <div 
                                            className={`${styles.cardWine} /*selected ? styles.highlights : ""*/`}
                                            onClick={() => { handleClickDish(wine) }}
                                            ref={(el) => (dishRef.current[wine.id] = el)}
                                        >
                                            <div className={styles.wrapperImage}>
                                                <img src={wine.image} alt="comida" />
                                            </div>
                                            <div className={styles.wrapperInfoWine}>
                                                <h3 className={styles.title}>{wine.name}</h3>
                                                <div className={styles.priceAndCode}>
                                                    <p className={styles.price}>
                                                        {wine.price.toLocaleString("pt-BR", {
                                                            style: "currency",
                                                            currency: "BRL",
                                                        })} - {wine.volume  }
                                                    </p>
                                                    <p className={styles.code}>
                                                        Cód: {wine.id}
                                                    </p>
                                                </div>
                                                <p className={styles.description}>
                                                    {wine.description}
                                                </p>
                                                <div className={styles.wrapperTag}>
                                                    <div><FaFlag className={styles.icon}/> {wine.country}</div>
                                                    <div><GiWineGlass className={styles.icon}/> {wine.type}</div>
                                                    <div><GiGrapes className={styles.icon}/> {wine.grape}</div>
                                                    <div><MdWaterDrop className={styles.icon}/> {wine.alcohol}</div>
                                                    <div><FaMapMarkerAlt className={styles.icon}/> {wine.location}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>

                        ))}
                    </div>
                )}
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