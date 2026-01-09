import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="min-h-screen bg-white pt-16">
            {/* Hero Section */}
            <section className="relative h-[300px] bg-gradient-to-r from-[#F4E4C1] to-white flex items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Blog</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Expert insights, design inspiration, and tips for creating your perfect space
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="relative h-[240px] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#C5A028] text-white px-4 py-1 rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                    <span>{post.date}</span>
                                    <span>•</span>
                                    <span>{post.author}</span>
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#C5A028] transition-colors">
                                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                                </h2>
                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center text-[#C5A028] hover:text-[#A08020] font-semibold transition-colors"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
