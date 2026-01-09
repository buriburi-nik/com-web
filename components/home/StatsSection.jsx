"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    {
        id: 1,
        value: "05+",
        label: "Years of Excellence",
        description: "Delivering quality since 2019"
    },
    {
        id: 2,
        value: "500+",
        label: "Projects Completed",
        description: "Across residential & commercial sectors"
    },
    {
        id: 3,
        value: "100%",
        label: "Client Satisfaction",
        description: "Built on trust and transparency"
    },
    {
        id: 4,
        value: "50+",
        label: "Team Strength",
        description: "Skilled artisans & engineers"
    }
];

export default function StatsSection() {
    return (
        <section className="py-20 bg-white border-b border-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col items-center group cursor-default"
                        >
                            <span className="text-5xl md:text-6xl font-serif text-[#D4AF37] mb-2 group-hover:scale-105 transition-transform duration-300">
                                {stat.value}
                            </span>
                            <span className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-1">
                                {stat.label}
                            </span>
                            <span className="text-sm text-gray-400 font-light">
                                {stat.description}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-gray-50 opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
                Legacy
            </div>
        </section>
    );
}
