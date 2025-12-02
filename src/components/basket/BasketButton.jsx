import { BsCartCheck } from "react-icons/bs";
import styles from "./Basket.module.css";
import { LuSquarePen } from "react-icons/lu";

export default function BasketButton({openModal}) {
    return (
        <button className={styles.wrapperIcon} onClick={() => openModal(true)}>
            <LuSquarePen className={styles.icon} />
        </button>

    )
}