"use client";
import { useEffect, useCallback } from "react";

import RecentlyUpdated from "@/src/components/RecentlyUpdated";

import Loading from "@/src/components/ui/Loading";
import { useMovieStore } from "@/src/store/getmoviesSlice";
import MovieCarousel from "@/src/components/ui/Swiper";

export default function Home() {
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
    const init = async () => {
      await Promise.all([
        getMovies(),
        fetchUpcoming(),
        fetchContentByTab("New items"),
      ]);
    };
    init();
  }, []);

  const handleTabChange = useCallback(
    (tab: string) => {
      fetchContentByTab(tab);
    },
    [fetchContentByTab]
  );

console.log(
  {
    movies,
    tabContent,
    upcoming,
    loading,
    error,
  }
);
  if (loading && movies.length === 0) return <Loading />;
  if (error)
    return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <main className="bg-background min-h-screen text-white pb-20">
      <MovieCarousel movies={movies} title={["NEW ITEMS ", "OF THIS SEASON"]} />

       <RecentlyUpdated
        data={tabContent}
        onTabChange={handleTabChange}
        isLoading={loading}
      /> 

       <MovieCarousel
        movies={upcoming}
        title={["Expected", "premiere"]}
        viewAll={true}
      /> 
    </main>
  );
}
