import { useEffect } from 'react';
//import LazyImage from '../LazyImage/LazyImage.jsx';
import { runAnimations } from './aboutAnimations';
import styles from './About.module.css';
import devices from '../../assets/Cell-Phone-Applications.jpg';

export const About = () => {

    useEffect(() => {
        runAnimations();
    }, []);

    return (
        <>
            <div id='About' className={`${styles.container}  aboutContent`}>
                <div className={styles.header}><h1>About</h1> <h1>Us</h1></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                </p>
                <div className={`${styles.aboutContent}`}>
                    <div className={styles.content}>
                        <h2 className='elementAnimationTitle'>We Are Creative And Awesome</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
                            adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. 
                            Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
                            adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. 
                            Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                        </p>
                    </div>
                    <div className={`${styles.image} elementAnimation`}>
                        <img src={devices} alt="About us" loading="lazy"/>
                    </div>
                </div>
            </div>
                <div className={styles.downloadContainer}>
                    <div className={styles.downloadContent}>
                        <h2>Premium quality free onepage template</h2>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed non risus.
                        </div>
                    </div>
                    <div className={styles.downloadButtons}>
                        <button>Download for iOS</button>
                        <button>Download for Android</button>
                    </div>
                </div>
        </>
    );
}