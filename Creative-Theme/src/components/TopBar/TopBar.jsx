/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { topBarButtons } from "../../constants/topBarButtons";
import { runAnimations } from "./topBarAnimations.js";
import styles from "./TopBar.module.css";

export const TopBar = () => {
    
    useEffect(() => {
        runAnimations();
    }, []);

    return (
        <div className={`${styles.topBar} topBar`}>
            <h1 className={styles.logo}>DZIADOS</h1>
            <div className={styles.topBarButtons}>
                {topBarButtons.map((button) => (
                    <button key={button.id} className={`${styles.topBarButton} ${styles.texcik}`}>
                        <span className={styles.hoverAnim}>{button.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}