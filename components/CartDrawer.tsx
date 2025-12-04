"use client";

import { useCart } from "./CartProvider";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CartDrawer() {
    const { cart, cartOpen, setCartOpen, updateItemQuantity, removeItemFromCart, checkoutUrl } = useCart();
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        if (cart?.lines?.edges) {
            const total = cart.lines.edges.reduce((acc: number, item: any) => {
                return acc + (parseFloat(item.node.merchandise.price.amount) * item.node.quantity);
            }, 0);
            setSubtotal(total);
        }
    }, [cart]);

    if (!cartOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500/50 backdrop-blur-sm transition-opacity" onClick={() => setCartOpen(false)}></div>
            <div className="fixed inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md">
                    <div className="h-full flex flex-col bg-[#1A1A1A] shadow-2xl overflow-y-scroll">

                        {/* Header */}
                        <div className="px-6 py-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-white">Cart</h2>
                            <button
                                type="button"
                                className="-m-2 p-2 text-gray-400 hover:text-gray-300"
                                onClick={() => setCartOpen(false)}
                            >
                                <span className="sr-only">Close panel</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto px-6 py-6">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-white/10">
                                    {cart?.lines?.edges.map(({ node }: any) => (
                                        <li key={node.id} className="py-8 flex">
                                            {/* Image */}
                                            <div className="flex-shrink-0 w-24 h-24 bg-gray-800 rounded-xl overflow-hidden relative border border-white/10">
                                                {node.merchandise.product.images.edges[0] ? (
                                                    <Image
                                                        src={node.merchandise.product.images.edges[0].node.url}
                                                        alt={node.merchandise.product.images.edges[0].node.altText || "Product Image"}
                                                        fill
                                                        className="w-full h-full object-center object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">No Image</div>
                                                )}
                                            </div>

                                            {/* Details */}
                                            <div className="ml-6 flex-1 flex flex-col justify-between">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <h3 className="text-base font-semibold text-white">
                                                            {node.merchandise.product.title}
                                                        </h3>
                                                        <p className="mt-1 text-sm text-gummy-blue font-medium">
                                                            ${parseFloat(node.merchandise.price.amount).toFixed(2)}
                                                        </p>
                                                    </div>
                                                    <p className="text-base font-bold text-white">
                                                        ${(parseFloat(node.merchandise.price.amount) * node.quantity).toFixed(2)}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between mt-4">
                                                    {/* Quantity Selector */}
                                                    <div className="flex items-center border border-white/20 rounded-lg">
                                                        <button
                                                            className="px-3 py-1 text-gray-400 hover:bg-white/5 rounded-l-lg"
                                                            onClick={() => {
                                                                if (node.quantity > 1) {
                                                                    updateItemQuantity(node.id, node.quantity - 1);
                                                                } else {
                                                                    removeItemFromCart(node.id);
                                                                }
                                                            }}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="px-2 text-sm font-medium text-white">{node.quantity}</span>
                                                        <button
                                                            className="px-3 py-1 text-gray-400 hover:bg-white/5 rounded-r-lg"
                                                            onClick={() => updateItemQuantity(node.id, node.quantity + 1)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    {/* Remove Button */}
                                                    <button
                                                        type="button"
                                                        className="text-sm font-medium text-red-400 hover:text-red-500"
                                                        onClick={() => removeItemFromCart(node.id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                    {!cart?.lines?.edges.length && (
                                        <div className="text-center py-20">
                                            <p className="text-gray-400 text-lg">Your cart is empty.</p>
                                            <button
                                                className="mt-4 text-gummy-blue font-bold hover:underline"
                                                onClick={() => setCartOpen(false)}
                                            >
                                                Start Shopping
                                            </button>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>

                        {/* Footer / Summary */}
                        {cart?.lines?.edges.length > 0 && (
                            <div className="border-t border-white/10 py-6 px-6 bg-white/5">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-base font-medium text-gray-400">
                                        <p>Subtotal</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                    <div className="flex justify-between text-base font-medium text-gray-400">
                                        <p>Shipping</p>
                                        <p className="text-green-400">Free</p>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold text-gummy-blue mt-4 pt-4 border-t border-white/10">
                                        <p>Total</p>
                                        <p>${subtotal.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <a
                                        href={checkoutUrl}
                                        className="w-full flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-gummy-blue hover:bg-blue-600 transition-all transform hover:scale-[1.02]"
                                    >
                                        Check out
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
