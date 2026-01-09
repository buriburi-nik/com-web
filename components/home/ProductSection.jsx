"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import InspirationCard from '../cards/InspirationCard';
import ProductModal from '../products/ProductModal';
import data from '../../src/app/products/data.json';

const categories = ["All"]; // Placeholder if needed or just remove.

export default function ProductSection() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedProduct]);

    // Show only the first 8 items on the homepage
    const visibleData = data.slice(0, 8);

    return (
        <section className="bg-white relative">


            {/* Gallery Grid */}
            <div className="bg-[#F3EAD7] py-20 px-4 md:px-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />

                {/* Section Header */}
                <div className="max-w-7xl mx-auto mb-12 text-center relative z-10">
                    <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-3 block">
                        Our Portfolio
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Inspiration <span className="italic text-[#D4AF37]">Gallery</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 font-light">
                        Explore our curated collection of architectural masterpieces, where stainless steel meets luxury design.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[0, 1, 2, 3].map((colIndex) => (
                        <div
                            key={colIndex}
                            className={`flex flex-col gap-6 ${(colIndex === 1 || colIndex === 3) ? "mt-0 lg:mt-12" : ""}`}
                        >
                            {visibleData
                                .filter((_, index) => index % 4 === colIndex)
                                .map((item) => (
                                    <div key={item.id} className="h-[350px]">
                                        <InspirationCard
                                            company={item.company}
                                            image={item.image}
                                            description={item.description}
                                            onViewMore={() => setSelectedProduct(item)}
                                        />
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>

                {/* View More Link */}
                <div className="flex justify-center mt-12">
                    <Link
                        href="/products"
                        className="px-10 py-3 rounded-full bg-white text-[#d4af37] border border-[#d4af37] font-medium hover:bg-[#d4af37] hover:text-white transition-colors shadow-sm"
                    >
                        View More
                    </Link>
                </div>
            </div>

            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
}
