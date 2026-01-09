"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Bed, Bath, Maximize, Heart } from 'lucide-react';

const properties = [
    {
        id: 1,
        title: 'Modern Downtown Apartment',
        location: 'New York, NY',
        price: '$850,000',
        image: '/HomePage/decor.jpg',
        beds: 3,
        baths: 2,
        sqft: '2,400',
        type: 'Apartment',
        status: 'For Sale'
    },
    {
        id: 2,
        title: 'Luxury Beachfront Villa',
        location: 'Miami, FL',
        price: '$2,500,000',
        image: '/HomePage/decor.jpg',
        beds: 5,
        baths: 4,
        sqft: '4,800',
        type: 'Villa',
        status: 'For Sale'
    },
    {
        id: 3,
        title: 'Cozy Suburban Home',
        location: 'Austin, TX',
        price: '$650,000',
        image: '/HomePage/decor.jpg',
        beds: 4,
        baths: 3,
        sqft: '3,200',
        type: 'House',
        status: 'For Sale'
    },
    {
        id: 4,
        title: 'Contemporary Loft Space',
        location: 'San Francisco, CA',
        price: '$1,200,000',
        image: '/HomePage/decor.jpg',
        beds: 2,
        baths: 2,
        sqft: '1,800',
        type: 'Loft',
        status: 'For Sale'
    },
    {
        id: 5,
        title: 'Elegant Family Estate',
        location: 'Chicago, IL',
        price: '$1,800,000',
        image: '/HomePage/decor.jpg',
        beds: 6,
        baths: 5,
        sqft: '5,500',
        type: 'House',
        status: 'For Sale'
    },
    {
        id: 6,
        title: 'Chic City Penthouse',
        location: 'Seattle, WA',
        price: '$3,200,000',
        image: '/HomePage/decor.jpg',
        beds: 4,
        baths: 3,
        sqft: '3,800',
        type: 'Penthouse',
        status: 'For Sale'
    },
    {
        id: 7,
        title: 'Mountain View Cabin',
        location: 'Denver, CO',
        price: '$580,000',
        image: '/HomePage/decor.jpg',
        beds: 3,
        baths: 2,
        sqft: '2,100',
        type: 'House',
        status: 'For Rent'
    },
    {
        id: 8,
        title: 'Waterfront Condo',
        location: 'Boston, MA',
        price: '$950,000',
        image: '/HomePage/decor.jpg',
        beds: 2,
        baths: 2,
        sqft: '1,600',
        type: 'Condo',
        status: 'For Sale'
    },
];

export default function ProductsPage() {
    const [selectedType, setSelectedType] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');

    const types = ['All', 'Apartment', 'Villa', 'House', 'Loft', 'Penthouse', 'Condo'];
    const statuses = ['All', 'For Sale', 'For Rent'];

    const filteredProperties = properties.filter(property => {
        const typeMatch = selectedType === 'All' || property.type === selectedType;
        const statusMatch = selectedStatus === 'All' || property.status === selectedStatus;
        return typeMatch && statusMatch;
    });

    return (
        <div className="min-h-screen bg-white pt-16">
            {/* Hero Section */}
            <section className="relative h-[300px] bg-gradient-to-r from-[#F4E4C1] to-white flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        Find Your <span className="text-[#C5A028]">Dream Property</span>
                    </h1>
                    <p className="text-xl text-gray-700">
                        Explore our curated collection of premium properties
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex flex-wrap gap-3">
                            <div>
                                <label className="text-sm font-medium text-gray-700 mb-2 block">Property Type</label>
                                <div className="flex flex-wrap gap-2">
                                    {types.map(type => (
                                        <button
                                            key={type}
                                            onClick={() => setSelectedType(type)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedType === type
                                                    ? 'bg-[#C5A028] text-white shadow-md'
                                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                                }`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
                            <div className="flex gap-2">
                                {statuses.map(status => (
                                    <button
                                        key={status}
                                        onClick={() => setSelectedStatus(status)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedStatus === status
                                                ? 'bg-[#C5A028] text-white shadow-md'
                                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                            }`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                        Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'}
                    </div>
                </div>
            </div>

            {/* Properties Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map(property => (
                        <div
                            key={property.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                        >
                            <div className="relative h-[250px] overflow-hidden">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#C5A028] text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {property.status}
                                    </span>
                                </div>
                                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                    <Heart size={20} className="text-gray-700" />
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-gray-600 text-sm mb-2">
                                    <MapPin size={16} className="mr-1" />
                                    {property.location}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C5A028] transition-colors">
                                    {property.title}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Bed size={18} />
                                        <span>{property.beds} Beds</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Bath size={18} />
                                        <span>{property.baths} Baths</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Maximize size={18} />
                                        <span>{property.sqft} sqft</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="text-2xl font-bold text-[#C5A028]">{property.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
