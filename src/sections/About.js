import React from "react";
import styles from "./About.module.css";

function About()
{
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.title}>Sobre Mim</h2>
            <div className={styles.aboutContent}>
                <p>Sou desenvolvedor fullstack com experiência em construir aplicações web escaláveis e eficientes. Trabalho com foco em resultados, entregando soluções funcionais e confiáveis.</p>
                <p>Estou sempre aprendendo e melhorando, com foco em resolver problemas, escrever código limpo e entregar soluções práticas.</p>
            </div>
        </section>
    );
}

export default About;
