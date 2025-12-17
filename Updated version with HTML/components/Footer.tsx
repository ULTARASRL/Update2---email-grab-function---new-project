import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-brand-dark pt-20 border-t border-white/5">
      <div className="container mx-auto px-6 pb-12">
        
        {/* Main Footer Content */}
        <div className="mb-16 flex flex-col md:items-start items-center text-center md:text-left">
           <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 rounded-full border-2 border-brand-teal"></div>
              <span className="text-2xl font-bold tracking-tight text-white">Adhesure</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-8">
            Premium protection for your continuous glucose monitors. Live fearlessly with patches that stay put.
          </p>
          <div className="flex gap-4">
              <SocialLink 
                icon={<Instagram size={20} />} 
                href="https://www.instagram.com/myadhesure/" 
              />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-2">
                <p>&copy; {new Date().getFullYear()} Adhesure. All rights reserved.</p>
                <a href="#privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode; href?: string }) => (
    <a 
      href={href || "#"} 
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-teal hover:text-brand-dark transition-all"
    >
        {icon}
    </a>
)

export default Footer;