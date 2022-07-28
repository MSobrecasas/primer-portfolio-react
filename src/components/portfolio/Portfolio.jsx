import React from "react";
import "./Portfolio.css";

const data = [
    {
        id: 1,
        image: "https://picsum.photos/id/237/200/300",
        title: 'This is a portfolio item title',
        github: '',
        demo: '',
    },
    {
        id: 2,
        image: "https://picsum.photos/id/237/200/300",
        title: 'This is a portfolio item title',
        github: '',
        demo: '',
    },
    {
        id: 3,
        image: "https://picsum.photos/id/237/200/300",
        title: 'This is a portfolio item title',
        github: '',
        demo: '',
    },
    {
        id: 4,
        image: "https://picsum.photos/id/237/200/300",
        title: 'This is a portfolio item title',
        github: '',
        demo: '',
    },
    {
        id: 5,
        image: "https://picsum.photos/id/237/200/300",
        title: 'This is a portfolio item title',
        github: '',
        demo: '',
    },
    {
        id: 6,
        image: "https://picsum.photos/id/237/200/300",
        title: 'This is a portfolio item title',
        github: '',
        demo: '',
    }
]

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <div key={id} className="portfolio__item">
                                <img src={image} alt={title} />
                                <div className="portfolio__item-info">
                                    <h3>{title}</h3>
                                    <div className="portfolio__item-links">
                                        <a href={github} target="_blank" rel="noopener noreferrer">Github</a>
                                        <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}
export default Portfolio;