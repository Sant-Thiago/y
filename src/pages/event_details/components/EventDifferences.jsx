import { BiCar } from "react-icons/bi";
import styles from "./EventDifferences.module.css";
import { LuToyBrick } from "react-icons/lu";
import { GiEnergyTank } from "react-icons/gi";

export default function EventDifferences({}) {

    const infos = [
        {
            icon: <BiCar className={styles.icon} />,
            iconText: "Estacionamento Amplo e Seguro"
        },
        {
            icon: <LuToyBrick className={styles.icon}/>,
            iconText: "Brinquedoteca"
        },
        {
            icon: <GiEnergyTank className={styles.icon}/>,
            iconText: "Gerador de Energia Próprio"
        },
        
    ]

    return (
        <section 
            id="diferenciais"
            className={styles.wrapperDiferencials}
        >
            <div className={styles.title}>
                <h2>Diferenciais Exclusivos</h2>
                <p>Pensando em sua comodiadade, nossos espaços oferecem:</p>
            </div>
            <div className={styles.wrapperImageAndInfo}>
            {infos.map((info, idx) => (
                <div 
                    className={styles.imageAndInfo}
                    key={idx}
                >
                    <div>
                        {info.icon}
                    </div>
                    <p>{info.iconText}</p>
                </div>

            ))}
            </div>
        </section>
    )
}