import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, ChevronDown, Leaf, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToInstructions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('instructions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-0 overflow-hidden bg-brand-dark">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-sm font-semibold uppercase tracking-wider mb-4">
            Dexcom & Stelo Compatible Patches
          </div>
          
          <h1 className="text-[2.7rem] lg:text-[4.0rem] font-bold leading-[1.1] mb-4 tracking-tight">
            Uncompromised <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-teal-200">
              Protection.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed max-w-2xl">
            High quality overpatches designed for Dexcom G7 & Stelo. 
            Water-resistant, hypoallergenic, and built for your active lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="#instructions"
              onClick={scrollToInstructions}
              className="px-8 py-4 bg-brand-teal text-brand-dark font-bold rounded-lg hover:bg-teal-300 transition-all flex items-center justify-center gap-2 text-lg shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
            >
              How to Apply
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 pt-5 border-t border-white/10 w-full justify-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-teal/10 rounded-full text-brand-teal">
                <Droplets size={20} />
              </div>
              <span className="text-sm font-medium text-gray-300">Water Resistant</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-teal/10 rounded-full text-brand-teal">
                <ShieldCheck size={20} />
              </div>
              <span className="text-sm font-medium text-gray-300">Non-irritating</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-brand-teal/10 rounded-full text-brand-teal">
                <Leaf size={20} />
              </div>
              <span className="text-sm font-medium text-gray-300">Latex-free</span>
            </div>
          </div>

          {/* Video Section Moved Here */}
          <div className="w-full mt-10 pb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-[#F97316] text-center mb-2">
              See Exactly How to Apply the Patch <br /> (1-minute video)
            </h3>
            
            {/* Red Banner */}
            <div className="bg-[#EF4444] py-3 px-4 text-center mb-4 w-full shadow-md rounded-lg">
              <p className="text-white font-bold text-lg md:text-xl">
                Don't Miss Out! See the step by step process of applying the patches:
              </p>
            </div>

            {/* Video Player */}
            <div className="bg-black rounded-xl overflow-hidden aspect-video w-full max-w-3xl mx-auto shadow-2xl relative group cursor-pointer border border-white/10">
              <img 
                  src="https://picsum.photos/1200/800" 
                  alt="Application Video" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#2DD4BF] rounded-full flex items-center justify-center pl-2 shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="text-white fill-current" size={40} />
                  </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;