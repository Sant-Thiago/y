import LilBanner from "../../components/lil_banner/LilBanner";
import Navbar from "../../components/navbar/Navbar";
import styles from "./WhoWeAre.module.css";
import img from "@/utils/assets/quem_somos.PNG";
import companyImg from "@/utils/assets/company.jpeg";
import firstImage from "@/utils/assets/banner_image.jpeg";
import secondImage from "@/utils/assets/banner_image_2.jpeg";
import outSideRestaurant from "@/utils/assets/outter_restaurant.jpg";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { companies } from "../../data/Companies";



export default function WhoWeAre() {
    const { empresa } = useParams();
    const data = companies[empresa];


    const images = [...data.images].slice(0, 3);

    const history = [
        {
            title: "O início de uma tradição petropolitana",
            year: "1990",
            image: { src: data.images[2], alt: "Imagem do Restaurante" },
            text: `
                A Casa Pellegrini nasceu no coração de Petrópolis com a proposta de ser um bar e restaurante acolhedor, simples e honesto — daqueles que rapidamente viram ponto de encontro da cidade. 
                Desde os primeiros anos, o foco era claro: comida boa, preços justos e um atendimento informal, mas sempre simpático e eficiente. Foi desse espírito caseiro que surgiram os primeiros sanduíches que logo se tornariam famosos entre moradores e visitantes.
            `
        },
        {
            title: "O pioneiro do hambúrguer artesanal na cidade",
            year: "2000",
            image: { src: data.images[1], alt: "Imagem do Restaurante" },
            text: `
                Com o tempo, a casa ganhou destaque por algo que se tornaria sua marca registrada: o hambúrguer artesanal. Muito antes da moda gourmet, a Casa Pellegrini já servia hambúrguer feito na chapa, suculento, bem temperado, e acompanhado por ingredientes frescos.
                O sucesso foi imediato. A cada noite, jovens, famílias e trabalhadores lotavam o salão — até nos dias de semana — buscando sabor, simplicidade e aquela cerveja incrivelmente gelada, conhecida como uma das melhores da região.
            `
        },
        {
            title: "A consolidação: sanduíches, massas, petiscos e o famoso molho de alho",
            year: "2010",
            image: { src: data.images[4], alt: "Imagem do Restaurante" },
            text: `
                O cardápio cresceu junto com a clientela. Vieram as massas bem servidas, os petiscos para dividir, as porções generosas, os caldos caseiros e, claro, o icônico molho de alho — hoje inseparável das batatas fritas.
                A variedade de drinks e as capirinhas em diversos sabores fortaleceram ainda mais a identidade do lugar. A Casa Pellegrini virou um espaço democrático: do almoço executivo ao jantar descontraído, sempre com qualidade e bom custo-benefício.
            `
        },
        {
            title: "Casa Pellegrini hoje: um clássico de Petrópolis",
            year: "Atual",
            image: { src: data.images[0], alt: "Imagem do Restaurante" },
            text: `
                Atualmente, a Casa Pellegrini continua como um dos restaurantes mais queridos e frequentados da cidade. Aberta todos os dias, funcionando até tarde, mantém viva a essência que conquistou gerações: boa comida, bebida gelada e um ambiente que faz qualquer um se sentir em casa.
                Sem luxo exagerado — mas com muito sabor, tradição e entrega. Aqui, cada prato conta um pedaço da nossa história com Petrópolis.
            `
        }
    ];

    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <LilBanner
                    image={data.images[1]}
                    text={"Quem Somos"}
                />
                <section className={styles.background}>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapperText}>
                            <h1>Casa Pellegrini: sabor, história e acolhimento servidos todos os dias.</h1>
                            
                            <p>
                                A Casa Pellegrini é um dos bares e restaurantes mais tradicionais e 
                                queridos de Petrópolis, reconhecida por unir história, sabor e aquele 
                                atendimento descontraído que faz todo mundo se sentir em casa. 
                                Localizada no coração da cidade, a casa se consolidou ao longo dos 
                                anos como ponto de encontro para amigos, famílias e visitantes que 
                                buscam boa comida, bebidas geladas e um ambiente sempre acolhedor.
                            </p>
                                    
                            <p>
                                Pioneira no preparo de hambúrguer artesanal na região, a Casa Pellegrini 
                                também se destaca pelos sanduíches generosos, pelo famoso molho de 
                                alho — marca registrada da casa — e pelas porções bem servidas que 
                                acompanham perfeitamente uma boa cerveja. Com um cardápio variado, 
                                oferecemos desde petiscos clássicos até massas, pratos executivos, 
                                caldos, sobremesas e opções ideais tanto para um almoço rápido quanto 
                                para um jantar completo.
                            </p>
                            <p>
                                A atmosfera é leve, informal e animada, atraindo públicos de todas as 
                                idades. À noite, a casa costuma ficar movimentada, mesmo durante a semana, 
                                graças ao clima descontraído e ao excelente custo-benefício. Para acompanhar, 
                                contamos com uma seleção de bebidas que inclui chopp, cervejas sempre geladas e 
                                onze sabores de caipirinhas — da tradicional de limão às versões com morango, 
                                manga e maracujá.
                            </p>
                                    
                            <p>
                                Aberta diariamente das 11h à meia-noite (com a cozinha funcionando até 01h30 
                                às sextas e sábados), a Casa Pellegrini mantém sua identidade simples e 
                                autêntica: não é um espaço luxuoso, mas é um lugar onde se come bem, bebe 
                                melhor ainda e sempre se é atendido com simpatia e eficiência. Um ambiente que 
                                combina tradição, qualidade e preços justos — e que, por isso, se tornou parte 
                                da rotina e das memórias afetivas de muitos petropolitanos.
                            </p>
                        </div>
                        <div className={styles.wrapperImage}>
                            <h2>Visite-nos e encante-se!</h2>
                            <div className={styles.images}>
                                {images && images.map(it => (
                                    <img src={it} alt={it.alt} />
                                ))}
                            </div>
                        </div>

                    </div>
                </section>
                <section className={styles.history}>
                        <h2>Conheça nossa linha do tempo de sucesso!</h2>
                        <div className={styles.divisor}>
                            {history && history.map((it, idx) => (
                                <div 
                                    key={idx}
                                    className={`
                                        ${styles.wrapperCardHistory}
                                        ${(idx % 2 == 0) ? styles.reverse : ""}
                                    `}  // Nesse codigo posso tanto usar essa condição para revesar os lados das imagens quanto alternar o class.fstStyle e sndStyle
                                >
                                    <div className={`
                                        ${styles.wrapperCard}
                                        ${(idx % 2 == 0) ? styles.reverse : ""}
                                    `}>
                                        <div className={styles.cardHistory}>
                                            <h3>{it.title}</h3>
                                            <p>{it.text}</p>
                                            <img src={it.image.src} alt={it.image.alt} />
                                        </div>
                                    </div>

                                    <p>{it.year}</p>
                                    
                                    <div className={styles.hideCard} ></div>
                                </div>
                            ))}
                        </div>
                </section>
            </main>
            <Footer />
        </>
    );
}