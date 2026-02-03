"use client";
import Image from 'next/image';
import React from 'react';
import { FiPlay, FiStar, FiTv, FiUsers, FiCheckCircle, FiActivity } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Page Header */}
      <section className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-10">
          <h1 className="text-5xl font-bebas tracking-tight">About Us</h1>
          <nav className="text-[10px] uppercase tracking-[0.3em] text-text-light mt-4 md:mt-0">
            <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
            <span className="mx-3 text-border">→</span>
            <span className="text-primary">About Us</span>
          </nav>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bebas mb-8">
              <span className="text-primary">HOTFLIX</span> – Best Place for Movies
            </h2>
            <p className="text-text-light leading-relaxed mb-6 font-geist">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
            <p className="text-text-light leading-relaxed mb-10 font-geist">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for me will uncover many web sites still in their infancy.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <StatItem count="5K+" label="Movies" />
              <StatItem count="12K+" label="Episodes" />
              <StatItem count="160" label="Countries" />
            </div>
          </div>

          {/* Right Side Image/Video Placeholder */}
          <div className="relative group cursor-pointer">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="@/public/logo.svg"
                alt="About HotFlix" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
          <h2 className="text-4xl font-bebas text-center mb-16">How it works?</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <WorkStep 
              icon={<FiUsers />} 
              step="01" 
              title="Create an account" 
              desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." 
            />
            <WorkStep 
              icon={<FiCheckCircle />} 
              step="02" 
              title="Choose your plan" 
              desc="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters." 
            />
            <WorkStep 
              icon={<FiTv />} 
              step="03" 
              title="Enjoy HotFlix" 
              desc="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text." 
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Feature icon={<FiStar />} title="Ultra HD" desc="Experience movies like never before with our Ultra HD feature. Stunning visuals and vibrant colors." />
          <Feature icon={<FiTv />} title="Online TV" desc="Stream live TV channels, catch up on your favorite shows, and enjoy wide range of content." />
          <Feature icon={<FiActivity />} title="Fast Loading" desc="Our servers are optimized for fast streaming and no buffering during your watch time." />
        </div>
      </section>
    </main>
  );
}

// Sub-components

function StatItem({ count, label }: { count: string, label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bebas text-primary">{count}</span>
      <span className="text-[10px] uppercase tracking-widest text-text-light font-bold mt-1">{label}</span>
    </div>
  );
}

function WorkStep({ icon, step, title, desc }: { icon: React.ReactNode, step: string, title: string, desc: string }) {
  return (
    <div className="relative p-10 bg-background rounded-3xl border border-border hover:border-primary/30 transition-all group">
      <span className="absolute top-6 right-8 text-6xl font-bebas text-foreground/5 group-hover:text-primary/10 transition-colors">{step}</span>
      <div className="text-primary text-3xl mb-6">{icon}</div>
      <h4 className="text-xl font-bebas mb-4 tracking-wide">{title}</h4>
      <p className="text-text-light text-sm leading-relaxed font-geist">{desc}</p>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-6">
      <div className="mt-1 text-primary text-2xl">{icon}</div>
      <div>
        <h4 className="text-lg font-bebas mb-3 tracking-wide">{title}</h4>
        <p className="text-text-light text-sm leading-relaxed font-geist">{desc}</p>
      </div>
    </div>
  );
}