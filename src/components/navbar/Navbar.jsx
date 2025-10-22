import styles from './Navbar.module.css';
import logoImg from '../../../src/assets/no_profile.png';
import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { FaCross, FaPlus } from 'react-icons/fa6';

export default function Navbar({
    logoName = "logoName"
}) {
    
    const links = [
        { href: "#home", label: "Início" },
        { href: "#location", label: "Localização" },
        { href: "#menu", label: "Cardápio" },
        { href: "#reserve", label: "Reservas" },
        { href: "#event", label: "Eventos" },
        { href: "#aboutUs", label: "Nossa História" },
        { href: "#contact", label: "Contato" }
    ];

    const listRef = useRef(null);
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
            if (!list) return;
            if (isMobile) return;

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

        calculateVisible()
        window.addEventListener("resize", calculateVisible);
        return () => window.removeEventListener("resize", calculateVisible);        

    }, []);

    return(
        <header className={styles.container}>

            <nav className={styles.nav}>

                <div className={styles.wrapper}>
                    
                    <div className={styles.logo}>
                        <img className={styles.logoImg} src={logoImg} alt="logomarca" /> 
                        <p className={styles.logoNames}>
                            {/* {logoName}     */}
                        </p>
                    </div>


                    {isMobile ?
                        <>
                        {isVisibleList ?
                            <div className={styles.navBurguer}>
                                
                                <button className={styles.btnBurguer} onClick={ e => { setIsVisibleList(false) }}> x </button>
                                
                                <ul className={styles.list}>
                                    {visibleLinks.map((link) => (
                                        <a href={link.href}>
                                            {link.label}
                                        </a>                        
                                    ))}
                                </ul>

                            </div> 
                            : 
                            <button className={styles.btnBurguer} onClick={ e => { setIsVisibleList(true) } }> here </button>
                        }
                        </>
                    :
                        <ul className={styles.list} ref={listRef}>
                            {visibleLinks.map((link) => (
                                <a href={link.href}>
                                    {link.label}
                                </a>                        
                            ))}
                            {isMoreOptions && 
                                <div className={styles.dropdown}>
                                    <button className={styles.btnPlus} onClick={e => { setIsVisibleOverflowList(!isVisibleOverflowList) }}>
                                        <FaPlus /> 
                                    </button>
                                        {isVisibleOverflowList && (
                                            <ul className={styles.overflowList}>
                                                {overflowLinks.map(link  => (
                                                    <a href={link.href}>{link.label}</a>
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