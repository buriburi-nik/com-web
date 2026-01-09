"use client";

import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-white">
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
                            Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Let's Start a <span className="text-[#D4AF37] italic">Conversation</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            Have a project in mind? We'd love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content - Bento Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-20">

                {/* Top Row: Form + Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

                    {/* Contact Form (2/3) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-gray-50 rounded-[2rem] p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2 pl-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-gray-200/50 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-900 placeholder-gray-400 transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2 pl-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-gray-200/50 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-900 placeholder-gray-400 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2 pl-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-6 py-4 bg-gray-200/50 border-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-900 placeholder-gray-400 transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    className="px-10 py-4 bg-[#D4AF37] text-white rounded-2xl font-semibold hover:bg-[#B8941F] transition-colors shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2"
                                >
                                    Send Message <Send size={18} />
                                </Button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Sidebar / Newsletter (1/3) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-1 bg-[#1a1a1a] rounded-[2rem] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4">Our Newsletter</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Subscribe to our newsletter to get the latest updates, design trends, and exclusive offers delivered to your inbox.
                            </p>

                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-6 py-4 bg-white/10 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white placeholder-gray-500 backdrop-blur-sm"
                                />
                                <button className="w-full py-4 bg-white text-black rounded-2xl font-bold hover:bg-[#D4AF37] hover:text-white transition-all duration-300">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>

                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-[40px] -translate-x-1/4 translate-y-1/4" />
                    </motion.div>
                </div>

                {/* Middle Row: Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {[
                        { icon: Phone, title: "Phone", info: "+91 98765 43210", sub: "Mon-Fri 9am-6pm" },
                        { icon: Mail, title: "Email", info: "hello@decor.com", sub: "Online Support 24/7" },
                        { icon: MapPin, title: "Location", info: "Mumbai, India", sub: "Creative Avenue, 400001" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            className="bg-[#D9D9D9]/30 rounded-[2rem] p-8 flex flex-col items-start justify-center hover:bg-[#D4AF37]/10 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <item.icon size={22} className="text-[#D4AF37]" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.info}</h3>
                            <p className="text-gray-500 font-medium mb-1">{item.title}</p>
                            <p className="text-gray-400 text-sm">{item.sub}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Row: Map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="w-full h-[400px] rounded-[2rem] overflow-hidden bg-gray-100 relative"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8123287665796!2d72.82583331490268!3d19.07609055708682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1645512345678!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>

                    {/* Optional Map Overlay Card */}
                    <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                        <h4 className="font-bold text-gray-900 mb-1">Decor Head Office</h4>
                        <p className="text-sm text-gray-500 mb-3">123 Creative Avenue, Design District, Mumbai</p>
                        <a href="#" className="text-xs font-bold text-[#D4AF37] flex items-center hover:underline">
                            Get Directions <ArrowRight size={14} className="ml-1" />
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
