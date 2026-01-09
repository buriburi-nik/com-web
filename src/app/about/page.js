import React from 'react';
import { Building2, Target, Award, Users } from 'lucide-react';
import Button from '../../../components/ui/Button';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-[#F4E4C1] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        About <span className="text-[#D4AF37]">Decor</span>
                    </h1>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                        Transforming spaces into extraordinary living experiences through innovative design and exceptional service.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Founded with a vision to revolutionize the real estate and interior design industry, Decor has been at the forefront of creating stunning, functional spaces that reflect the unique personalities of our clients.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                With years of experience and a passionate team of designers and architects, we've successfully delivered hundreds of projects, ranging from residential homes to commercial spaces.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Our commitment to excellence, attention to detail, and customer-centric approach have made us a trusted name in the industry.
                            </p>
                        </div>
                        <div className="bg-[#F4E4C1] rounded-2xl p-8 lg:p-12">
                            <div className="aspect-square bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl flex items-center justify-center">
                                <Building2 size={120} className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Driven by passion and guided by excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl border-2 border-[#D4AF37] shadow-sm">
                            <div className="w-16 h-16 bg-[#F4E4C1] rounded-full flex items-center justify-center mb-6">
                                <Target size={32} className="text-[#D4AF37]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To deliver exceptional design solutions that enhance the quality of life for our clients while maintaining the highest standards of craftsmanship and sustainability.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl border-2 border-[#D4AF37] shadow-sm">
                            <div className="w-16 h-16 bg-[#F4E4C1] rounded-full flex items-center justify-center mb-6">
                                <Award size={32} className="text-[#D4AF37]" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To be the most trusted and innovative design firm, recognized globally for creating timeless spaces that inspire and elevate everyday living.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
                        <p className="text-gray-700">Numbers that speak for our excellence</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#D4AF37] mb-2">15+</div>
                            <p className="text-gray-700 font-medium">Years of Excellence</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#D4AF37] mb-2">500+</div>
                            <p className="text-gray-700 font-medium">Projects Completed</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#D4AF37] mb-2">450+</div>
                            <p className="text-gray-700 font-medium">Happy Clients</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-[#D4AF37] mb-2">25+</div>
                            <p className="text-gray-700 font-medium">Expert Team Members</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#D4AF37] to-[#B8941F]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Let's bring your vision to life with our expert team and innovative solutions.
                    </p>
                    <Button className="bg-white text-[#D4AF37] hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                        Get In Touch Today
                    </Button>
                </div>
            </section>
        </div>
    );
}
