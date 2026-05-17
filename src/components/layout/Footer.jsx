import React from "react";
import styles from "./Footer.module.css";

function Footer()
{
    return (
        <footer className={styles.footer}>
            <p className={styles.dev}>&copy; 2026 - Desenvolvido por André Moreira</p>
        </footer>
    );
}

export default Footer;
