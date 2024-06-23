import { useEffect } from 'react';
import styles from './ServiceComponent.module.css';
import services from '../../constants/services';
import { runAnimations } from './serviceAnimations';



export const ServiceComponent = () => {
    useEffect(() => {
        runAnimations();
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}><h1>Our</h1> <h1>Service</h1></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
                </p>
                <div className={styles.serviceContent}>
                    <div className={styles.content}>
                    {services.map(service => {
                        const IconComponent = service.icon;
                        return (
                            <div key={service.id} className={`${styles.service} service`}>
                                <div className={styles.icon}>
                                    <IconComponent />
                                </div>
                                <h3 className={styles.title}>{service.title}</h3>
                                <p className={styles.description}>{service.description}</p>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        </>
    );
}