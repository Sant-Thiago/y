import styles from './Navbar.module.css';
import logoImg from '@/utils/assets/no_profile.png';
import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FaCross, FaPlus } from 'react-icons/fa6';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

export default function Navbar({
    logoName = "logoName",
    hideOnScroll = true,
    hideAfterScroll = false
}) {
    
    const links = [
        { href: "/home", label: "Início" },
        { href: "/unidades", label: "Unidades" },
        { href: "/cardapio", label: "Cardápio" },
        { href: "/reservas", label: "Reservas" },
        { href: "#event", label: "Eventos" },
        { href: "/quem-somos", label: "Nossa História" },
        { href: "/trabalhe-conosco", label: "Contato" }
    ];
    
    const listRef = useRef(null);
    const [hide, setHide] = useState(false);
    const navbarHeight = 76;
    const [visibleLinks, setVisibleLinks] = useState(links);
    const [isVisibleList, setIsVisibleList] = useState(false);
    const [isMoreOptions, setIsMoreOptions] = useState(null);
    const [overflowLinks, setOverflowLinks] = useState([]);
    const [isVisibleOverflowList, setIsVisibleOverflowList] = useState(false);
    const { width }  = useWindowSize(); 

    const isMobile = width < 1000;

    useEffect(() => {
        const list = listRef?.current;
        
        const calculateVisible = () => {
            if (!list || isMobile) return;
            
            const listWidth = list.offsetWidth;
            const children = Array.from(list.children);
            
            let totalWidth = 0;
            let lastVisibleIndex = children.length - 1;
            
            for (let i = 0; i < children.length; i++) {
                totalWidth += children[i].offsetWidth + 32;
                if (totalWidth > listWidth) {
                    lastVisibleIndex = i - 1;
                    break;
                }
            }
            
            setVisibleLinks(links.slice(0, lastVisibleIndex + 1));
            setOverflowLinks(links.slice(lastVisibleIndex + 1));
            
            if (lastVisibleIndex < children.length - 1) {
                setIsMoreOptions(true);
            } else setIsMoreOptions(false);
        };
        
        const handleScroll = () => {
            if (!hideOnScroll) return;

            const scrolled = window.scrollY;

            if (scrolled > navbarHeight * 3 && !hideAfterScroll) {
                setHide(false);
            } else if (scrolled > navbarHeight) {
                setHide(true);
            } else setHide(false);
        };

        
        if (hideOnScroll) window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", calculateVisible);
        
        calculateVisible()

        return () => {
            window.removeEventListener("resize", calculateVisible);
            if (hideOnScroll) window.removeEventListener("scroll", handleScroll);
        };        

    }, [hideOnScroll, isMobile]);

    return(
        <header 
            className={`${styles.container} ${hide ? styles.hide : ""}`}>

            <nav className={styles.nav}>

                <div className={styles.wrapper}>
                    
                    <Link to="/home" className={styles.logo}>
                        <img className={styles.logoImg} src={logoImg} alt="logomarca" /> 
                        <p className={styles.logoNames}>
                            {/* {logoName}     */}
                        </p>
                    </Link>


                    {isMobile ?
                        <>
                        {isVisibleList ?
                            <div className={styles.navBurguer}>
                                <div className={styles.backgroudNavBurguer}>
                                    
                                    <button 
                                        className={`${styles.btnCloseBurguer} ${styles.btnBurguer}`} 
                                        onClick={ e => { setIsVisibleList(false) }}>
                                            <IoClose 
                                        /> </button>
                                    
                                    <ul className={styles.list}>
                                        {visibleLinks.map((link) => (
                                            <Link to={link.href}>
                                                {link.label}
                                            </Link>
                                        ))}
                                    </ul>
                                </div>

                            </div> 
                            : 
                            <button className={styles.btnBurguer} onClick={ e => { setIsVisibleList(true) } }> <RxHamburgerMenu /> </button>
                        }
                        </>
                    :
                        <ul className={styles.list} ref={listRef}>
                            {visibleLinks.map((link) => (
                                <Link to={link.href}>
                                    {link.label}
                                </Link>                        
                            ))}
                            {isMoreOptions && 
                                <div className={styles.dropdown}>
                                    <button className={styles.btnPlus} onClick={e => { setIsVisibleOverflowList(!isVisibleOverflowList) }}>
                                        <FaPlus /> 
                                    </button>
                                        {isVisibleOverflowList && (
                                            <ul className={styles.overflowList}>
                                                {overflowLinks.map(link  => (
                                                    <Link to={link.href}>{link.label}</Link>
                                                ))}
                                            </ul>
                                        )}

                                </div>
                            }
                        </ul>
                    }

                </div>

            </nav>
            
        </header>
    )
};