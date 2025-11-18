import LilBanner from "../../components/lil_banner/LilBanner";
import Navbar from "../../components/navbar/Navbar";
import styles from "./WhoWeAre.module.css";
import img from "@/utils/assets/quem_somos.PNG";
import companyImg from "@/utils/assets/company.jpeg";
import firstImage from "@/utils/assets/banner_image.jpeg";
import secondImage from "@/utils/assets/banner_image_2.jpeg";
import outSideRestaurant from "@/utils/assets/outter_restaurant.jpg";
import Footer from "../../components/footer/Footer";



export default function WhoWeAre({
    images = [
        {src: companyImg, alt: "imagem 1"},
        {src: firstImage, alt: "first image"},
        {src: secondImage, alt: "second image"}
    ],
    history = [
        {
            class: {fstStyle: styles.cardHistory, sndStyle: styles.hideCard}, 
            title: "Lorem dolor sit amet consectetur adipisicing elit.",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quos magnam quia at deleniti earum aut maiores porro sed expedita necessitatibus accusamus rerum dolores sit dignissimos, accusantium doloribus assumenda neque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati enim repellat fuga, nesciunt saepe quam aspernatur! Dicta, voluptatibus. Quas deserunt expedita iste ut consequatur sit nesciunt ipsum esse. Dolore, saepe!",
            image: {src: outSideRestaurant, alt: "restaurante 1"},
            year: "2020"
        },
        {
            class: {fstStyle: styles.cardHistory, sndStyle: styles.hideCard}, 
            title: "Lorem dolor sit amet consectetur adipisicing elit.",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quos magnam quia at deleniti earum aut maiores porro sed expedita necessitatibus accusamus rerum dolores sit dignissimos, accusantium doloribus assumenda neque? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati enim repellat fuga, nesciunt saepe quam aspernatur! Dicta, voluptatibus. Quas deserunt expedita iste ut consequatur sit nesciunt ipsum esse. Dolore, saepe!",
            image: {src: outSideRestaurant, alt: "restaurante 1"},
            year: "2020"
        }
    ]
}) {
    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <LilBanner
                    image={img}
                    text={"Quem Somos"}
                />
                <section className={styles.background}>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapperText}>
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ducimus architecto nobis, est earum expedita magni consequatur iure ratione voluptatibus laborum repudiandae cupiditate quam ex fugiat ab nam non? Iste.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis explicabo ea quis neque quibusdam voluptates ex facere a qui eveniet, optio possimus consequuntur incidunt. Earum obcaecati illo aspernatur aliquam!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores ducimus architecto nobis, est earum expedita magni consequatur iure ratione voluptatibus laborum repudiandae cupiditate quam ex fugiat ab nam non? Iste.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deserunt assumenda autem eum dolorum hic, eveniet laudantium sit perspiciatis natus itaque repellat placeat nemo quasi error sapiente fugit ad amet. orem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quam eligendi eius tempore quisquam adipisci tenetur, obcaecati ea recusandae inventore cum ullam minima natus nam itaque ut voluptatibus excepturi accusantium! Lorem</p>
                        </div>
                        <div className={styles.wrapperImage}>
                            <h2>Visite-nos e encante-se!</h2>
                            <div className={styles.images}>
                                {images && images.map(it => (
                                    <img src={it.src} alt={it.alt} />
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
                                        <div className={it.class.fstStyle}>
                                            <h3>{it.title}</h3>
                                            <p>{it.text}</p>
                                            <img src={it.image.src} alt={it.image.alt} />
                                        </div>
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