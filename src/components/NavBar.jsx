import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from '../styles'
import { navLinks } from "../constants";
import logo_white from '../assets/logo-white.png'
import menu from '../assets/menu.png'
import close from '../assets/close.png'

const NavBar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to='/' className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                    <img src={logo_white} className="w-10 h-10 object-contain" alt='logo' />
                    <p className="text-black text-[18px] flex">
                        Satyam Mishra &nbsp;
                        <span className="sm:block hidden">| Bedead</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex space-x-4 lg:space-x-7 flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active == link.title ? "text-black" : "text-secondary"}
                            hover:text-black text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>


                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)} />

                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-[#f6f6f6] to-white absolute
                    top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `} >
                        <ul className="list-none flex justify-end items-start flex-col gap-2">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${active == link.title ? "text-black" : "text-secondary"}
                            font-poppins font-medium cursor-pointer text-[16px] hover:text-black`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(link.title);
                                    }}

                                >
                                    <a href={`#${link.id}`}>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;