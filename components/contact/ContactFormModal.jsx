"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from '../ui/Button';

export default function ContactFormModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        onClose();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-full sm:w-[500px] bg-[#1a1a1a] z-[101] shadow-2xl overflow-y-auto"
                    >
                        <div className="p-8 sm:p-12">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>

                            {/* Form Content */}
                            <div className="mt-8">
                                <h2 className="text-3xl font-bold text-white mb-3">Get in Touch</h2>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Define your goals and identify areas where AI can add value to your business
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Full name"
                                            required
                                            className="w-full px-0 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            required
                                            className="w-full px-0 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            required
                                            className="w-full px-0 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Message"
                                            required
                                            rows={4}
                                            className="w-full px-0 py-3 bg-transparent border-b border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                        />
                                    </div>

                                    <div className="pt-6">
                                        <Button
                                            type="submit"
                                            className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full text-sm font-medium w-full sm:w-auto"
                                        >
                                            → Send a message
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
