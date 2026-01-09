"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SimpleCTA() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-3xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">
                    Inspired by our work?
                </h2>
                <p className="text-gray-600 mb-8 font-light text-lg">
                    Let's collaborate to create a space that reflects your unique style and vision.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#D4AF37] text-white rounded-full font-medium hover:bg-[#B8941F] transition-colors shadow-sm"
                >
                    Get a Free Quote <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
}
