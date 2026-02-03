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

function RecentlyUpdated({
  data,
  onTabChange,
  isLoading,
}: RecentlyUpdatedProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("New items");
  const tabs = ["New items", "Movies", "TV Shows", "Anime"];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-[24px] md:text-[36px] leading-none font-normal mb-6 text-foreground font-bebas">
          Recently Updated
        </h2>
      </div>
      <div className="w-full border-b border-zinc-500/30 mb-8">
        <div className="container flex gap-8">
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`relative py-3 transition cursor-pointer font-medium text-sm md:text-base ${
                activeTab === tab
                  ? "text-primary"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute -bottom-px left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_#f9ab00]" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {isLoading
            ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
            : data.map((movie) => <Card key={movie.id} movies={movie} />)}
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <button
          onClick={() => router.push("/catalog")}
          className=" cursor-pointer flex flex-row justify-center items-center h-11.5 w-40 rounded-lg bg-transparent text-[14px] text-white uppercase border-2 border-primary mt-12.5 mx-auto hover:bg-primary/10 transition-colors duration-300"
        >
          View All
        </button>
      </div>

      <div className="w-full border-b border-zinc-500/30 mt-15"></div>
    </section>
  );
}

export default RecentlyUpdated;
