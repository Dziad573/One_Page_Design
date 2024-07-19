import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <div id="Contact" className={styles.contactContainer}>
            <div className={styles.header}><h1>Contact </h1> <h1> Us</h1></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </p>
            <div className={styles.contactItems}>
                <div className={styles.info}>
                    <h2>Contact info</h2>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"/></svg>
                        1234 Street Name, City Name, United States
                    </p>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
                        Mail: info@domain.com
                    </p>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
                        Phone: +123 456 789
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 11h5v5h-5zm-7 0h5v5H4zm0-7h12v5H4z" opacity=".3"/><path fill="currentColor" d="M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z"/><path fill="currentColor" d="M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M4 4h12v5H4zm5 12H4v-5h5zm2-5h5v5h-5z"/></svg>
                        Website: www.Logo.com
                    </p>
                </div>
                <div className={styles.form}>
                    <form action="post">
                        <div className={styles.formName}>
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Email"/>
                        </div>
                        <input type="text" placeholder="Subject"/>
                        <textarea type="text" placeholder="Enter your message"/>
                        <button className={styles.contactButton}>Send Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}