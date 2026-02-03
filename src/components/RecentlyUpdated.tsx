"use client";
import React, { useState } from "react";
import { IMovie } from "../types";
import Card from "./ui/Card";
import SkeletonCard from "./ui/SkeletonCard";
import { useRouter } from "next/navigation";

interface RecentlyUpdatedProps {
  data: IMovie[];
  onTabChange: (tab: string) => void;
  isLoading: boolean;
}

function RecentlyUpdated({ data, onTabChange, isLoading }: RecentlyUpdatedProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("New items");
  const tabs = ["New items", "Movies", "TV Shows", "Anime"];

  const handleTabClick = (tab: string) => {
    if (tab === activeTab) return; 
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <section className="py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bebas mb-8 text-foreground uppercase tracking-wider">
          Recently <span className="text-primary">Updated</span>
        </h2>
      </div>
      
      {/* Tabs Navigation */}
      <div className="w-full border-b border-border mb-10">
        <div className="container mx-auto px-4 flex gap-6 md:gap-10 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              // Swapped colors for text-primary and text-muted
              className={`relative py-4 cursor-pointer font-bebas text-sm md:text-lg tracking-widest transition-all uppercase whitespace-nowrap ${
                activeTab === tab ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute -bottom-[1px] left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_rgba(249,171,0,0.5)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 min-h-[400px]">
          {isLoading && data.length === 0
            ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
            : data.map((movie) => (
                <div 
                  key={movie.id} 
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
                >
                  <Card 
                    movies={movie} 
                    helperName={activeTab} 
                  />
                </div>
              ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="w-full flex justify-center mt-16">
        <button
          onClick={() => router.push("/catalog")}
          // Swapped hex for border-primary and text-primary
          className="px-12 py-4 rounded-xl cursor-pointer border-2 border-primary text-primary font-black uppercase text-[10px] tracking-[0.2em] hover:bg-primary hover:text-black hover:shadow-[0_0_30px_rgba(249,171,0,0.2)] transition-all duration-500 active:scale-95"
        >
          View All Content
        </button>
      </div>
    </section>
  );
}

export default RecentlyUpdated;