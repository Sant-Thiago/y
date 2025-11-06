import { IoClose, IoShareSocialOutline } from "react-icons/io5";
import styles from "./FilterModal.module.css";
import { useEffect, useRef, useState } from "react";
import Toast from "../../toast/Toast";
import { FaFlag, FaMapMarkerAlt } from "react-icons/fa";
import { GiGrapes, GiWineGlass } from "react-icons/gi";
import { MdWaterDrop } from "react-icons/md";
import { handleShare, useModalHandlers, useToast } from "../../../hooks/useModalUtils";
import ReactCountryFlag from "react-country-flag";

export default function FilterModal({
    contries, 
    types, 
    grapes,
    volumes,
    priceRange,
    onClose
}) {
    
    const { toastVisible, toastMsg, showToast, setToastVisible } = useToast();
    const { modalRef, translateY, transitionEnabled, visible, closing, animationDone, closeByDrag, handleMouseDown,  handleAnimationEnd, closeModal } = useModalHandlers(onClose);
    const onShare = () => handleShare({ id, name, description, showToast });

    const listContriesRef = useRef(null);
    const listTypesRef = useRef(null);
    
    const [visibleContries, setVisibleContries] = useState(contries);
    const [isSeeAllCountries, setIsSeeAllCountries] = useState(null);
    
    const [visibleTypes, setVisibleTypes] = useState(types);
    const [isSeeAllTypes, setIsSeeAllTypes] = useState(null);

    const [filterValue, setFilterValue] = useState("");


    
    useEffect(() => {
        const calculateVisible = (list, setVisible, itens, setIsSeeAllItens) => {
            if (!list) return;
            
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
            
            setVisible(itens.slice(0, lastVisibleIndex + 1));
            
            if (lastVisibleIndex < children.length - 1) {
                setIsSeeAllItens(true);
            } else setIsSeeAllItens(false);
        };
        
        window.addEventListener("resize", calculateVisible);
        
        calculateVisible(
            listContriesRef?.current,
            setVisibleContries,
            contries,
            setIsSeeAllCountries
        );

        calculateVisible(
            listTypesRef?.current,
            setVisibleTypes,
            types,
            setIsSeeAllTypes
        );

        return () => {
            window.removeEventListener("resize", calculateVisible);
        }
    },[])

  return (
    <div className={`${styles.container} ${visible ? styles.show : styles.hide}`}>
      <div
        className={`
            ${styles.modalWrapper} 
            ${closing && !closeByDrag ? styles.animateBottomOut : ""}
            ${!animationDone && !closing ? styles.animateBottomIn : ""}
        `}
        style={{
            transform: `translateY(${translateY}px)`,
            transition: transitionEnabled ? "transform 0.6s ease" : "none",
        }}
        ref={modalRef}
        onMouseDown={handleMouseDown}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.modalHandle} onMouseDown={handleMouseDown}></div>

        <div className={styles.modal}>
            <div className={styles.headerModal}>
                <p>Filtro</p>
                <IoClose 
                    onClick={onClose}
                    className={styles.buttonclose}
                />
            </div>
            <input 
                type="text" 
                value={filterValue} 
                onChange={e => setFilterValue(e.target.value)}
                placeholder="Pesquisar vinho"
                className={styles.input}
            />
            <div className={styles.wrapper}>
                <div>
                    <p>País</p>
                    {isSeeAllCountries && <button>Ver todos</button>}
                </div>
                <ul ref={listContriesRef}>
                    {contries && visibleContries.map((it, idx) => (
                        <li key={idx}>
                            <ReactCountryFlag 
                                svg
                                countryCode={it.code} 
                                className={styles.countryIcon}
                            />
                            {it.name}
                        </li>
                    ))
                }
                </ul>
            </div>
            <div className={styles.wrapper}>
                <div>
                    <p>Tipo</p>
                    {isSeeAllTypes && <button>Ver todos</button>}
                </div>
                <ul ref={listTypesRef}>
                    {types && visibleTypes.map((it, idx) => (
                        <li key={idx}>
                            {/* <ReactCountryFlag 
                                svg
                                countryCode={it.code} 
                                className={styles.countryIcon}
                            /> */}
                            {it}
                        </li>
                    ))
                }
                </ul>
            </div>
            <div className={styles.wrapperAdvanced}>
                <button>Busca avançada</button>
            </div>
            <div className={styles.wrapperButtons}>
                <button className={styles.buttonClear}>Limpar filtros</button>
                <button className={styles.buttonFilter}>Filtrar</button>
            </div>

        </div>
      </div>
    </div>
  );
}
