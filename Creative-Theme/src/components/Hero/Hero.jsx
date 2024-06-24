import Slider from 'react-slick';
import styles from './Hero.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import images from '../../constants/heroContent.js';
export const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        appendDots: dots => (
            <div
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <ul style={{ margin: '0px', padding: '5px', scale: '1.5', }}> {dots} </ul>
            </div>
        ),
        // prevArrow: <div className={styles.prevButton}>❮</div>,
        // nextArrow: <div className={styles.nextButton}>❯</div>,
    };

    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <div className={styles.hero2} style={{ backgroundImage: `url(${image.url})` }}>
                                <h1 className={styles.hero__title}>{image.title}</h1>
                                <p className={styles.hero__subtitle}>{image.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};