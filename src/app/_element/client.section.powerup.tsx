"use client"

import { FaBolt } from "react-icons/fa6"
import { CE_PileBlue } from "./_pile/client.blue"
import { CE_PileWhite } from "./_pile/client.white"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function CE_Sect_PowerUp() {
    // Create individual refs for each element
    const imageRef = useRef(null)
    const pileWhiteRef = useRef(null)
    const headingRef = useRef(null)
    const pillsRef = useRef(null)

    // Check if each element is in view
    const imageInView = useInView(imageRef, { once: false, amount: 0.2 })
    const pileWhiteInView = useInView(pileWhiteRef, { once: false, amount: 0.2 })
    const headingInView = useInView(headingRef, { once: false, amount: 0.2 })
    const pillsInView = useInView(pillsRef, { once: false, amount: 0.2 })

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    }

    return (
        <div className="w-full flex justify-center h-[calc(100vh-200px)]">
            <div className="w-full h-full max-w-[1200px] flex flex-col items-center justify-center">
                <motion.div
                    ref={imageRef}
                    className="relative w-full h-[620px] mb-[-240px]"
                    variants={itemVariants}
                    initial="hidden"
                    animate={imageInView ? "visible" : "hidden"}
                >
                    <Image
                        className="bottom-0"
                        src={"/assets/enabler.png"}
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </motion.div>

                <motion.div
                    ref={pileWhiteRef}
                    className="mb-12"
                    variants={itemVariants}
                    initial="hidden"
                    animate={pileWhiteInView ? "visible" : "hidden"}
                >
                    <CE_PileWhite
                        title="Powered By Human"
                        width="210px"
                        icon={<FaBolt size={24} />} />
                </motion.div>

                <motion.div
                    ref={headingRef}
                    className="flex justify-center items-center flex-col"
                    variants={itemVariants}
                    initial="hidden"
                    animate={headingInView ? "visible" : "hidden"}
                >
                    <h2 className="text-4xl font-bold text-white text-center mb-6">
                        <span>Power Up Your AI Agent in</span><br /><span className="text-cyan-300">One Go</span>
                    </h2>
                    <p className="max-w-[600px] text-center text-gray-400 mb-6">
                        Access 20+ premium data sources through one powerful endpoint.
                        From real-time markets to social intelligence,
                        unlock the full spectrum of data your AI needs.
                    </p>
                </motion.div>

                <motion.div
                    ref={pillsRef}
                    className="flex justify-center items-center flex-col"
                    initial="hidden"
                    animate={pillsInView ? "visible" : "hidden"}
                >
                    <div className="flex flex-wrap justify-center max-w-[700px]">
                        {["Real Time", "Sentiment Anl", "Chain Intel", "News Analysis", "Others"].map((title, i) => (
                            <motion.div
                                key={title}
                                className="p-4"
                                variants={{
                                    hidden: { scale: 0.8, opacity: 0 },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: { delay: i * 0.1, duration: 0.4 }
                                    }
                                }}
                            >
                                <CE_PileBlue title={title} icon={<FaBolt size={24} />} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}