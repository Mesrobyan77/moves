"use client";
import React, { useState, useMemo } from "react";
import { ITMDBSeason } from "@/src/types";

interface PlayerProps {
  movieId: string;
  type?: "movie" | "tv" | "anime";
  seasonsData?: ITMDBSeason[];
}

function Trailer({ movieId, type = "movie", seasonsData = [] }: PlayerProps) {
  const [activeKey, setActiveKey] = useState("server1");
  const [s, setS] = useState(1);
  const [e, setE] = useState(1);

  const validSeasons = useMemo(
    () => seasonsData.filter((season) => season.season_number > 0),
    [seasonsData],
  );

  const currentSeason = useMemo(
    () =>
      validSeasons.find((item) => item.season_number === s) || validSeasons[0],
    [s, validSeasons],
  );

  const episodeCount = currentSeason ? currentSeason.episode_count : 0;

  const getVidsrcUrl = (version: string) => {
    const baseUrl = `https://vidsrc.cc/${version}/embed`;
    const params = `?autoPlay=false&subs=0&color=f9ab00&subtitle=0`;

    if (type === "movie") return `${baseUrl}/movie/${movieId}${params}`;
    if (type === "anime")
      return `${baseUrl}/anime/tmdb:${movieId}/${e}/sub${params}`;

    return `${baseUrl}/tv/${movieId}/${s}/${e}${params}`;
  };

  const sources: Record<string, string> = {
    server1: getVidsrcUrl("v3"),
    server2: getVidsrcUrl("v2"),
    server3: `https://player.autoembed.cc/embed/${
      type === "movie" ? "movie" : "tv"
    }/${movieId}${type !== "movie" ? `/${s}/${e}` : ""}?lang=ru`,
  };

  return (
    <div className="flex flex-col gap-6 w-full transition-colors duration-300">
      <div className="flex flex-wrap items-center justify-between gap-4 bg-card/60 backdrop-blur-md p-4 rounded-2xl border border-border shadow-2xl">
        <div className="flex items-center gap-4">
          {(type === "tv" || type === "anime") && (
            <div className="flex gap-3">
              {validSeasons.length > 1 && (
                <div className="group flex items-center gap-2 bg-background/60 px-4 py-2 rounded-xl border border-border hover:border-primary/50 transition-all shadow-inner">
                  <span className="text-[10px] text-primary font-black uppercase tracking-tighter">
                    S
                  </span>
                  <select
                    value={s}
                    onChange={(evt) => {
                      setS(Number(evt.target.value));
                      setE(1);
                    }}
                    className="bg-transparent text-foreground text-xs font-black outline-none cursor-pointer appearance-none min-w-[30px] text-center"
                  >
                    {validSeasons.map((season) => (
                      <option
                        key={season.id}
                        value={season.season_number}
                        className="bg-card text-foreground"
                      >
                        {season.season_number < 10
                          ? `0${season.season_number}`
                          : season.season_number}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="group flex items-center gap-2 bg-background/60 px-4 py-2 rounded-xl border border-border hover:border-primary/50 transition-all shadow-inner">
                <span className="text-[10px] text-primary font-black uppercase tracking-tighter">
                  E
                </span>
                <select
                  value={e}
                  onChange={(evt) => setE(Number(evt.target.value))}
                  className="bg-transparent text-foreground text-xs font-black outline-none cursor-pointer appearance-none min-w-[40px] text-center"
                >
                  {Array.from({ length: episodeCount }, (_, i) => (
                    <option
                      key={i}
                      value={i + 1}
                      className="bg-card text-foreground"
                    >
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-1.5 bg-background/80 p-1.5 rounded-xl border border-border/50">
          {Object.keys(sources).map((key, i) => (
            <button
              key={key}
              onClick={() => setActiveKey(key)}
              className={`px-5 py-2 rounded-lg text-[10px] font-black uppercase transition-all duration-300 ${
                activeKey === key
                  ? "bg-primary text-black shadow-[0_0_15px_rgba(249,171,0,0.3)]"
                  : "text-muted hover:text-foreground"
              }`}
            >
              SRV {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full rounded-[2rem] overflow-hidden border border-border bg-black aspect-video shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <iframe
          key={`${activeKey}-${s}-${e}`}
          src={sources[activeKey]}
          width="100%"
          height="100%"
          allowFullScreen
          className="absolute inset-0 w-full h-full z-10"
        />
      </div>
    </div>
  );
}

export default Trailer;
