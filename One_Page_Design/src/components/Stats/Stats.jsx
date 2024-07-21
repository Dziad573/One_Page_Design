import { useState, useEffect } from 'react';
import { runAnimations } from './statsAnimations.js';
import { useShowImage } from '../../hooks/useShowImage.js';
import LazyImage from '../LazyImage/LazyImage.jsx';
import stats from '../../constants/stats';
import styles from './Stats.module.css';
import portrait from '../../assets/business-man2.png';

export const Stats = () => {

    const showImage = useShowImage();

    useEffect(() => {
        runAnimations();
    }, []);

    // const[showImg, setShowImg] = useState(window.innerWidth > 768 ? true : false);
    // useEffect(() => {
    //     const handleResize = () => {
    //         setShowImg(window.innerWidth > 768);
    //     };

    //     window.addEventListener('resize', handleResize);

    //     // Cleanup function to remove the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);


    return (
        <>
            <div className={styles.stats}>
                <div className={styles.statsContainer}>
                    <div className={styles.statsContent}>
                        {stats.map(stat => {
                            return (
                                <div key={stat.id} className={styles.statsContentItem}>
                                    <h2 className={styles.statsContentItemTitle}>{stat.title}</h2>
                                    <div className={styles.statsElement}>
                                        <div 
                                            className={`${styles.statsElementAnimate} statsElementAnimate`}
                                            //style={{ width: `${stat.percentage}%` }}
                                            data-width={`${stat.percentage}%`}
                                        >
                                            {stat.percentage}%
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {showImage && <img className={styles.statsImage} src={portrait} alt="" />}
                </div>
            </div>
        </>
    );
};