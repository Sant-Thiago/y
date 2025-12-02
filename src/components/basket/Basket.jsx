import { BsCartCheck } from "react-icons/bs";
import { useCart } from "../../context/CartContext";
import styles from "./Basket.module.css";
import { useEffect, useRef, useState } from "react";
import BasketButton from "./BasketButton";
import { IoIosArrowBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Basket({data}) {

    const { items, clearCart } = useCart();

    const [isOpen, setIsOpen] = useState();

    const modalRef = useRef();

    const handleClickOutside = e => {
        if (modalRef.current && !modalRef.current.contains(e.target)) setIsOpen(false);
    };

    useEffect(() => {

        const overflowProperties= {
            body: document.body.style.overflow,
            html: document.documentElement.style.overflow
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        }
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = overflowProperties.body;
            document.documentElement.style.overflow = overflowProperties.html;
        };
    }, [isOpen]);

    const handleFinishOrder = () => {
        let message = "Olá, tudo bem? Gostaria de fazer esse pedido:\n";
        message += items
            .map(item => `${item.name} ${item.price.formatted} x ${item.quantity}`)
            .join('\n');

        const encodedMessage = encodeURIComponent(message);
        
        const whatsappLink = `https://wa.me/55${data.units[0].phone.value}?text=${encodedMessage}`;
        window.open(whatsappLink, "_blank");

        clearCart();
        setIsOpen(false);
        window.scrollTo(0, 0); 
    }

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (items.length > 0) {
            const total = items.reduce((acc, it) => acc + it.price.value * it.quantity, 0);
            setTotal(total);
        }
    }, [items]);


    return (
        <div className={styles.container}>
            {isOpen ? 

                <div className={styles.background}>
                    <div 
                        className={styles.modal}
                        ref={modalRef}
                    >
                        <div className={styles.header}>
                            <div>
                                <h2>Meu Pedido</h2>
                                <p>Total - {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                            </div>
                            <IoClose  className={styles.backIcon} onClick={() => setIsOpen(false) }/>                            
                        </div>

                        <div className={styles.wrapperItems}>
                            {items.map(it => (
                                <div className={styles.cardItem}>
                                    <div className={styles.wrapperImage}>
                                        <img src={it.image} alt="comida" />
                                    </div>
                                    <div className={styles.wrapperText}>
                                        <h3 className={styles.title}>{it.name} {it.measure?.formatted}</h3>
                                        {/* <div className={styles.infos}> */}
                                            <p className={styles.price}>
                                                {it.price.formatted}
                                            </p>
                                            <p className={styles.quantity}>
                                                Quantidade: {it.quantity}
                                            </p>
                                            <p className={styles.total}>
                                                Total: {(it.price.value * it.quantity).toLocaleString("pt-BR", {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    }
                                                )} 
                                            </p>
                                        {/* </div> */}

                                    </div>
                                </div>    
                            ))}
                        </div>
                        <div className={styles.wrapperButton}>
                            <button className={styles.button} onClick={handleFinishOrder}>
                                Finalizar Pedido
                            </button>
                        </div>
                        
                    </div>

                </div>
            : 
                <BasketButton
                    openModal={setIsOpen}
                />
            }
        </div>
    )
}