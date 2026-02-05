"use client";
import { useEffect, useCallback } from "react";
import RecentlyUpdated from "@/src/components/RecentlyUpdated";
import Loading from "@/src/components/ui/Loading";
import { useMovieStore } from "@/src/store/getmoviesSlice";
import MovieCarousel from "@/src/components/ui/Swiper";
import MovieError from "@/src/components/ui/MovieError";
import PricingSection from "@/src/components/ui/PricingPlans";
import { useTranslation } from "@/src/hooks/useTranslation";
import { useLanguageStore } from "@/src/store/useLanguageStore";

export default function Home() {
  const { t } = useTranslation();
  const { lang } = useLanguageStore();

  const {
    movies,
    tabContent,
    upcoming,
    getMovies,
    fetchContentByTab,
    fetchUpcoming,
    loading,
    error,
  } = useMovieStore();

  useEffect(() => {
    getMovies();
    fetchUpcoming();
    fetchContentByTab("New items");
  }, [getMovies, fetchUpcoming, fetchContentByTab, lang]);

  const handleTabChange = useCallback(
    (tab: string) => {
      fetchContentByTab(tab);
    },
    [fetchContentByTab],
  );

  if (loading && movies.length === 0) return <Loading />;

  if (error && movies.length === 0)
    return (
      <MovieError
        message={error}
        onRetry={() => {
          getMovies();
          fetchUpcoming();
          fetchContentByTab("New items");
        }}
      />
    );

  return (
    <main className="bg-background min-h-screen text-foreground transition-colors duration-300">
      <section className="relative">
        <MovieCarousel
          movies={movies}
          title={[t("home.hero_new"), t("home.hero_season")]}
        />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      <section className="container mx-auto px-4 py-12">
        <RecentlyUpdated
          data={tabContent}
          onTabChange={handleTabChange}
          isLoading={loading}
        />
      </section>

      <div className="container mx-auto px-4 my-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />
      </div>

      <section className="container mx-auto px-2 py-12">
        <MovieCarousel
          movies={upcoming}
          title={[t("home.expected"), t("home.premiere")]}
          viewAll={true}
        />
      </section>

      <PricingSection />
    </main>
  );
}
