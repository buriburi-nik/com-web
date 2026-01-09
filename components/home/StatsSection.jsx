
import Image from "next/image";

export default function StatsSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Your Trusted Real<br />Estate Advisors
                    </h2>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-2xl">
                            <div className="text-3xl font-bold text-gray-900 dark:text-white">30+</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Satisfied Customer</div>
                        </div>
                        <div className="bg-blue-900 p-6 rounded-2xl text-white">
                            <div className="text-3xl font-bold">5k+</div>
                            <div className="text-sm text-blue-200 mt-1">Award winning</div>
                        </div>
                        <div className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-2xl">
                            <div className="text-3xl font-bold text-gray-900 dark:text-white">07+</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Years of Experience</div>
                        </div>
                        <div className="bg-gray-100 dark:bg-zinc-900 p-6 rounded-2xl">
                            <div className="text-3xl font-bold text-gray-900 dark:text-white">33+</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Projects Delivered</div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            <div className="w-full aspect-square bg-gray-200 dark:bg-zinc-800 rounded-2xl overflow-hidden relative"></div>
                            <div className="w-full aspect-4/5 bg-gray-200 dark:bg-zinc-800 rounded-2xl overflow-hidden relative"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="w-full aspect-4/5 bg-gray-200 dark:bg-zinc-800 rounded-2xl overflow-hidden relative"></div>
                            <div className="w-full aspect-square bg-gray-200 dark:bg-zinc-800 rounded-2xl overflow-hidden relative"></div>
                        </div>
                    </div>
                    {/* Center Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-900 rounded-full flex items-center justify-center text-white text-xs text-center p-2 border-4 border-white dark:border-black shadow-lg">
                        Trusted<br />Agency
                    </div>
                </div>
            </div>
        </section>
    );
}
