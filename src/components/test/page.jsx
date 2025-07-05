import { useState, useEffect, Suspense } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import PortalScene from "./PortalScene";



const ancientSymbols = ["※", "₦", "ø", "Ψ", "₪", "λ", "π", "卐"];

export default function Page() {
    const [isZooming, setIsZooming] = useState(false);
    const [currentSymbol, setCurrentSymbol] = useState(ancientSymbols[0]);
    const [showSubtext, setShowSubtext] = useState(false);
    const [showPortal, setShowPortal] = useState(false);
    const [symbolPosition, setSymbolPosition] = useState({ top: "50%", left: "50%" });
    const [startTyping, setStartTyping] = useState(false); // start typewriter after animation

    const [text] = useTypewriter({
        words: ["Hello", "Awesomeness loading.."],
        loop: 1,
        typeSpeed: 80,
        // deleteSpeed: 50,
        delaySpeed: 110,
    });

    useEffect(() => {
        const symbolInterval = setInterval(() => {
            const randomSymbol = ancientSymbols[Math.floor(Math.random() * ancientSymbols.length)];
            setCurrentSymbol(randomSymbol);
            const zoomTimeout = setTimeout(() => setIsZooming(true), 4500);

            const randomTop = Math.floor(Math.random() * 90);  // 0–90vh
            const randomLeft = Math.floor(Math.random() * 90); // 0–90vw
            setSymbolPosition({ top: `${randomTop}vh`, left: `${randomLeft}vw` });
        }, 180);

        const subtextTimeout = setTimeout(() => {
            setShowSubtext(true);
        }, 3500);

        const portalTimeout = setTimeout(() => {
            setShowPortal(true);
        }, 5000);

        return () => {
            clearInterval(symbolInterval);
            clearTimeout(subtextTimeout);
            clearTimeout(zoomTimeout);
            clearTimeout(portalTimeout);
        };
    }, []);

    return (
        <div className="w-screen h-screen bg-black text-white flex items-center justify-center relative overflow-hidden font-mono">
            {!showPortal && (
                <motion.div
                    className="flex flex-col items-center justify-center z-10 select-none"
                    animate={
                        isZooming
                            ? { scale: 4, opacity: 0, }
                            : { scale: 1, opacity: 1, }
                    }
                    transition={{
                        duration: 0.5,
                        ease: 'easeInOut'
                    }}>
                    {/* Background symbols */}
                    {/* Background animated symbols */}
                    <div
                        className="absolute pointer-events-none z-0 text-gray-400 text-[10rem] opacity-5 animate-pulse select-none"
                        style={{ top: symbolPosition.top, left: symbolPosition.left, position: "absolute", transform: "translate(-50%, -50%)" }}
                        animate={isZooming ? { opacity: 0 } : { opacity: 0.05 }}
                        transition={{ duration: 1 }}
                    >
                        {currentSymbol}
                    </div>
                    <div
                        className="absolute pointer-events-none z-0 text-gray-300 text-7xl opacity-5 select-none"
                        style={{ bottom: -symbolPosition.top, right: symbolPosition.left, position: "absolute", transform: "translate(-50%, -50%)" }}
                        animate={isZooming ? { opacity: 0 } : { opacity: 0.05 }}
                        transition={{ duration: 1 }}
                    >
                        {currentSymbol}
                    </div>


                    {/* Centered Hello block */}
                    <div className="flex flex-col items-center justify-center z-10 select-none">
                        {/* Animated wrapper */}
                        <motion.h1 initial={{ opacity: 0, scale: 0, y: 0 }}
                            animate={{ opacity: 1, scale: 1, y: showSubtext ? -20 : 0 }}
                            transition={{
                                opacity: { duration: 0.3, ease: "easeOut" },
                                scale: { duration: 0.4, ease: "easeOut" },
                                y: { type: "spring", stiffness: 120, damping: 15 },
                            }}
                            onAnimationComplete={() => setStartTyping(true)} className="text-3xl text-center md:text-7xl tracking-wide">
                            {text}
                            <Cursor />
                        </motion.h1>

                        {/* Subtext below */}
                        {showSubtext && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 15 }}
                                className="mt-4 text-sm text-gray-400 text-center px-4 max-w-sm"
                            >
                                This is a resource-intensive website. For the best experience, we
                                recommend using Wi-Fi and a modern browser.
                            </motion.p>
                        )}
                    </div>
                </motion.div>
            )}


            {showPortal && (
                <PortalScene />
            )}
        </div>
    );
}
