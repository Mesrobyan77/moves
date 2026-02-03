"use client";
import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

export default function ContactsPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-10">
          <h1 className="text-5xl font-bebas tracking-tight">Contacts</h1>
          <nav className="text-[10px] uppercase tracking-[0.3em] text-text-light mt-4 md:mt-0 font-geist">
            <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
            <span className="mx-3 text-border">→</span>
            <span className="text-primary">Contacts</span>
          </nav>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Contact Details Cards */}
          <ContactInfoCard 
            icon={<FiPhone className="text-primary" />} 
            title="Phone" 
            detail="8 800 234 56 78" 
            subDetail="Mon-Fri, 9am-7pm"
          />
          <ContactInfoCard 
            icon={<FiMail className="text-primary" />} 
            title="Email" 
            detail="support@hotflix.com" 
            subDetail="24/7 online support"
          />
          <ContactInfoCard 
            icon={<FiMapPin className="text-primary" />} 
            title="Address" 
            detail="21-st Avenue, NY" 
            subDetail="New York, USA"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  required
                  className="w-full bg-background border border-border rounded-xl py-4 px-6 text-sm outline-none focus:border-primary/50 transition-all font-geist text-foreground placeholder:text-text-light/50"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  required
                  className="w-full bg-background border border-border rounded-xl py-4 px-6 text-sm outline-none focus:border-primary/50 transition-all font-geist text-foreground placeholder:text-text-light/50"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-background border border-border rounded-xl py-4 px-6 text-sm outline-none focus:border-primary/50 transition-all font-geist text-foreground placeholder:text-text-light/50"
              />
              <textarea 
                placeholder="Your message" 
                rows={5}
                required
                className="w-full bg-background border border-border rounded-xl py-4 px-6 text-sm outline-none focus:border-primary/50 transition-all resize-none font-geist text-foreground placeholder:text-text-light/50"
              ></textarea>
              
              {/* Using your btn-hotflix class here */}
              <button 
                type="submit" 
                className="btn-hotflix flex items-center justify-center gap-3 w-full md:w-auto"
              >
                Send Message <FiSend size={14} />
              </button>
            </form>
          </div>

          {/* Map & Socials */}
          <div className="space-y-8">
            <div className="h-[350px] rounded-3xl overflow-hidden border border-border grayscale invert dark:invert-0 opacity-70">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645533333333!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-text-light text-[10px] uppercase tracking-widest font-bold font-geist">Follow us:</span>
              <div className="flex gap-4">
                <SocialLink icon={<FiFacebook />} />
                <SocialLink icon={<FiTwitter />} />
                <SocialLink icon={<FiInstagram />} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Sub-components
function ContactInfoCard({ icon, title, detail, subDetail }: { icon: React.ReactNode, title: string, detail: string, subDetail: string }) {
  return (
    <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6 hover:border-primary/30 transition-all group">
      <div className="text-3xl mt-1">{icon}</div>
      <div>
        <h4 className="text-text-light text-[10px] uppercase tracking-widest font-black mb-2 font-geist">{title}</h4>
        <p className="text-lg font-bebas tracking-wide mb-1 group-hover:text-primary transition-colors">{detail}</p>
        <p className="text-text-light text-sm font-geist">{subDetail}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-text-light hover:border-primary hover:text-primary transition-all">
      {icon}
    </a>
  );
}