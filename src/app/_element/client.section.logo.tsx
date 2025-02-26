"use client"
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function CE_Sect_Logo() {
    const iconsData = [
        "https://rubelius.retas.org/assets/icons/binance.png",
        "https://rubelius.retas.org/assets/icons/bloomberg.png",
        "https://rubelius.retas.org/assets/icons/blur.png",
        "https://rubelius.retas.org/assets/icons/coingecko.png",
        "https://rubelius.retas.org/assets/icons/coinglass.png",
        "https://rubelius.retas.org/assets/icons/coinmarketcap.png",
        "https://rubelius.retas.org/assets/icons/dexscreener.png",
        "https://rubelius.retas.org/assets/icons/dune.png",
        "https://rubelius.retas.org/assets/icons/etherscan.png",
        "https://rubelius.retas.org/assets/icons/kaito.png",
        "https://rubelius.retas.org/assets/icons/messari.png",
        "https://rubelius.retas.org/assets/icons/nansen.png",
        "https://rubelius.retas.org/assets/icons/opensea.png",
        "https://rubelius.retas.org/assets/icons/solscan.png",
        "https://rubelius.retas.org/assets/icons/the-graph.png",
        "https://rubelius.retas.org/assets/icons/x.png",
    ];

    // Create a duplicated array to allow for seamless looping
    const duplicatedIcons = [...iconsData, ...iconsData];

    // Reference to the container to measure its width
    const containerRef = useRef(null);
    const iconRef = useRef(null);
    const [iconWidth, setIconWidth] = useState(0);

    // Adjust this speed (px per second) as desired
    const speed = 50;

    useEffect(() => {
        if (containerRef.current && iconRef.current) {
            //@ts-expect-error: Object is possibly 'null'.
            setContainerWidth(containerRef.current.offsetWidth);
            // Icon width including padding
            //@ts-expect-error: Object is possibly 'null'.
            const fullIconWidth = iconRef.current.offsetWidth;
            setIconWidth(fullIconWidth);
        }
    }, []);

    // Calculate total width of all icons
    const totalWidth = iconWidth * iconsData.length;

    // Duration should be calculated based on the total width of all icons
    const duration = totalWidth / speed;

    const gradientStyle = {
        background: 'linear-gradient(to bottom right, #3B81F6, #23d3ed10, #3B81F6)'
    };

    return (
        <div className="w-full flex justify-center h-[200px] overflow-hidden">
            <div
                ref={containerRef}
                className="w-full h-full relative overflow-hidden"
            >
                <motion.div
                    className="flex items-center"
                    animate={{
                        x: [-200, -(totalWidth + 200)]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: duration,
                            ease: "linear",
                        }
                    }}
                >
                    {duplicatedIcons.map((icon, index) => (
                        <motion.div
                            key={index}
                            ref={index === 0 ? iconRef : null}
                            className="rounded-xl p-[40px] flex items-center justify-center hover:cursor-pointer"
                            initial={{ opacity: 0.5 }}
                            whileHover={{
                                opacity: 1,
                                scale: 1.05,
                            }}
                            transition={{
                                opacity: { duration: 0.3, ease: "easeInOut" },
                                scale: { duration: 0.3, ease: "easeInOut" }
                            }}
                        >
                            <div
                                className="flex flex-row items-center justify-center h-[150px] w-[150px] px-[10px] relative overflow-hidden backdrop-blur-md rounded-xl"
                                style={gradientStyle}
                            >
                                <div className="absolute top-0 left-0 w-full h-full p-[0.5px]">
                                    <div className="w-full h-full bg-black rounded-xl">
                                    </div>
                                </div>
                                {/* Top-left glow */}
                                <div
                                    className="absolute top-[-20px] left-[-20px] w-[50px] h-[50px] rounded-full blur-md"
                                    style={{ background: 'radial-gradient(circle, #3B81F6 0%, transparent 50%)' }}
                                ></div>

                                {/* Bottom-right glow */}
                                <div
                                    className="absolute bottom-[-20px] right-[-20px] w-[50px] h-[50px] rounded-full blur-md"
                                    style={{ background: 'radial-gradient(circle, #3B81F6 0%, transparent 50%)' }}
                                ></div>

                                <div className="flex-1 flex items-center justify-center z-10 text-white">
                                    <img
                                        src={icon}
                                        alt="logo"
                                        className="w-auto h-[100px] mx-[150px]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}