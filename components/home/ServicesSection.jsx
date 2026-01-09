"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        title: "Bespoke Railings & Staircases",
        description:
            "Custom-crafted stainless steel railings blending safety with architectural elegance.",
        image: "/HomePage/decor.jpg",
        tags: ["Residential", "Commercial"],
        details: [
            "Laser-cut precision railings",
            "Indoor & outdoor staircase systems",
            "Mirror, matte & brushed finishes",
            "Safety-compliant installations",
        ],
    },
    {
        id: "02",
        title: "Luxury Facades & Cladding",
        description:
            "High-performance steel cladding for striking modern exteriors and durability.",
        image: "/HomePage/decor.jpg",
        tags: ["Commercial", "Hotel"],
        details: [
            "Weather-resistant steel panels",
            "Modern architectural facade systems",
            "Custom perforation & textures",
            "Low-maintenance exterior solutions",
        ],
    },
    {
        id: "03",
        title: "Designer Furniture & Fixtures",
        description:
            "Statement furniture and fixtures engineered for aesthetics and long-term use.",
        image: "/HomePage/decor.jpg",
        tags: ["Interior", "Bespoke"],
        details: [
            "Custom tables, shelves & fixtures",
            "Steel + wood luxury combinations",
            "Handcrafted premium finishes",
            "Tailored to space & function",
        ],
    },
    {
        id: "04",
        title: "Commercial Kitchen Solutions",
        description:
            "Industrial-grade stainless steel solutions for professional kitchens.",
        image: "/HomePage/decor.jpg",
        tags: ["Commercial", "Restaurant"],
        details: [
            "Food-grade SS workstations",
            "Modular kitchen layouts",
            "Heat & corrosion-resistant surfaces",
            "Hygienic & easy-to-clean designs",
        ],
    },
    {
        id: "05",
        title: "Architectural Gates & Grills",
        description:
            "Secure and elegant gates and grills defining premium entrances.",
        image: "/HomePage/decor.jpg",
        tags: ["Residential", "Security"],
        details: [
            "Laser-cut decorative gates",
            "Manual & automated gate systems",
            "Rust-proof outdoor coatings",
            "High-security structural builds",
        ],
    },
    {
        id: "06",
        title: "Decorative Art Installations",
        description:
            "Abstract steel art installations elevating modern spaces.",
        image: "/HomePage/decor.jpg",
        tags: ["Art", "Decor"],
        details: [
            "Custom geometric sculptures",
            "Indoor & outdoor installations",
            "Architect-led concept designs",
            "Bold modern visual statements",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function ServicesSection() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="text-[#D4AF37] font-medium tracking-wider uppercase text-sm mb-3 block">
                        Our Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                        Premium <span className="italic text-[#D4AF37]">Steel</span> Solutions
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 font-light">
                        Engineering precision combined with architectural artistry.
                    </p>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="group relative h-[420px] overflow-hidden border border-gray-100"
                        >
                            {/* Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/70 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Front Content */}
                            <div className="absolute bottom-0 p-6 text-white transition-all duration-500 group-hover:translate-y-[-120px]">
                                <span className="text-3xl font-serif text-[#D4AF37]">
                                    {service.id}
                                </span>
                                <h3 className="text-xl font-bold mt-1">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                                    {service.description}
                                </p>
                                <ArrowUpRight className="mt-3 opacity-80" />
                            </div>

                            {/* Hover Details */}
                            <div className="absolute bottom-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-white">
                                <ul className="space-y-2 text-sm text-gray-200">
                                    {service.details.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] uppercase tracking-wider border border-[#D4AF37]/40 text-[#D4AF37] px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
