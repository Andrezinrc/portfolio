import React, { useState }  from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

function Contact()
{
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function sendEmail(e)
    {
        e.preventDefault();

        if (!email) {
            setError("Por favor, digite seu e-mail.");
            setTimeout(() => { setError("") }, 4000);
            setSuccess("");
            return;
        }

        if (!emailRegex.test(email)) {
            setError('Ops! O email parece estar errado. Verifique se tem o "@" e algo como ".com".');
            setTimeout(() => { setError("") }, 4000);
            setSuccess("");
            return;
        }

        emailjs
            .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, {
                publicKey: process.env.REACT_APP_PUBLIC_KEY
            })
            .then(
                () => {
                    console.log("sucesso");
                    setSuccess("Obrigado! Seu e-mail foi enviado com sucesso. Entrarei em contato em breve.");
                    setError("");
                    setEmail("");
                },
                (err) => {
                    console.log("falhou: ", err.text);
                    setError("Ops! Algo deu errado. Tente novamente mais tarde.");
                    setTimeout(() => { setError("") }, 4000);
                    setSuccess("");
                },
            );
    }

    function handleEmailChange(e)
    {
        setEmail(e.target.value);
    }


    return (
        <section className={styles.contact} id="contact">
            <h2 className={styles.title}>Vamos falar sobre seu projeto?</h2>
            <small>Respondo em até 24 horas.</small>
            <div className={styles.contactContent}>
                <form onSubmit={sendEmail}>
                    <div className={styles.inputEmail}>
                        <input type="email" value={email} onChange={handleEmailChange} placeholder="Seu e-mail" />
                    </div>
                    <button type="submit" >Vamos conversar</button>
                    {success && <p className={styles.success}>{success}</p>}
                    {error && <p className={styles.error}>{error}</p>}
                </form>
                <div className={styles.social}>
                    <h3>Vamos nos conectar</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://www.linkedin.com/in/andr%C3%A9-moreira-940886233/">LinkedIn</a>
                        <a href="https://instagram.com/andremoreira.dev">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
