import defaultImage from "@/utils/assets/banner_image.jpeg"
import styles from "./EventPackages.module.css";

export default function EventPackages({
    name
}) {

    const imagesFoods = [defaultImage, defaultImage, defaultImage, defaultImage];

    return (
        <section 
            id="pacotes"
            className={styles.packages}
        >
            <div className={styles.title}>
                <h2>Conheça nossos pacotes</h2>
            </div>
            <div className={styles.wrapperOptions}>
                <button>
                    <p>Sala vip</p>
                </button>
                <button>
                    <p>Geral</p>
                </button>
                <button>
                    <p>Casamento</p>
                </button>
                <button>
                    <p>Aniversário</p>
                </button>
            </div>
            <div className={styles.wrapperFlavor}>
                <h2>O sabor sem igual do nosso cardápio</h2>
            </div>
            <div className={styles.wrapperFlavorImages}>
                {imagesFoods.map((img, idx) => 
                    <div 
                        key={idx}
                        className={styles.image}
                    >
                        <img src={img} alt="" />
                    </div>    
                )}
            </div>
            <div className={styles.description}>
                <p>
                    Cardápio completo com frutos do mar, carnes, aves e sobremesas incríveis, 
                    que reúnem o melhor da gastronomia nacional. <br />
                    Para brindar, uma adega com vinhos tintos, brancos, rosés e espumantes, 
                    além dos rótulos exclusivos {name}.
                </p>
            </div>
        </section>
    )
}