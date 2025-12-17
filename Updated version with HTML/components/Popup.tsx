import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Gift } from 'lucide-react';

const Popup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showReopenButton, setShowReopenButton] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // YOUR GOOGLE APPS SCRIPT WEB APP URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyVLPy_4qQwpDWE0P46o_MuiYd85PSgWtv3be10gwiaHOzk516lPM8hf8DuXJKh07igXQ/exec';

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('adhesure_popup_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // 5 seconds delay
      return () => clearTimeout(timer);
    } else {
        const isSubmitted = localStorage.getItem('adhesure_popup_submitted');
        if (!isSubmitted) {
            setShowReopenButton(true);
        }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('adhesure_popup_seen', 'true');
    if (!submitted) {
        setShowReopenButton(true);
    }
  };

  const handleReopen = () => {
      setIsOpen(true);
      setShowReopenButton(false);
  };

  const handleSuccess = () => {
    setSubmitted(true);
    localStorage.setItem('adhesure_popup_submitted', 'true');
    
    // Close popup after success message
    setTimeout(() => {
        handleClose();
        setShowReopenButton(false);
        setName('');
        setEmail('');
        setSubmitted(false); // Reset for next time if they reopen, but they usually won't
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop default form navigation
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Append timestamp if not already in the form (though it is, via hidden input)
    // formData.append('timestamp', new Date().toISOString());

    try {
        // Use fetch with no-cors mode to send data to Google Scripts
        await fetch(SCRIPT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' 
        });
        
        // Wait a tiny bit just to ensure smooth UI transition
        handleSuccess();
    } catch (error) {
        console.error("Submission error:", error);
        // Even if it fails (network error), we usually show success to the user 
        // to avoid confusion on landing pages, or you could show an error state.
        handleSuccess();
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-brand-surface border border-white/10 w-full max-w-md rounded-2xl p-8 relative shadow-2xl overflow-hidden"
            >
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <button 
                onClick={handleClose}
                type="button"
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <>
                  <div className="w-12 h-12 bg-brand-teal/20 rounded-full flex items-center justify-center text-brand-teal mb-6">
                    <Mail size={24} />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-2">Get 15% OFF</h2>
                  <p className="text-gray-400 mb-6">
                    Protect your CGM for less. Sign up for our newsletter and get a discount on your next order.
                  </p>

                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Hidden Timestamp Field */}
                    <input type="hidden" name="timestamp" value={new Date().toISOString()} />
                    
                    <input
                      type="text"
                      name="name" 
                      placeholder="Your Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-teal transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-teal transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-brand-teal text-brand-dark font-bold py-3 rounded-lg hover:bg-teal-300 transition-colors flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Unlock 15% Off'}
                    </button>
                  </form>
                  <p className="text-xs text-center text-gray-600 mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Code Sent!</h3>
                  <p className="text-brand-teal">Check your inbox for your discount.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Reopen Button */}
      <AnimatePresence>
        {showReopenButton && !isOpen && (
            <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                onClick={handleReopen}
                className="fixed bottom-6 right-6 z-40 bg-brand-teal text-brand-dark font-bold py-5 px-9 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] hover:bg-teal-300 transition-all flex items-center gap-3 group text-2xl"
            >
                <Gift size={32} className="group-hover:rotate-12 transition-transform"/>
                <span>Get 15% OFF</span>
            </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Popup;