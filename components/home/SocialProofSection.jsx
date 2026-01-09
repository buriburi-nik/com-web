"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const stats = [
    { id: 1, value: "05+", label: "Years Exp." },
    { id: 2, value: "500+", label: "Projects" },
    { id: 3, value: "100%", label: "Satisfaction" },
    { id: 4, value: "50+", label: "Team Size" }
];

const testimonials = [
    {
        id: 1,
        content: "The attention to detail in their stainless steel fabrication is unmatched. They transformed our lobby into a masterpiece.",
        author: "Rajiv Malhotra",
        role: "Director, Hotel Imperial",
        rating: 5,
        image: "/HomePage/decor.jpg"
    },
    {
        id: 2,
        content: "Professional, punctual, and premium. Exactly what we needed for our luxury apartment complex facades.",
        author: "Sneha Kapoor",
        role: "Lead Architect, Zenith Designs",
        rating: 5,
        image: "/HomePage/decor.jpg"
    },
    {
        id: 3,
        content: "Their ability to customize intricate metalwork is impressive. A true partner for high-end interior projects.",
        author: "Vikram Singh",
        role: "Founder, Urban Living",
        rating: 5,
        image: "/HomePage/decor.jpg"
    }
];

export default function SocialProofSection() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-4 block">
                            Our Legacy
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Building Trust <br />
                            <span className="italic text-[#D4AF37] font-light">Through Excellence</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            {stats.map((stat, index) => (
                                <div key={stat.id} className="flex flex-col">
                                    <span className="text-4xl md:text-5xl text-[#D4AF37] font-medium">
                                        {stat.value}
                                    </span>
                                    <span className="text-sm text-gray-500 uppercase tracking-widest mt-2 font-medium">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Testimonials Slider */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative bg-[#f8f8f8] p-8 md:p-12 rounded-3xl"
                    >
                        <Quote size={60} className="absolute top-8 left-8 text-[#D4AF37]/10 rotate-180" />

                        <div className="relative z-10 min-h-[280px] flex flex-col justify-between">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="flex gap-1 mb-6 text-[#D4AF37]">
                                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="text-xl text-gray-800 font-light italic leading-relaxed mb-8">
                                        "{testimonials[currentTestimonial].content}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200 border border-white shadow-sm">
                                            <Image
                                                src={testimonials[currentTestimonial].image}
                                                alt={testimonials[currentTestimonial].author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm">
                                                {testimonials[currentTestimonial].author}
                                            </h4>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide">
                                                {testimonials[currentTestimonial].role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="absolute bottom-12 right-0 flex gap-2">
                                <button
                                    onClick={prevTestimonial}
                                    className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
