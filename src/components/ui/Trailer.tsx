"use client";
import React, { useState } from "react";

function Trailer({ movieId }: { movieId: string }) {
  const [lang, setLang] = useState("ru");
  const [activeKey, setActiveKey] = useState("server1");

  const sources: Record<string, string> = {
    server1: `https://vidsrc.me/embed/movie?tmdb=${movieId}`,
    server2: `https://player.autoembed.cc/embed/movie/${movieId}?lang=${lang}`,
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      {/* Վերին վահանակ */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-[#1a191f] p-3 rounded-2xl border border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Audio:</span>
          <div className="flex gap-1 bg-black/40 p-1 rounded-xl">
            {["ru", "en"].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                  lang === l ? "bg-[#f9ab00] text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {Object.keys(sources).map((key, i) => (
            <button
              key={key}
              onClick={() => setActiveKey(key)}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                activeKey === key ? "border-[#f9ab00] text-[#f9ab00]" : "border-white/5 text-gray-500"
              }`}
            >
              Server {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* ՄԵԾ Player Container */}
      <div className="relative w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black h-[250px] md:h-[200px] lg:h-[350px]">
        <iframe
          key={`${activeKey}-${lang}`}
          src={sources[activeKey]}
          width="100%"
          height="100%"
          allowFullScreen
          referrerPolicy="no-referrer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}

export default Trailer;