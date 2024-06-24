import { TopBar } from "../TopBar/TopBar";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { ServiceComponent } from "../ServiceComponent/ServiceComponent";
import { Stats } from "../Stats/Stats";
import { Features } from "../Features/Features";
import { Pricing } from "../Pricing/Pricing";

import styles from "./Layout.module.css";
import '../../styles/theme.css';

export const Layout = ({ children }) => {
    return (
        <div className={styles.mainContent}>
            <TopBar/>
            <Hero/>
            <About/>
            <ServiceComponent/>
            <Stats/>
            <Features/>
            <Pricing/>
            {children}
        </div>
    );
}