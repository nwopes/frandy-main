import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: any[] }) {
    return (
        <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-extrabold text-white text-center mb-12">
                OUR <span className="text-gummy-red uppercase tracking-widest drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">COLLECTION</span>
            </h2>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <ProductCard key={product.node.id} product={product.node} />
                ))}
            </div>
        </div>
    );
}
