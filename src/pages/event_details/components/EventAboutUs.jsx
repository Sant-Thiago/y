import styles from "./EventAboutUs.module.css";

export default function EventAboutUs({
    name,
}) {
    return (
        <section 
            id="quemsomos"
            className={styles.aboutUs}
        >
            <div className={styles.title}>
                <h2>Saiba mais sobre a {name}</h2>
            </div>
            <div className={styles.wrapperText}>
                <p>
                    O Casa Pellegrini é um restaurante tradicional de Petrópolis, conhecido 
                    pela combinação entre boa comida, ambiente acolhedor e um atendimento 
                    que valoriza cada cliente. Nosso cardápio reúne os pratos que fazem parte 
                    da identidade da casa: hambúrgueres artesanais, sanduíches especiais, 
                    porções variadas, massas e opções clássicas pensadas para todos os gostos. 
                    Cada preparo é feito com ingredientes selecionados e foco total na qualidade.
                </p>
                <p>    
                    Com um clima descontraído e moderno, o Casa Pellegrini se tornou ponto de encontro 
                    para quem busca sabor, conforto e uma experiência gastronômica leve e marcante. 
                    Aqui, cada visita é uma oportunidade de aproveitar boas refeições, bons momentos 
                    e a essência do que mais gostamos de oferecer: comida bem feita e hospitalidade 
                    de verdade.     
                </p>
                <p>
                    {name}, o lugar perfeito para momentos inesquecíveis!
                </p>
            </div>
        </section>
    )
}