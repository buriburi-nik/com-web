"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2 } from 'lucide-react';
import Button from '../ui/Button';

export default function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            About <span className="text-[#D4AF37]">Decor</span>
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Founded with a vision to revolutionize the real estate and interior design industry, Decor has been at the forefront of creating stunning, functional spaces that reflect the unique personalities of our clients.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            With years of experience and a passionate team of designers and architects, we've successfully delivered hundreds of projects. Our commitment to excellence makes us a trusted name in the industry.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/about">
                                <Button className="bg-[#D4AF37] text-white hover:bg-[#B8941F]">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Image / Visual */}
                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl group">
                        <Image
                            src="/HomePage/decor.jpg"
                            alt="About Decor"
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
}
