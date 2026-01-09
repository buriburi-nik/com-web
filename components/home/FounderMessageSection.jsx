"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function FounderMessageSection() {
    return (
        <section className="py-16 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#000000]" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                >
                    {/* Icon */}
                    <div className="mb-6 text-[#D4AF37]">
                        <Quote size={40} className="rotate-180 opacity-50" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
                        Message From the Founder <br />
                        <span className="text-[#D4AF37] italic mt-2 block text-2xl md:text-3xl">
                            – Mr. Neeraj Sharma
                        </span>
                    </h2>

                    {/* Content */}
                    <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light">
                        <p>
                            <span className="text-white font-medium">"Décor and Fabricage"</span> aims to bring a breath of fresh air to the industry combining modern technology with skilled craftsmanship. For over five years, our success has been built on three core pillars: <span className="text-white">business ethics, credibility, and delivering exceptional value</span>. We are committed to providing global standards of steel fabrication to our customers worldwide.
                        </p>
                    </div>

                    {/* Signature / Bottom Line */}
                    <div className="mt-8 w-16 h-1 bg-[#D4AF37] rounded-full opacity-60" />
                </motion.div>
            </div>
        </section>
    );
}
