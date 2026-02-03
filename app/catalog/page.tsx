"use client";

import { useEffect, useState, useCallback } from "react";
import { useMovieStore } from "@/src/store/getmoviesSlice";
import { API } from "@/src/lib/api";
import Card from "@/src/components/ui/Card";
import {
  FiChevronDown,
  FiFilter,
  FiSearch,
  FiX,
  FiAlertTriangle,
} from "react-icons/fi";
import Loading from "@/src/components/ui/Loading";
import Pagination from "@/src/components/ui/Pagination";
import { IMovie } from "@/src/types";
import { forbiddenKeywords } from "@/src/constands";

export default function CatalogPage() {
  const {
    movies,
    searchResults,
    fetchCatalog,
    searchContent,
    loading,
    currentPage,
    totalPages,
  } = useMovieStore();

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [selectedType, setSelectedType] = useState<string>("movie");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>("popularity.desc");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // UI Labels
  const [typeLabel, setTypeLabel] = useState("Movies");
  const [genreLabel, setGenreLabel] = useState("All genres");
  const [sortLabel, setSortLabel] = useState("Most Popular");

  const sortOptions = [
    { label: "Most Popular", value: "popularity.desc" },
    { label: "Newest", value: "primary_release_date.desc" },
    { label: "Oldest", value: "primary_release_date.asc" },
    { label: "Highest Rated", value: "vote_average.desc" },
  ];

  // 1. Validation Logic
  const handleSearch = useCallback(
    (query: string) => {
      setSearchError(null);
      const lowerQuery = query.toLowerCase().trim();
      const isForbidden = forbiddenKeywords.some((word) =>
        lowerQuery.includes(word.toLowerCase())
      );

      if (isForbidden) {
        setSearchError("Adult content is not permitted.");
        return;
      }

      if (lowerQuery.length > 2) {
        searchContent(query);
      }
    },
    [searchContent]
  );

  // 2. Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, handleSearch]);

  // 3. Load Genres based on Type
  useEffect(() => {
    const loadGenres = async () => {
      try {
        const res = await API.getGenres(selectedType === "movie" ? "movie" : "tv");
        setGenres(res.data.genres);
      } catch (err) {
        console.error("Failed to load genres", err);
      }
    };
    loadGenres();
  }, [selectedType]);

  // 4. Initial Load
  useEffect(() => {
    fetchCatalog("movie", { page: 1 });
  }, [fetchCatalog]);

  // 5. Apply Filters
  const handleApply = useCallback(
    (page: number = 1) => {
      setSearchQuery("");
      setSearchError(null);
      const apiType = selectedType === "anime" ? "tv" : selectedType;
      const genreParam =
        selectedType === "anime"
          ? selectedGenre ? `16,${selectedGenre}` : "16"
          : selectedGenre;

      fetchCatalog(apiType, {
        genreId: genreParam || undefined,
        sortBy: selectedSort,
        rating: selectedRating || undefined,
        page,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [selectedType, selectedGenre, selectedSort, selectedRating, fetchCatalog]
  );

  const isSearching = searchQuery.trim().length > 2;
  const displayMovies = isSearching && !searchError ? searchResults : movies;

  return (
    <main className="min-h-screen bg-background text-foreground pt-12 pb-20 transition-colors duration-300">
      {/* Header */}
      <section className="container mx-auto px-4 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-8">
          <h1 className="text-5xl font-bebas tracking-tight flex items-center gap-3">
            Catalog{" "}
            <span className="text-primary text-xs bg-primary/10 px-2 py-1 rounded border border-primary/20 font-geist font-bold uppercase tracking-widest">
              {typeLabel}
            </span>
          </h1>
          <nav className="text-[10px] uppercase tracking-[0.2em] text-text-light mt-4 md:mt-0 font-geist">
            <span className="hover:text-primary cursor-pointer transition-colors">Home</span> 
            <span className="mx-3 text-border">/</span>{" "}
            <span className="text-primary">Catalog</span>
          </nav>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-card p-4 rounded-2xl shadow-2xl border border-border flex flex-col lg:flex-row gap-4 items-center">
          <div className="flex flex-wrap gap-3 w-full lg:flex-1">
            
            {/* SEARCH */}
            <div className="relative w-full lg:w-72 group order-first lg:order-none">
              <FiSearch className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${searchError ? "text-red-500" : "text-text-light group-focus-within:text-primary"}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title..."
                className={`w-full bg-background border py-3 pl-12 pr-10 rounded-xl text-sm outline-none transition-all font-geist ${searchError ? "border-red-500/50" : "border-border focus:border-primary/50"}`}
              />
              {searchQuery && (
                <FiX onClick={() => { setSearchQuery(""); setSearchError(null); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-light cursor-pointer hover:text-foreground" />
              )}
            </div>

            {/* TYPE DROPDOWN */}
            <Dropdown 
               label={typeLabel} 
               options={['movie', 'tv', 'anime'].map(t => ({ 
                 label: t === 'movie' ? 'Movies' : t === 'tv' ? 'TV Shows' : 'Anime', 
                 value: t 
               }))}
               onSelect={(val, lab) => { setSelectedType(val); setTypeLabel(lab); }}
            />

            {/* GENRE DROPDOWN */}
            <div className="relative flex-1 min-w-[130px] lg:flex-none group cursor-pointer bg-background border border-border px-4 py-2.5 rounded-xl flex items-center justify-between hover:border-primary/40 transition-all">
              <span className="text-[11px] text-text-light font-bold uppercase tracking-wider truncate max-w-[100px] font-geist">{genreLabel}</span>
              <FiChevronDown className="text-text-light group-hover:text-primary" />
              <div className="absolute top-[110%] left-0 w-full bg-card border border-border rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-2xl max-h-60 overflow-y-auto">
                <ul className="text-xs font-geist">
                  <li onClick={() => { setSelectedGenre(null); setGenreLabel("All genres"); }} className="px-4 py-3 hover:bg-primary hover:text-black border-b border-border transition-colors">All genres</li>
                  {genres.map((g) => (
                    <li key={g.id} onClick={() => { setSelectedGenre(g.id.toString()); setGenreLabel(g.name); }} className="px-4 py-3 hover:bg-primary hover:text-black border-b border-border transition-colors">{g.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RATING DROPDOWN */}
            <div className="relative flex-1 min-w-[130px] lg:flex-none group cursor-pointer bg-background border border-border px-4 py-2.5 rounded-xl flex items-center justify-between hover:border-primary/40 transition-all">
              <span className="text-[11px] text-text-light font-bold uppercase tracking-wider font-geist">
                {selectedRating ? `${selectedRating}+ Rating` : "Rating"}
              </span>
              <FiChevronDown className="text-text-light group-hover:text-primary" />
              <div className="absolute top-[110%] left-0 w-full bg-card border border-border rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-2xl">
                <ul className="text-xs font-geist">
                  <li onClick={() => setSelectedRating(null)} className="px-4 py-3 hover:bg-primary hover:text-black border-b border-border transition-colors">Any Rating</li>
                  {[9, 8, 7, 6, 5].map((num) => (
                    <li key={num} onClick={() => setSelectedRating(num)} className="px-4 py-3 hover:bg-primary hover:text-black border-b border-border transition-colors">{num}+ Stars</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SORT DROPDOWN */}
            <div className="relative flex-1 min-w-[130px] lg:flex-none group cursor-pointer bg-background border border-border px-4 py-2.5 rounded-xl flex items-center justify-between hover:border-primary/40 transition-all">
              <span className="text-[11px] text-text-light font-bold uppercase tracking-wider truncate max-w-[100px] font-geist">{sortLabel}</span>
              <FiChevronDown className="text-text-light group-hover:text-primary" />
              <div className="absolute top-[110%] left-0 w-full bg-card border border-border rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-2xl overflow-hidden">
                <ul className="text-xs font-geist">
                  {sortOptions.map((opt) => (
                    <li key={opt.value} onClick={() => { setSelectedSort(opt.value); setSortLabel(opt.label); }} className="px-4 py-3 hover:bg-primary hover:text-black border-b border-border transition-colors">{opt.label}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          <button
            onClick={() => handleApply(1)}
            className="w-full lg:w-auto bg-primary text-black px-10 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-lg flex items-center justify-center gap-2 font-geist"
          >
            <FiFilter /> Apply
          </button>
        </div>
      </section>

      {/* Grid Content */}
      <section className="container mx-auto px-4 min-h-[600px]">
        {searchError ? (
          <div className="text-center py-40 bg-red-500/5 rounded-3xl border border-dashed border-red-500/20">
            <FiAlertTriangle className="mx-auto text-red-500 text-3xl mb-4" />
            <p className="text-red-500 font-bebas text-2xl tracking-widest">Restricted Content</p>
          </div>
        ) : loading ? (
          <div className="flex flex-col items-center pt-20"><Loading /></div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
              {displayMovies.map((movie: IMovie) => (
                <div key={movie.id} className="group">
                  <Card movies={movie} showName={false} />
                  <div className="mt-4 px-1">
                    <h3 className="text-sm font-bebas tracking-wide truncate group-hover:text-primary transition-all">
                        {movie.title || movie.name}
                    </h3>
                    <div className="flex items-center justify-between mt-1 text-[11px] text-text-light font-geist font-bold">
                      <p>{(movie.release_date || movie.first_air_date || "N/A").split("-")[0]}</p>
                      <span className="text-primary">{movie.vote_average.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {displayMovies.length === 0 && (
              <div className="text-center py-40 text-text-light font-bebas text-xl tracking-widest">No results found</div>
            )}
            {!isSearching && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleApply} />
            )}
          </>
        )}
      </section>
    </main>
  );
}

// Reusable Dropdown Component for cleaner code
function Dropdown({ label, options, onSelect }: { label: string, options: {label: string, value: string}[], onSelect: (val: string, lab: string) => void }) {
    return (
        <div className="relative flex-1 min-w-[130px] lg:flex-none group cursor-pointer bg-background border border-border px-4 py-2.5 rounded-xl flex items-center justify-between hover:border-primary/40 transition-all">
            <span className="text-[11px] text-text-light font-bold uppercase tracking-wider font-geist">{label}</span>
            <FiChevronDown className="text-text-light group-hover:text-primary" />
            <div className="absolute top-[110%] left-0 w-full bg-card border border-border rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 shadow-2xl overflow-hidden">
                <ul className="text-xs font-geist">
                    {options.map((opt) => (
                        <li key={opt.value} onClick={() => onSelect(opt.value, opt.label)} className="px-4 py-3 hover:bg-primary hover:text-black transition-colors border-b border-border">{opt.label}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}