"use client";
import { JSX } from "react";

interface Prop {
    icon: JSX.Element;
    title: string;
}

export function CE_PileBlue(prop: Prop) {
    const gradientStyle = {
        background: 'linear-gradient(to bottom right, #3B81F6, #23d3ed10, #3B81F6)'
    };

    return (
        <button className="flex flex-row items-center justify-center min-h-[42px] min-w-[200px] px-[10px] relative overflow-hidden backdrop-blur-md rounded-xl"
            style={gradientStyle}>
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

            <div className="flex-1 max-w-[38px] flex items-center justify-center z-10 text-white">
                {prop.icon}
            </div>
            <div className="flex-1 flex items-center justify-center z-10 text-white">
                <span>{prop.title}</span>
            </div>
        </button>
    )
}