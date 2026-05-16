import React from "react";
import styles from "./About.module.css";

function About()
{
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.title}>Sobre Mim</h2>
            <div className={styles.aboutContent}>
                <p>Sou desenvolvedor fullstack com um interesse real por computação de baixo nível e projetos open-source. Estudar como os sistemas funcionam por baixo dos panos me ajuda a entender a raiz dos problemas e a escrever códigos muito mais eficientes no ecossistema web.</p>
                <p>Seja criando uma aplicação moderna ou programando diretamente em C, meu foco é o mesmo: resolver o problema de forma direta, com código limpo e soluções práticas.</p>
            </div>
        </section>
    );
}

export default About;
