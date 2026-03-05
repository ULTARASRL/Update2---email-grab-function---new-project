import React from 'react';
import { Check } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Dexcom G7 Overpatch",
    count: "20 Pack",
    price: "$24.99",
    features: ["Medical Grade Adhesive", "Waterproof", "Hypoallergenic", "Central Hole Cutout"],
    imageColor: "from-gray-800 to-gray-900"
  },
  {
    id: 2,
    name: "Stelo Glucose Sensor Patch",
    count: "20 Pack",
    price: "$24.99",
    features: ["Optimized for Stelo", "Sweat Resistant", "No-fray Edges", "Easy Application"],
    imageColor: "from-gray-800 to-teal-900/30"
  }
];

const ProductSection: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-brand-surface relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Select Your Device</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the specifically designed patch for your Continuous Glucose Monitor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-brand-dark border border-white/5 rounded-2xl p-8 hover:border-brand-teal/50 transition-all duration-300 group flex flex-col">
              <div className={`h-48 rounded-xl bg-gradient-to-br ${product.imageColor} mb-8 flex items-center justify-center relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                 <div className="text-center z-10">
                    <span className="block text-4xl font-bold text-white/20 mb-1">Adhesure</span>
                    <span className="text-sm font-bold text-brand-teal uppercase tracking-widest">{product.name}</span>
                 </div>
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-brand-teal font-medium">{product.count}</p>
                </div>
                <span className="text-2xl font-bold text-white">{product.price}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                        <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                            <Check size={12} />
                        </div>
                        {feature}
                    </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-gray-200 transition-colors">
                Shop Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="#instructions" className="text-gray-400 hover:text-brand-teal text-sm flex flex-col items-center gap-2 animate-bounce">
                Scroll for application instructions
                <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;