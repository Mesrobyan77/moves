"use client";
import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import { useTranslation } from "@/src/hooks/useTranslation";
import Link from 'next/link';

export default function ContactsPage() {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("contacts.form.success"));
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-10">
          <h1 className="text-5xl font-bebas tracking-tight uppercase">{t("contacts.title")}</h1>
          <nav className="text-[10px] uppercase tracking-[0.3em] text-muted mt-4 md:mt-0 font-bold">
            <Link href="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link>
            <span className="mx-3 text-border">→</span>
            <span className="text-primary">{t("contacts.title")}</span>
          </nav>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <ContactInfoCard 
            icon={<FiPhone className="text-primary" />} 
            title={t("contacts.phone")} 
            detail="8 800 234 56 78" 
            subDetail={t("contacts.phone_hours")}
          />
          <ContactInfoCard 
            icon={<FiMail className="text-primary" />} 
            title={t("contacts.email")} 
            detail="support@hotflix.com" 
            subDetail={t("contacts.email_support")}
          />
          <ContactInfoCard 
            icon={<FiMapPin className="text-primary" />} 
            title={t("contacts.address")} 
            detail={t("contacts.address_detail")} 
            subDetail={t("contacts.city")}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder={t("contacts.form.name")} 
                  required
                  className="w-full bg-background border border-border rounded-xl py-4 px-6 text-sm outline-none focus:border-primary/50 transition-all text-foreground placeholder:text-muted/50"
                />
                <input 
                  type="email" 
                  placeholder={t("contacts.form.email")} 
                  required
                  className="w-full bg-background border border-border rounded-xl py-4 px-6 text-sm outline-none focus:border-primary/50 transition-all text-foreground placeholder:text-muted/50"
                />
              </div>
              <input 
                type="text" 
                placeholder={t("contacts.form.subject")} 
                className="w-full bg-background border border-border rounded-xl py-4 px-6 text-sm outline-none focus:border-primary/50 transition-all text-foreground placeholder:text-muted/50"
              />
              <textarea 
                placeholder={t("contacts.form.message")} 
                rows={5}
                required
                className="w-full bg-background border border-border rounded-xl py-4 px-6 text-sm outline-none focus:border-primary/50 transition-all resize-none text-foreground placeholder:text-muted/50"
              ></textarea>
              
              <button 
                type="submit" 
                className="px-10 py-4 bg-primary text-black font-black uppercase text-[12px] tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(249,171,0,0.4)] transition-all flex items-center justify-center gap-3 w-full md:w-auto"
              >
                {t("contacts.form.send")} <FiSend size={14} />
              </button>
            </form>
          </div>

          {/* Socials & Info */}
          <div className="space-y-8">
            <div className="p-8 bg-card border border-border rounded-3xl">
               <p className="text-muted text-sm leading-relaxed mb-6">
                 {t("pricing_page.welcome_text")}
               </p>
               <div className="flex items-center gap-6">
                <span className="text-muted text-[10px] uppercase tracking-widest font-bold">{t("contacts.follow")}</span>
                <div className="flex gap-4">
                  <SocialLink icon={<FiFacebook />} />
                  <SocialLink icon={<FiTwitter />} />
                  <SocialLink icon={<FiInstagram />} />
                </div>
              </div>
            </div>
            
            {/* Map Placeholder with theme styling */}
            <div className="h-[250px] rounded-3xl overflow-hidden border border-border bg-card flex items-center justify-center">
               <FiMapPin size={40} className="text-muted opacity-20" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactInfoCard({ icon, title, detail, subDetail }: { icon: React.ReactNode, title: string, detail: string, subDetail: string }) {
  return (
    <div className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6 hover:border-primary/30 transition-all group shadow-sm">
      <div className="text-3xl mt-1">{icon}</div>
      <div>
        <h4 className="text-muted text-[10px] uppercase tracking-widest font-black mb-2">{title}</h4>
        <p className="text-lg font-bebas tracking-wide mb-1 group-hover:text-primary transition-colors uppercase">{detail}</p>
        <p className="text-muted text-sm italic">{subDetail}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-muted hover:border-primary hover:text-primary transition-all">
      {icon}
    </a>
  );
}