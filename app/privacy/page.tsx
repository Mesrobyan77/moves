"use client";
import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-32 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-10">
          <h1 className="text-5xl font-bebas tracking-wider text-foreground">Privacy Policy</h1>
          <nav className="text-[10px] uppercase tracking-[0.3em] text-muted mt-4 md:mt-0">
            <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
            <span className="mx-3 opacity-20">→</span>
            <span className="text-primary">Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-20 relative">
        {/* Subtle Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction */}
          <section className="group">
            <h2 className="text-2xl font-bebas mb-6 text-foreground tracking-widest flex items-center gap-4">
              <span className="text-primary">01.</span> Introduction
            </h2>
            <p className="text-text-light leading-relaxed text-sm max-w-3xl">
              Welcome to <span className="text-foreground font-bold">HotFlix</span>. We are committed to protecting your personal information and your right to privacy. 
              If you have any questions or concerns about this privacy notice, or our practices with regards to your 
              personal information, please contact us. 
            </p>
          </section>

          {/* Data Collection */}
          <section className="group">
            <h2 className="text-2xl font-bebas mb-6 text-foreground tracking-widest flex items-center gap-4">
              <span className="text-primary">02.</span> Information We Collect
            </h2>
            <div className="bg-card/40 backdrop-blur-sm border border-border p-8 rounded-2xl shadow-xl">
              <p className="text-text-light leading-relaxed text-sm mb-6">
                We collect personal information that you voluntarily provide to us when you register on the website or express interest in our services.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm">
                <li className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span><strong className="text-foreground block">Personal Data</strong> Name, email, and contact details.</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span><strong className="text-foreground block">Payment Data</strong> Secure processing for purchases.</span>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5 col-span-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span><strong className="text-foreground block">Log Data</strong> IP addresses, browser version, and page analytics.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How we use info */}
          <section>
            <h2 className="text-2xl font-bebas mb-6 text-foreground tracking-widest flex items-center gap-4">
              <span className="text-primary">03.</span> Usage & Purpose
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Facilitate account creation",
                "Administrative communications",
                "Order management",
                "Targeted advertising",
                "Enforce terms and conditions",
                "Request user feedback"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-border/50 py-3">
                  <span className="text-primary font-mono text-xs">0{i+1}</span>
                  <span className="text-text-light text-sm italic">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* User Rights (Simplified UI) */}
          <section className="bg-primary/5 border border-primary/10 p-8 rounded-2xl">
            <h2 className="text-2xl font-bebas mb-4 text-foreground tracking-widest">04. Your Privacy Rights</h2>
            <p className="text-text-light text-sm leading-relaxed">
              In regions like the EEA, you have the right to request access, rectification, or erasure of your data. 
              We value your control over your digital footprint.
            </p>
          </section>

          {/* Contact Info */}
          <footer className="pt-10 border-t border-border">
            <h2 className="text-2xl font-bebas mb-6 text-foreground tracking-widest">05. Contact Us</h2>
            <p className="text-text-light leading-relaxed text-sm mb-8">
              If you have questions about this notice, reach out to our privacy officer at:
              <span className="text-primary ml-1 font-bold cursor-pointer hover:underline decoration-2 underline-offset-4">
                support@hotflix.com
              </span>
            </p>
            <address className="not-italic inline-block group">
              <div className="p-8 bg-card rounded-2xl border border-border shadow-2xl transition-all duration-300 group-hover:border-primary/30">
                <p className="text-foreground font-bebas tracking-widest text-lg mb-2">HotFlix Inc.</p>
                <p className="text-muted text-xs leading-6 uppercase tracking-tighter">
                  123 Movie Lane, Suite 100<br />
                  Los Angeles, CA 90001<br />
                  United States
                </p>
              </div>
            </address>
          </footer>

        </div>
      </section>
    </main>
  );
}