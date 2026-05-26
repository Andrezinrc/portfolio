import React from "react";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Skills from "../../sections/Skills";
import Projects from "../../sections/Projects";
import styles from "./Content.module.css";

function Content()
{
    return (
        <main className={styles.content}>
            <Hero />
            <About />
            <Skills />
            <Projects />
        </main>
    );
}

export default Content;
