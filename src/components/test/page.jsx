import React, { useState, useEffect, Suspense } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ancientSymbols = ["※", "₦", "ø", "Ψ", "₪", "λ", "π", "卐"];

function Portal() {
    return (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2, 0.5, 16, 100]} />
            <meshStandardMaterial
                color="#00FFFF"
                emissive="#0ff"
                metalness={0.6}
                roughness={0.2}
            />
        </mesh>
    );
}

export default function Page() {
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

            const randomTop = Math.floor(Math.random() * 90);  // 0–90vh
            const randomLeft = Math.floor(Math.random() * 90); // 0–90vw
            setSymbolPosition({ top: `${randomTop}vh`, left: `${randomLeft}vw` });
        }, 180);

        const subtextTimeout = setTimeout(() => {
            setShowSubtext(true);
        }, 2000);

        const portalTimeout = setTimeout(() => {
            setShowPortal(false);
        }, 4000);

        return () => {
            clearInterval(symbolInterval);
            clearTimeout(subtextTimeout);
            clearTimeout(portalTimeout);
        };
    }, []);

    return (
        <div className="w-screen h-screen bg-[#1E1E1E] text-white flex items-center justify-center relative overflow-hidden font-mono">
            {!showPortal && (
                <>
                    {/* Background symbols */}
                    {/* Background animated symbols */}
                    <div
                        className="absolute pointer-events-none z-0 text-gray-400 text-[10rem] opacity-5 animate-pulse select-none"
                        style={{ top: symbolPosition.top, left: symbolPosition.left, position: "absolute", transform: "translate(-50%, -50%)" }}
                    >
                        {currentSymbol}
                    </div>
                    <div
                        className="absolute pointer-events-none z-0 text-gray-300 text-7xl opacity-5 select-none"
                        style={{ bottom: -symbolPosition.top, right: symbolPosition.left, position: "absolute", transform: "translate(-50%, -50%)" }}
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
                                y: { type: "spring", stiffness: 150, damping: 15 },
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
                                transition={{ duration: 0.6, type: "spring", stiffness: 150, damping: 15 }}
                                className="mt-4 text-sm text-gray-400 text-center px-4 max-w-sm"
                            >
                                This is a resource-intensive website. For the best experience, we
                                recommend using Wi-Fi and a modern browser.
                            </motion.p>
                        )}
                    </div>
                </>
            )}

            {/* 
            {showPortal && (
                <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
                    <ambientLight intensity={1.2} />
                    <pointLight position={[5, 5, 5]} intensity={2} />
                    <Suspense fallback={null}>
                        <Portal />
                    </Suspense>
                    <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
            )} */}
        </div>
    );
}
