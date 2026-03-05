import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface Step {
  title: string;
  content: string[];
  id?: string;
  titleColor?: string;
  images?: string[];
}

const steps: Step[] = [
  {
    title: "When to Apply:",
    content: [
      "Apply after you've inserted a new CGM sensor into the skin.",
      "If your current patch is starting to come off before the 10 day period, replace it carefully with a new Adhesure patch to ensure full sensor duration."
    ]
  },
  {
    title: "Skin Preparation:",
    content: [
      "Make sure the skin is clean and completely dry.",
      "Make sure the skin is shaved / has no hair in the area for better adhesion.",
      "Avoid lotions or oils on skin before applying.",
      "Do not apply over cuts, rashes, or irritated skin."
    ]
  },
  {
    title: "Pro Tip before Application:",
    titleColor: "text-[#2DD4BF]",
    content: [
      "Some batches have extra-strong adhesive to last over ten days, which can make the side papers harder to remove.",
      "Solution:",
      "For easier application, before applying the patch on skin, slightly peel and reposition the side paper edges so they’re easier to grab later."
    ],
    images: [
      "https://www.dropbox.com/scl/fi/nwannv8i7ye2jq3f68c5w/1.JPG?rlkey=u66j6i0yt42ip89c9yjpkrcju&st=eema4gv8&raw=1", // Photo 1
      "https://www.dropbox.com/scl/fi/3to5mf4dzkuyct8s87tcq/2.JPG?rlkey=k5pguziy8ztz2dqsvpiqftzy2&st=biurqhsn&raw=1", // Photo 2
      "https://www.dropbox.com/scl/fi/9icmdoobgxwejxuqa4p88/3.JPG?rlkey=u64n8nfgomedqpuj9dohdqouw&st=sif9j663&raw=1", // Photo 3
      "https://www.dropbox.com/scl/fi/e7qti86ny3zaqopumz7rn/4.JPG?rlkey=8ohxv4kkknyr97tx0zrbuxl99&st=xj8go513&raw=1"  // Photo 4
    ]
  },
  {
    id: "how-to-apply-steps",
    title: "How to Apply:",
    titleColor: "text-[#2DD4BF]",
    content: [
      "Peel off the middle part of the paper from the patch.",
      "Do not remove the side papers yet, but you can reposition their edges to be easier to grab later.",
      "Place the patch with the exposed adhesive area over your sensor and skin.",
      "Next remove the side papers.",
      "Smooth out any wrinkles or bubbles with finger for maximum hold.",
      "You're all done!"
    ]
  },
  {
    title: "Wearing the Patches:",
    content: [
      "Patches last 10–14 days depending on activity and skin type.",
      "Water-resistant: safe for swimming, showers, and workouts.",
      "After wetting the patch, gently tap dry with a towel.",
      "Try to not sleep on the side with the sensor for longer lasting duration."
    ]
  },
  {
    title: "How to Remove the Patches:",
    content: [
      "Gently peel from one edge while holding your sensor in place.",
      "Use an adhesive remover wipe or baby oil if needed.",
      "After removal, clean the skin area for any residual glue."
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
              {step.content.map((item, idx) => {
                if (item === "Solution:") {
                  return (
                    <li key={idx} className="text-xl font-bold text-white pt-2 pb-1">
                      {item}
                    </li>
                  );
                }
                return (
                  <li key={idx} className="text-lg font-bold text-gray-300 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2.5 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>

            {/* Visual Guide Images */}
            {step.images && (
              <div className="mt-8 mb-4 md:ml-[10%] md:w-[90%]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                  {step.images.map((img, idx) => (
                    <React.Fragment key={idx}>
                      <div className="relative group">
                        <div className="absolute -top-3 -left-2 bg-brand-teal text-brand-dark text-xs font-black px-2 py-1 rounded-md z-10 shadow-lg">
                          STEP {idx + 1}
                        </div>
                        <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-brand-surface group-hover:border-brand-teal/50 transition-colors shadow-2xl">
                          <img 
                            src={img} 
                            alt={`Pro Tip Step ${idx + 1}`}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        {/* Mobile Arrow */}
                        {idx % 2 === 0 && idx < step.images.length - 1 && (
                          <div className="md:hidden absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-brand-teal bg-brand-dark rounded-full p-1 border border-white/10">
                            <ArrowRight size={16} />
                          </div>
                        )}
                      </div>
                      {/* Desktop Arrow */}
                      {idx < step.images.length - 1 && (
                        <div className="hidden md:flex items-center justify-center text-brand-teal/40">
                          <ArrowRight size={24} />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-6 italic text-center relative -left-[15%]">
                  Visual reference for repositioning corner edges
                </p>
              </div>
            )}
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
    <section id="instructions" className="pt-4 pb-20 bg-brand-dark text-white relative scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Main Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2DD4BF] mb-4 leading-tight">
              How to apply - text instructions
            </h2>
            <p className="text-lg md:text-xl font-bold text-gray-200 text-center max-w-2xl mx-auto">
              Follow these quick steps to get the longest wear for your Dexcom and Stelo sensors.
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