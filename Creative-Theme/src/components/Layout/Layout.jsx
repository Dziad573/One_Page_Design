import { TopBar } from "../TopBar/TopBar";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { ServiceComponent } from "../ServiceComponent/ServiceComponent";
import { Stats } from "../Stats/Stats";
import { Features } from "../Features/Features";
import { Pricing } from "../Pricing/Pricing";
import { Team } from "../Team/Team";
import { Blog } from "../Blog/Blog";
import { Contact } from "../Contact/Contact";

import styles from "./Layout.module.css";
import '../../styles/theme.css';

export const Layout = (/*{ children }*/) => {
    return (
        <div className={styles.mainContent}>
            <TopBar/>
            <Hero/>
            <About/>
            <ServiceComponent/>
            <Stats/>
            <Pricing/>
            <Features/>
            <Team/>
            <Blog/>
            <Contact/>
            {/* {children} */}
        </div>
    );
}