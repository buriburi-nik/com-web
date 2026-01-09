"use client";

import Image from "next/image";

const InspirationCard = ({ company, image, description, logo, onViewMore }) => {
    return (
        <div
            onClick={onViewMore}
            className="group relative w-full h-full bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300"
        >
            <div className="relative w-full h-full min-h-[300px]">
                <Image
                    src={image || "/placeholder.jpg"}
                    alt={description || "Inspiration"}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Brand/Company overlay */}
                {(company || logo) && (
                    <div className="absolute top-4 left-4 z-20">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                            {logo ? (
                                <Image
                                    src={logo}
                                    alt={company}
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                            ) : null}
                            {company && <span className="text-xs font-semibold text-gray-800">{company}</span>}
                        </div>
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Description overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm md:text-base font-medium line-clamp-2 drop-shadow-md">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InspirationCard;
