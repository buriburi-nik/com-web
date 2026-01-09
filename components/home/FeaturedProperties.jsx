
import { Bed, Bath, MoveRight } from "lucide-react";
import Link from "next/link";

const properties = [
    {
        name: "Skyper Pool Apartment",
        location: "1020 12, Dharamodi, Dhaka",
        price: "BDT 145,000",
        beds: 4,
        baths: 2,
        sqft: 200,
        image: "bg-blue-100", // placeholder class
    },
    {
        name: "Cedar Residence",
        location: "Road 12, Uttara, Dhaka",
        price: "BDT 125,000",
        beds: 3,
        baths: 2,
        sqft: 180,
        image: "bg-purple-100",
    },
    {
        name: "Lakeside Apartment",
        location: "Road 12, Dharamodi, Dhaka",
        price: "BDT 145,000",
        beds: 4,
        baths: 2,
        sqft: 360,
        image: "bg-green-100",
    },
    {
        name: "Urban Heights",
        location: "Road 12, Gulshan, Dhaka",
        price: "BDT 180,000",
        beds: 5,
        baths: 3,
        sqft: 450,
        image: "bg-orange-100",
    },
];

export default function FeaturedProperties() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Discover Your Perfect<br />Property Match</h2>
                </div>
                <div className="hidden md:block">
                    <p className="text-sm text-gray-500 max-w-xs text-right">
                        Find Your Property I've put together more than 50 examples of automated real estate.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {properties.map((property, index) => (
                    <div key={index} className="group relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all">
                        <div className={`w-full aspect-4/3 ${property.image} relative`}>
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <span className="text-lg font-medium">{property.name} Image</span>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-2 rounded-lg">
                                <p className="font-semibold text-gray-900 dark:text-white text-sm">{property.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[150px]">{property.location}</p>
                            </div>
                        </div>

                        <div className="p-4 flex items-center justify-between">
                            <div className="text-blue-600 font-bold">{property.price}</div>
                            <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.beds}</span>
                                <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.baths}</span>
                                <span>{property.sqft} sqft</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
