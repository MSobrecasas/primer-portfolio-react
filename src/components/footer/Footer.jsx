import React from "react";
import "./Footer.css";
import {RiFacebookFill, RiTwitterFill, RiInstagramFill} from "react-icons/ri";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo"> Wonhass</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#servicios">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href=""><RiFacebookFill/></a>
                <a href=""><RiTwitterFill/></a>
                <a href=""><RiInstagramFill/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Maria Sobrecasas. All Rights Reserved</small>
            </div>
        </footer>
    );
}
export default Footer;
