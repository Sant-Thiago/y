import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Home.module.css";
import restaurantImg from "@/utils/assets/inner_restaurant.jpg"
import ifoodImg from "@/utils/assets/ifood_banner.png"
import Location from "../../components/location/Location";
import Highlights from "../../components/highlights/Highlights";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <section className={styles.sectionBanner}>
                    <Banner 
                        draggable={false}
                        timeTransition={5000}
                        height={"calc(100% - 78px)"}
                        // margin={"0 0 70px"}
                    />

                </section>
                <section className={styles.sectionCards}>
                    <Card 
                        img={restaurantImg}
                        fstText="Faça sua"
                        sndText="Reserva"
                        trdText="Realizando a Reserva Online você garante seu lugar com segurança."
                        linkText="Faça sua reserva"
                        link="/reservas"
                    />
                    <Card 
                        img={ifoodImg}
                        fstText="Peça pelo nosso"
                        sndText="Delivery"
                        trdText="Coma o melhor do EmpresaX em qualquer lugar! Peça nossos pratos no conforto da sua casa."
                        linkText="Faça seu pedido"
                        animate="top"
                    />
                </section>
                <section className={styles.sectionHighlights}>
                    <Highlights />
                </section>
            </main>
            <Footer />
        </>
    )
}