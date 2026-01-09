"use client";

import React from 'react';
import { motion } from 'framer-motion';

const marqeeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
            },
        },
    },
};

export default function MarqueeSection() {
    return (
        <section className="py-12 bg-[#D4AF37] overflow-hidden whitespace-nowrap">
            <div className="relative flex">
                <motion.div
                    className="flex items-center gap-12"
                    variants={marqeeVariants}
                    animate="animate"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 text-white/90">
                            <span className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
                                Interior Design
                            </span>
                            <span className="w-4 h-4 rounded-full bg-white/50" />
                            <span className="text-4xl md:text-6xl font-light uppercase tracking-wider">
                                Architecture
                            </span>
                            <span className="w-4 h-4 rounded-full bg-white/50" />
                            <span className="text-4xl md:text-6xl font-bold uppercase tracking-wider">
                                Luxury Living
                            </span>
                            <span className="w-4 h-4 rounded-full bg-white/50" />
                            <span className="text-4xl md:text-6xl font-light uppercase tracking-wider">
                                Modern Spaces
                            </span>
                            <span className="w-4 h-4 rounded-full bg-white/50" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
