"use client";

import FadeIn from "./FadeIn";

export default function AboutSection() {
    return (
        <section id="about" className="bg-[var(--background)] py-12 md:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Headline */}
                <FadeIn direction="up">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">
                            All of the Nutrient. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gummy-red to-gummy-blue">None of the Spike.</span>
                        </h2>
                    </div>
                </FadeIn>

                {/* Who We Are */}
                <FadeIn direction="up" delay={0.1}>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h3 className="text-2xl font-bold text-white mb-4">Who We Are</h3>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            Frandy is the breakthrough in nutritional supplements you’ve been waiting for. We are a wellness brand designed for the modern, health-conscious consumer who demands more from their vitamins.
                        </p>
                    </div>
                </FadeIn>

                {/* What We Believe - Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {/* Zero Sugar */}
                    <FadeIn direction="up" delay={0.2}>
                        <div className="bg-[#1F1D2B] p-8 rounded-2xl border border-white/5 h-full hover:border-gummy-red/30 transition-colors text-center">
                            <div className="w-16 h-16 bg-gummy-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🍬</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Zero Sugar</h4>
                            <p className="text-gray-400">
                                We believe supplements shouldn't be candy in disguise.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Zero Compromise */}
                    <FadeIn direction="up" delay={0.3}>
                        <div className="bg-[#1F1D2B] p-8 rounded-2xl border border-white/5 h-full hover:border-gummy-blue/30 transition-colors text-center">
                            <div className="w-16 h-16 bg-gummy-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">✨</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Zero Compromise</h4>
                            <p className="text-gray-400">
                                We believe you shouldn't have to sacrifice taste for health.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Total Transparency */}
                    <FadeIn direction="up" delay={0.4}>
                        <div className="bg-[#1F1D2B] p-8 rounded-2xl border border-white/5 h-full hover:border-gummy-yellow/30 transition-colors text-center">
                            <div className="w-16 h-16 bg-gummy-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🔍</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Total Transparency</h4>
                            <p className="text-gray-400">
                                We believe in ingredients that work with your body, not against it.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* The Monk Fruit Revolution */}
                <FadeIn direction="up" delay={0.5}>
                    <div className="bg-gradient-to-r from-[#1F1D2B] to-[#2D2A3D] rounded-3xl p-8 md:p-12 mb-20 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gummy-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 max-w-4xl mx-auto text-center">
                            <h3 className="text-3xl font-bold text-white mb-6">The Monk Fruit Revolution</h3>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                By naturally sweetening our gummies with Monk Fruit extract, we’ve created a supplement that is safe for diabetics and perfect for anyone watching their sugar intake.
                            </p>
                        </div>
                    </div>
                </FadeIn>

                {/* CTA */}


            </div>
        </section>
    );
}
