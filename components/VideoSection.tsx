import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="pt-5 pb-8 bg-brand-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Phone Mockup Video */}
          <div className="w-full max-w-[400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] border-[12px] border-[#1A1A1A] rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(45,212,191,0.15)] bg-[#0A0A0A]">
                {/* Speaker/Camera Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1A1A1A] rounded-b-2xl z-20"></div>
                
                {/* Video Iframe */}
                <iframe
                  src="https://player.cloudinary.com/embed/?cloud_name=do9oao9ex&public_id=0303_v3_-_final_s8vfob&autoplay=true&loop=true&muted=true"
                  className="w-full h-full border-none"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  title="Adhesure Application Guide"
                ></iframe>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-teal/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-teal/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
