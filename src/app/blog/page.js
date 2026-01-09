"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        title: 'Top 10 Interior Design Trends for 2024',
        excerpt: 'Discover the latest interior design trends that are shaping modern homes this year.',
        image: '/HomePage/decor.jpg',
        date: 'January 15, 2024',
        category: 'Design Trends',
        author: 'Sarah Johnson'
    },
    {
        id: 2,
        title: 'How to Choose the Perfect Color Palette',
        excerpt: 'Learn expert tips on selecting colors that bring harmony and style to your space.',
        image: '/HomePage/decor.jpg',
        date: 'January 10, 2024',
        category: 'Color Guide',
        author: 'Michael Chen'
    },
    {
        id: 3,
        title: 'Maximizing Small Spaces: Smart Solutions',
        excerpt: 'Transform compact areas into functional and beautiful living spaces with these tips.',
        image: '/HomePage/decor.jpg',
        date: 'January 5, 2024',
        category: 'Space Planning',
        author: 'Emma Williams'
    },
    {
        id: 4,
        title: 'Sustainable Home Decor: Eco-Friendly Choices',
        excerpt: 'Make environmentally conscious decisions for your home without compromising style.',
        image: '/HomePage/decor.jpg',
        date: 'December 28, 2023',
        category: 'Sustainability',
        author: 'David Brown'
    },
    {
        id: 5,
        title: 'Lighting Design: Creating the Perfect Ambiance',
        excerpt: 'Master the art of lighting to enhance mood and functionality in every room.',
        image: '/HomePage/decor.jpg',
        date: 'December 20, 2023',
        category: 'Lighting',
        author: 'Lisa Anderson'
    },
    {
        id: 6,
        title: 'Mixing Modern and Traditional Styles',
        excerpt: 'Blend contemporary and classic elements for a timeless, personalized aesthetic.',
        image: '/HomePage/decor.jpg',
        date: 'December 15, 2023',
        category: 'Style Mix',
        author: 'James Wilson'
    },
];

export default function BlogPage() {
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
                            Our Blog
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Insights & <span className="text-[#D4AF37] italic">Inspiration</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            Expert insights, design inspiration, and tips for creating your perfect space.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 group cursor-pointer"
                        >
                            <div className="relative h-[260px] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4 uppercase tracking-wider">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed font-light">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors group/link"
                                >
                                    Read Article <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
