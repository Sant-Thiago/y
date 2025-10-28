import { useState } from "react";
import styles from "./Footer.module.css";
import logoImg from '@/utils/assets/no_profile.png';
import instagramIcon from "@/utils/assets/instagram.png"
import whatsappIcon from "@/utils/assets/whatsapp.png";
import { Link } from "react-router-dom";


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
                            <Link to="/unidades">Unidades</Link>
                        </li>
                        <li>
                            <Link to="/events">Eventos</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contato</Link>
                        </li>
                        <li>
                            <Link to="/menu">Cardápio</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.politycies}>
                    <ul className={styles.list}>
                        <li>
                            <Link to="/trabalhe-conosco">Trabalhe conosco</Link>
                        </li>
                        <li>
                            <Link to="/politica-privacidade">Política de privacidade</Link>
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
                        />
                        <button className={styles.button} onClick={e => { handleClick(e) }}>Inscrever</button>
                    </div>
                    <img className={styles.logo} src={img} alt="imagem" />
                </div>
                <div>
                    <ul className={styles.socialList}>
                        <li>
                            <Link to="/instagram.com"><img src={instagramIcon} alt="" /></Link>
                        </li>
                        <li>
                            <Link to="/wa.me.com"><img src={whatsappIcon} alt="" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};