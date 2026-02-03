"use client";
import Image from 'next/image';
import React from 'react';
import { FiPlay, FiStar, FiTv, FiUsers, FiCheckCircle, FiActivity } from 'react-icons/fi';
import { useTranslation } from "@/src/hooks/useTranslation";
import Link from 'next/link';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Page Header */}
      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-10">
          <h1 className="text-5xl font-bebas tracking-tight uppercase">{t('about.title')}</h1>
          <nav className="text-[10px] uppercase tracking-[0.3em] text-muted mt-4 md:mt-0 font-bold">
            <Link href="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link>
            <span className="mx-3 text-border">→</span>
            <span className="text-primary">{t('about.title')}</span>
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bebas mb-8 uppercase">
              <span className="text-primary">HOTFLIX</span> – {t('about.subtitle_1')}
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              {t('about.desc_1')}
            </p>
            <p className="text-muted leading-relaxed mb-10">
              {t('about.desc_2')}
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <StatItem count="5K+" label={t('about.stats.movies')} />
              <StatItem count="12K+" label={t('about.stats.episodes')} />
              <StatItem count="160" label={t('about.stats.countries')} />
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="/logo.svg" // Fixed path
                alt="About HotFlix" 
                className="w-full h-full object-contain p-10 bg-card group-hover:scale-105 transition-transform duration-700"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,171,0,0.4)] group-hover:scale-110 transition-transform">
                  <FiPlay className="text-black text-2xl ml-1 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-card py-24 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bebas text-center mb-16 uppercase tracking-wider">{t('about.how_it_works')}</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <WorkStep 
              icon={<FiUsers />} 
              step="01" 
              title={t('about.steps.step_1_title')} 
              desc={t('about.steps.step_1_desc')} 
            />
            <WorkStep 
              icon={<FiCheckCircle />} 
              step="02" 
              title={t('about.steps.step_2_title')} 
              desc={t('about.steps.step_2_desc')} 
            />
            <WorkStep 
              icon={<FiTv />} 
              step="03" 
              title={t('about.steps.step_3_title')} 
              desc={t('about.steps.step_3_desc')} 
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Feature icon={<FiStar />} title={t('about.features.ultra_hd')} desc={t('about.features.ultra_hd_desc')} />
          <Feature icon={<FiTv />} title={t('about.features.online_tv')} desc={t('about.features.online_tv_desc')} />
          <Feature icon={<FiActivity />} title={t('about.features.fast_loading')} desc={t('about.features.fast_loading_desc')} />
        </div>
      </section>
    </main>
  );
}

// Sub-components remains mostly same, just updating classes to match theme
function StatItem({ count, label }: { count: string, label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bebas text-primary">{count}</span>
      <span className="text-[10px] uppercase tracking-widest text-muted font-bold mt-1">{label}</span>
    </div>
  );
}

function WorkStep({ icon, step, title, desc }: { icon: React.ReactNode, step: string, title: string, desc: string }) {
  return (
    <div className="relative p-10 bg-background rounded-3xl border border-border hover:border-primary/30 transition-all group shadow-sm">
      <span className="absolute top-6 right-8 text-6xl font-bebas text-foreground/5 group-hover:text-primary/10 transition-colors">{step}</span>
      <div className="text-primary text-3xl mb-6">{icon}</div>
      <h4 className="text-xl font-bebas mb-4 tracking-wide uppercase">{title}</h4>
      <p className="text-muted text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="mt-1 text-primary text-2xl group-hover:scale-110 transition-transform">{icon}</div>
      <div>
        <h4 className="text-lg font-bebas mb-3 tracking-wide uppercase">{title}</h4>
        <p className="text-muted text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}