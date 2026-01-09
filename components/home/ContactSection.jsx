"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <div className="max-w-2xl text-center md:text-left">
                        <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-4 block">
                            Start Your Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Ready to Transform <br />
                            <span className="italic text-[#D4AF37] font-light">Your Space?</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg">
                            From concept to installation, we bring your architectural vision to life with precision stainless steel craftsmanship.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 bg-white/10 rounded-full text-[#D4AF37]">
                                    <Phone size={20} />
                                </div>
                                <span className="font-light">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-2 bg-white/10 rounded-full text-[#D4AF37]">
                                    <Mail size={20} />
                                </div>
                                <span className="font-light">projects@decorfabricage.com</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                    >
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-white font-medium text-lg rounded-full overflow-hidden"
                        >
                            <span className="relative z-10">Get a Free Quote</span>
                            <ArrowRight className="relative z-10 transform group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
