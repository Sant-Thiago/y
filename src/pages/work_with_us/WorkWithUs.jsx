import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./WorkWithUs.module.css";
import companyImg from "@/utils/assets/company.jpeg";
import trabalheConoscoImg from "@/utils/assets/trabalhe_conosco.png";
import LilBanner from "../../components/lil_banner/LilBanner";


// essa tela tem que ter uma integração para enviar email

export default function WorkWithUs({
    img = companyImg,
    workWithUsImg = trabalheConoscoImg
}) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        // Verifica se o formulário é válido
        if (!form.checkValidity()) {
        e.stopPropagation();
        setValidated(true);
        } else {
        setValidated(false);
        alert("Formulário enviado com sucesso!");
        form.reset();
        }
    };

    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <LilBanner 
                    image={ img }
                    text={"Fale conosco"}
                />

                <section className={styles.wrapper}>
                    <h2>Dúvidas, críticas ou sugestões, entre em contato conosco.</h2>
                    <p>Para reservas, acesse a página Unidades e selecione a unidade mais próxima ou uma de sua escolha.</p>
                    
                    <form 
                        className={`${styles.form} ${validated ? styles.wasValidated : ""}`} 
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className={styles.group}>
                            <label htmlFor="name">Seu nome *</label>
                            <input id="name" type="text" name="name" required />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="phone">Número de telefone</label>
                            <input id="phone" type="tel" name="phone" placeholder="+55" />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="email">Seu e-mail *</label>
                            <input id="email" type="email" name="email" required />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="subject">Assunto *</label>
                            <input id="subject" type="text" name="subject" required />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="unit">Unidade *</label>
                            <select id="unit" name="unit" required>
                            <option value="">Selecione</option>
                            <option value="unidade1">Unidade 1</option>
                            <option value="unidade2">Unidade 2</option>
                            </select>
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="message">Sua mensagem *</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>

                        <div className={styles.wrapperButton}>
                            <button type="submit">Enviar</button> 
                            {validated && (
                                <p className={styles.errorMessage}>X Preencha o formulário corretamente.</p>
                            )}

                        </div>
                    </form>

                    <div className={styles.workWithUs}>
                        <h2>Trabalhe conosco</h2>
                        <div>
                            <img src={workWithUsImg} alt="trabalhe conosco" />
                        </div>
                        <p>Quer fazer parte do nosso time de campeões, clique no botão abaixo e faça sua inscrição para uma de nossas vagas disponíveis.</p>
                        <button>Quero me inscrever</button>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}