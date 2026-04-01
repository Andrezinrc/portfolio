import React from "react";
import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Skills from "../../sections/Skills";
import Projects from "../../sections/Projects";
import Contact from "../../sections/Contact";
import styles from "./Content.module.css";

function Content()
{
    return (
        <main className={styles.content}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}

export default Content;
