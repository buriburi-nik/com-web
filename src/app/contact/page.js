"use client";

import React, { useState } from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
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
        <div className="min-h-screen bg-white pt-16">
            {/* Hero Section */}
            <section className="relative h-[300px]  flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'url(/HomePage/decor.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side - Contact Cards */}
                    <div className="space-y-6">
                        {/* Contact Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {/* Phone Card */}
                            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    <Phone size={28} className="text-[#C5A028]" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                                <p className="text-gray-700">207-8767-452</p>
                            </div>

                            {/* WhatsApp Card */}
                            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    <MessageCircle size={28} className="text-[#C5A028]" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Whatsapp</h3>
                                <p className="text-gray-700">082-123-234-345</p>
                            </div>

                            {/* Email Card */}
                            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    <Mail size={28} className="text-[#C5A028]" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                                <p className="text-gray-700">support@yoursite.com</p>
                            </div>

                            {/* Our Shop Card */}
                            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                    <MapPin size={28} className="text-[#C5A028]" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Our Shop</h3>
                                <p className="text-gray-700 text-sm">2443 Oak Ridge Omaha, QA 45065</p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[300px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">Get In Touch</h2>
                        <p className="text-gray-700 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:border-transparent transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:border-transparent transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:border-transparent transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A028] focus:border-transparent transition-colors resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#C5A028] text-white hover:bg-[#A08020] px-8 py-4 text-base font-semibold shadow-lg"
                            >
                                Send Now
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
