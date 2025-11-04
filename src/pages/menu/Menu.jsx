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
            country: "Destaque",
            wines: [
                {
                    id: 37,
                    name: "Vinho FODA MEU",
                    price: 69.00,
                    description: "Produzido pelo cara que fez o meme 'É foda meu', os pés dele tem uma aromatização perfeita para o gosto de bosta do vinho",
                    image: food1,
                    country: "PQP",
                    type: "Daora",
                    location: "Sarra no Piru - CU",
                    alcohol: "5% vol",
                    grape: "De casa"
                }, {
                    id: 30,
                    name: "Vinha Lorem ipsum dolor",
                    price: 3.00,
                    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel delectus temporibus nihil corporis quaerat qui odit reprehenderit? Accusamus, voluptatum ducimus culpa esse corrupti impedit pariatur, quos, eos voluptate deleniti nam!",
                    image: food2,
                    country: "PQP",
                    type: "FODA",
                    location: "Serra - SP",
                    alcohol: "0% vol",
                    grape: "Uva sem semente"
                }
            ]
        }, {
            id: 2,
            country: "Argentina",
            wines: [{
                id: 101,
                name: "Chandon Réserve Brut",
                price: 119.00,
                description: "Espumante brasileiro elaborado pelo método Charmat, com perlage fina e aromas de frutas cítricas e flores brancas.",
                image: food1,
                country: "Brasil",
                type: "Espumante Brut",
                location: "Serra Gaúcha - RS",
                alcohol: "12% vol",
                grape: "Chardonnay e Pinot Noir",
            },
            {
                id: 102,
                name: "Miolo Seleção Rosé",
                price: 59.90,
                description: "Vinho leve e refrescante, com notas de morango e framboesa, ideal para dias quentes.",
                image: food2,
                country: "Brasil",
                type: "Rosé Suave",
                location: "Vale dos Vinhedos - RS",
                alcohol: "11.5% vol",
                grape: "Syrah e Tempranillo",
            },
            {
                id: 103,
                name: "Casillero del Diablo Cabernet Sauvignon",
                price: 99.00,
                description: "Clássico chileno encorpado, com notas de frutas negras maduras, baunilha e leve toque de carvalho.",
                image: food4,
                country: "Chile",
                type: "Tinto Seco",
                location: "Vale Central",
                alcohol: "13.5% vol",
                grape: "Cabernet Sauvignon",
            },
            {
                id: 104,
                name: "Aurora Varietal Chardonnay",
                price: 65.00,
                description: "Vinho branco equilibrado com aromas de abacaxi e melão, final suave e fresco.",
                image: food2,
                country: "Brasil",
                type: "Branco Seco",
                location: "Bento Gonçalves - RS",
                alcohol: "12% vol",
                grape: "Chardonnay",
            },
            {
                id: 105,
                name: "Mumm Cordon Rouge Brut",
                price: 349.00,
                description: "Champagne francês elegante, com notas de frutas cítricas, brioche e uma acidez refinada.",
                image: food1,
                country: "França",
                type: "Champagne Brut",
                location: "Reims, Champagne",
                alcohol: "12% vol",
                grape: "Pinot Noir, Chardonnay, Pinot Meunier",
            }
            ]
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
        
        const top = element.getBoundingClientRect().top + window.scrollY + offset;

        scrollOnItem(element, top);
    };

    const handleClickWine = (index) => {
        const element = sectionWinesRefs.current[index];
        
        const top = element.getBoundingClientRect().top + window.scrollY;

        scrollOnItem(element, top);
    }

    const scrollOnItem = (element, top) => {
        if (!element) return;

        
        setSelected(index);
        setIsClicking(true);

        window.scrollTo({
            top,
            behavior: "smooth"
        })

        setTimeout(() => setIsClicking(false), 500);
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
                        {!showWineMenu && <div className={styles.lineTop}></div>}
                        <div className={showWineMenu ? styles.wrapperWineNav : ""}>
                            <div className={styles.wineTitle}>
                                <button 
                                    className={`${styles.wineButton} ${!showWineMenu ? styles.wineButtonAbsolute : ""}`}
                                    onClick={() => setShowWineMenu(!showWineMenu)}
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
                                        onClick={() => setShowWineMenu(false)}
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
                            <ul className={styles.navbarWine}>
                                {infoWines.map((it, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => handleClickWine(idx)}
                                        className={styles.wineSelected}
                                    >
                                    </li>
                                ))}
                            </ul>
                        )

                        }
                        {!showWineMenu && <div className={styles.lineBottom}></div>}
                    </div>

                    {isFixed && <div style={{ height: navHeight + 16}}></div>}
                    {!showWineMenu && (
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
                    )}
                    {showWineMenu && (
                        <div className={styles.wineMenu}>

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