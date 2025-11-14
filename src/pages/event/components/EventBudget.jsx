import styles from "./EventBudget.module.css";
import defaultImage from "@/utils/assets/banner_image.jpeg"
import { Link } from "react-router-dom";

export default function EventOrcamento({ name, selectedOption }) {
  const quantity = "4 a 10";

  return (
    <section 
        id="inicio"
        className={styles.wrapperInfoOrcamento}
        style={{ backgroundImage: `url(${defaultImage})` }}    
    >
        <div className={styles.background}></div>
        
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
                    <select id="tipoEvento" className={styles.input}>
                        <option>Selecione</option>
                        <option>Noivado/Casamento</option>
                        <option>Evento Corporativo (Privado ou Público)</option>
                        <option>Aniversário ou Comemoração</option>
                        <option>Confraternização de Trabalho</option>
                        <option>Formatura</option>
                        <option>Outro</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label htmlFor="refeicao">Almoço ou Jantar*</label>
                    <select id="refeicao" className={styles.input}>
                        <option>Selecione</option>
                        <option>Almoço</option>
                        <option>Jantar</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label htmlFor="dataEvento">Data do Evento ex.: 00/00/0000*</label>
                    <input id="dataEvento" type="text" className={styles.input} placeholder="00/00/0000" />
                </div>

                <div className={styles.field}>
                    <label htmlFor="convidados">Nº de convidados*</label>
                    <input id="convidados" type="number" className={styles.input} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="nome">Nome*</label>
                    <input id="nome" type="text" className={styles.input} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="email">Email*</label>
                    <input id="email" type="email" className={styles.input} />
                </div>

                <div className={styles.field}>
                    <label htmlFor="telefone">Telefone*</label>
                    <input id="telefone" type="tel" className={styles.input} value={"+55"} placeholder="(xx) xxxxx-xxxx" />
                </div>

                <div className={styles.field}>
                    <label htmlFor="particularidades">Particularidade do seu Evento</label>
                    <textarea id="particularidades" className={styles.textarea} rows="2"></textarea>
                </div>

                <div className={styles.field}>
                    <label htmlFor="verificacao">7 + 9 = ?</label>
                    <input id="verificacao" type="text" className={styles.input} />
                </div>

                <button className={styles.button}>Receber Orçamento</button>
            </div>
        </div>
    </section>
  );
}
