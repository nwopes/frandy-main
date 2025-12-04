import FadeIn from "./FadeIn";

export default function NutritionInfo() {
    const nutrients = [
        {
            name: "Vitamin A",
            amount: "400 mcg",
            benefit: "Vision & Immune"
        },
        {
            name: "Vitamin C",
            amount: "43 mg",
            benefit: "Antioxidant Power"
        },
        {
            name: "Vitamin D3",
            amount: "120 IU",
            benefit: "Bone & Mood"
        },
        {
            name: "Vitamin E",
            amount: "5 mg",
            benefit: "Skin Health"
        },
        {
            name: "Vitamin B7",
            amount: "40 mcg",
            benefit: "Hair & Skin"
        },
        {
            name: "Zinc",
            amount: "4 mg",
            benefit: "Immune Support"
        }
    ];

    return (
        <section className="bg-[var(--background)] py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">Complete Nutrition in Every Bite</h2>
                        <p className="text-gray-400 text-lg">15 essential vitamins and minerals</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nutrients.map((item, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="bg-[#1F1D2B] rounded-2xl p-8 border border-white/5 hover:border-gummy-red/30 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                                <p className="text-3xl font-black text-gummy-red mb-2">{item.amount}</p>
                                <p className="text-gray-400 font-medium">{item.benefit}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
