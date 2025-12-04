"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function BoostHealth() {
    return (
        <section className="bg-[var(--background)] py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <FadeIn direction="up">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-gummy-red to-gummy-blue">Zero Sugar</span> & Monk Fruit?
                        </h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            Experience the sweetness of nature without the guilt. We use premium Monk Fruit to give you 100% delicious flavor with 0% sugar.
                        </p>
                    </div>
                </FadeIn>

                {/* Row 1: Image Left, Text Right - Monk Fruit Magic */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">
                    <div className="w-full lg:w-1/2">
                        <FadeIn direction="right">
                            <div className="relative aspect-square max-w-xs mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-gummy-red/20 to-gummy-blue/20 rounded-full blur-3xl animate-pulse"></div>
                                <div className="relative bg-[#1F1D2B] rounded-full p-8 border border-white/5 shadow-2xl">
                                    <div className="aspect-square flex items-center justify-center bg-black/20 rounded-full overflow-hidden">
                                        <span className="text-9xl">🍈</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <FadeIn direction="left">
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Monk Fruit Magic
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                A natural sweetener extracted from luo han guo fruit with <strong>zero glycaemic impact</strong>. Up to 200 times sweeter than sugar yet contains <strong>no calories or carbohydrates</strong>.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Row 2: Text Left, Image Right - Diabetic-Friendly Promise */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 mb-24">
                    <div className="w-full lg:w-1/2">
                        <FadeIn direction="right">
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Diabetic-Friendly Promise
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Ideal for diabetics and sugar-conscious consumers seeking safe, delicious supplements. <strong>No blood sugar spikes</strong>, no insulin response—just pure, natural sweetness.
                            </p>
                        </FadeIn>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <FadeIn direction="left">
                            <div className="relative aspect-square max-w-xs mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-bl from-gummy-blue/20 to-gummy-red/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                                <div className="relative bg-[#1F1D2B] rounded-full p-8 border border-white/5 shadow-2xl">
                                    <div className="aspect-square flex items-center justify-center bg-black/20 rounded-full overflow-hidden">
                                        <span className="text-9xl">🩸</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Row 3: Image Left, Text Right - No Nasty Surprises */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full lg:w-1/2">
                        <FadeIn direction="right">
                            <div className="relative aspect-square max-w-xs mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                                <div className="relative bg-[#1F1D2B] rounded-full p-8 border border-white/5 shadow-2xl">
                                    <div className="aspect-square flex items-center justify-center bg-black/20 rounded-full overflow-hidden">
                                        <span className="text-9xl">🌿</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <FadeIn direction="left">
                            <h3 className="text-3xl font-bold text-white mb-6">
                                No Nasty Surprises
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Avoids common gummy pitfalls: <strong>no artificial sweeteners</strong> like aspartame or sucralose, no hidden sugars, no synthetic additives. Clean label, clean conscience.
                            </p>
                        </FadeIn>
                    </div>
                </div>

            </div>
        </section>
    );
}
