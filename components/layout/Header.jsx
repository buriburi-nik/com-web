"use client";

import { useState } from 'react';
import Link from 'next/link';
import MagneticButton from '../ui/MagneticButton';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ onOpenContactModal }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Services', href: '/services' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Hamburger & Logo Area */}
                        <div className="flex items-center gap-4">
                            {/* Mobile Hamburger Button */}
                            <button
                                className="md:hidden p-2 text-gray-700 hover:bg-[#F4E4C1] rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu size={24} />
                            </button>

                            <div className="shrink-0">
                                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-[#C5A028] to-[#A08020] bg-clip-text text-transparent">
                                    Decor
                                </Link>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:block">
                            <ul className="flex items-center space-x-8">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-900 hover:text-[#C5A028] transition-colors font-medium"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <MagneticButton onClick={onOpenContactModal}>Get In Touch</MagneticButton>
                                </li>
                            </ul>
                        </nav>

                        {/* Mobile Right Action */}
                        <div className="md:hidden">
                            <MagneticButton onClick={onOpenContactModal} className="px-4 py-2 text-xs">Get In Touch</MagneticButton>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[280px] bg-white dark:bg-zinc-950 z-[70] md:hidden p-6 shadow-2xl overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent">
                                    Decor
                                </span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <nav>
                                <ul className="space-y-4">
                                    {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block text-lg font-medium text-gray-900 hover:text-[#D4AF37]"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="pt-4 border-t border-gray-200">
                                        <Link
                                            href="/contact"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block text-lg font-medium text-[#D4AF37]"
                                        >
                                            Get In Touch
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
