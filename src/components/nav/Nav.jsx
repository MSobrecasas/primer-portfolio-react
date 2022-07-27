import React from "react";
import './Nav.css';
import {RiHome2Fill} from 'react-icons/ri';
import { RiUserHeartFill } from "react-icons/ri";
import { BsKeyboardFill} from 'react-icons/bs';
import {AiOutlineMessage} from 'react-icons/ai';
import { useState } from "react";

const Nav = () => {
    const[activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" 
            onClick={() => setActiveNav('#')}
            className={activeNav === '#' ? 'active' :''} > <RiHome2Fill/> </a>
            <a href="#about"
            onClick={() => setActiveNav('#about')}
            className={activeNav === '#about' ? 'active' :''} > <RiUserHeartFill/> </a>
            <a href="#experience"  
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active' :''} > <BsKeyboardFill/> </a>
            <a href="#contact"
             onClick={() => setActiveNav('#contact')}
             className={activeNav === '#contact' ? 'active' :''} > <AiOutlineMessage/> </a>
        </nav>
    );
}
export default Nav;