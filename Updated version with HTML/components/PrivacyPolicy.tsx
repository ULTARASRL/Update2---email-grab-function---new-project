import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl text-gray-300">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="mb-12 text-lg text-brand-teal">Effective Date: 2025</p>
      
      <div className="space-y-10">
        <section className="space-y-4">
            <p>This Privacy Policy explains how Adhesure (“we”, “us”, or “our”) collects, uses, and protects information when you visit our landing page or sign up through our email form.</p>
            <p>By using this page, you agree to the terms described below.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-4">We only collect information that you voluntarily provide or that is automatically captured during your visit:</p>
            
            <div className="mb-4">
                <h3 className="text-white font-semibold mb-1">Information you provide</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                    <li>Email address (when you sign up for discounts or updates)</li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-1">Automatically collected data</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                    <li>Basic analytics data such as device type, browser, pages visited, and time spent on the page</li>
                    <li>Cookie information or similar tracking technologies, if enabled</li>
                </ul>
            </div>
            <p className="mt-4 italic">We do not collect sensitive personal data.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use collected information for general purposes such as:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Sending discount codes or promotional emails</li>
                <li>Providing updates about Adhesure products</li>
                <li>Improving website performance and user experience</li>
                <li>Measuring the effectiveness of advertising and marketing activity</li>
            </ul>
            <p className="mt-4">We do not sell or rent your personal information to third parties.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Sharing of Information</h2>
            <p className="mb-4">We may share limited information with trusted service providers who help us operate our landing page or email communication, such as:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Email marketing platforms</li>
                <li>Analytics or advertising tools</li>
            </ul>
            <p className="mt-4">These partners use the information only to perform services on our behalf and must protect it according to applicable standards.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies & Tracking Technologies</h2>
            <p className="mb-4">Our landing page may use cookies or similar tools to:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Improve navigation and site performance</li>
                <li>Understand visitor activity</li>
                <li>Support advertising and remarketing</li>
            </ul>
            <p className="mt-4">You can modify your browser settings to disable cookies if you prefer.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Protection</h2>
            <p>We apply reasonable security measures to protect your information from unauthorized access, misuse, or disclosure. However, no online transmission is fully risk-free, and we cannot guarantee absolute security.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Choices</h2>
            <p className="mb-4">You can manage how you receive communications from us by using the unsubscribe link included in every email. If you unsubscribe, we will stop sending promotional messages to your email address.</p>
            <p>If you have questions about how your information is used, you can contact us at <span className="text-brand-teal">Support@adhesure.com</span>, and we will do our best to assist you.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Email Communications</h2>
            <p className="mb-4">If you sign up with your email, you may receive:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li>Your discount code</li>
                <li>Occasional product updates or promotional messages</li>
            </ul>
            <p className="mt-4">You can unsubscribe at any time using the link included in every email.</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated “Effective Date.”</p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
            <p className="mb-2">If you have questions about this Privacy Policy or your data, contact us at:</p>
            <a href="mailto:Support@adhesure.com" className="text-brand-teal font-bold hover:underline">Support@adhesure.com</a>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;