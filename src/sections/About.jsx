import React from "react";
import styles from "./About.module.css";

function About()
{
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.title}>Sobre Mim</h2>
            <div className={styles.aboutContent}>
                <p>
                    Sou um desenvolvedor focado em Engenharia de Software e Sistemas, transitando 
                    entre a construção de aplicações web escaláveis no ecossistema Full-Stack e o 
                    desenvolvimento de baixo nível. Minha paixão está onde o software encontra o hardware. 
                    Acredito que dominar o que acontece abaixo das camadas de abstração é o único caminho 
                    para construir arquiteturas eficientes, transformando conceitos complexos de computação em software de alta performance de verdade.
                </p>
            </div>
        </section>
    );
}

export default About;
