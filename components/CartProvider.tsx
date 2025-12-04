"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { createCart, addToCart, getCart, updateCart, removeFromCart } from "@/lib/shopify";

type CartContextType = {
    cart: any;
    cartOpen: boolean;
    setCartOpen: (open: boolean) => void;
    addItemToCart: (variantId: string, quantity: number) => Promise<void>;
    updateItemQuantity: (lineId: string, quantity: number) => Promise<void>;
    removeItemFromCart: (lineId: string) => Promise<void>;
    checkoutUrl: string;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<any>(null);
    const [cartOpen, setCartOpen] = useState(false);
    const [checkoutUrl, setCheckoutUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const cartId = localStorage.getItem("cartId");
            if (cartId) {
                getCart(cartId).then((cart) => {
                    if (cart) {
                        setCart(cart);
                        setCheckoutUrl(cart.checkoutUrl);
                    }
                });
            }
        }
    }, []);

    const addItemToCart = async (variantId: string, quantity: number) => {
        let newCart;
        if (!cart?.id) {
            newCart = await createCart(variantId, quantity);
            localStorage.setItem("cartId", newCart.id);
        } else {
            newCart = await addToCart(cart.id, variantId, quantity);
        }
        setCart(newCart);
        setCheckoutUrl(newCart.checkoutUrl);
        setCartOpen(true);
    };

    const updateItemQuantity = async (lineId: string, quantity: number) => {
        if (!cart?.id) return;
        const newCart = await updateCart(cart.id, [{ id: lineId, quantity }]);
        setCart(newCart);
    };

    const removeItemFromCart = async (lineId: string) => {
        if (!cart?.id) return;
        const newCart = await removeFromCart(cart.id, [lineId]);
        setCart(newCart);
    };

    return (
        <CartContext.Provider value={{ cart, cartOpen, setCartOpen, addItemToCart, updateItemQuantity, removeItemFromCart, checkoutUrl }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
