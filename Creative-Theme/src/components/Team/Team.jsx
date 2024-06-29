import { useEffect } from 'react';
import styles from './Team.module.css';
import team from '../../constants/team';
import { runAnimations } from './Animations';

export const Team = () => {

    useEffect(() => {
        runAnimations();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Team</h1>
                <span className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
            </div>
            <div className={`${styles.teamContainer} teamElementAnimate`}>
                {team.map((member) => (
                    <div key={member.id} className={styles.member}>
                        <img src={member.image} alt={member.name} className={styles.memberImage} loading='lazy' />
                        <div>
                            <h3>{member.name}</h3>
                            <h4>{member.title}</h4>
                            <p>{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
