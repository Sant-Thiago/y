import { IoShareSocialOutline } from "react-icons/io5";
import styles from "./DishModal.module.css";
import { useEffect, useRef, useState } from "react";
import Toast from "../../toast/Toast";
import { handleShare, useModalHandlers, useToast } from "../../../hooks/useModalUtils";

export default function DishModal({ price, description, image, id, name, onClose }) {
    
    const { toastVisible, toastMsg, showToast, setToastVisible } = useToast();
    const { modalRef, translateY, transitionEnabled, visible, closing, animationDone, closeByDrag, handleMouseDown,  handleAnimationEnd, closeModal } = useModalHandlers(onClose);
    const onShare = () => handleShare({ id, name, description, showToast });

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
                onClick={onShare}  
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
