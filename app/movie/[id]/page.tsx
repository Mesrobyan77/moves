"use client";
import { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useMovieStore } from "@/src/store/getmoviesSlice";
import Card from "@/src/components/ui/Card";
import Trailer from "@/src/components/ui/Trailer";
import MovieError from "@/src/components/ui/MovieError";
import Loading from "@/src/components/ui/Loading";
import MovieDiscoverySection from "@/src/components/MovieDiscoverySection";
import { IMovie, IMovieDetails, ITMDBDetails } from "@/src/types";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const typeHelper = searchParams.get("type");
  const {
    currentMovie,
    fetchByIdAndType,
    fetchUpcoming,
    loading,
    error,
    recommendations,
    fetchRecommendations,
    fetchSimilar,
    similar,
  } = useMovieStore();

  useEffect(() => {
    if (id) {
      fetchUpcoming();
      fetchByIdAndType(id as string, typeHelper || null);
      fetchRecommendations(id as string, typeHelper || "");
      fetchSimilar(id as string, typeHelper || "");
    }
  }, [id, typeHelper, fetchByIdAndType, fetchUpcoming]);

  const movieData = useMemo(() => {
    if (!currentMovie) return null;
    const m = currentMovie as IMovieDetails & ITMDBDetails; 
    const isAnime =
      m.origin_country?.includes("JP") &&
      m.genres?.some((g: { id: number; name: string }) => g.id === 16);
    return {
      title: m.name || m.title,
      type: isAnime ? "anime" : m.first_air_date ? "tv" : "movie",
      seasons: m.seasons || [],
      rating: m.vote_average?.toFixed(1),
      overview: m.overview,
      genres: m.genres
        ?.map((g: { id: number; name: string }) => g.name)
        .join(", "),
      runtime: m.runtime
        ? `${m.runtime} min`
        : m.number_of_seasons
        ? `${m.number_of_seasons} Seasons`
        : "N/A",
      backdrop: `https://image.tmdb.org/t/p/original${m.backdrop_path}`,
      releaseDate: m.release_date || m.first_air_date,
      country: m.origin_country?.join(", ") || "USA",
    };
  }, [currentMovie]);

  if (loading || !movieData) {
    return <Loading />;
  }

  if (error) {
    return (
      <MovieError
        message={error}
        onRetry={() => id && fetchByIdAndType(id as string, typeHelper)}
      />
    );
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      {/* 1. DYNAMIC BACKGROUND LAYER */}
      <div
        className="fixed inset-0 z-0 opacity-40 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${movieData.backdrop})` }}
      />
      {/* Gradient overlay using the CSS variable --background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-[#1a191f]/50 to-[#1a191f] pointer-events-none" />

      {/* 2. CONTENT WRAPPER */}
      <div className="relative z-10">
        {/* HEADER SECTION */}
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <h1 className="text-4xl md:text-5xl font-bebas tracking-tight mb-10 text-foreground">
              {movieData.title}
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Poster Card */}
              <div className="shrink-0 mx-auto lg:mx-0 shadow-2xl z-20 relative pointer-events-none">
                <Card movies={currentMovie as IMovie} showName={false} />
              </div>

              {/* Movie Info */}
              <div className="space-y-4 text-[15px] font-geist">
                <div className="space-y-3">
                  <InfoItem label="Genre" value={movieData.genres} isAccent />
                  <InfoItem label="Rating" value={movieData.rating} />
                  <InfoItem 
                    label="Release" 
                    value={new Date(movieData.releaseDate || 0).getFullYear().toString()} 
                  />
                  <InfoItem label="Running time" value={movieData.runtime} />
                  <InfoItem label="Country" value={movieData.country} isAccent />
                </div>

                {/* Description Box with Accent Side-Bar */}
                <div className="relative mt-8 max-w-md p-6 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl">
                  <p className="leading-relaxed text-text-light text-sm italic">
                    {movieData.overview}
                  </p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-12 bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                </div>
              </div>

              {/* Right Column: Video Player */}
              <div className="w-full lg:flex-1">
                <Trailer
                  movieId={id as string}
                  type={movieData.type as "movie" | "tv" | "anime"}
                  seasonsData={movieData.seasons}
                />
              </div>
            </div>
          </div>
        </section>

        {/* RECOMMENDATIONS SECTION */}
        <MovieDiscoverySection
          upcomingMovies={
            recommendations.length > 0 ? recommendations : similar
          }
        />
      </div>
    </main>
  );
}

// Helper component for cleaner UI mapping
function InfoItem({ label, value, isAccent = false }: { label: string, value: string | undefined, isAccent?: boolean }) {
  return (
    <p>
      <span className="text-text-light font-bold uppercase text-[11px] tracking-widest">
        {label}:
      </span>
      <span className={`ml-2 ${isAccent ? "text-primary hover:underline cursor-pointer" : "text-foreground"}`}>
        {value}
      </span>
    </p>
  );
}