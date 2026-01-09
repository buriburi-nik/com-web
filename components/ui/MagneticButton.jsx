"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function MagneticButton({ children, className, variant = "primary", ...props }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    const variants = {
        primary: "bg-[#C5A028] text-white hover:bg-[#A08020] shadow-lg",
        secondary: "bg-gray-50 text-gray-900 hover:bg-[#C5A028] hover:text-white shadow-md",
        outline: "border-2 border-[#C5A028] text-[#C5A028] hover:bg-[#C5A028] hover:text-white bg-transparent",
    };

    return (
        <motion.button
            ref={ref}
            className={cn(
                "relative px-6 py-3 rounded-full font-medium transition-colors overflow-hidden text-sm",
                variants[variant],
                className
            )}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            {...props}
        >
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}
