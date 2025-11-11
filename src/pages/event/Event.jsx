import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import banenrImage from "@/utils/assets/banner_image.jpeg"
import styles from "./Event.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import useWindowSize from "../../hooks/useWindowSize";


export default function Event({
    name = "EmpresaX",
    image = banenrImage,
    options = {
        "São Paulo": [
            { link: "/unidades/sao-paulo", value: "São Paulo" },
            { link: "/unidades/iguatemi", value: "Iguatemi" },
            { link: "/unidades/campinas", value: "Campinas" },
        ],
        "Rio de Janeiro": [
            { link: "/unidades/rio-de-janeiro", value: "Rio de Janeiro" },
            { link: "/unidades/niteroi", value: "Niterói" },
        ],
    }
}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isVisibleList, setIsVisibleList] = useState(false)
    const { width }  = useWindowSize(); 
    const quantity = '4 a 10';

    const sortOptionsbyCity = (options) => {
        const sortedOptions = {};

        Object.entries(options).forEach(([estado, cidades]) => {
            const sortedCidades = cidades.sort((a, b) => a.value.localeCompare(b.value));
            sortedOptions[estado] = sortedCidades;
        });

        return sortedOptions;
    }

    const imagesFoods = [banenrImage, banenrImage, banenrImage, banenrImage];
    const imagesSaloon = [banenrImage, banenrImage, banenrImage];

    const isMobile = width < 1000;

    const sortedOptions = sortOptionsbyCity(options);

    const handleChange = (e) => {
        const option = e.target.value;
        
        setSelectedOption(option);

        // Implement navigation or other logic here
        console.log(option);
        
    }

    return (
        <>
            {!selectedOption ? (
                <Navbar />
            ) : (
                <header className={styles.header}>
                {isMobile ? (
                    <button className={styles.btnBurguer} onClick={ e => { setIsVisibleList(true) } }> 
                        <RxHamburgerMenu /> 
                    </button>
                ) : (
                    <nav className={styles.navWrapper}>
                        <div>
                            <p>Inicio</p>
                        </div>
                        <div>
                            <p>Salões e Capacidades</p>
                        </div>
                        <div>
                            <p>Diferenciais</p>
                        </div>
                        <div>
                            <p>Quem Somos</p>
                        </div>
                    </nav>
                )}
                </header>
            )}
            <main className={styles.container}> 
                {!selectedOption ? (
                    <>
                        <div className={styles.wrapper}>
                            <div className={styles.wrapperImage}>
                                <img src={image} alt="" />
                            </div>
                            <div className={styles.wrapperInfo}>
                                <h2>Eventos Corporativos</h2>
                                <p>
                                    Reuniões externas entre empresas e profissionais são bastante comuns.
                                    Sendo assim, há necessidade de um espaço amplo e confortável para
                                    realização de diversas atividades que contribuem para o desenvolvimento
                                    corporativo. Conte com a estrutura dos restaurantes {name} para conceder
                                    eventos com o que há de melhor em culinária para seus funcionários,
                                    parceiros e convidados.
                                </p>
                                <select
                                    className={styles.select}
                                    onChange={handleChange}
                                >
                                    <option defaultChecked>Selecione a unidade</option>
                                    {Object.entries(sortedOptions).map(([state, cities]) => (
                                        <optgroup key={state} label={state}>
                                            {cities.map((city, idx) => (
                                                <option key={idx} value={city.value} >
                                                    {city.value}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.wrapperImage}>
                                <img src={image} alt="" />
                            </div>
                            <div className={styles.wrapperInfo}>
                                <h2>Confraternizações</h2>
                                <p>
                                    Sabe aqueles momentos entre amigos e/ou familiares que ficam guardados na 
                                    memória? Pois é, muitos deles ocorrem aqui no {name}. Com um espaço acolhedor 
                                    e uma culinária praticamente perfeita em sabor, fica difícil esquecer. Traga 
                                    sua confraternização para um de nossos restaurantes. Sinta a verdadeira alegria 
                                    e tenha ótimas recordações.
                                </p>
                                <select
                                    className={styles.select}
                                    onChange={handleChange}
                                >
                                    <option defaultChecked>Selecione a unidade</option>
                                    {Object.entries(sortedOptions).map(([state, cities]) => (
                                        <optgroup key={state} label={state}>
                                            {cities.map((city, idx) => (
                                                <option key={idx} value={city.value} >
                                                    {city.value}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.wrapperInfo}>
                                <h2>Aniversários</h2>
                                <p>
                                    A comemoração da chegada de mais um ano para viver, com certeza, é digna de uma 
                                    grande festa. E para acompanhá-la, além de um espaço requintado e confortável, 
                                    nada melhor que as delícias dos pratos {name}. Nossos restaurantes estão 
                                    plenamente disponíveis para receber o aniversariante e seus convidados para, 
                                    juntos, realizarmos um evento inesquecível.
                                </p>
                                <select
                                    className={styles.select}
                                    onChange={handleChange}
                                >
                                    <option defaultChecked>Selecione a unidade</option>
                                    {Object.entries(sortedOptions).map(([state, cities]) => (
                                        <optgroup key={state} label={state}>
                                            {cities.map((city, idx) => (
                                                <option key={idx} value={city.value} >
                                                    {city.value}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.wrapperImage}>
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div className={styles.wrapper}>
                            <div className={styles.wrapperImage}>
                                <img src={image} alt="" />
                            </div>
                            <div className={styles.wrapperInfo}>
                                <h2>Casamentos</h2>
                                <p>
                                    Em uma festa de matrimônio refinada, um buffet sofisticado, com entradas, pratos 
                                    principais e sobremesas de sabor ímpar, é algo imprescindível. Portanto, o 
                                    {name} está ao seu lado no objetivo de deixar o casal e seus convidados plenamente 
                                    satisfeitos. Realize sua festa de casamento em um dos nossos restaurantes e conceda 
                                    a todos os presentes uma experiência que irá engrandecer ainda mais este momento 
                                    tão especial.
                                </p>
                                <select
                                    className={styles.select}
                                    onChange={handleChange}
                                >
                                    <option defaultChecked>Selecione a unidade</option>
                                    {Object.entries(sortedOptions).map(([state, cities]) => (
                                        <optgroup key={state} label={state}>
                                            {cities.map((city, idx) => (
                                                <option key={idx} value={city.value} >
                                                    {city.value}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </>   
                ) : (
                    <>
                        <section 
                            className={styles.wrapperInfoOrcamento}
                            style={{ backgroundImage: `url(${banenrImage})` }}    
                        >
                            <div className={styles.background}></div>
                            
                            <div className={styles.infoOrcamento}>
                                <div className={styles.title}>
                                    <h1>{name}</h1>
                                    <p>{selectedOption}</p>
                                </div>
                                <div className={styles.text}>
                                    <h2>
                                        Eventos com qualidade que você e seus convidados merecem
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
                                        Ao enviar seus dados, você concorda com nossa <Link to="/politica-privacidade" className={styles.linkPrivacyPolicy}>
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
                        <section>
                            <div>
                                <h2>Conhela nossos pacotes</h2>
                            </div>
                            <div>
                                <div>
                                    <p>Sala vip</p>
                                </div>
                                <div>
                                    <p>Geral</p>
                                </div>
                                <div>
                                    <p>Casamento</p>
                                </div>
                                <div>
                                    <p>Aniversário</p>
                                </div>
                            </div>
                            <div>
                                <h2>O sabor sem igual do nosso cardápio</h2>
                            </div>
                            <div>
                                {imagesFoods.map((img, idx) => 
                                    <div 
                                        key={idx}
                                        className={styles.image}
                                    >
                                        <img src={img} alt="" />
                                    </div>    
                                )}
                            </div>
                            <div>
                                <p>
                                    Cardápio completo com frutos do mar, carnes, aves e sobremesas incríveis, 
                                    que reúnem o melhor da gastronomia nacional.
                                    Para brindar, uma adega com vinhos tintos, brancos, rosés e espumantes, 
                                    além dos rótulos exclusivos {name}.
                                </p>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h3>Seu evento no {name} - {selectedOption}</h3>
                                <div>
                                    <p> 
                                        Nossos espaços contam com TVs, telões, projetores e música ambiente,
                                        além de uma excelente acústica.
                                    </p>
                                    <p>
                                        Também oferecemos coquetel volante, coffee-break, serviço à inglesa 
                                        e binquedoteca.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h3>Conheça nossos salões</h3>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <img src="" alt="" />
                                    </div>
                                    <div>
                                        <h3>Salão {selectedOption}</h3>
                                        <p>X Pessoas</p>
                                    </div>
                                    <div>
                                        <p>
                                            Fazemos eventos de x lugares, salão compartilhado com o público 
                                            do restaurante. 
                                            Disponível na quinta e sexta no almoço e de quinta a sábado no 
                                            jantar.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={image} alt="" />
                                    </div>
                                    <div>
                                        <h3>Salão Varanda</h3>
                                        <p>X Pessoas</p>
                                    </div>
                                    <div>
                                        <p>
                                            Fazemos eventos de 20 a 70 lugares, salão compartilhado com o 
                                            público do restaurante. Salão exclusivo para eventos acima de 70 
                                            pessoas com capacidade máxima de 150 pessoas.
                                            Disponível na quinta e sexta no almoço e de quinta a sábado no 
                                            jantar.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <img src={image} alt="" />
                                    </div>
                                    <div>
                                        <h3>Salão Parquinho</h3>
                                        <p>X Pessoas</p>
                                    </div>
                                    <div>
                                        <p>
                                            Fazemos eventos de 20 a 50 lugares, salão compartilhado com o 
                                            público do restaurante.
                                            Disponível na quinta e sexta no almoço e de quinta a sábado no 
                                            jantar.
                                            Salão não climatizado
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h2>Diferenciais Exclusivos</h2>
                                <p>Pensando em sua comodiadade, nossos espaços oferecem:</p>
                            </div>
                            <div>
                                <div>
                                    <img src={image} alt="" />
                                </div>
                                <p>Estacionamento Amplo e Seguro</p>
                            </div>
                            <div>
                                <div>
                                    <img src={image} alt="" />
                                </div>
                                <p>Brinquedoteca</p>
                            </div>
                            <div>
                                <div>
                                    <img src={image} alt="" />
                                </div>
                                <p>Gerador de Energia Próprio</p>
                            </div>
                        </section>
                        <section>
                            <div>
                                <h2>Saiba mais sobre o {name}</h2>
                            </div>
                            <div>
                                <p>
                                    {name} - {selectedOption} possui belíssima e moderna arquitetura, cardápio 
                                    especializado em frutos do mar, adega climatizada com mais de 2000 mil garrafas.
                                </p>
                                <p>    
                                    Os salões para eventos do {name} têm capacidade para receber até 150 pessoas 
                                    simultaneamente. Nosso cardápio completo contempla frutos do mar, carnes, aves e 
                                    sobremesas incríveis, reunindo o melhor da gastronomia nacional. Para brindar, 
                                    uma adega com vinhos tintos, brancos, rosés e espumantes, além dos rótulos 
                                    exclusivos {name}.     
                                </p>
                                <p>
                                    Cada espaço possui sistema de som, microfone e projetores individualizados, 
                                    contando com um isolamento acústico perfeito e permitindo um evento exclusivo para 
                                    cada ocasião. Além disso, temos uma brinquedoteca fantástica, com várias atrações 
                                    para garantir a diversão dos pequenos.
                                </p>
                                <p>
                                    Aqui os convidados também encontram um amplo estacionamento.
                                </p>
                                <p>
                                    {name}, o lugar perfeito para momentos inesquecíveis!
                                </p>
                            </div>
                        </section>
                    </>
                )}
            </main>
            <Footer />
        </>
    )
}