import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar.jsx"
import banenrImage from "@/utils/assets/banner_image.jpeg"
import styles from "./Event.module.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useWindowSize from "../../hooks/useWindowSize";
import { BiCar } from "react-icons/bi";
import { LuToyBrick } from "react-icons/lu";
import { GiEnergyTank } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import EventHeader from "./components/EventHeader";
import EventIntro from "./components/EventIntro";
import EventBudget from "./components/EventBudget.jsx";
import EventSaloons from "./components/EventSaloons.jsx";
import EventPackages from "./components/EventPackages.jsx";
import EventDifferences from "./components/EventDifferences.jsx";
import EventAboutUs from "./components/EventAboutUs.jsx";

export default function Event({
    name = "EmpresaX",
}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isVisibleList, setIsVisibleList] = useState(false)
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const { width }  = useWindowSize(); 

    const isMobile = width < 750;

    useEffect(() => {
        if (isVisibleList) {
            const originalStyle = {
              body: window.getComputedStyle(document.body).overflow,
              html: window.getComputedStyle(document.documentElement).overflow,
            };
            
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        
            return () => {
              document.body.style.overflow = originalStyle.body;
              document.documentElement.style.overflow = originalStyle.html;
            };
        }
    
    }, [isVisibleList]);

    useEffect(() => { 
        window.scrollTo(0, 0); 

        if (!selectedOption || isMobile) return;
    
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const navbarHeight = 78;
    
            setIsHeaderFixed(scrollY > navbarHeight);
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [selectedOption]); 

    return (
        <>
            <Navbar 
                hideAfterScroll={selectedOption ? true : false}
            />

            {selectedOption && !isMobile && <EventHeader isHeaderFixed={isHeaderFixed} />}

            <main 
                className={`
                    ${styles.container} 
                    ${isHeaderFixed ? styles.marginTopToHeader : ""}
                    ${!(selectedOption && !isMobile) ? styles.marginToNavbar : ""}    
                `}
            > 
                {!selectedOption ? 
                    <EventIntro 
                        name={name}
                        onChange={ (e) => setSelectedOption(e.target.value) }
                    /> 
                : (
                    <>
                        <EventBudget 
                            name={name}
                            selectedOption={selectedOption}
                            isHeaderFixed={isHeaderFixed}
                        />
                        <EventPackages 
                            name={name}
                        />
                        <section 
                            className={styles.eventos}
                            style={{ backgroundImage: `url(${banenrImage})` }}
                        >
                            <div className={styles.background}></div>
                            <div className={styles.info}>
                                <h3>Seu evento no {name} - {selectedOption}</h3>
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
                            selectedOption={selectedOption}
                        />
                        <EventDifferences />
                        <EventAboutUs
                            name={name}
                            selectedOption={selectedOption}
                        />
                    </>
                )}
            </main>
            <Footer />
        </>
    )
}