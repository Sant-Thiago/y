import styles from './Select.module.css';
import { IoIosArrowDown } from "react-icons/io";


export default function Select({
    options, 
    selectedOption,
    setSelectedOption,
    openSelect,
    setOpenSelect,
    text,
    placeholder,
    icon
}) {
    return (
        <div 
            className={`${styles.container} ${selectedOption ? styles.selected : ""}`}
            onClick={() => setOpenSelect(!openSelect)}
            >
            <div className={styles.wrapperIconDropdown}>
                <div className={styles.icon}>
                    {icon}
                </div>
                <div 
                    className={styles.dropdown} 
                >
                    <p className={styles.text}>{text}</p>
                    <p className={styles.selectedOption}>
                        {selectedOption ? selectedOption : placeholder}
                    </p>
                </div>
                {openSelect && (
                    <div className={styles.options}>
                        {options.map((it, index) => (
                            <div 
                                key={index}
                                className={styles.option}
                                onClick={() => {
                                    setSelectedOption(it);
                                    setOpenSelect(false);
                                }}
                            >
                                {it}
                            </div>
                        ))}
                    </div>
                )}

            </div>
            <div className={styles.arrow}>
                <IoIosArrowDown />
            </div>
        </div>
    )
}