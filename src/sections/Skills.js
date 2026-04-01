import React from "react";
import styles from "./Skills.module.css";

function Skills()
{
    return (
        <section className={styles.skills} id="skills">
            <h2 className={styles.title}>Minhas Habilidades</h2>
            <div className={styles.skillsList}>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/javascript.png" alt="JavaScript" />
                    <div className={styles.skillName}>JavaScript</div>
                </div>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/typescript.png" alt="TypeScript" />
                    <div className={styles.skillName}>TypeScript</div>
                </div>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/react.png" alt="React" />
                    <div className={styles.skillName}>React</div>
                </div>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/sass.png" alt="Sass" />
                    <div className={styles.skillName}>Sass</div>
                </div>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/node.png" alt="Node" />
                    <div className={styles.skillName}>Node.js</div>
                </div>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/java.png" alt="Java" />
                    <div className={styles.skillName}>Java</div>
                </div>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/springboot.png" alt="Spring Boot" />
                    <div className={styles.skillName}>Spring Boot</div>
                </div>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/postgresql.png" alt="PostgreSQL" />
                    <div className={styles.skillName}>PostgreSQL</div>
                </div>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/docker.png" alt="Docker" />
                    <div className={styles.skillName}>Docker</div>
                </div>
                <div className={styles.skillItem}>
                    <img src="/assets/images/skills/git.png" alt="Git" />
                    <div className={styles.skillName}>Git</div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
