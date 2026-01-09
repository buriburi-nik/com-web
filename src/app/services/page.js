import React from 'react';
import { Home, Paintbrush, Sofa, Lightbulb, Ruler, ShoppingBag } from 'lucide-react';

const services = [
    {
        id: 1,
        icon: Home,
        title: 'Residential Design',
        description: 'Transform your home into a personalized sanctuary with our expert residential design services.',
        features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Custom Solutions']
    },
    {
        id: 2,
        icon: Paintbrush,
        title: 'Interior Styling',
        description: 'Elevate your space with curated styling that reflects your unique personality and lifestyle.',
        features: ['Decor Selection', 'Art Curation', 'Textile Coordination', 'Finishing Touches']
    },
    {
        id: 3,
        icon: Sofa,
        title: 'Furniture Design',
        description: 'Custom furniture pieces designed and crafted to perfectly fit your space and needs.',
        features: ['Bespoke Furniture', 'Material Selection', 'Ergonomic Design', 'Quality Craftsmanship']
    },
    {
        id: 4,
        icon: Lightbulb,
        title: 'Lighting Design',
        description: 'Create the perfect ambiance with strategic lighting solutions for every room.',
        features: ['Lighting Plans', 'Fixture Selection', 'Smart Systems', 'Energy Efficiency']
    },
    {
        id: 5,
        icon: Ruler,
        title: 'Space Planning',
        description: 'Optimize your space with intelligent layouts that maximize functionality and flow.',
        features: ['Layout Design', '3D Visualization', 'Traffic Flow', 'Zoning Solutions']
    },
    {
        id: 6,
        icon: ShoppingBag,
        title: 'Full-Service Projects',
        description: 'End-to-end project management from concept to completion for a seamless experience.',
        features: ['Project Management', 'Vendor Coordination', 'Installation', 'Final Styling']
    }
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero Section */}
            <section className="relative h-[350px] bg-gradient-to-r from-[#F4E4C1] to-white flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Our <span className="text-[#C5A028]">Services</span>
                    </h1>
                    <p className="text-xl text-gray-700">
                        Comprehensive design solutions tailored to bring your vision to life with excellence and creativity
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C5A028] transition-all duration-300 hover:shadow-xl group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#F4E4C1] to-[#C5A028] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <IconComponent size={32} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-[#C5A028] rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#C5A028] to-[#A08020] py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Let's collaborate to create spaces that inspire and delight
                    </p>
                    <button className="bg-white text-[#C5A028] px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl">
                        Get a Free Consultation
                    </button>
                </div>
            </section>
        </div>
    );
}
