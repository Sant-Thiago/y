import { useEffect, useRef, useState } from 'react';
import styles from './Banner.module.css';
import bannerImage from '@/utils/assets/banner_image.jpeg';
import bannerImage2 from '@/utils/assets/banner_image_2.jpeg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Banner() {
    const slides = [
        { id: 1, img: bannerImage},
        { id: 2, img: bannerImage2},
    ];
    const [animate, setAnimate] = useState(true);
    const [current, setCurrent] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const activeIndex = ((current - 1) % slides.length + slides.length) % slides.length;
    const transitionDurationMs = 900


    const extendedSlides = [
        slides[slides.length - 1],
        ...slides,
        slides[0],
    ];

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent((prev) => prev + 1);
        setAnimate(true);

        setTimeout(() => setIsAnimating(false), transitionDurationMs);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrent((prev) => prev - 1);
        setAnimate(true);

        setTimeout(() => setIsAnimating(false), transitionDurationMs);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true);
            setCurrent(prev => prev + 1);
        }, 4000);

        let timer;

        if (current <= 0) {
            const timer = setTimeout(() => {
                setAnimate(false);
                setCurrent(slides.length)
            }, 900);
        }

        if (current >= slides.length + 1) {
            const timer = setTimeout(() => {
                setAnimate(false);
                setCurrent(1);
            }, 900);
        }

        return () => {
            clearInterval(interval);
            if (timer) clearTimeout(timer);
        };
    }, [current, slides.length]);



    return (
        <section className={styles.container}>
            <div
                className={styles.slider}
                style={{ 
                    transform: `translateX(-${current * 100}vw)`, 
                    transition: animate ? "transform 0.9s ease" : "none" 
                }}
            >
                {extendedSlides.map((s, idx) => (
                    <img 
                        src={s.img} 
                        alt="banner" 
                        className={styles.bannerImage} 
                        key={idx}
                    />
                ))}
                
            </div>
            <button
                onClick={prevSlide}
                className={`${styles.arrow} ${styles.arrowPrev}`}
            >
                <IoIosArrowBack />
            </button>
            <button
                onClick={nextSlide}
                className={`${styles.arrow} ${styles.arrowNext}`}
            >
                <IoIosArrowForward />
            </button>

            <ul className={styles.indicators}>
                {slides.map((s, idx) => (
                    <li 
                        key={idx}
                        className={`${styles.dot} ${idx === activeIndex ? styles.active : ""}`}
                        onClick={() => {
                            setCurrent(idx + 1);
                            setAnimate(true);
                        }}
                    />
                ))}
            </ul>
        </section>
    )
}