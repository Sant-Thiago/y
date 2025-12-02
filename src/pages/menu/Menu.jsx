import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./Menu.module.css";
import bannerImage from '@/utils/assets/banner_image.jpeg';
import bannerImage2 from '@/utils/assets/banner_image_2.jpeg';
import food1 from "@/utils/assets/food_1.jpg";
import food2 from "@/utils/assets/food_2.jpg";
import food4 from "@/utils/assets/food_4.jpg";
import wineIcon from "@/utils/assets/wine.png";
import wineImage from "@/utils/assets/wine_image.png"; 

import Banner from "../../components/banner/Banner";
import { useEffect, useRef, useState } from "react";
import DishModal from "../../components/modals/dish_modal/DishModal";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import WineModal from "../../components/modals/wine_modal/WineModal";
import WineSection from "../../components/wine_section/WineSection";
import DishSection from "../../components/dish_section/DishSection";
import FilterModal from "../../components/modals/filter_modal/FilterModal";
import { companies } from "../../data/Companies";
import MenuNavbar from "./MenuNavbar";
import useMenuLogic from "./useMenuLogic";
import MenuModals from "./MenuModals";

export default function Menu() {
    const { empresa } = useParams();
    const data = companies[empresa];

    const itens = data.menuItens;

    const infoWines = [
        {
            id: 1,
            tag: "Destaque",
            wines: [
            {
                id: 37,
                name: "Vinho do Porto Ferreira Ruby",
                price: 119.0,
                description:
                "Tradicional vinho do Porto com aromas intensos de frutas vermelhas e final aveludado.",
                image: wineImage,
                country: { name: "Portugal", code: "PT" },
                type: { name: "Fortificado Doce", color: "#b03a2e" },
                location: "Vila Nova de Gaia",
                alcohol: "19.5% vol",
                grape: "Touriga Franca, Tinta Roriz, Tinta Barroca",
                volume: "750ml",
            },
            {
                id: 38,
                name: "Chandon Passion Demi-Sec",
                price: 89.0,
                description:
                "Espumante brasileiro refrescante, com notas de frutas tropicais e toque levemente adocicado.",
                image: wineImage,
                country: { name: "Brasil", code: "BR" },
                type: { name: "Espumante Demi-Sec", color: "#f7b64e" },
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
                price: 149.0,
                description:
                "Vinho argentino encorpado, com notas de frutas maduras e toques sutis de baunilha e especiarias.",
                image: wineImage,
                country: { name: "Argentina", code: "AR" },
                type: { name: "Tinto Seco", color: "#7b1e1e" },
                location: "Mendoza",
                alcohol: "14.2% vol",
                grape: "Malbec",
                volume: "750ml",
            },
            {
                id: 102,
                name: "Trumpeter Chardonnay",
                price: 92.0,
                description:
                "Branco argentino com aroma de frutas tropicais e toque amanteigado, equilibrado e elegante.",
                image: wineImage,
                country: { name: "Argentina", code: "AR" },
                type: { name: "Branco Seco", color: "#f4e19c" },
                location: "Mendoza",
                alcohol: "13% vol",
                grape: "Chardonnay",
                volume: "750ml",
            },
            {
                id: 103,
                name: "Rutini Cabernet Malbec",
                price: 165.0,
                description:
                "Corte argentino sofisticado, com taninos macios e notas de frutas negras e especiarias.",
                image: wineImage,
                country: { name: "Argentina", code: "AR" },
                type: { name: "Tinto Seco", color: "#7b1e1e" },
                location: "Mendoza",
                alcohol: "13.5% vol",
                grape: "Cabernet Sauvignon e Malbec",
                volume: "750ml",
            },
            {
                id: 104,
                name: "Salentein Brut Cuvée",
                price: 115.0,
                description:
                "Espumante argentino vibrante com notas de maçã verde e brioche, acidez equilibrada e perlage fina.",
                image: wineImage,
                country: { name: "Argentina", code: "AR" },
                type: { name: "Espumante Brut", color: "#f2d16b" },
                location: "Valle de Uco - Mendoza",
                alcohol: "12% vol",
                grape: "Chardonnay e Pinot Noir",
                volume: "750ml",
            },
            {
                id: 105,
                name: "Catena Zapata Malbec Argentino",
                price: 395.0,
                description:
                "Um dos mais icônicos vinhos argentinos, com notas profundas de frutas negras e toques defumados.",
                image: wineImage,
                country: { name: "Argentina", code: "AR" },
                type: { name: "Tinto Premium", color: "#4b0000" },
                location: "Mendoza",
                alcohol: "14% vol",
                grape: "Malbec",
                volume: "750ml",
            },
            ],
        },
    ];
    
    const bannerImages = [data.images[5], data.images[0], data.images[4]];
    
    const logic = useMenuLogic(data, itens, infoWines);
    const { isFixed, showWineMenu, filteredWines, navHeight, sectionDishesRefs, sectionWinesRefs, dishRef, wineRef, setSelectedDish, setSelectedWine } = logic;

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
                        transitionDurationMs={300}
                        images={bannerImages}
                        arrowOn={false}
                   />
                </section>
                <section className={styles.cardapio}>
                    <MenuNavbar {...logic}/>
                    {isFixed && <div style={{ height: navHeight + 16}}></div>}
                    {!showWineMenu ? (
                        <DishSection 
                            info={itens}
                            onClick={setSelectedDish}
                            sectionRefs={sectionDishesRefs}
                            ref={dishRef}
                        />
                    ) : (
                        <WineSection 
                            info={filteredWines}
                            onClick={setSelectedWine}
                            sectionRefs={sectionWinesRefs}
                            ref={wineRef}
                        />
                    )}
                </section>
                <MenuModals {...logic}/>
            </main>
            <Footer />
        </>
    )
}