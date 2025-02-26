"use client";
import { JSX } from "react";

interface Prop {
    icon: JSX.Element;
    title: string;
    width: string;
}

export function CE_PileWhite(prop: Prop) {
    return (
        <button style={{
            width: prop.width
        }} className={
            "flex flex-row items-center justify-center min-h-[42px] min-w-[200px] px-[10px] relative overflow-hidden bg-transparent backdrop-blur-md rounded-full"
            + " shadow-[inset_3px_3px_10px_0px_rgba(255,255,255,0.25)]"
        }>
            <div className="flex-1 max-w-[38px] flex items-center justify-center z-10 text-white">
                {prop.icon}
            </div>
            <div className="flex-1 flex items-center justify-center z-10 text-white">
                <span>{prop.title}</span>
            </div>
        </button>
    )
}