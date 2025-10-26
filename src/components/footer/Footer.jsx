import { useState } from "react";
import styles from "./Footer.module.css";
import logoImg from '@/utils/assets/no_profile.png';
import instagramIcon from "@/utils/assets/instagram.png"
import whatsappIcon from "@/utils/assets/whatsapp.png";


export default function Footer({
    img = logoImg 
}) {

    const [inputValue, setInputValue] = useState(null);
    const handleClick = (e) => {
        const email = inputValue;
        if (!email) return;
    }

    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.redirections}>
                    <ul className={styles.list}>
                        <li>
                            <a href="/page">Unidades</a>
                        </li>
                        <li>
                            <a href="/events">Eventos</a>
                        </li>
                        <li>
                            <a href="/contact">Contato</a>
                        </li>
                        <li>
                            <a href="/menu">Cardápio</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.politycies}>
                    <ul className={styles.list}>
                        <li>
                            <a href="/wa.me/119991251902/trampo?">Trabalhe conosco</a>
                        </li>
                        <li>
                            <a href="/politica-privacidade">Política de privacidade</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.information}>
                    <p className={styles.label}>Apresentação</p>
                    <div className={styles.inputWrapper}>
                        <input 
                            className={styles.input} 
                            type="text" 
                            value={inputValue} 
                            onChange={e => { setInputValue(e.target.value)} } 
                            placeholder="Seu e-mail..."    
                            autoFocus
                        />
                        <button className={styles.button} onClick={e => { handleClick(e) }}>Inscrever</button>
                    </div>
                    <img className={styles.logo} src={img} alt="imagem" />
                </div>
                <div>
                    <ul className={styles.socialList}>
                        <li>
                            <a href="/instagram.com"><img src={instagramIcon} alt="" /></a>
                        </li>
                        <li>
                            <a href="/wa.me.com"><img src={whatsappIcon} alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};