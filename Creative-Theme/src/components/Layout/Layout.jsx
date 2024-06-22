import { TopBar } from "../TopBar/TopBar";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { ServiceComponent } from "../ServiceComponent/ServiceComponent";
import styles from "./Layout.module.css";
import '../../styles/theme.css';

export const Layout = ({ children }) => {
    return (
        <div className={styles.mainContent}>
            <TopBar/>
            <Hero/>
            <About/>
            <ServiceComponent/>
            {children}
        </div>
    );
}