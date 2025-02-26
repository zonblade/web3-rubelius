"use client"

import { FaBolt } from "react-icons/fa"
import { CE_PileWhite } from "./_pile/client.white"
import { FaArrowRight, FaCoins } from "react-icons/fa6"

export function CE_Sect_Header() {
    return (
        <div className="relative w-full flex justify-center h-[calc(100vh-250px)] bg-gradient-to-b from-blue-900/40 to-transparent">
            <div className="w-full h-full max-w-[1200px]">
                <div className="flex flex-row h-[64px]">
                    <div className="flex-1 h-full flex justify-start items-center">
                        <div>RUBELIUS</div>
                    </div>
                    <div className="flex-1 h-full flex justify-end items-center">
                        <div>
                            <button className={
                                "flex flex-row items-center justify-center px-4 py-2 "
                                + "rounded-xl bg-gradient-to-b from-white to-cyan-50 hover:from-gray-50 hover:to-cyan-100 text-blue-900 "
                                + "font-medium shadow-md hover:shadow-lg transition-all gap-2 "
                                + "min-w-[160px]"}>
                                <span className="text-[#00057F]">
                                    Get Started
                                </span>
                                <span>
                                    <FaArrowRight size={14} color="#00057F" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-full flex flex-col items-center justify-center">
                    <CE_PileWhite title="Bolt The Goat" icon={<FaBolt size={24} />} width="210px" />
                    <h2 className="text-4xl font-bold text-white text-center mb-6 mt-6">
                        Unlock AI’s Full Potential with<br />
                        <span className="text-cyan-400">Unified Data Streams</span>
                    </h2>
                    <p className="text-gray-400 mb-6">
                        Solve data fragmentation, slash costs, and supercharge AI agents
                    </p>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <button className={
                            "flex flex-row items-center justify-center px-4 py-2 "
                            + "rounded-xl bg-gradient-to-b from-white to-cyan-50 hover:from-gray-50 hover:to-cyan-100 text-blue-900 "
                            + "font-medium shadow-md hover:shadow-lg transition-all gap-2 "
                            + "min-w-[160px]"}>
                            <span className="text-[#00057F]">
                                Buy $RUBL
                            </span>
                            <span>
                                <FaCoins size={14} color="#00057F" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
