import defaultLogo from "@/utils/assets/no_profile.png";
import styles from './Navbar.module.css';
import { useState, useEffect, useRef } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export default function Navbar({ 
    logoName = "logoName", hideOnScroll = true, hideAfterScroll = false 
}) {
	const links = [
		{ href: "/home", label: "Início" },
        { href: "/unidades", label: "Unidades" },
        { href: "/cardapio", label: "Cardápio" },
        { href: "/reservas", label: "Reservas" },
        { href: "/eventos", label: "Eventos" },
        { href: "/quem-somos", label: "Nossa História" },
        { href: "/contato", label: "Contato" },
    ];

    const { width } = useWindowSize();
    const isMobile = width < 1000;

    const [hide, setHide] = useState(false);

    useEffect(() => {
        if (!hideOnScroll) return;

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const navbarHeight = 78;
            let shouldHide = false;
            
            if (scrolled > navbarHeight * 4 && !hideAfterScroll) {
                shouldHide = false;
            } else if (scrolled > navbarHeight) {
                shouldHide = true;
            }

            setHide(shouldHide);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    
    }, [hideOnScroll, hideAfterScroll]);

    return (
        <header className={`${styles.container} ${hide ? styles.hide : ""}`}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={defaultLogo} alt="defaultLogo" />
                </div>
                {isMobile ? (
                    <NavbarMobile links={links} />
                ) : (
                    <NavbarDesktop links={links} />
                )}
            </div>
        </header>
    );
};
