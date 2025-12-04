import { getProduct } from "@/lib/shopify";
import Navbar from "@/components/Navbar";
import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
    const { handle } = await params;
    const product = await getProduct(handle);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ProductDetails product={product} />
        </main>
    );
}
