import { IoShareSocialOutline } from "react-icons/io5";
import styles from "./DishModal.module.css";
import { useEffect, useRef, useState } from "react";
import Toast from "../../toast/Toast";

export default function DishModal({ price, description, image, id, name, onClose }) {
    const modalRef = useRef(null);
    const [translateY, setTranslateY] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(false);
    const [modalHeight, setModalHeight] = useState(0);
    
    const [visible, setVisible] = useState(false);
    const [closing, setClosing] = useState(false);
    const [animationDone, setAnimationDone] = useState(false);
    const [closeByDrag, setCloseByDrag] = useState(false)

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMsg, setToastMsg] = useState("");


    const showToast = (msg) => {
      setToastMsg(msg);
      setToastVisible(true);

      setTimeout(() => {
        setToastVisible(false);
      }, 1500)
    }

    const closeModal = () => {
        setTransitionEnabled(true);
        setTranslateY(modalHeight);
        setClosing(true);

        setTimeout(() => onClose?.(), 600);
    };

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) closeModal();
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        const startY = e.clientY;

        const handleMouseMove = (e) => {
            const diff = e.clientY - startY;
            setTranslateY(diff > 0 ? diff : 0); // só desce
        };

        const handleMouseUp = (e) => {
            const diff = e.clientY - startY;
            if (diff > modalHeight * 0.3) {
                setCloseByDrag(true);
                closeModal();
            }
            else {
              setTranslateY(0);
              setCloseByDrag(false);
            }

            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
    };

    const handleAnimationEnd = () => {
        setAnimationDone(true);
    }

    const handleShare = async () => {
      const url = window.location.origin + "/cardapio?dish=" + id;

      if (navigator.share) {
        try {
          await navigator.share({
            title: name,
            text: description,
            url,
          });
          showToast("Link compartilhado com sucesso!");
        } catch {}
      } else {
        try {
          await navigator.clipboard.writeText(url);
          showToast("Link copiado para a área de transferência!");
        } catch {
          showToast("Erro ao copiar link.");
        }
      }
    };

    useEffect(() => {
        setVisible(true);
        
        if (modalRef.current) setModalHeight(modalRef.current.offsetHeight);

        document.addEventListener("mousedown", handleClickOutside);

        const originalStyle = {
            body: window.getComputedStyle(document.body).overflow,
            html: window.getComputedStyle(document.documentElement).overflow,
        };
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalStyle.body;
            document.documentElement.style.overflow = originalStyle.html;
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [translateY]);

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
          <div className={styles.wrapperImage}>
            <img src={image} alt="comida" draggable={false} />
          </div>
          <div className={styles.wrapperInfo}>
            <div className={styles.wrapperTitle}>
              <h3>{name}</h3>
              <IoShareSocialOutline 
                size={24} 
                color="gray" 
                className={styles.share} 
                onClick={handleShare}  
              />
            </div>
            <p className={styles.price}>
              {price?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </p>
            <p className={styles.description}>{description}</p>
            <p className={styles.code}>Cód: {id}</p>
          </div>
          <Toast
            message={toastMsg}
            visible={toastVisible}
            onClose={() => setToastVisible(false)}
          />
        </div>
      </div>
    </div>
  );
}
