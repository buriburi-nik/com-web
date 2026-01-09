"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';
import Button from '../../../components/ui/Button';
import InspirationCard from '../../../components/cards/InspirationCard';
import ProductModal from '../../../components/products/ProductModal';
import SimpleCTA from '../../../components/products/SimpleCTA';
// Import data from local JSON file
import data from './data.json';

const categories = [
    "All", "Kitchen", "Bedroom", "Furniture",
    "Decor", "Lighting", "Finishes", "Bathware",
];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [visibleCount, setVisibleCount] = useState(8);
    // Remove persistence logic if not strictly needed or cause hydration issues, 
    // but keeping basic state for now.

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedProduct]);

    const filteredData =
        activeCategory === "All"
            ? data
            : data.filter((item) => item.category === activeCategory);

    const visibleData = filteredData.slice(0, visibleCount);

    return (
        <main className="min-h-screen bg-white">
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
                            Our Portfolio
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Crafted <span className="text-[#D4AF37] italic">Masterpieces</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                            A curated collection of our finest work, where architectural vision meets precision craftsmanship.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <div className="bg-white py-16 px-4 md:px-8 border-t border-gray-100">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-3 block">
                        Explore Categories
                    </span>
                    {/* Optional: You could add category filter buttons here later if needed */}
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[0, 1, 2, 3].map((colIndex) => (
                        <div
                            key={colIndex}
                            className={`flex flex-col gap-8 ${(colIndex === 1 || colIndex === 3) ? "mt-0 lg:mt-12" : ""}`}
                        >
                            {visibleData
                                .filter((_, index) => index % 4 === colIndex)
                                .map((item) => (
                                    <div key={item.id} className="h-[350px]">
                                        <InspirationCard
                                            company={item.company}
                                            image={item.image}
                                            description={item.description}
                                            // logo={item.logo} // Optional if you have logo data
                                            onViewMore={() => setSelectedProduct(item)}
                                        />
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>

                {/* Show More / Show Less */}
                <div className="flex justify-center gap-4 mt-16">
                    {visibleCount < filteredData.length && (
                        <button
                            onClick={() => setVisibleCount((p) => p + 8)}
                            className="px-10 py-3 rounded-full bg-[#D4AF37] text-white font-medium hover:bg-white hover:text-[#D4AF37] border border-[#D4AF37] transition-colors shadow-sm"
                        >
                            Show More
                        </button>
                    )}
                    {visibleCount > 8 && (
                        <button
                            onClick={() => {
                                setVisibleCount(8);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="px-10 py-3 rounded-full bg-white text-gray-500 border border-gray-200 font-medium hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            Show Less
                        </button>
                    )}
                </div>
            </div>

            <SimpleCTA />

            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </main>
    );
}
