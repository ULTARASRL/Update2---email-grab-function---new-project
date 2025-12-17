import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Step {
  title: string;
  content: string[];
  id?: string;
  titleColor?: string;
}

const steps: Step[] = [
  {
    title: "When to Apply:",
    content: [
      "Apply after you've inserted a new sensor into the skin.",
      "Or when your current sensor patch is starting to peel and you want it to hold longer.",
      "Best applied right after cleaning the skin, so it sticks strong"
    ]
  },
  {
    title: "Skin Preparation:",
    content: [
      "Make sure the skin is clean and completely dry.",
      "Avoid lotions or oils before applying.",
      "Trim or shave hair around the area for better adhesion.",
      "Do not apply over cuts, rashes, or irritated skin."
    ]
  },
  {
    id: "how-to-apply-steps",
    title: "How to Apply:",
    titleColor: "text-[#2DD4BF]",
    content: [
      "Peel off the paper backing from the patch.",
      "Place the adhesive gently over your sensor, pressing firmly around the edges.",
      "Smooth out any wrinkles or bubbles for maximum hold.",
      "Press for 10–15 seconds to secure."
    ]
  },
  {
    title: "Wearing the Patches:",
    content: [
      "Patches last 7–14 days depending on activity and skin type.",
      "Water-resistant: safe for swimming, showers, and workouts."
    ]
  },
  {
    title: "How to Remove the Patches:",
    content: [
      "Gently peel from one edge while holding your sensor in place.",
      "Use an adhesive remover wipe or baby oil if needed.",
      "Clean the area before reapplying a new patch."
    ]
  }
];

const AccordionItem: React.FC<{ step: Step; isOpen: boolean; onToggle: () => void }> = ({ step, isOpen, onToggle }) => {
  return (
    <div 
      className="border-b border-white/10 last:border-0 pb-4 mb-4" 
      id={step.id ? step.id : undefined}
    >
      <button 
        onClick={onToggle}
        className="w-full flex items-start justify-between text-left group focus:outline-none"
      >
        <div className="flex-1 pr-4">
          <h3 className={`text-2xl md:text-3xl font-bold mb-2 transition-colors ${step.titleColor || 'text-white'} group-hover:opacity-80`}>
            {step.title}
          </h3>
          
          {/* Faded Preview when closed */}
          {!isOpen && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-gray-400 text-base md:text-lg relative"
             >
               <div className="flex gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2.5 shrink-0"></span>
                 <p className="line-clamp-1 opacity-60">
                   {step.content[0]}...
                 </p>
               </div>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/80"></div>
             </motion.div>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="mt-2 text-brand-teal"
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="text-left space-y-3 pt-2 pl-2">
              {step.content.map((item, idx) => (
                <li key={idx} className="text-lg font-bold text-gray-300 flex items-start gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0"></span>
                   <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InstructionSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="instructions" className="pt-10 pb-20 bg-brand-dark text-white relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Main Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2DD4BF] mb-4 leading-tight">
              How to apply your glucose <br /> adhesive patches
            </h2>
            <p className="text-lg md:text-xl font-bold text-gray-200 text-center max-w-2xl mx-auto">
              Follow these quick steps to get the best fit and <br /> longest wear for your Dexcom and Stelo sensors.
            </p>
          </div>

          <div className="w-full bg-brand-surface/30 rounded-2xl p-6 md:p-8 border border-white/5">
            {steps.map((step, index) => (
              <AccordionItem 
                key={index} 
                step={step} 
                isOpen={openIndex === index} 
                onToggle={() => handleToggle(index)} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstructionSection;