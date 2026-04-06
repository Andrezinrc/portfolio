import React from "react";
import styles from "./Projects.module.css";

function Projects()
{
    return (
        <section className={styles.projects} id="projects">
            <h2 className={styles.title}>Projetos</h2>
            <div className={styles.projectsList}>
                <div className={styles.projectItem}>
                    <img src="/assets/images/projects/url-shortener.png" alt="url shortener" />
                    <h2>Encurtador de URL</h2>
                    <p>Aplicação para encurtar URLs</p>
                    <div className={styles.technologies}>
                        <span className={styles.tech}>React</span>
                        <span className={styles.tech}>Node</span>
                        <span className={styles.tech}>PostgreSQL</span>
                    </div>
                    <a href="https://github.com/Andrezinrc/url-shortener-api">Ver no GitHub</a>
                </div>

                <div className={styles.projectItem}>
                    <img src="/assets/images/projects/my_store.png" alt="catálogo digital" />
                    <h2>Catálogo Digital</h2>
                    <p>Catálogo online com busca, filtros, carrinho e integração com WhatsApp</p>
                    <div className={styles.technologies}>
                        <span className={styles.tech}>React</span>
                        <span className={styles.tech}>Vite</span>
                        <span className={styles.tech}>CSS Modules</span>
                    </div>
                    <a href="https://my-store-dun-phi.vercel.app/">Ver projeto</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
