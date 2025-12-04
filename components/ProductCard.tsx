"use client";

import Image from 'next/image';
import { useCart } from './CartProvider';

interface Product {
    id: string;
    title: string;
    handle: string;
    priceRange: {
        minVariantPrice: {
            amount: string;
        };
    };
    images: {
        edges: {
            node: {
                url: string;
                altText: string;
            };
        }[];
    };
    variants?: {
        edges: {
            node: {
                id: string;
            }
        }[]
    }
}

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function ProductCard({ product }: { product: Product }) {
    const { title, priceRange, images } = product;
    const image = images.edges[0]?.node;
    const price = priceRange.minVariantPrice.amount;
    const { addItemToCart } = useCart();

    return (
        <FadeIn>
            <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#1F1D2B] rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 border border-white/5 overflow-hidden"
            >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-800 group-hover:opacity-75 h-64 relative">
                    {image ? (
                        <Image
                            src={image.url}
                            alt={image.altText || title}
                            fill
                            className="object-cover object-center"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gummy-blue/10 text-gummy-blue font-bold">
                            No Image
                        </div>
                    )}
                </div>
                <div className="p-6">
                    <h3 className="text-lg font-bold text-white">
                        <a href={`/products/${product.handle}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">Delicious & Healthy</p>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-xl font-extrabold text-gummy-blue">₹{parseFloat(price).toFixed(2)}</p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-4 py-2 bg-gummy-red text-white text-sm font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-pink-600 z-10 relative"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = `/products/${product.handle}`;
                            }}
                        >
                            View
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </FadeIn>
    );
}
