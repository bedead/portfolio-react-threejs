import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from '../styles'
import { navLinks, toolLinks } from "../constants";
import logo_white from '../assets/logo/logo-white.webp'
import menu from '../assets/general/bars-solid.svg'
import close from '../assets/general/circle-xmark-regular.svg'
import { fadeIn } from "../utils/motion";


const NavBar = () => {
    const [active, setActive] = useState('');
    const [toggle, setToggle] = useState(false);
    const [toggleDialogBox, setToolsDialogBox] = useState(false);

    return (
        <motion.nav className={
            `${styles.paddingX
            } w-full flex items-center py-5 fixed top-0 z-20 bg-black`
        }
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <a href="" className="flex items-center gap-2"
                    onClick={
                        () => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }
                    }>
                    <img src={logo_white}
                        className="w-10 h-10 object-contain"
                        alt='logo' />
                    <div className="text-primary text-[18px]  md:block lg:flex ">

                        <p className="flex">
                            Satyam Mishra &nbsp;
                        </p>
                        <span className="sm:block hidden">| Bedead</span>
                    </div>
                </a>
                {/* Bigger Screen UI */}
                <ul className="list-none hidden sm:flex flex-row md:gap-4 items-center">
                    {
                        navLinks.map((link) => (
                            <li key={
                                link.id
                            }
                                className={link.type == 'tools' ?
                                    `bg-secondary text-gray-400 hover:text-primary py-2 px-3 rounded-xl text-[18px] font-medium cursor-pointer`
                                    : `${active == link.title ? "text-primary" : "text-gray-400"
                                    }
                        hover:text-primary underline-offset-8 text-[18px] font-medium cursor-pointer`}
                                onClick={
                                    () => {
                                        setActive(link.title);
                                        { link.type == 'tools' ? setToolsDialogBox(!toggleDialogBox) : null }
                                    }
                                }>
                                {link.type == 'tools' ? link.title : <a href={` #${link.id}`} >
                                    {
                                        link.title
                                    } </a>}
                            </li>
                        ))
                    } </ul>
                {/* Tools DialogBox UI */}
                <AnimatePresence>
                    {toggleDialogBox && (
                        <motion.div
                            className={
                                `${!toggleDialogBox ? 'hidden' : 'flex'
                                } p-6 bg-primary absolute
                    top-60 right-40 sm:top-20 sm:right-5 mx-4 my-2 min-w-[140px] z-10 rounded-xl outline`
                            }
                            initial={{ scale: 0.1, opacity: 0, }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.1, opacity: 0 }}
                            transition={{ type: 'spring', damping: 10 }}
                        >
                            <ul className="list-none flex justify-end items-start flex-col gap-2">
                                {
                                    toolLinks.map((link) => (
                                        <motion.li
                                            key={
                                                link.id
                                            }
                                            variants={
                                                fadeIn('right', 'spring', 0.1, 0.75)
                                            }
                                            className={
                                                `${active == link.title ? "text-black underline" : "text-secondary"
                                                } font-poppins hover:underline underline-offset-8 font-medium cursor-pointer text-[16px] hover:text-secondary`
                                            }
                                            onClick={
                                                () => {
                                                    { link.type == 'tools' ? setToolsDialogBox(!toggleDialogBox) : null };
                                                    setActive(link.title);
                                                    window.open(link.url, '_blank');
                                                }
                                            }>
                                            {link.type == 'tools' ? link.title : <a to={`#${link.id}`}>
                                                {
                                                    link.id
                                                } </a>}
                                        </motion.li>
                                    ))
                                } </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile UI */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={
                        toggle ? close : menu
                    }
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={
                            () => {
                                { setToggle(!toggle) };
                                { toggleDialogBox == true ? setToolsDialogBox(false) : null };
                            }
                        } />

                    <AnimatePresence>
                        {toggle && (
                            <motion.div
                                className={
                                    `${!toggle ? 'hidden' : 'flex'
                                    } p-6 bg-gradient-to-r from-[#f6f6f6] to-white absolute
                    top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl outline`
                                }
                                initial={{ scale: 0.1, opacity: 0, }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.1, opacity: 0 }}
                                transition={{ type: 'spring', damping: 10 }}
                            >
                                <ul className="list-none flex justify-end items-start flex-col gap-2">
                                    {
                                        navLinks.map((link) => (
                                            <li key={
                                                link.id
                                            }
                                                className={
                                                    `${active == link.title ? "text-black underline" : "text-secondary"
                                                    } font-poppins hover:underline underline-offset-8 font-medium cursor-pointer text-[16px] hover:text-secondary`
                                                }
                                                onClick={
                                                    () => {
                                                        { link.type != 'tools' ? setToggle(!toggle) : null };
                                                        setActive(link.title);
                                                        { link.type == 'tools' ? setToolsDialogBox(!toggleDialogBox) : null };
                                                    }
                                                }>
                                                {link.type == 'tools' ? link.title : <a href={`#${link.id}`}>
                                                    {
                                                        link.title
                                                    } </a>}
                                            </li>
                                        ))
                                    } </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav >
    )
}

export default NavBar;
