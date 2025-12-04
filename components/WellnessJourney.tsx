"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

export default function WellnessJourney() {
    return (
        <section className="bg-[var(--background)] overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px]">

                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
                    <Image
                        src="/wellness_journey_image.png"
                        alt="Wellness Journey"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay Gradient to blend with content */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--background)]/80 lg:to-[var(--background)]"></div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-24 flex flex-col justify-center">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 md:mb-12 leading-tight">
                            Join Us on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gummy-red to-gummy-blue">Wellness Journey</span>
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Card 1 */}
                        <FadeIn direction="up" delay={0.1}>
                            <div className="bg-[#1F1D2B] p-8 rounded-2xl border border-white/5 h-full hover:border-gummy-red/30 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Sweet Wellness, Zero Compromise
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Frandy delivers delicious health in every gummy—naturally sweetened, diabetic-friendly, and crafted with care.
                                </p>
                            </div>
                        </FadeIn>

                        {/* Card 2 */}
                        <FadeIn direction="up" delay={0.2}>
                            <div className="bg-[#1F1D2B] p-8 rounded-2xl border border-white/5 h-full hover:border-gummy-blue/30 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Innovation Ready for Market
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    Backed by a passionate team of experts and positioned perfectly in a high-growth industry segment.
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Full Width Card */}
                    <FadeIn direction="up" delay={0.3}>
                        <div className="bg-[#1F1D2B] p-8 rounded-2xl border border-white/5 mb-12 hover:border-gummy-yellow/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Making Health Accessible
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                Let's transform wellness together—making healthy living delicious, affordable, and accessible for all.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4}>
                        <div className="border-l-4 border-gummy-red pl-6 py-2">
                            <p className="text-lg text-gray-300 italic">
                                Frandy: Where taste meets wellness, and health meets happiness.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
