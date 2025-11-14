import styles from "./EventAboutUs.module.css";

export default function EventAboutUs({
    name,
    selectedOption
}) {
    return (
        <section 
            id="quemsomos"
            className={styles.aboutUs}
        >
            <div className={styles.title}>
                <h2>Saiba mais sobre o {name}</h2>
            </div>
            <div className={styles.wrapperText}>
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
    )
}