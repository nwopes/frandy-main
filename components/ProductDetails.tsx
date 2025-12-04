"use client";

import { useCart } from "@/components/CartProvider";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetails({ product }: { product: any }) {
    const { title, description, images, priceRange, variants } = product;
    const image = images?.edges[0]?.node;
    const price = priceRange?.minVariantPrice?.amount;
    const { addItemToCart, setCartOpen } = useCart();
    const [adding, setAdding] = useState(false);

    const handleAddToCart = async () => {
        setAdding(true);
        // Default to first variant
        const variantId = variants?.edges[0]?.node.id;
        if (variantId) {
            await addItemToCart(variantId, 1);
            setCartOpen(true);
        }
        setAdding(false);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                {/* Image gallery */}
                <div className="flex flex-col-reverse">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                        {image ? (
                            <Image
                                src={image.url}
                                alt={image.altText || title}
                                width={600}
                                height={600}
                                className="w-full h-full object-center object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gummy-blue/10 text-gummy-blue">
                                No Image
                            </div>
                        )}
                    </div>
                </div>

                {/* Product info */}
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{title}</h1>
                    <div className="mt-3">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl text-gummy-blue">${parseFloat(price).toFixed(2)}</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="sr-only">Description</h3>
                        <div className="text-base text-gray-700 space-y-6" dangerouslySetInnerHTML={{ __html: description }} />
                    </div>

                    <div className="mt-10 flex sm:flex-col1">
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            disabled={adding}
                            className={`max-w-xs flex-1 bg-gummy-red border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gummy-red sm:w-full ${adding ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {adding ? 'Adding...' : 'Add to bag'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
