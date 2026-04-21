import React from "react";
import styles from "./About.module.css";

function About()
{
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.title}>Sobre Mim</h2>
            <div className={styles.aboutContent}>
                <p>Sou desenvolvedor Fullstack focado em construir aplicações web escaláveis e eficientes. Minha base técnica é fortalecida pelo interesse em <strong>Sistemas de Baixo Nível</strong>, o que me permite entender a fundo como o software interage com o hardware para otimizar performance e recursos.</p>
        <p>Sou entusiasta do ecossistema <strong>Open Source</strong>, contribuindo ativamente para projetos legados e modernos. Essa prática refina minha capacidade de resolver problemas complexos, ler código de terceiros e manter a disciplina com código limpo e arquiteturas robustas.</p>
            </div>
        </section>
    );
}

export default About;
