import { VscSettings } from "react-icons/vsc";
import styles from "./Menu.module.css";
import { IoClose } from "react-icons/io5";
import wineIcon from "@/utils/assets/wine.png";

export default function MenuNavbar({
    itens,
    selected,
    setSelected,
    showWineMenu,
    setShowWineMenu,
    filteredWines,
    handleClick,
    handleClickWine,
    navRef,
    isFixed,
    navHeight,
    data,
    ulRef,
    liRefs,
}) {



    return (
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
                        onClick={() => setShowWineMenu(!showWineMenu)}
                    >
                        <img src={wineIcon} alt="wine" />
                    </button>
                    {showWineMenu &&
                        <p>
                            Carta de Vinhos {data.name}  
                        </p>
                    }
                </div>
                {showWineMenu &&
                    <div className={styles.settingAndClose}>
                        <VscSettings 
                            className={styles.setting}
                            onClick={() => setFilterOpen(true)}
                        />
                        <IoClose 
                            onClick={() => setShowWineMenu(false)}
                        />
                    </div>
                }
            </div>
            {!showWineMenu && itens ? (
                <ul ref={ulRef} className={styles.navbar}>
                    {itens.map((it, idx) => (
                        <li 
                            key={idx}
                            ref={el => liRefs.current[idx] = el}
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
                    {filteredWines.map((it, idx) => (
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
    )
}