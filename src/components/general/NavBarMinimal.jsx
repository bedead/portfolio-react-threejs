// src/components/general/NavBarMinimal.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../constants";


const NavBarMinimal = () => {
    const [active, setActive] = useState("");

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
        >
            <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo / Name */}
                <a
                    href="#"
                    onClick={() => setActive("")}
                    className="text-lg font-semibold tracking-tight text-neutral-600 dark:text-neutral-400 hover:text-white transition-colors"
                >
                    Satyam Mishra<span className="text-neutral-400">.</span>
                </a>

                {/* Nav Links */}
                <ul className="hidden sm:flex space-x-4 text-[15px]">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={() => setActive(link.title)}
                                className={`${active === link.title
                                    ? "text-black dark:text-white underline underline-offset-4"
                                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:underline underline-offset-4"
                                    } font-medium transition-colors`}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu (optional if you want ultra-minimal, remove if not needed) */}
                <div className="sm:hidden">
                    <details className="relative">
                        <summary className="cursor-pointer text-neutral-700 dark:text-neutral-300 font-medium">
                            Menu
                        </summary>
                        <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md shadow-lg">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                        onClick={() => setActive(link.title)}
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </details>
                </div>
            </div>
        </motion.nav>
    );
};

export default NavBarMinimal;
