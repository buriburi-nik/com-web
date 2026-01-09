
import { Key, ShieldCheck, Clock, BadgeCheck, MoveRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Affordable Property Taxes",
        description: "We help you find a new home by offering a smart real estate experience.",
        icon: Key,
        active: true,
    },
    {
        title: "Guaranteed Quality Homes",
        description: "We help you find a new home by offering a smart real estate experience.",
        icon: ShieldCheck,
        active: false,
    },
    {
        title: "Fast and Easy Process",
        description: "We help you find a new home by offering a smart real estate experience.",
        icon: Clock,
        active: false,
    },
    {
        title: "Property Insurance",
        description: "We help you find a new home by offering a smart real estate experience.",
        icon: BadgeCheck,
        active: false,
    },
];

export default function ServicesSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-black/20 rounded-3xl my-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
                    Enhance your property listings and videos with accurate and engaging subtitles.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex items-start p-6 rounded-xl transition-all ${service.active
                                ? "bg-blue-900 text-white shadow-xl"
                                : "bg-white dark:bg-zinc-900 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-800 border border-gray-100 dark:border-gray-800"
                            }`}
                    >
                        <div className={`p-3 rounded-lg mr-4 ${service.active ? "bg-white/10" : "bg-blue-50 dark:bg-zinc-800 text-blue-600"}`}>
                            <service.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className={`font-semibold mb-2 ${service.active ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                {service.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${service.active ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`}>
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-8">
                <Link
                    href="/services"
                    className="inline-flex items-center px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
                >
                    Explore <MoveRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
