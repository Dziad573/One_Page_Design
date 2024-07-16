import styles from './Pricing.module.css';
import pricing from '../../constants/pricing';
import { useEffect } from 'react';
import { runAnimations } from './pricingAnimations';

export const Pricing = () => {
    useEffect(() => {
        runAnimations();
    }, []);

    return (
        <div id='Pricing' className={styles.container}>
            <div className={styles.pricingHeader}>
                <div className={styles.header}><h1>Pricin</h1><h1>g</h1></div>
                <p>Some pricing information. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti, fugit molestias omnis consectetur atque, asperiores unde qui vero explicabo vitae doloribus, ullam dignissimos commodi sunt ipsam esse? Cumque, minus.</p>
            </div>
            <div className={`${styles.pricingSection} pricingSection`}>
                {pricing.map(item => {
                    return (
                        <div key={item.id} className={`${styles.pricingContainer} pricingContainer`}>
                            <div className={styles.pricingItem}>
                                <div className={styles.priceInfo}>
                                    <h3>{item.price}</h3>
                                    <p>per month</p>
                                </div>
                                <h2>{item.title}</h2>
                                <div className={styles.features}>
                                    <ul>
                                        {item.features.map((feature, index) => {
                                            return (
                                                <li key={index}>{feature}</li>
                                            );
                                        })}
                                    </ul>
                                    <button className={styles.pricingButton}>Order Now</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>


    )
};