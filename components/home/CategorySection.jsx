
import { Building2, Home, Landmark, Hotel } from "lucide-react";

const categories = [
    { name: "Duplex & Triplex", icon: Home },
    { name: "Apartment & Units", icon: Building2 },
    { name: "Multistorey Buildings", icon: Hotel },
    { name: "Modern Architecture", icon: Landmark },
];

export default function CategorySection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800 cursor-pointer"
                    >
                        <div className="w-full aspect-[4/3] rounded-lg bg-gray-100 dark:bg-zinc-800 mb-4 overflow-hidden relative">
                            {/* Placeholder for category image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-zinc-600 group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors">
                                <category.icon className="w-12 h-12 opacity-50" />
                            </div>
                        </div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{category.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
