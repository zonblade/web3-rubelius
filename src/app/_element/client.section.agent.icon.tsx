"use client"
import { motion, useInView } from "framer-motion";
import { FaPuzzlePiece } from "react-icons/fa6";
import { useRef } from "react";

export function AnimatedIconDiagram() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });

    return (
        <div
            className="relative flex items-center justify-center w-full max-w-[330px] h-[220px] mx-auto overflow-hidden rounded-t-xl"
            ref={ref}
            style={{
                background: "linear-gradient(to bottom left, #4b5563, #0a0f1a, #111827)"
            }}
        >
            <motion.div
                className="rounded-full bg-black p-4 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2
                }}
            >
                <FaPuzzlePiece size={32} className="text-white" />
            </motion.div>

            {/* First pulsating ring */}
            <motion.div
                className="absolute h-14 w-14 rounded-full border-2 border-gray-400"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={isInView ? {
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.65, 0.4]
                } : { scale: 0.6, opacity: 0 }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
            />

            {/* Second pulsating ring */}
            <motion.div
                className="absolute h-14 w-14 rounded-full border-2 border-gray-400"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={isInView ? {
                    scale: [1.2, 1.6, 1.2],
                    opacity: [0.3, 0.5, 0.3]
                } : { scale: 0.6, opacity: 0 }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 0.5
                }}
            />
        </div>
    )
}