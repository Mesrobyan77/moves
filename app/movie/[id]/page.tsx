"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useMovieStore } from "@/src/store/getmoviesSlice";
import { IMovieDetails } from "@/src/types";
import Image from "next/image";
import Card from "@/src/components/ui/Card";
import MovieError from "@/src/components/ui/MovieError";
import Trailer from "@/src/components/ui/Trailer";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const {
    currentMovie,
    fetchMovieDetails,
    upcoming,
    fetchUpcoming,
    loading,
    error,
  } = useMovieStore();

  useEffect(() => {
    if (id) fetchMovieDetails(id as string);
    fetchUpcoming();
  }, [id]);

  if (loading || !currentMovie)
    return <div className="loading-spinner">Loading...</div>;

  if (error) {
    <MovieError
      message={error}
      onRetry={() => {
        if (id) fetchMovieDetails(id as string);
      }}
    />;
  }
  const movie = currentMovie as IMovieDetails;
  const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <main className="min-h-screen  bg-background text-white font-sans">
      {/* HEADER SECTION */}
      <section
        className="relative pt-20 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgb(26, 25, 31), rgb(26, 25, 31,0.4)), url(${backdrop})`,
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light mb-8">{movie.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Poster and Info */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-62 h-full">
                <Card movies={movie} showName={false} />
              </div>

              <div className="flex-1 space-y-3 text-sm">
                <p>
                  <span className="text-gray-400">Genre:</span>{" "}
                  <span className="text-primary">
                    {movie.genres.map((g) => g.name).join(", ")}
                  </span>
                </p>
                <p>
                  <span className="text-gray-400">Release:</span>{" "}
                  <span className="text-primary">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                </p>
                <p>
                  <span className="text-gray-400">Running time:</span>{" "}
                  <span className="text-primary">{movie.runtime} min</span>
                </p>
                <p>
                  <span className="text-gray-400">Country:</span>{" "}
                  <span className="text-primary">
                    {movie.origin_country.join(", ")}
                  </span>
                </p>

                <div className="mt-6 p-4 bg-[#28282d] rounded-lg border border-white/5 max-h-48 overflow-y-auto custom-scrollbar">
                  <p className="leading-relaxed text-gray-300">
                    {movie.overview}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Video Player */}
            {/* <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/5"> */}
              <Trailer movieId={id as string} />
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* DISCOVER SECTION */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Comments/Tabs */}
            <div className="flex-1">
              <h2 className="text-3xl font-light mb-6">Discover</h2>
              <div className="flex gap-8 border-b border-white/10 mb-8 pb-2">
                <button className="text-[#f9ab00] border-b-2 border-[#f9ab00] pb-2 uppercase text-sm tracking-widest">
                  Comments
                </button>
                <button className="text-gray-400 hover:text-white uppercase text-sm tracking-widest">
                  Reviews
                </button>
                <button className="text-gray-400 hover:text-white uppercase text-sm tracking-widest">
                  Photos
                </button>
              </div>

              {/* Sample Comment Item */}
              <div className="space-y-6">
                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#28282d] p-6 rounded-xl border border-white/5"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gray-600 rounded-full" />
                      <div>
                        <h4 className="font-bold text-sm">John Doe</h4>
                        <span className="text-xs text-gray-500">
                          30.08.2018, 17:53
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration...
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-80">
              <h2 className="text-2xl font-light mb-6 italic">
                You may also like...
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
                {upcoming.slice(0, 4).map((m) => (
                  <Card key={m.id} movies={m} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
 