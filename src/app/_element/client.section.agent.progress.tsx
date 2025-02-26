"use client"
import { motion, useInView } from "framer-motion";
import { FaClock } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";

export function AnimatedProgress() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3 });
    const [progressValues, setProgressValues] = useState([70, 45, 25]);

    useEffect(() => {
        if (!isInView) return;

        // Create separate intervals for each progress bar with different update frequencies
        const intervals = [
            setInterval(() => {
                setProgressValues(prev => [
                    Math.min(100, Math.max(10, prev[0] + Math.floor(Math.random() * 21) - 10)),
                    prev[1],
                    prev[2]
                ]);
            }, 1000), // First bar updates every 2 seconds
            
            setInterval(() => {
                setProgressValues(prev => [
                    prev[0],
                    Math.min(100, Math.max(10, prev[1] + Math.floor(Math.random() * 21) - 10)),
                    prev[2]
                ]);
            }, 1300), // Second bar updates every 3 seconds
            
            setInterval(() => {
                setProgressValues(prev => [
                    prev[0],
                    prev[1],
                    Math.min(100, Math.max(10, prev[2] + Math.floor(Math.random() * 21) - 10))
                ]);
            }, 800) // Third bar updates every 4 seconds
        ];

        // Cleanup all intervals on unmount or when not in view
        return () => intervals.forEach(interval => clearInterval(interval));
    }, [isInView]);

    return (
        <div
            ref={ref}
            className="relative flex flex-col w-full max-w-[330px] h-[220px] bg-[#0a0f1a] mx-auto overflow-hidden rounded-t-xl p-6"
        >
            {/* Header placeholder (gray pile) */}
            <div className="w-[150px] h-5 bg-gray-700 rounded-md mb-5"></div>

            <div className="space-y-6 mt-3">
                {progressValues.map((value, index) => (
                    <div key={index} className="flex items-center">
                        {/* Left label placeholder */}
                        <div className="w-[90px] h-[15px] bg-gray-700 rounded-md mr-4 flex-shrink-0"></div>

                        {/* Progress bar */}
                        <div className="h-[15px] bg-[#12203a] rounded-full w-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${value}%` } : { width: 0 }}
                                transition={{
                                    duration: 0.8, // Faster transition to accommodate changes
                                    delay: index * 0.2,
                                    ease: "easeOut"
                                }}
                                className={`h-full rounded-full ${
                                    value > 50 ? "bg-cyan-400" :
                                    value > 25 ? "bg-blue-500" : "bg-indigo-500"
                                }`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <motion.div
                className="absolute top-5 right-5 bg-gradient-to-br from-blue-500 to-cyan-400 p-2 rounded-full shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-sm"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                >
                    <FaClock size={16} className="text-black" />
                </motion.div>
            </motion.div>
        </div>
    );
}