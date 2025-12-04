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

export default function ProductCard({ product }: { product: Product }) {
    const { title, priceRange, images } = product;
    const image = images.edges[0]?.node;
    const price = priceRange.minVariantPrice.amount;
    const { addItemToCart } = useCart();

    // Assuming the first variant is the default one to add
    // In a real app, we might want to fetch variants if not present, but for now let's assume we can get it or need to fetch it.
    // Actually, the product object from getProducts might not have variants. Let's check shopify.ts.
    // getProducts query doesn't fetch variants. We need to update it or fetch here. 
    // For simplicity, let's assume we need to fetch the product details or update the query.
    // Wait, I can't easily update the query and props everywhere without breaking things.
    // Let's just link to the product page for now, OR update the query in shopify.ts to include variants.
    // Updating shopify.ts is better. I will do that in a separate step if needed, but for now let's make the button work if we have the ID, 
    // or redirect to product page if we don't have variant ID.

    // Actually, let's just make the button redirect to the product page for now to be safe, 
    // OR better: The "Add" button on the card is a nice quick-add. 
    // I'll update the getProducts query in shopify.ts to fetch variants.

    return (
        <div className="group relative bg-[#1F1D2B] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white/5 overflow-hidden hover:-translate-y-1">
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
                    <button
                        className="px-4 py-2 bg-gummy-red text-white text-sm font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-pink-600 z-10 relative"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/products/${product.handle}`;
                        }}
                    >
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}
