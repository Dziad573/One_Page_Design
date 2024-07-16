import { useEffect } from 'react';
import styles from './Team.module.css';
import team from '../../constants/team';
import { runAnimations } from './Animations';

export const Team = () => {

    useEffect(() => {
        runAnimations();
    }, []);

    return (
        <div id='Team' className={styles.container}>
            <div className={styles.headerTeam}>
            <div className={styles.header}><h1>Tea</h1><h1>m</h1></div>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className={`${styles.teamContainer} teamElementAnimate`}>
                {team.map((member) => (
                    <div key={member.id} className={styles.member}>
                        <img src={member.image} alt={member.name} className={styles.memberImage} loading='lazy' />
                        <div>
                            <h3>{member.name}</h3>
                            <h4>{member.title}</h4>
                            <p>{member.description}</p>
                            <div className={styles.socials}>
                                <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                                    <member.ig />
                                </a>
                                <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                                    <member.fb />
                                </a>
                                <a href="https://www.twitter.com/" target='_blank' rel='noreferrer'>
                                    <member.tw />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
