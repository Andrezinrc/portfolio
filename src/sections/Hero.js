import React from "react";
import { FaGithub, FaInstagram } from 'react-icons/fa';
import styles from "./Hero.module.css";

function Hero() {

    return (
        <section className={styles.hero} id="#home">
            <div className={styles.heroLeft}>
                <h1>André Moreira</h1>
                <p>Desenvolvedor FullStack</p>
                <div className={styles.social}>
                    <a href="https://github.com/Andrezinrc">
                        <FaGithub />
                    </a>
                    <a href="https://www.instagram.com/andremoreira.dev/">
                        <FaInstagram />
                    </a>
                </div>
                <div className={styles.cta}>
                    <a href="#projects" className={styles.ctaButton}>Veja meus projetos</a>
                </div>
            </div>
            <div className={styles.heroRight}>
                
            </div>
        </section>
    );
}

export default Hero;
