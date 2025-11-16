import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({
    fieldUnitOn = false,
    fieldTermOn = false
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

    return (
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
                <label htmlFor="phone">Número de telefone *</label>
                <input id="phone" type="tel" name="phone" placeholder="+55" required />
            </div>

            <div className={styles.group}>
                <label htmlFor="email">Seu e-mail *</label>
                <input id="email" type="email" name="email" required />
            </div>

            <div className={styles.group}>
                <label htmlFor="subject">Assunto *</label>
                <input id="subject" type="text" name="subject" required />
            </div>

            { fieldUnitOn && (
                <div className={styles.group}>
                    <label htmlFor="unit">Unidade *</label>
                    <select id="unit" name="unit" required>
                        <option value="">Selecione</option>
                        <option value="unidade1">Unidade 1</option>
                        <option value="unidade2">Unidade 2</option>
                    </select>
                </div>
            ) }
    
            <div className={`${styles.group} ${styles.menssagem}`}>
                <label htmlFor="message">Sua mensagem *</label>
                <textarea id="message" name="message" required rows="3" ></textarea>
            </div>

            { fieldTermOn && (
                <div className={styles.group}>
                    <label htmlFor="term">Concordo *</label>
                    <div className={styles.wrapperTerm}>
                        <input type="checkbox" name="term" id="term" />
                        <p>Ao preencher este formulário você concorda com o armazenamento e tratamento dos seus dados pela nossa equipe.</p>
                    </div>

                </div>
            ) }

            <div className={styles.wrapperButton}>
                <button type="submit">Enviar</button> 
                {validated && (
                    <p className={styles.errorMessage}>X Preencha o formulário corretamente.</p>
                )}
            </div>
        </form>
    )
}