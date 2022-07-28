import React from "react";
import "./Contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4ewzs1e', 'template_moda2cp', form.current, 'fVmDRCFJU8asVr1Eh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
    };

    return (
        <section id="contact" className="contact">
            <h5>Get In Touch</h5> 
            <h2>Contact Me</h2>

            <div className="container contact__container">

                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineAlternateEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>email@email.com</h5>
                        <a href="mailto::email@email.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Usuario Facebbok</h5>
                        <a href="https://m.me/usuario.facebook" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <ImWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+5444444</h5>
                        <a href="https://api.whatsapp.con/send?phone+544444" target="_blank">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="7" required />
                    <button type="submmit" className="btn btn-primary">Send Message</button>
                </form>

            </div>
        </section>
    );
}
export default Contact;