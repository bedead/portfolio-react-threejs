import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from '../styles'
import { navLinks } from "../constants";
import logo_white from '../assets/logo-white.webp'
import menu from '../assets/menu.webp'
import close from '../assets/close.webp'

const NavBar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={
            `${styles.paddingX
            } w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-b from-white to-primary`
        }>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link to='/portfolio-react-threejs' className="flex items-center gap-2"
                    onClick={
                        () => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }
                    }>
                    <img src={logo_white}
                        className="w-10 h-10 object-contain"
                        alt='logo' />
                    <div className=" md:block lg:flex ">

                        <p className="text-black text-[18px] flex">
                            Satyam Mishra &nbsp;
                        </p>
                        <span className="text-[18px] sm:block hidden">| Bedead</span>
                    </div>
                </Link>
                <ul className="list-none hidden sm:flex flex-row md:gap-4 lg:gap-10">
                    {
                        navLinks.map((link) => (
                            <li key={
                                link.id
                            }
                                className={
                                    `${active == link.title ? "text-black" : "text-secondary"
                                    }
                            hover:text-black hover:underline underline-offset-8  text-[18px] font-medium cursor-pointer`
                                }
                                onClick={
                                    () => setActive(link.title)
                                }>
                                <a href={
                                    (link.id == 'certificate' || link.id == 'resume' || link.id == 'blogs') ? `/portfolio-react-threejs/${link.id}` : `/portfolio-react-threejs/#${link.id
                                        }`
                                }>
                                    {
                                        link.title
                                    } </a>
                            </li>
                        ))
                    } </ul>


                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={
                        toggle ? close : menu
                    }
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={
                            () => setToggle(!toggle)
                        } />

                    <div className={
                        `${!toggle ? 'hidden' : 'flex'
                        } p-6 bg-gradient-to-r from-[#f6f6f6] to-white absolute
                    top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl outline`
                    }>
                        <ul className="list-none flex justify-end items-start flex-col gap-2">
                            {
                                navLinks.map((link) => (
                                    <li key={
                                        link.id
                                    }
                                        className={
                                            `${active == link.title ? "text-black" : "text-secondary"
                                            } font-poppins hover:underline underline-offset-8 font-medium cursor-pointer text-[16px] hover:text-black`
                                        }
                                        onClick={
                                            () => {
                                                setToggle(!toggle);
                                                setActive(link.title);
                                            }
                                        }>
                                        <a href={
                                            (link.id == 'certificate' || link.id == 'resume' || link.id == 'blogs') ? `/portfolio-react-threejs/${link.id}` : `/portfolio-react-threejs/#${link.id
                                                }`
                                        }>
                                            {
                                                link.title
                                            } </a>
                                    </li>
                                ))
                            } </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
