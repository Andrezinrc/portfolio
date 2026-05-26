import React from "react";
import styles from "./About.module.css";

function About()
{
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.title}>Sobre Mim</h2>
            <div className={styles.aboutContent}>
                <p>Como desenvolvedor fullstack, passo boa parte do meu tempo construindo aplicações web, mas minha verdadeira curiosidade reside em entender o que acontece a alguns níveis de abstração abaixo. Seja contribuindo com projetos open-source ou escrevendo código em C, busco sempre desmistificar como os sistemas operam. Acredito que, ao entender os fundamentos, conseguimos tomar decisões de arquitetura muito mais conscientes e eficientes no dia a dia.</p>
            </div>
        </section>
    );
}

export default About;
