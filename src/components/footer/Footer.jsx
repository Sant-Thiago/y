import { useState } from "react";
import styles from "./Footer.module.css";
import logoImg from '@/utils/assets/no_profile.png';
import instagramIcon from "@/utils/assets/instagram.png"
import whatsappIcon from "@/utils/assets/whatsapp.png";
import { Link, useParams } from "react-router-dom";
import { companies } from "../../data/Companies";


export default function Footer() {

    const { empresa } = useParams();
    const data = companies[empresa];
    const img = data.logo;

    const [inputValue, setInputValue] = useState(null);
    
    const handleClick = (e) => {
        const email = inputValue;
        if (!email) return;
    }

    const themeColor = data.themeColor;
    themeColor && document.documentElement.style.setProperty("--redColor", themeColor) 

    return (
        <footer className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperText}>
                    <div className={styles.redirections}>
                        <ul className={styles.list}>
                            <li>
                                <Link to={`/${empresa}/unidades`}>Unidades</Link>
                            </li>
                            <li>
                                <Link to={`/${empresa}/eventos`}>Eventos</Link>
                            </li>
                            <li>
                                <Link to={`/${empresa}/contato`}>Contato</Link>
                            </li>
                            <li>
                                <Link to={`/${empresa}/cardapio`}>Cardápio</Link>
                            </li>
                        </ul>
                    {/* </div> */}
                    {/* <div className={styles.politycies}> */}
                        <ul className={styles.list}>
                            {/* <li>
                                <Link to="/contato">Trabalhe conosco</Link>
                            </li> */}
                            <li>
                                <Link to={`/${empresa}/politica-privacidade`}>Política de privacidade</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.information}>
                        <label htmlFor="apresentacao" className={styles.label}>Apresentação</label>
                        <div className={styles.inputWrapper}>
                            <input
                                id="apresentacao"
                                className={styles.input}
                                type="text"
                                value={inputValue}
                                onChange={e => { setInputValue(e.target.value)} }
                                placeholder="Seu e-mail..."
                            />
                            <button className={styles.button} onClick={e => { handleClick(e) }}>Inscrever</button>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapperImageAndSocial}>
                    <img className={styles.logo} src={img} alt="imagem" />
                    <ul className={styles.socialList}>
                        <li>
                            <Link 
                                to={data.links.instagram} 
                                target="_blank"
                            >
                                <img src={instagramIcon} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link to={data.links.whatsapp}
                                target="_blank"
                            >
                                <img src={whatsappIcon} alt="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};