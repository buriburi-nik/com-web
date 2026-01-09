"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Target, Award, Sparkles } from 'lucide-react';
import Button from '../../../components/ui/Button';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white ">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#F3EAD7] overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-3 block">
                            Who We Are
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            About <span className="text-[#D4AF37] italic">Decor & Fabricage</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            Transforming spaces into extraordinary experiences through precision stainless steel fabrication and architectural artistry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-3 block">
                                Our Journey
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                Crafting Excellence <span className="text-[#D4AF37] italic">Since Years</span>
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed font-light">
                                Founded with a vision to revolutionize stainless steel fabrication and interior solutions, Decor & Fabricage has been at the forefront of creating stunning, functional spaces that reflect modern architectural excellence.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed font-light">
                                With over five years of experience and a passionate team of skilled craftsmen and designers, we've successfully delivered hundreds of projects, ranging from luxury residential properties to premium commercial spaces and hospitality venues.
                            </p>
                            <p className="text-gray-600 leading-relaxed font-light">
                                Our commitment to business ethics, credibility, and exceptional value has made us a trusted partner for clients seeking global standards of steel fabrication and interior solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl group"
                        >
                            <Image
                                src="/HomePage/decor.jpg"
                                alt="About Decor & Fabricage"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-[#F3EAD7] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-3 block">
                            Our Purpose
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Mission & <span className="text-[#D4AF37] italic">Vision</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto font-light">
                            Driven by passion and guided by excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-[#F3EAD7] rounded-full flex items-center justify-center mb-6">
                                <Target size={32} className="text-[#D4AF37]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed font-light">
                                To deliver exceptional stainless steel fabrication and design solutions that enhance spaces while maintaining the highest standards of craftsmanship, business ethics, and global quality benchmarks.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 bg-[#F3EAD7] rounded-full flex items-center justify-center mb-6">
                                <Award size={32} className="text-[#D4AF37]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed font-light">
                                To be the most trusted and innovative steel fabrication firm, recognized globally for creating timeless architectural elements that inspire excellence and elevate modern living standards.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-3 block">
                            Our Impact
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Numbers That <span className="text-[#D4AF37] italic">Speak</span>
                        </h2>
                        <p className="text-gray-600 font-light">Excellence measured in achievements</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { value: "05+", label: "Years of Excellence" },
                            { value: "500+", label: "Projects Completed" },
                            { value: "450+", label: "Happy Clients" },
                            { value: "100%", label: "Quality Commitment" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-gray-600 font-medium uppercase text-sm tracking-wider">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[#0a0a0a] text-white relative overflow-hidden">
                {/* Background Texture/Gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0a0a0a] to-[#000000]" />
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block mb-6">
                            <Sparkles size={40} className="text-[#D4AF37] mx-auto" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to Start <span className="text-[#D4AF37] italic">Your Project?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light">
                            Let's bring your vision to life with our expert team and premium solutions.
                        </p>
                        <Button className="bg-[#D4AF37] text-white hover:bg-[#B8941F] px-8 py-4 text-lg font-semibold transition-all">
                            Get In Touch Today
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
