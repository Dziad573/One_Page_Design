import { useState } from 'react';
import { useImageLoader } from '../../hooks/useImageLoader';
import { useShowImage } from '../../hooks/useShowImage.js';
import { buttons, content } from '../../constants/features.js';
import LazyImage from '../LazyImage/LazyImage.jsx';
import { Oval } from 'react-loader-spinner';
import styles from './Features.module.css';

export const Features = () => {
    const showImage = useShowImage();
    const [isActive, setIsActive] = useState(buttons[0].id);

    const activeContent = content.find(item => item.id === isActive);
    const imagesToLoad = activeContent.img ? [activeContent.img] : [];
    const imagesLoaded = useImageLoader(imagesToLoad);

    const handleButtonClick = (id) => {
        setIsActive(id);
    };

    return (
        <div id='Features' className={styles.features}>
            <div className={styles.header}><h1>Feature</h1><h1>s</h1></div>
            <p>Some features of the productSome features of the productSome features of the productSome features of the product</p>
            <div className={styles.container}>
                <div className={styles.buttonsContainer}>
                    {buttons.map(button => {
                        const IconComponent = button.icon;
                        const active = button.id === isActive;
                        return (
                            <button 
                                key={button.id}
                                className={`${styles.button} ${active ? styles.active : ''}`}
                                onClick={() => handleButtonClick(button.id)}
                            >
                                <IconComponent />
                            </button>
                        );
                    })}
                </div>
                <section className={styles.contentContainer}>
                    {imagesLoaded ? (
                        <div className={styles.content}>
                            <div className={styles.box}>
                                <h2>{activeContent.title}</h2>
                                <p className={styles.description}>{activeContent.description}</p>
                            </div>
                            {activeContent.img && showImage && <img src={activeContent.img} alt={activeContent.title} loading="lazy" />}
                        </div>
                        
                    ) : (
                            <Oval
                                visible={true}
                                height="80"
                                width="80"
                                color="#ff0000"
                                secondaryColor="#7a7a7a"
                                ariaLabel="oval-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                    )}
                </section>
            </div>
        </div>
    );
};
