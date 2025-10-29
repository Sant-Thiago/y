import LilBanner from "../../components/lil_banner/LilBanner";
import Navbar from "../../components/navbar/Navbar";
import styles from "./WhoWeAre.module.css";
import img from "@/utils/assets/quem_somos.PNG";
import companyImg from "@/utils/assets/company.jpeg";
import outSideRestaurant from "@/utils/assets/outter_restaurant.jpg";
import Footer from "../../components/footer/Footer";

export default function WhoWeAre({
    images = [{imagem: companyImg,alt: "imagem 1"}],
    history = [{
        class: {fstStyle: styles.cardHistory, sndStyle: styles.hideCard}, 
        title: "Lorem dolor sit amet consectetur adipisicing elit.",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati enim repellat fuga, nesciunt saepe quam aspernatur! Dicta, voluptatibus. Quas deserunt expedita iste ut consequatur sit nesciunt ipsum esse. Dolore, saepe!",
        image: {src: outSideRestaurant, alt: "restaurante 1"},
        year: "2020"
    }, ]
}) {
    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <LilBanner
                    image={img}
                    text={"Quem Somos"}
                />
                <section className={styles.wrapperText}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ducimus architecto nobis, est earum expedita magni consequatur iure ratione voluptatibus laborum repudiandae cupiditate quam ex fugiat ab nam non? Iste.</p>

                </section>
                <section className={styles.wrapperImage}>
                    <h2>Visite-nos e encante-se!</h2>
                    <div className={styles.images}>
                        {images && images.map(it => (
                            <img src={it.imagem} alt={it.alt} />
                        ))}
                    </div>
                </section>
                <section className={styles.history}>
                        <h2>Conheça nossa linha do tempo de sucesso!</h2>
                        <div className={styles.divisor}>
                            {history && history.map((it, idx) => (
                                <div className={styles.wrapperCardHistory} key={idx}>
                                    <div className={it.class.fstStyle}>
                                        <h3>{it.title}</h3>
                                        <p>{it.text}</p>
                                        <img src={it.image.src} alt={it.image.alt} />
                                    </div>
                                    <p>{it.year}</p>
                                    <div className={it.class.sndStyle} ></div>
                                </div>
                            ))}
                        </div>
                </section>
            </main>
            <Footer />
        </>
    );
}