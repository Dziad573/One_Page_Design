/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useShowImage } from '../../hooks/useShowImage.js';
import { topBarButtons } from "../../constants/topBarButtons";
import { runAnimations } from "./topBarAnimations.js";
import styles from "./TopBar.module.css";

export const TopBar = () => {
    const showBurger = useShowImage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSetIsMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleButtonClick = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        runAnimations();
    }, []);

    return (
        <div className={`${styles.topBar} topBar`}>
            <h1 className={styles.logo}>LOGO</h1>
            {showBurger ? (
                <div className={styles.topBarButtons}>
                    {topBarButtons.map((button) => (
                        <>
                            <a href={'#' + button.name}>
                                <button key={button.id} className={`${styles.topBarButton} ${styles.texcik}`}>
                                    <span className={styles.hoverAnim}>{button.name}</span>
                                </button>
                            </a>
                        </>
                    ))}
                </div>
            ) : (
                <>
                    {!isMenuOpen ? 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            onClick={handleSetIsMenuOpen}
                        >
                            <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5S5.5 6.83 5.5 6S4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5s1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5M7 19h14v-2H7zm0-6h14v-2H7zm0-8v2h14V5z" />
                        </svg> : 
                        ''
                    }
                    {isMenuOpen && (
                        <div className={styles.menu}>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="32" 
                                height="32" 
                                viewBox="0 0 24 24"
                                className={styles.closeButton}
                                onClick={handleButtonClick}
                            >
                                <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"/>
                            </svg>
                            {topBarButtons.map((button) => (<>
                                    <a href={'#' + button.name}>
                                        <button key={button.id} onClick={handleButtonClick} className={`${styles.topBarButton} ${styles.texcik}`}>
                                            <span className={styles.hoverAnim}>{button.name}</span>
                                        </button>
                                    </a>
                                </>
                            ))}
                            
                        </div>
                    )}
                </>
            )}
        </div>
    );
};