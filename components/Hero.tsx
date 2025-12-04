export default function Hero() {
    return (
        <div className="relative overflow-hidden bg-[#1A1A1A] min-h-[600px] flex items-center">

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
                        {/* Logo/Brand */}
                        <div className="mb-8">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                                <span className="text-2xl font-black text-black">FW</span>
                            </div>
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#EC4899] mb-6" style={{ textShadow: '2px 2px 0px #000' }}>
                            Take a Sip.<br />
                            Enjoy the Trip.
                        </h1>

                        <p className="mt-4 text-lg text-yellow-400 font-medium max-w-lg leading-relaxed bg-black/50 p-6 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl relative z-20">
                            FRANDY is an adaptogen-infused hydration beverage featuring Lion's Mane, L-Theanine, amino acids, electrolytes, and prebiotics. It is crafted to enhance clarity, performance, and recovery without caffeine or sugar crashes.
                        </p>

                        <div className="mt-10">
                            <a href="#products" className="inline-flex items-center justify-center px-10 py-3 border-2 border-white text-base font-bold rounded-full text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest">
                                Buy Now
                            </a>
                        </div>
                    </div>

                    {/* Right Image Placeholder */}
                    <div className="mt-16 lg:mt-0 lg:col-span-6 relative flex justify-center">
                        {/* Floating Elements */}
                        <div className="absolute top-0 left-10 animate-bounce-slow">
                            <span className="text-4xl">🍓</span>
                        </div>
                        <div className="absolute bottom-20 right-20 animate-wiggle">
                            <span className="text-4xl">🫐</span>
                        </div>
                        <div className="absolute top-1/2 right-0 animate-pulse">
                            <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        </div>

                        {/* Product Placeholder */}
                        <div className="relative w-64 h-[400px] bg-gray-800 rounded-3xl border-4 border-white/20 flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                            <div className="text-center p-6">
                                <p className="text-white font-bold text-xl mb-2">YOUR PRODUCT</p>
                                <p className="text-gray-400 text-sm">Upload your image here</p>
                                <div className="mt-4 w-16 h-16 bg-white/10 rounded-full mx-auto flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
