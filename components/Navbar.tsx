"use client";

import Link from 'next/link';
import { useCart } from './CartProvider';

export default function Navbar() {
    const { setCartOpen, cart } = useCart();
    const quantity = cart?.lines?.edges?.reduce((acc: number, item: any) => acc + item.node.quantity, 0) || 0;

    return (
        <nav className="sticky top-0 z-50 bg-[#1A1A1A]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gummy-red rounded-full animate-bounce-slow group-hover:animate-wiggle"></div>
                        <span className="font-bold text-2xl tracking-tight text-white">
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
