import React from "react";
import "./Testimonials.css";
import AVTR1 from '../../assets/cheems.jpg'


const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonial</h2>
            <div className="container testimonial__container">
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt=" Avatar" />
                    </div>
                    <h5 className="client__name"> Cheems </h5>
                    <small className="client__review">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Dignissimos aliquid nam dicta asperiores eligendi
                        reprehenderit ea repellat et possimus dolore,
                        sit repellendus quibusdam dolorem maiores, aspernatur quaerat.
                        Maxime, ducimus optio!
                    </small>
                </article>

                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt=" Avatar" />
                    </div>
                    <h5 className="client__name"> Cheems </h5>
                    <small className="client__review">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Dignissimos aliquid nam dicta asperiores eligendi
                        reprehenderit ea repellat et possimus dolore,
                        sit repellendus quibusdam dolorem maiores, aspernatur quaerat.
                        Maxime, ducimus optio!
                    </small>
                </article>

                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVTR1} alt=" Avatar" />
                    </div>
                    <h5 className="client__name"> Cheems </h5>
                    <small className="client__review">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Dignissimos aliquid nam dicta asperiores eligendi
                        reprehenderit ea repellat et possimus dolore,
                        sit repellendus quibusdam dolorem maiores, aspernatur quaerat.
                        Maxime, ducimus optio!
                    </small>
                </article>

            </div>
        </section>
    );
}
export default Testimonials;