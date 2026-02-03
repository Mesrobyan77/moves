"use client";
import { useEffect, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useMovieStore } from "@/src/store/getmoviesSlice";
import { useTranslation } from "@/src/hooks/useTranslation";
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
  const typeHelper = searchParams.get("type") || "movie"; 
  const { lang } = useLanguageStore();
  
  const {
    currentMovie,
    fetchByIdAndType,
    loading,
    error,
    recommendations,
    fetchRecommendations,
    fetchSimilar,
    similar,
  } = useMovieStore();

  useEffect(() => {
    if (id) {
      const movieId = id as string;
      fetchByIdAndType(movieId, typeHelper);
      fetchRecommendations(movieId, typeHelper);
      fetchSimilar(movieId, typeHelper);
    }
  }, [id, typeHelper, lang, fetchByIdAndType, fetchRecommendations, fetchSimilar]);

  const movieData = useMemo(() => {
    if (!currentMovie) return null;
    const m = currentMovie as IMovieDetails & ITMDBDetails; 
    
    const isAnime =
      m.origin_country?.includes("JP") &&
      m.genres?.some((g) => g.id === 16);

    const runtimeDisplay = m.runtime
      ? `${m.runtime} ${t('details.minutes')}`
      : m.number_of_seasons
      ? `${m.number_of_seasons} ${t('details.seasons')}`
      : t('details.not_available');

    return {
      title: m.name || m.title,
      type: isAnime ? "anime" : (m.first_air_date ? "tv" : "movie"),
      seasons: m.seasons || [],
      rating: m.vote_average?.toFixed(1) || "N/A",
      overview: m.overview,
      genres: m.genres?.map((g) => g.name).join(", "),
      runtime: runtimeDisplay,
      backdrop: m.backdrop_path ? `https://image.tmdb.org/t/p/original${m.backdrop_path}` : null,
      releaseDate: m.release_date || m.first_air_date,
      country: m.origin_country?.join(", ") || "N/A",
    };
  }, [currentMovie, t]);

  if (loading) return <Loading />;
  
  if (error || !movieData) {
    return (
      <MovieError 
        message={error || "Movie not found"} 
        onRetry={() => window.location.reload()} 
      />
    );
  }

  return (
    /* FIX: Added 'flex flex-col' and 'min-h-screen'. 
       This ensures the page takes up the full height and pushes the footer down.
    */
    <main className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      
      {/* 1. DYNAMIC BACKGROUND LAYER (Fixed at z-0) */}
      {movieData.backdrop && (
        <div
          className="fixed inset-0 z-0 opacity-20 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${movieData.backdrop})` }}
          aria-hidden="true"
        />
      )}
      
      {/* 2. GRADIENT OVERLAY (Ensures readability and blends into the background) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-background/70 to-background pointer-events-none" />

      {/* 3. CONTENT WRAPPER (z-10 puts this ABOVE the fixed background) */}
      <div className="relative z-10 flex-grow">
        <section className="pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <h1 className="text-4xl md:text-6xl font-bebas tracking-tight mb-10 text-foreground uppercase">
              {movieData.title}
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Poster Card */}
              <div className="shrink-0 mx-auto lg:mx-0 shadow-2xl">
                <Card movies={currentMovie as IMovie} showName={false} />
              </div>

              {/* Movie Info */}
              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <InfoItem label={t('details.genre')} value={movieData.genres} isAccent />
                  <InfoItem label={t('details.rating')} value={movieData.rating} />
                  <InfoItem 
                    label={t('details.release')} 
                    value={movieData.releaseDate ? new Date(movieData.releaseDate).getFullYear().toString() : "N/A"} 
                  />
                  <InfoItem label={t('details.runtime')} value={movieData.runtime} />
                  <InfoItem label={t('details.country')} value={movieData.country} />
                </div>

                <div className="relative mt-8 max-w-2xl p-6 bg-card/40 backdrop-blur-md rounded-2xl border border-border/50 shadow-xl">
                  <p className="leading-relaxed text-muted-foreground text-sm italic">
                    {movieData.overview || "No description available."}
                  </p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary" />
                </div>
              </div>

              {/* Video Player Section */}
              <div className="w-full lg:w-[450px]">
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
            <h2 className="text-3xl font-bebas tracking-wider mb-8 uppercase text-foreground border-b border-primary/30 pb-2">
              {t('details.discovery_title')}
            </h2>
            <MovieDiscoverySection
              upcomingMovies={recommendations.length > 0 ? recommendations : similar}
            />
          </div>
        </section>
      </div>

      {/* NOTE: If your Footer is in layout.tsx, it will naturally appear after this 'main'.
        If you want to place it here manually, add <Footer /> here.
      */}
    </main>
  );
}

function InfoItem({ label, value, isAccent = false }: { label: string, value: string | undefined, isAccent?: boolean }) {
  if (!value) return null;
  return (
    <p className="flex items-center text-sm">
      <span className="text-muted-foreground font-bold uppercase text-[10px] tracking-widest min-w-[100px]">
        {label}:
      </span>
      <span className={`ml-2 font-semibold ${isAccent ? "text-primary" : "text-foreground"}`}>
        {value}
      </span>
    </p>
  );
}