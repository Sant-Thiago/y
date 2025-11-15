import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import BannerWorkWithUs from "../../components/banner_work_with_us/BannerWorkWithUs";
import restaurantImg from "@/utils/assets/restaurant.jpeg"
import styles from "./Units.module.css";
import image from "@/utils/assets/banner_image.jpeg"
import instagramIcon from "@/utils/assets/instagram.png"
import facebookIcon from "@/utils/assets/facebook.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "../../components/form/Form";
import Map from "../../components/map/Map";


export default function Units({
    name = "EmpresaX",
    img = restaurantImg,
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

    const images = [ image, img ]

    const imageUnits = [ image, img, image ];

    const navigate = useNavigate();
    const [selectedCity, setSelectedCity] = useState("");

    const handleChange = (e) => {
        const option = e.target.value;

        setSelectedCity(option);
    }

    const sortOptionsbyCity = (options) => {
        const sortedOptions = {};

        Object.entries(options).forEach(([estado, cidades]) => {
            const sortedCidades = cidades.sort((a, b) => a.value.localeCompare(b.value));
            sortedOptions[estado] = sortedCidades;
        });

        return sortedOptions;
    }

    const getQuantityUnits = (options) => {
        return Object.values(options).reduce((acc, cidades) => acc + cidades.length, 0);
    }

    const handleNavigate = (info) => {
        if (info === "whatsapp") {
            window.open("", "_blank");
        } else {
            navigate(info);
        }
    }

    const sortedOptions = sortOptionsbyCity(options);
    const quantityUnits = getQuantityUnits(options);

    return (
        <>
            <Navbar />
            {!selectedCity ? (
                <main className={styles.container}>
                    <section className={styles.wrapper}>
                        <div className={styles.wrapperInfoText}>
                            <div className={styles.wrapperText}>
                                <h1 className={styles.textHigh}>Encontre a unidade <br />mais perto de você</h1>
                                <p className={styles.text}>Temos {quantityUnits} lojas espalhadas em todo o país.</p>
                            </div>
                            <div className={styles.division}></div>
                            <select
                                className={styles.select}
                                onChange={handleChange}
                            >
                                <option defaultChecked>Selecione a unidade desejada</option>
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

                        <div className={styles.wrapperImg}>
                            {imageUnits.length > 1 ? (
                                imageUnits.map(img => (
                                    <img 
                                        src={img} 
                                        alt="restaurant" 
                                        className={`
                                            ${styles.img}
                                            ${styles.absoluteImage}
                                        `} 
                                            
                                    />
                                ))
                            ): (
                                <img src={imageUnits} alt="restaurant" className={styles.img} />
                            )}
                        </div>
                    </section>
                </main>
                ) : (
                    <main className={styles.container}>
                        <section className={styles.wrapperTitle}>
                            <div className={styles.title}>
                                <h1>Bem-vindo(a) ao {name} {selectedCity}</h1>
                            </div>
                            <div className={styles.imagem}>
                                <img src={image} alt="banner" />
                            </div>
                        </section>
                        <section className={styles.wrapperDivs}>
                            <div className={styles.darkerDiv}>
                                <h2>Faça sua reserva</h2>
                                <button onClick={() => handleNavigate("reservas")}>
                                    Reservar agora
                                </button>
                            </div>
                            <div className={styles.lighterDiv}>
                                <h2>Cardápio da loja</h2>
                                <button onClick={() => handleNavigate("cardapio")}>
                                    Acessar cardápio
                                </button>
                            </div>
                            <div className={styles.lighterDiv}>
                                <h2>Faça seu evento aqui</h2>
                                <button onClick={() => handleNavigate("evento")}>
                                    Orçamento de evento
                                </button>
                            </div>
                            <div className={styles.darkerDiv}>
                                <h2>Fale com a loja</h2>
                                <button onClick={() => handleNavigate("whatsapp")}>
                                    WhatsApp
                                </button>
                            </div>
                        </section>
                        <section className={styles.wrapperImages}>
                            {images.map((imgSrc, index) => (
                                <div key={index} className={styles.imageContainer}>
                                    <img src={imgSrc} alt={`Gallery ${index + 1}`} />
                                </div>
                            ))}
                            <div className={styles.wrapperInfo}>
                                <p>Essa loja está localizada em ...</p>
                                <p>Entre os diferenciais de unidade, incluem-se</p>
                                <h3>Gastronomia de Excelência</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus explicabo nostrum aliquam est reiciendis voluptatem doloribus atque, corporis minus sunt deserunt quidem quo inventore voluptates! Non ut dolore laborum vel.</p>
                                <p>Horário de funcionamento:</p>
                                <p>SEG A SEX - 11h30 às 15:30 | 17h à 00h</p>
                                <p>Telefone: 00 12345-6789 | 99 87654-3210</p>
                                <p>Contato: exemplo@empresax.com</p>
                                <p>CNPJ: 12.345.678/0001-09</p>
                            </div>
                            <div className={styles.socialMidias}>
                                <h2>Visite nossas redes sociais</h2>
                                <div className={styles.wrapperSocial}>
                                    <Link 
                                        to={"https://www.facebook.com"} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={styles.imageIcon}    
                                    >
                                        <img src={facebookIcon} alt="Facebook" />
                                    </Link>
                                    <Link 
                                        to={"https://www.instagram.com"} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className={styles.imageIcon}    
                                    >
                                        <img src={instagramIcon} alt="Instagram" />
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <section className={styles.wrapperContactUs}>
                            <BannerWorkWithUs />

                            <div className={styles.divisor}></div>

                            <div className={styles.wrapperMap}>
                                <h2>Fale conosco</h2>
                                <div className={styles.map}>
                                    <Map
                                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565125.5737988444!2d-46.92494388089832!3d-23.682063581702515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e1!3m2!1spt-BR!2sbr!4v1762716063199!5m2!1spt-BR!2sbr"}
                                    />

                                </div>
                            </div>
                            <Form
                                fieldTermOn={true}
                            />
                        </section>
                    </main>
                )}

            <Footer />
        </>

    )
}