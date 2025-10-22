import styles from './Banner.module.css';
import bannerImage from '@/assets/banner_image.jpeg';

export default function Banner() {
    return (
        <section className={styles.container}>
            <img src={bannerImage} alt="banner" className={styles.bannerImage} />
        </section>
    )
}