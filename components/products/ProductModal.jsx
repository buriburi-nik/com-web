"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

export default function ProductModal({ product, onClose }) {
    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!product) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button Mobile */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 p-2 bg-white/50 backdrop-blur rounded-full md:hidden"
                >
                    <X size={20} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-3/5 relative h-[300px] md:h-auto bg-gray-100">
                    <Image
                        src={product.image || "/placeholder.jpg"}
                        alt={product.description || "Product Details"}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Details Section */}
                <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col overflow-y-auto bg-white">
                    <div className="flex items-center justify-between mb-6">
                        {product.company && (
                            <h3 className="text-xl font-bold text-gray-900">{product.company}</h3>
                        )}
                        {/* Close Button Desktop */}
                        <button
                            onClick={onClose}
                            className="hidden md:block p-2 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="space-y-6 flex-grow">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                {product.title || "Inspiration Detail"}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {product.category && (
                            <div className="inline-block px-3 py-1 bg-[#F4E4C1] text-[#A08020] rounded-full text-sm font-medium">
                                {product.category}
                            </div>
                        )}

                        {/* Additional Metadata if available */}
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                            {product.id && <div>ID: #{product.id}</div>}
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <Button
                            className="w-full bg-[#D4AF37] hover:bg-[#B8941F] text-white flex items-center justify-center gap-2"
                            onClick={() => alert("Navigate to product page or contact")}
                        >
                            View Full Details <ExternalLink size={16} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
