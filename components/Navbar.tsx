"use client";

import Link from 'next/link';
import { useCart } from './CartProvider';

export default function Navbar() {
    const { setCartOpen, cart } = useCart();
    const quantity = cart?.lines?.edges?.reduce((acc: number, item: any) => acc + item.node.quantity, 0) || 0;

    return (
        <nav className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <div className="relative w-12 h-12 flex-shrink-0 animate-bounce-slow group-hover:animate-wiggle">
                            {/* Blueberry (Bottom Right) */}
                            <svg className="absolute bottom-0 right-0 w-7 h-7 text-gummy-blue drop-shadow-md z-10" fill="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="11" />
                                <path d="M8 7L12 3L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            </svg>
                            {/* Strawberry (Top Left) */}
                            <svg className="absolute top-0 left-0 w-9 h-9 text-gummy-red drop-shadow-md z-20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                <path d="M12 6C10 4 8 3 6 4" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 6C14 4 16 3 18 4" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 6V3" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="font-permanent-marker text-4xl tracking-wider text-white drop-shadow-[0_2px_0_rgba(0,0,0,1)]" style={{ fontFamily: 'var(--font-permanent-marker)' }}>
                            FRANDY
                        </span>
                    </Link>

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-300 hover:text-gummy-red font-medium transition-colors">
                            Shop
                        </Link>
                        <Link href="#" className="text-gray-300 hover:text-gummy-red font-medium transition-colors">
                            About
                        </Link>
                        <Link href="#" className="text-gray-300 hover:text-gummy-red font-medium transition-colors">
                            Contact
                        </Link>
                    </div>



                    {/* Cart Icon */}
                    <div className="flex items-center">
                        <button
                            className="p-2 rounded-full hover:bg-gummy-blue/10 transition-colors relative"
                            onClick={() => setCartOpen(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gummy-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {quantity > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-gummy-red rounded-full">
                                    {quantity}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
