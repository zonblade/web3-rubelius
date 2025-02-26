"use client"
import { AnimatedIconDiagram } from "./client.section.agent.icon";
import { AnimatedDiagram } from "./client.section.agent.diagram";
import { AnimatedProgress } from "./client.section.agent.progress";
import { FaBolt } from "react-icons/fa6";
import { CE_PileWhite } from "./_pile/client.white";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function CE_Sect_Agent() {
    // Create refs for each section
    const headerRef = useRef(null);
    const column1Ref = useRef(null);
    const column2Ref = useRef(null);
    const column3Ref = useRef(null);

    // Check if elements are in view
    const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
    const column1InView = useInView(column1Ref, { once: false, amount: 0.3 });
    const column2InView = useInView(column2Ref, { once: false, amount: 0.3 });
    const column3InView = useInView(column3Ref, { once: false, amount: 0.3 });

    // Animation variants
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const columnVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <div className="w-full flex justify-center h-screen mb-[-150px]">
            <div className="w-full h-full max-w-[1200px]">
                <div className="h-[200px]"></div>

                <motion.div
                    ref={headerRef}
                    className="mb-8"
                    variants={headerVariants}
                    initial="hidden"
                    animate={headerInView ? "visible" : "hidden"}
                >
                    <motion.div
                        className="w-full flex justify-center pb-[30px]"
                        variants={itemVariants}
                    >
                        <CE_PileWhite
                            title="The problem"
                            width="210px"
                            icon={
                                <FaBolt size={24} />
                            } />
                    </motion.div>

                    <motion.div
                        className="w-full flex justify-center"
                        variants={itemVariants}
                    >
                        <span className="text-4xl font-bold text-white">
                            Unify your data sources
                        </span>
                    </motion.div>

                    <motion.div
                        className="w-full flex justify-center mt-4"
                        variants={itemVariants}
                    >
                        <span className="text-lg text-gray-400">
                            Integrate, manage, and deliver data from any source.
                        </span>
                    </motion.div>
                </motion.div>

                <div className="w-full flex flex-wrap">
                    <motion.div
                        ref={column1Ref}
                        className="w-full md:w-1/3 p-[10px]"
                        variants={columnVariants}
                        initial="hidden"
                        animate={column1InView ? "visible" : "hidden"}
                    >
                        <AnimatedDiagram />
                        <motion.div
                            className="w-full max-w-[330px] mx-auto bg-[#0a0f1a] rounded-b-xl flex flex-col p-[10px]"
                            variants={itemVariants}
                        >
                            <span className="text-lg mb-2">
                                Fragmented Sources
                            </span>
                            <span className="text-gray-400">
                                Data scattered across APIs, blockchains, and social platforms.
                            </span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={column2Ref}
                        className="w-full md:w-1/3 p-[10px]"
                        variants={columnVariants}
                        initial="hidden"
                        animate={column2InView ? "visible" : "hidden"}
                    >
                        <AnimatedIconDiagram />
                        <motion.div
                            className="w-full max-w-[330px] mx-auto bg-[#0a0f1a] rounded-b-xl flex flex-col p-[10px]"
                            variants={itemVariants}
                        >
                            <span className="text-lg mb-2">
                                Costly Integration
                            </span>
                            <span className="text-gray-400">
                                Managing multiple subscriptions and rising bills.
                            </span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        ref={column3Ref}
                        className="w-full md:w-1/3 p-[10px]"
                        variants={columnVariants}
                        initial="hidden"
                        animate={column3InView ? "visible" : "hidden"}
                    >
                        <AnimatedProgress />
                        <motion.div
                            className="w-full max-w-[330px] mx-auto bg-[#0a0f1a] rounded-b-xl flex flex-col p-[10px]"
                            variants={itemVariants}
                        >
                            <span className="text-lg mb-2">
                                Performance Bottlenecks
                            </span>
                            <span className="text-gray-400">
                                Legacy systems fail to scale with real-time demands.
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}