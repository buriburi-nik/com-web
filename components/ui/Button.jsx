"use client";

import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility for Tailwind class merging */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

/**
 * Standard reusable Button component (Non-Magnetic)
 */
export default function Button({
    children,
    className,
    variant = "primary",
    size = "md",
    ...props
}) {
    const variants = {
        primary: "bg-[#C5A028] text-white hover:bg-[#A08020] active:scale-95 shadow-lg",
        secondary: "bg-gray-50 text-gray-900 hover:bg-[#C5A028] hover:text-white active:scale-95 shadow-md",
        outline: "border-2 border-[#C5A028] text-[#C5A028] hover:bg-[#C5A028] hover:text-white bg-transparent active:scale-95",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base font-semibold",
    };

    return (
        <button
            className={cn(
                "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:ring-offset-2",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
