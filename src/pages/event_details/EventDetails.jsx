import EventBudget from "./components/EventBudget.jsx";
import EventSaloons from "./components/EventSaloons.jsx";
import EventPackages from "./components/EventPackages.jsx";
import EventDifferences from "./components/EventDifferences.jsx";
import EventAboutUs from "./components/EventAboutUs.jsx";
import EventHeader from "./components/EventHeader.jsx";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import bannerImage from "@/utils/assets/banner_image.jpeg"
import Footer from "../../components/footer/Footer.jsx";
import useWindowSize from "../../hooks/useWindowSize.jsx";
import { useEffect, useState } from "react";
import styles from "./EventDetails.module.css";
import { CITY_MAP } from "../../data/Units.jsx";

export default function EventDetails({
    name
}) {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    
    const { width }  = useWindowSize(); 
    
    const unitName = CITY_MAP[useParams().name] || useParams().name;

    const isMobile = width < 750;
    
    useEffect(() => { 
        window.scrollTo(0, 0); 

        if (isMobile) return;
    
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const navbarHeight = 78;
    
            setIsHeaderFixed(scrollY > navbarHeight);
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); 



    return (
        <>
            <Navbar hideAfterScroll={true} />
            {!isMobile && <EventHeader isHeaderFixed={isHeaderFixed} />}

            <main 
                className={`
                    ${styles.container} 
                    ${isHeaderFixed ? styles.marginTopToHeader : ""}
                    ${isMobile ? styles.marginToNavbar : ""}    
                `}
            >
                <EventBudget 
                    name={name}
                    selectedOption={unitName}
                    isHeaderFixed={isHeaderFixed}
                />
                <EventPackages 
                    name={name}
                />
                <section 
                    className={styles.eventos}
                    style={{ backgroundImage: `url(${bannerImage})` }}
                >
                    <div className={styles.background}></div>
                    <div className={styles.info}>
                        <h3>Seu evento no {name} - {unitName}</h3>
                        <div className={styles.wrapperText}>
                            <p> 
                                Nossos espaços contam com TVs, telões, projetores e música ambiente, <br />
                                além de uma excelente acústica.
                            </p>
                            <p className={styles.smallText}>
                                Também oferecemos coquetel volante, coffee-break, <br /> 
                                serviço à inglesa e brinquedoteca.
                            </p>
                        </div>
                    </div>
                </section>
                <EventSaloons
                    selectedOption={unitName}
                />
                <EventDifferences />
                <EventAboutUs
                    name={name}
                    selectedOption={unitName}
                />
            </main>
            <Footer />
        </>
    );
}