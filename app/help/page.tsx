"use client";
import React, { useState } from 'react';
import { FiPlus, FiMinus, FiHelpCircle, FiMail, FiMessageCircle } from 'react-icons/fi';

const faqData = [
  {
    question: "How do I create an account?",
    answer: "To create an account, click the 'Sign In' button at the top right, then select 'Register'. Follow the prompts to enter your email and create a password."
  },
  {
    question: "What devices are supported?",
    answer: "HotFlix is available on multiple platforms including desktop browsers, smart TVs, and mobile devices (iOS and Android)."
  },
  {
    question: "How can I cancel my subscription?",
    answer: "You can cancel your subscription at any time through your Profile settings under the 'Billing' tab."
  },
  {
    question: "Why is the video buffering?",
    answer: "Buffering usually occurs due to slow internet speeds. Try lowering the video quality in the player settings or checking your connection."
  }
];

function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-10">
          <h1 className="text-5xl font-bebas tracking-tight">Help Center</h1>
          <nav className="text-[10px] uppercase tracking-[0.3em] text-text-light mt-4 md:mt-0 font-geist">
            <span className="hover:text-primary cursor-pointer transition-colors">Home</span> 
            <span className="mx-3 text-border">→</span> 
            <span className="text-primary">Help Center</span>
          </nav>
        </div>
      </section>

      {/* Help Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <HelpCard 
            icon={<FiHelpCircle />} 
            title="General Questions" 
            desc="Find answers to common questions about account management and features." 
          />
          <HelpCard 
            icon={<FiMessageCircle />} 
            title="Community Support" 
            desc="Join our community forums to discuss movies and get help from other users." 
          />
          <HelpCard 
            icon={<FiMail />} 
            title="Direct Support" 
            desc="Can't find what you're looking for? Contact our team directly via email." 
          />
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bebas mb-12 text-center tracking-wide">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-foreground/[0.02] transition-colors"
                >
                  <span className="font-bebas text-lg tracking-wider text-foreground">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FiMinus className="text-primary" />
                  ) : (
                    <FiPlus className="text-text-light" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-text-light text-sm leading-relaxed font-geist">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function HelpCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-card p-10 rounded-3xl border border-border hover:border-primary/30 transition-all group text-center">
      <div className="text-primary text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bebas tracking-wide mb-4 text-foreground">{title}</h3>
      <p className="text-text-light text-sm leading-relaxed font-geist">{desc}</p>
    </div>
  );
}

export default HelpPage;