import React from "react";
import styles from "./Header.module.css";

function Header()
{
    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
                <ul className={styles.menu}>
                    <li className={styles.navList}><a href="#" className={styles.navLink}>Home</a></li>
                    <li className={styles.navList}><a href="#about" className={styles.navLink}>About</a></li>
                    <li className={styles.navList}><a href="#skills" className={styles.navLink}>Skills</a></li>
                    <li className={styles.navList}><a href="#projects" className={styles.navLink}>Projects</a></li>
                    <li className={styles.navList}><a href="#contact" className={styles.navLink}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
