import styles from "./BannerWorkWithUs.module.css";
import trabalheConoscoImg from "@/utils/assets/trabalhe_conosco.png";

export default function BannerWorkWithUs({
    workWithUsImg = trabalheConoscoImg
}) {
    return (

        <div className={styles.workWithUs}>
            {/* <h2>Trabalhe conosco</h2> */}
            <div className={styles.wrapperImage}>
                <img src={workWithUsImg} alt="trabalhe conosco" />
            </div>
            <div className={styles.wrapperText}>
                <h2>Trabalhe conosco</h2>
                <p>Quer fazer parte do nosso time de campeões, clique no botão abaixo e faça sua inscrição para uma de nossas vagas disponíveis.</p>
                <button>Quero me inscrever</button>
            </div>
        </div>
    )
}