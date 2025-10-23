import Banner from "../components/banner/Banner";
import Card from "../components/card/Card";
import Navbar from "../components/navbar/Navbar";
import styles from "./Home.module.css";
import restaurantImg from "@/utils/assets/inner_restaurant.jpg"
import ifoodImg from "@/utils/assets/ifood_banner.png"
import Location from "../components/location/Location";

export default function Home() {
    return(
        <>
            <Navbar />
            <main className={styles.container}>
                <Banner />
                <section className={styles.sectionCards}>
                    <Card 
                        img={restaurantImg}
                        fstText="Faça sua"
                        sndText="Reserva"
                        trdText="Realizando a Reserva Online você garante seu lugar com segurança."
                        btnText="Faça sua reserva"
                    />
                    <Card 
                        img={ifoodImg}
                        fstText="Peça pelo nosso"
                        sndText="Delivery"
                        trdText="Coma o melhor do EmpresaX em qualquer lugar! Peça nossos pratos no conforto da sua casa."
                        btnText="Faça seu pedido"
                    />
                </section>
                <section>
                    <Location />
                </section>
            </main>
        </>
    )
}