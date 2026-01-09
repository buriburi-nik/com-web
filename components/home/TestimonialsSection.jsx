"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        content: "The attention to detail in their stainless steel fabrication is unmatched. They transformed our lobby into a masterpiece.",
        author: "Rajiv Malhotra",
        role: "Director, Hotel Imperial",
        rating: 5,
        image: "/HomePage/decor.jpg" // Placeholder
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

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-2 block">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Voices of <span className="font-serif italic font-light text-[#D4AF37]">Satisfaction</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-[#f9f9f9] p-8 rounded-2xl relative group hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-gray-200 group-hover:text-[#D4AF37]/20 transition-colors">
                                <Quote size={40} className="rotate-180" fill="currentColor" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6 text-[#D4AF37]">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-600 mb-8 leading-relaxed relative z-10 italic">
                                "{item.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{item.author}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
