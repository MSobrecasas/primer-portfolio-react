import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experiencie from './components/experience/Experience';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import { Servicios } from './components/servicios/Servicios';

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experiencie />
            <Portfolio />
            <Servicios />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App