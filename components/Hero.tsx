"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-[var(--background)] min-h-[600px] flex items-center">

            {/* Background Waves */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 800V0H1440V800H0Z" fill="#1A1A1A" />
                    <path d="M720 800C720 800 900 400 1440 400V800H720Z" fill="#D946EF" />
                    <path d="M0 800C0 800 400 600 720 400C1040 200 1440 0 1440 0V800H0Z" fill="#9333EA" fillOpacity="0.5" />
                    <path d="M0 800C0 800 300 500 600 500C900 500 1200 200 1440 200V800H0Z" fill="#EC4899" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-6 text-left">
                        <FadeIn delay={0.2} direction="right">
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
                                <span className="text-white block">Your Daily Dose of</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] to-[#F472B6]">Berry Bliss</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="right">
                            <p className="mt-4 text-lg text-yellow-400 font-medium max-w-lg leading-relaxed bg-black/50 p-6 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl relative z-20">
                                Delicious multivitamin gummies packed with 15 essential vitamins. 100% plant-based. Naturally sweetened. Zero artificial ingredients
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.6} direction="up">
                            <div className="mt-10">
                                <motion.a
                                    href="#products"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center px-10 py-3 border-2 border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest"
                                >
                                    Buy Now
                                </motion.a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Image Placeholder */}
                    <div className="mt-16 lg:mt-0 lg:col-span-6 relative flex justify-center">
                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 left-10"
                        >
                            <span className="text-4xl">🍓</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 right-20"
                        >
                            <span className="text-4xl">🫐</span>
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 right-0"
                        >
                            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        </motion.div>

                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 100, rotate: 20 }}
                            animate={{ opacity: 1, x: 0, rotate: 6 }}
                            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                            whileHover={{ rotate: 0, scale: 1.05 }}
                            className="relative w-64 h-[400px] sm:w-80 sm:h-[500px] bg-black rounded-3xl border-4 border-white/10 flex items-center justify-center shadow-2xl overflow-hidden group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 z-0"></div>
                            <Image
                                src="/frandy_product_img_single.png"
                                alt="Frandy Berry Blast"
                                fill
                                className="object-cover z-10 transition-transform duration-700"
                                priority
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    );
}
