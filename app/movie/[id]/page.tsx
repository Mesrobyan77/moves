"use client";
import { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useMovieStore } from "@/src/store/getmoviesSlice";
import { useTranslation } from "@/src/hooks/useTranslation"; // Ավելացված է
import Card from "@/src/components/ui/Card";
import Trailer from "@/src/components/ui/Trailer";
import MovieError from "@/src/components/ui/MovieError";
import Loading from "@/src/components/ui/Loading";
import MovieDiscoverySection from "@/src/components/MovieDiscoverySection";
import { IMovie, IMovieDetails, ITMDBDetails } from "@/src/types";
import { useLanguageStore } from "@/src/store/useLanguageStore";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const typeHelper = searchParams.get("type");
const { lang } = useLanguageStore();
  
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
  }, [id, typeHelper, fetchByIdAndType, fetchUpcoming, fetchRecommendations, fetchSimilar, lang]);

  const movieData = useMemo(() => {
    if (!currentMovie) return null;
    const m = currentMovie as IMovieDetails & ITMDBDetails; 
    
    const isAnime =
      m.origin_country?.includes("JP") &&
      m.genres?.some((g: { id: number; name: string }) => g.id === 16);

    // Dynamic runtime label calculation
    const runtimeDisplay = m.runtime
      ? `${m.runtime} ${t('details.minutes')}`
      : m.number_of_seasons
      ? `${m.number_of_seasons} ${t('details.seasons')}`
      : t('details.not_available');

    return {
      title: m.name || m.title,
      type: isAnime ? "anime" : m.first_air_date ? "tv" : "movie",
      seasons: m.seasons || [],
      rating: m.vote_average?.toFixed(1),
      overview: m.overview,
      genres: m.genres
        ?.map((g: { id: number; name: string }) => g.name)
        .join(", "),
      runtime: runtimeDisplay,
      backdrop: `https://image.tmdb.org/t/p/original${m.backdrop_path}`,
      releaseDate: m.release_date || m.first_air_date,
      country: m.origin_country?.join(", ") || "USA",
    };
  }, [currentMovie, t]);

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
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* 2. CONTENT WRAPPER */}
      <div className="relative z-10">
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <h1 className="text-4xl md:text-5xl font-bebas tracking-tight mb-10 text-foreground uppercase">
              {movieData.title}
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Poster Card */}
              <div className="shrink-0 mx-auto lg:mx-0 shadow-2xl z-20 relative pointer-events-none">
                <Card movies={currentMovie as IMovie} showName={false} />
              </div>

              {/* Movie Info */}
              <div className="space-y-4 text-[15px]">
                <div className="space-y-3">
                  <InfoItem label={t('details.genre')} value={movieData.genres} isAccent />
                  <InfoItem label={t('details.rating')} value={movieData.rating} />
                  <InfoItem 
                    label={t('details.release')} 
                    value={new Date(movieData.releaseDate || 0).getFullYear().toString()} 
                  />
                  <InfoItem label={t('details.runtime')} value={movieData.runtime} />
                  <InfoItem label={t('details.country')} value={movieData.country} isAccent />
                </div>

                {/* Description Box */}
                <div className="relative mt-8 max-w-md p-6 bg-card/80 backdrop-blur-md rounded-2xl border border-border shadow-xl">
                  <p className="leading-relaxed text-muted text-sm italic">
                    {movieData.overview}
                  </p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-12 bg-primary shadow-[0_0_10px_rgba(249,171,0,0.5)]" />
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
        <section className="pb-20">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <h2 className="text-3xl font-bebas tracking-wider mb-8 uppercase text-foreground">
                    {t('details.discovery_title')}
                </h2>
                <MovieDiscoverySection
                    upcomingMovies={
                        recommendations.length > 0 ? recommendations : similar
                    }
                />
            </div>
        </section>
      </div>
    </main>
  );
}

function InfoItem({ label, value, isAccent = false }: { label: string, value: string | undefined, isAccent?: boolean }) {
  return (
    <p className="flex items-center">
      <span className="text-muted font-bold uppercase text-[10px] tracking-widest min-w-[100px]">
        {label}:
      </span>
      <span className={`ml-2 font-semibold ${isAccent ? "text-primary hover:underline cursor-pointer transition-all" : "text-foreground"}`}>
        {value}
      </span>
    </p>
  );
}