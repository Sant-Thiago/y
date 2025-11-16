import { useState } from "react";
import Form from "../../components/form/Form";
import Map from "../../components/map/Map";
import BannerWorkWithUs from "../../components/banner_work_with_us/BannerWorkWithUs";
import instagramIcon from "@/utils/assets/instagram.png"
import facebookIcon from "@/utils/assets/facebook.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import imageDefault from "@/utils/assets/banner_image.jpeg"
import imageSecond from "@/utils/assets/restaurant.jpeg"
import imageThird from "@/utils/assets/banner_image_2.jpeg"

import styles from "./UnitDetails.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ImageModal from "../../components/modals/image_modal/ImageModal";

export default function UnitDetails({
    name = "EmpresaX"
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [indexImageSelected, setIndexImageSelected] = useState(null);

    const unitName = useParams().name;
    const navigate = useNavigate();

    const images = [ imageDefault, imageSecond, imageThird ]


    const handleNavigate = (info) => {
        if (info === "whatsapp") {
            window.open("", "_blank");
        } else {
            navigate(info);
        }
    }

    const handleClickImage = (index) => {
        setIndexImageSelected(index);
        setIsModalOpen(true);
    }

    return (
        <>
        <Navbar />
        <main className={styles.container}>
            <div className={styles.title}>
                <h1>Bem-vindo(a) ao {name} {unitName}</h1>
            </div>
            <section className={styles.wrapper}>
                <div className={styles.imagem}>
                    <img src={imageDefault} alt="banner" />
                </div>
                <div className={styles.wrapperDivs}>
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

                </div>
            </section>
            <section className={styles.wrapperImages}>
                <div className={styles.images}>
                    {images.map((imgSrc, index) => (
                        <div key={index} className={styles.imageContainer} onClick={() => handleClickImage(index)}>
                            <img src={imgSrc} alt={`Gallery ${index + 1}`} />
                        </div>
                    ))}
                </div>
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

                <h2>Fale conosco</h2>
                <div className={styles.wrapperMapAndForm}>
                    <div className={styles.wrapperMap}>
                        <div className={styles.map}>
                            <Map
                                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d565125.5737988444!2d-46.92494388089832!3d-23.682063581702515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e1!3m2!1spt-BR!2sbr!4v1762716063199!5m2!1spt-BR!2sbr"}
                            />
                        </div>
                    </div>
                    <div className={styles.wrapperForm}>
                        <Form
                            fieldTermOn={true}
                        />
                    </div>
                </div>
            </section>
        </main>
        {isModalOpen && 
            <ImageModal 
                images={images} 
                index={indexImageSelected}
                onClose={() => setIsModalOpen(false)}
            />

        }
        <Footer />
        </>
    )
}

