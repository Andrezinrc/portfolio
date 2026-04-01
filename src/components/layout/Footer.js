import React from "react";
import styles from "./Footer.module.css";

function Footer()
{
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <h3>André Moreira</h3>
                <p>Segunda a Sexta, 9h às 18h</p>
            </div>
            <div className={styles.footerContent}>
                <div className={styles.menuContent}>
                    <h3>Mapa do site</h3>
                    <ul className={styles.menu}>
                        <li className={styles.navList}><a href="#home" className={styles.navLink}>Home</a></li>
                        <li className={styles.navList}><a href="#about" className={styles.navLink}>About</a></li>
                        <li className={styles.navList}><a href="#skills" className={styles.navLink}>Skills</a></li>
                        <li className={styles.navList}><a href="#projects" className={styles.navLink}>Projects</a></li>
                        <li className={styles.navList}><a href="#contact" className={styles.navLink}>Contact</a></li>
                    </ul>
                </div>

                <div className={styles.social}>
                    <h3>Vamos nos conectar</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://www.linkedin.com/in/andr%C3%A9-moreira-940886233/">LinkedIn</a>
                        <a href="https://www.instagram.com/andremoreira.dev/">Instagram</a>
                    </div>
                </div>
            </div>

            <p className={styles.dev}>&copy; 2026 - André Moreira</p>
        </footer>
    );
}

export default Footer;
