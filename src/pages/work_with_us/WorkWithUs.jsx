import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./WorkWithUs.module.css";
import companyImg from "@/utils/assets/company.jpeg";
import trabalheConoscoImg from "@/utils/assets/trabalhe_conosco.png";
import LilBanner from "../../components/lil_banner/LilBanner";
import BannerWorkWithUs from "../../components/banner_work_with_us/BannerWorkWithUs";
import Form from "../../components/form/Form";


// essa tela tem que ter uma integração para enviar email

export default function WorkWithUs({
    img = companyImg,
    workWithUsImg = trabalheConoscoImg
}) {

    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <LilBanner 
                    image={ img }
                    text={"Fale conosco"}
                />

                <section className={styles.wrapper}>
                    <div className={styles.wrapperForm}>
                        <h2>Dúvidas, críticas ou sugestões, entre em contato conosco.</h2>
                        <p>Para reservas, acesse a página Unidades e selecione a unidade mais próxima ou uma de sua escolha.</p>
                        
                        <Form 
                            fieldUnitOn={true}
                        />

                    </div>
                    <div className={styles.wrapperBanner}>
                        <h2>Trabalhe conosco</h2>
                        <BannerWorkWithUs noTitle noResponsive height={104}/>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}