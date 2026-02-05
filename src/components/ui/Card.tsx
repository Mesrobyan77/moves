"use client";
import Image from "next/image";
import { Play, Bookmark } from "lucide-react";
import { IMovie } from "@/src/types";
import { useRouter } from "next/navigation";

interface CardProps {
  movies: IMovie;
  showName?: boolean;
  helperName?: string;
}

function Card({ movies, showName = true, helperName }: CardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    let typeParam = "movie";
    if (helperName === "tv") typeParam = "tv";
    if (helperName === "Anime" || helperName === "anime") typeParam = "anime";
    console.log(typeParam);
    router.push(`/movie/${movies.id}?type=${typeParam}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="movie-card group relative cursor-pointer overflow-hidden rounded-xl"
    >
      <div
        className={`absolute top-2 left-2 md:top-3 md:left-3 rounded-full bg-[#0000007c] border p-3 md:p-1.5 z-20 text-[10px] md:text-xs font-bold ${
          movies?.vote_average >= 7
            ? "border-green-500 text-green-500"
            : "border-yellow-500 text-yellow-500"
        }`}
      >
        {movies?.vote_average?.toFixed(1) || "0.0"}
      </div>

      <div className="absolute top-2 right-2 md:top-3 md:right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/70 p-1.5 md:p-2 rounded-lg hover:bg-[#f9ab00]">
        <Bookmark size={16} className="text-white md:w-4.5" />
      </div>

      <div className="relative aspect-[2/3] overflow-hidden rounded-xl">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movies?.poster_path}`}
          height={250}
          width={250}
          className="rounded-xl transition-transform duration-500 group-hover:scale-105 object-cover"
          alt={movies?.title || "Poster"}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/35 backdrop-blur-sm p-2 rounded-full border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-300">
            <div className="bg-white backdrop-blur-sm p-2 rounded-full border border-white/30">
              <Play
                size={30}
                className="fill-[#f9ab00] text-[#f9ab00] translate-x-0.5"
              />
            </div>
          </div>
        </div>
      </div>
      {showName && (
        <h3 className="mt-2 font-bebas text-sm md:text-lg transition-colors truncate text-text-light uppercase tracking-wide group-hover:text-[#f9ab00]">
          {movies?.title || movies?.original_name}
        </h3>
      )}
    </div>
  );
}
export default Card;
