"use client";
import React, { useState } from "react";
import { IMovie } from "../types";
import Card from "./ui/Card";
import SkeletonCard from "./ui/SkeletonCard";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/src/hooks/useTranslation";

interface RecentlyUpdatedProps {
  data: IMovie[];
  onTabChange: (tab: string) => void;
  isLoading: boolean;
}

function RecentlyUpdated({ data, onTabChange, isLoading }: RecentlyUpdatedProps) {
  const router = useRouter();
  const { t } = useTranslation();
  
  // Հիշիր. API-ին պետք է փոխանցել անգլերեն անունները, բայց UI-ում ցույց տալ թարգմանվածը
  const tabs = [
    { id: "New items", label: t('tabs.new_items') },
    { id: "Movies", label: t('tabs.movies') },
    { id: "TV Shows", label: t('tabs.tv_shows') },
    { id: "Anime", label: t('tabs.anime') },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    if (tabId === activeTab) return; 
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <section className="py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bebas mb-8 text-foreground uppercase tracking-wider">
          {t('home.recently_updated').split(' ')[0]} <span className="text-primary">{t('home.recently_updated').split(' ')[1]}</span>
        </h2>
      </div>
      
      <div className="w-full border-b border-border mb-10">
        <div className="container mx-auto px-4 flex gap-6 md:gap-10 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative py-4 cursor-pointer font-bebas text-sm md:text-lg tracking-widest transition-all uppercase whitespace-nowrap ${
                activeTab === tab.id ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute -bottom-[1px] left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_rgba(249,171,0,0.5)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 min-h-[400px]">
          {isLoading && data.length === 0
            ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
            : data.map((movie) => (
                <Card key={movie.id} movies={movie} helperName={activeTab} />
              ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <button
          onClick={() => router.push("/catalog")}
          className="px-12 py-4 rounded-xl border-2 border-primary text-primary font-black uppercase text-[10px] tracking-[0.2em] hover:bg-primary hover:text-black transition-all"
        >
          {t('home.view_all')}
        </button>
      </div>
    </section>
  );
}

export default RecentlyUpdated;