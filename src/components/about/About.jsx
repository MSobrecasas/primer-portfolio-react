import React from "react";
import './About.css';
import ME from '../../assets/about-me.jpg';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { MdFolderSpecial } from 'react-icons/md';


const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">

                    <div className="about__cards">

                        <article className="about__card">
                            <RiCodeSSlashFill className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Programming</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>200+</small>
                        </article>

                        <article className="about__card">
                            <MdFolderSpecial className="about__icon" />
                            <h5>Projects</h5>
                            <small>80+ completed</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Modi quia itaque odio repudiandae aperiam totam voluptas,
                        recusandae delectus atque, quisquam commodi harum cum
                        blanditiis temporibus sed vero consectetur ullam quo.
                    </p>


                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

                </div>
            </div>
        </section>
    );
}

export default About;
