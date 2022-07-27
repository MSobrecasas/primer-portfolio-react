import React from "react";
import "./Experience.css";
import { TiInputChecked } from "react-icons/ti";


const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h5>What skills I  Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>JavasScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>Angular</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Experienced</small>
                            </div>

                        </article>


                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>Springboot</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>php</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>MySql</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <TiInputChecked className="experience__details-icon" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;