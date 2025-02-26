"use client"
import { motion, useInView } from "framer-motion";
import { FaBook } from "react-icons/fa6";
import { useRef } from "react";

export function AnimatedDiagram() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    return (
        <div
            ref={ref}
            className="relative flex items-center justify-center w-full max-w-[330px] h-[220px] mx-auto overflow-hidden rounded-t-xl"
            style={{
                background: "linear-gradient(to bottom left, #4b5563, #0a0f1a, #0a0f1a)"
            }}
        >
            {/* Original elements */}
            {/* Left Panel */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="absolute left-[-35%] p-2 w-[200px] h-[120px] bg-[#12203a] rounded-lg"
            >
                {/* Placeholder content */}
                <div className="w-full h-8 bg-gray-700 rounded-md mb-1"></div>
                <div className="w-full h-4 bg-gray-600 rounded-md mb-1"></div>
                <div className="w-full h-4 bg-gray-600 rounded-md"></div>
            </motion.div>

            {/* Center Icon */}
            <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100 }}
                className="absolute bg-blue-500 rounded-full p-2 shadow-lg z-10 h-[28px] w-[28px]"
            >
                <FaBook size={12} />
            </motion.div>

            {/* Horizontal Line - Left to Center */}
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={isInView ? { opacity: 1, width: "60px" } : { opacity: 0, width: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute left-[30%] top-1/2 border-t-2 border-dashed border-gray-400"
                style={{ transform: "translateY(-50%)" }}
            ></motion.div>

            {/* Vertical Connecting Line */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={isInView ? { opacity: 1, height: "85px" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{
                    position: "absolute",
                    top: "calc(37% - 13px)",
                    right: "50%",
                    width: "2px",
                }}
                className="border-r-2 border-dashed border-gray-400"
            ></motion.div>

            {/* Right-Side Labels */}
            <div className="absolute right-[-5%] flex flex-col space-y-5">
                {["Blockchains", "API", "Social platform"].map((text, index) => (
                    <motion.div
                        key={text}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#129996",
                            color: "#1a2a3d",
                            transition: { duration: 0.1 }
                        }}
                        className="p-1 text-xs bg-[#1a2a3d] text-[#129996] border-1 border-[#129996] rounded-lg cursor-pointer"
                    >
                        {text}
                    </motion.div>
                ))}
            </div>

            {/* Connecting Lines - Center to Right Labels */}
            {[0, 1, 2].map((index) => (
                <motion.div
                    key={`line-${index}`}
                    initial={{ opacity: 0, width: 0 }}
                    animate={isInView ? { opacity: 1, width: "80px" } : { opacity: 0, width: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    style={{
                        position: "absolute",
                        top: `calc(50% + ${(index - 1) * 42}px)`,
                        right: "25%",
                        transformOrigin: "right"
                    }}
                    className="border-t-2 border-dashed border-gray-400"
                ></motion.div>
            ))}

            {/* PULSATING ANIMATION ELEMENTS */}
            {/* Left to center pulse */}
            <motion.div
                className="absolute left-[45%] top-[106px] h-2 w-2 bg-sky-400 rounded-full z-20 blur-[2px]"
                initial={{ x: -60, opacity: 0 }}
                animate={isInView ? {
                    x: 0,
                    opacity: [0, 1, 0]
                } : { x: -60, opacity: 0 }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    repeatDelay: 0.5
                }}
                style={{ transform: "translateY(-50%)" }}
            />

            {/* Pulses for the three horizontal lines */}
            {[0, 1, 2].map((index) => (
                <motion.div
                    key={`pulse-${index}`}
                    className="absolute h-2 w-2 bg-sky-400 rounded-full z-20 blur-[2px]"
                    initial={{ x: -80, opacity: 0 }}
                    animate={isInView ? {
                        x: 0,
                        opacity: [0, 1, 0]
                    } : { x: -80, opacity: 0 }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                        repeatDelay: 1,
                        delay: 2 + index * 0.3
                    }}
                    style={{
                        right: "25%",
                        top: `calc(50% + ${((index - 1) * 42) - 4}px)`,
                        transformOrigin: "right"
                    }}
                />
            ))}
        </div>
    );
}