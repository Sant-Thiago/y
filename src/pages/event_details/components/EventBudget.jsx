import styles from "./EventBudget.module.css";
import defaultImage from "@/utils/assets/banner_image.jpeg"
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDate, formatPhone, validateEmail } from "../../../hooks/useInputUtils";

export default function EventOrcamento({ name, selectedOption }) {
    const [dateValue, setDateValue] = useState("");
    const [numberValue, setNumberValue] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("+55 ");
    const [emailValue, setEmailValue] = useState("");
    const [textareaValue, setTextareaValue] = useState("");
    const [verificationValue, setVerificationValue] = useState("");
    
    const quantity = "4 a 10";

    const handleSelect = (e) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !dateValue ||
            !numberValue ||
            !nameValue ||
            !emailValue ||
            !phoneValue ||
            !textareaValue ||
            !verificationValue
        ) {
            alert("Preencha todos os campos.");
            return;
        }

        if (!validateEmail(emailValue)) {
            alert("Digite um email válido.");
            return;
        }

        if (phoneValue.replace(/\D/g, "").length < 13) {
            alert("Digite um telefone válido.");
            return;
        }

        alert("Tudo certo! Pode enviar.");
    };


  return (
    <section 
        id="inicio"
        className={styles.backgroundInfoOrcamento}
        style={{ backgroundImage: `url(${defaultImage})` }}    
    >
        <div className={styles.background}></div>
        
        <div className={styles.wrapperInfoOrcamento}> 
            <div className={styles.infoOrcamento}>
                <div className={styles.title}>
                    <h1>{name}</h1>
                    <p>{selectedOption}</p>
                </div>
                <div className={styles.text}>
                    <h2>
                        Eventos com a qualidade que você e seus convidados merecem
                    </h2>
                    <div className={styles.orcamento}>
                        <div className={styles.round}>
                            <p> 
                                A partir de <b>
                                    R$ <span className={styles.price}>80</span>.90
                                </b> Por pessoa
                            </p>
                        </div>
                        <div className={styles.textInfo}>
                            <p>Espaços amplos, com capacidade para receber de {quantity} pessoas</p>
                            <p>Salões equipados com isolamento acústico, ar-condicionado, sistema de som, projetores e microfones.</p>
                            <p>Formatos personalizados: coquetel volante, serviço à inglesa.</p>
                            <p>Privacidade: ambientes climatizados e ao ar livre.</p>
                        </div>
                    </div>
                    <p className={styles.policy}>
                        Ao enviar seus dados, você concorda com nossa <br />
                        <Link to="/politica-privacidade" className={styles.linkPrivacyPolicy}>
                            Politica de Privacidade
                        </Link>
                    </p>
                </div>
            </div>
            <div className={styles.wrapperInfoInput}>
                <div className={styles.title}>
                    <h3>Fale com nossos especialistas!</h3>
                    <p>Preencha o formulário e aguarde nosso contato.</p>
                </div>
                <div className={styles.wrapperInput}>
                    <div className={styles.field}>
                        <label htmlFor="tipoEvento">Tipo de Evento*</label>
                        <select id="tipoEvento" className={styles.input} onChange={e => setEventType(e.target.value)}>
                            <option>Selecione</option>
                            <option value={"Noivado/Casamento"}>Noivado/Casamento</option>
                            <option value={"Evento Corporativo"}>Evento Corporativo (Privado ou Público)</option>
                            <option value={"Aniversário ou Comemoração"}>Aniversário ou Comemoração</option>
                            <option value={"Confraternização de Trabalho"}>Confraternização de Trabalho</option>
                            <option value={"Formatura"}>Formatura</option>
                            <option value={"Outro"}>Outro</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="refeicao">Almoço ou Jantar*</label>
                        <select id="refeicao" className={styles.input} onChange={handleSelect}>
                            <option>Selecione</option>
                            <option value={"Almoço"}>Almoço</option>
                            <option value={"Jantar"}>Jantar</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="dataEvento">Data do Evento ex.: 00/00/0000*</label>
                        <input id="dataEvento" type="text" className={styles.input} placeholder="00/00/0000" value={dateValue} onChange={e => setDateValue(formatDate(e.target.value))} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="convidados">Nº de convidados*</label>
                        <input id="convidados" type="number" className={styles.input} value={numberValue} onChange={e => setNumberValue(e.target.value)}/>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="nome">Nome*</label>
                        <input id="nome" type="text" className={styles.input} value={nameValue} onChange={e => setNameValue(e.target.value)}/>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="email">Email*</label>
                        <input id="email" type="email" className={styles.input} value={emailValue} onChange={e => setEmailValue(e.target.value)} />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="telefone">Telefone*</label>
                        <input 
                            id="telefone" 
                            type="tel" 
                            className={styles.input} 
                            value={phoneValue} 
                            placeholder="(xx) xxxxx-xxxx"
                            onChange={setPhoneValue(formatPhone(valueInput))}
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="particularidades">Particularidade do seu Evento</label>
                        <textarea id="particularidades" className={styles.textarea} rows="2" value={textareaValue} onChange={e => setTextareaValue(e.target.value)}></textarea>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="verificacao">7 + 9 = ?</label>
                        <input id="verificacao" type="text" className={styles.input} value={verificationValue} onChange={e => setVerificationValue(e.target.value)}/>
                    </div>

                    <button className={styles.button} onClick={handleSubmit}>Receber Orçamento</button>
                </div>
            </div>
        </div>
    </section>
  );
}
