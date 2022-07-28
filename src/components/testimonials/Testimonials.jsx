import React from "react";
import "./Testimonials.css";
import AVTR1 from '../../assets/cheems.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: "Cheems",
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aliquid nam dicta asperiores eligendi reprehenderit ea repellat et possimus dolore, sit repellendus quibusdam dolorem maiores, aspernatur quaerat. Maxime, ducimus optio!'
    },
    {
        avatar: AVTR1,
        name: "Cheems",
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aliquid nam dicta asperiores eligendi reprehenderit ea repellat et possimus dolore, sit repellendus quibusdam dolorem maiores, aspernatur quaerat. Maxime, ducimus optio!'
    },
    {
        avatar: AVTR1,
        name: "Cheems",
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aliquid nam dicta asperiores eligendi reprehenderit ea repellat et possimus dolore, sit repellendus quibusdam dolorem maiores, aspernatur quaerat. Maxime, ducimus optio!'
    },
    {
        avatar: AVTR1,
        name: "Cheems",
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aliquid nam dicta asperiores eligendi reprehenderit ea repellat et possimus dolore, sit repellendus quibusdam dolorem maiores, aspernatur quaerat. Maxime, ducimus optio!'
    },
]


const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonial</h2>
            <Swiper className="container testimonial__container"
            modules={[Pagination]}
            spaceBetween={400}
            slidesPerView={1}
            pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt=" Avatar" />
                                </div>
                                <h5 className="client__name"> {name} </h5>
                                <small className="client__review">
                                  {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    );
}
export default Testimonials;