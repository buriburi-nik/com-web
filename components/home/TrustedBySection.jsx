"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Placeholder text logos - replace with SVGs or Integers later
const partners = [
    "Hyatt Regency",
    "Marriott Bonvoy",
    "Radisson Blu",
    "DLF Group",
    "Prestige Estates",
    "Godrej Properties",
    "Oberoi Hotels",
    "Taj Palaces",
    "Larsen & Toubro",
    "Tata Projects"
];

export default function TrustedBySection() {
    return (
        <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="relative flex overflow-x-hidden">
                {/* Gradients to fade edges */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust speed here
                    }}
                >
                    {/* Repeat list 3 times to ensure smooth loop */}
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="mx-8 md:mx-12 text-2xl md:text-3xl text-gray-300 hover:text-[#D4AF37] transition-colors cursor-default whitespace-nowrap"
                        >
                            {partner}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
