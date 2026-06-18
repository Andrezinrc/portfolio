import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from "./Hero.module.css";

function Hero() {

    return (
        <section className={styles.hero} id="home">
            <div className={styles.heroLeft}>
                <h1>André Moreira</h1>
                <p>Software Engineer</p>
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/in/andr%C3%A9-moreira-940886233/">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Andrezinrc">
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div className={styles.heroRight}>
                
            </div>
        </section>
    );
}

export default Hero;
