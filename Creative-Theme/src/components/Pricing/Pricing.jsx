import styles from './Pricing.module.css';
import pricing from '../../constants/pricing';

export const Pricing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pricingHeader}>
                <h1>Pricing</h1>
                <p>Some pricing information. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti, fugit molestias omnis consectetur atque, asperiores unde qui vero explicabo vitae doloribus, ullam dignissimos commodi sunt ipsam esse? Cumque, minus.</p>
            </div>
            <div className={styles.pricingSection}>
                {pricing.map(item => {
                    return (
                        <div key={item.id} className={styles.pricingContainer}>
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