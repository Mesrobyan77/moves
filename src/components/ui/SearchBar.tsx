"use client";
import { useState, useEffect, useCallback } from "react";
import { useMovieStore } from "@/src/store/getmoviesSlice";
import { FiSearch, FiX, FiStar, FiCalendar, FiChevronRight, FiAlertTriangle } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { forbiddenKeywords } from "@/src/constands";


export default function SearchBar() {
  const [query, setQuery] = useState("");


  const [searchError, setSearchError] = useState<string | null>(null);
  const { searchContent, searchResults, searchLoading } = useMovieStore();

  const handleSearch = useCallback((value: string) => {
    setSearchError(null);
    const lowerQuery = value.toLowerCase().trim();
    
    const isForbidden = forbiddenKeywords.some((word) =>
      lowerQuery.includes(word.toLowerCase())
    );

    if (isForbidden) {
      setSearchError("Adult content is not permitted.");
      return;
    }

    if (lowerQuery.length > 2) {
      searchContent(value);
    }
  }, [searchContent]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query, handleSearch]);

  return (
    <div className="relative w-full max-w-2xl mx-auto z-[100]">
      {/* Input Field */}
      <div className="relative flex items-center group">
        {/* Replaced color with primary/muted theme variables */}
        <FiSearch className={`absolute left-4 transition-colors ${searchError ? 'text-red-500' : 'text-muted group-focus-within:text-primary'}`} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies, series, anime..."
          // Replaced bg-[#1a191f] with bg-card, border-white/5 with border-border, etc.
          className={`w-full bg-card border py-4 px-12 rounded-2xl text-sm outline-none transition-all shadow-2xl placeholder:text-muted/60 text-foreground ${
            searchError ? 'border-red-500/50 focus:border-red-500' : 'border-border focus:border-primary/50'
          }`}
        />
        {query && (
          <button 
            onClick={() => { setQuery(""); setSearchError(null); }}
            className="absolute right-4 p-1 bg-foreground/5 rounded-full hover:bg-foreground/10 transition-colors"
          >
            <FiX className="text-muted" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {query.trim() && (
        // Replaced bg-colors with bg-card/95
        <div className="absolute w-[500px] top-[110%] md:left-0 -left-10 bg-card/95 backdrop-blur-xl border border-border rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all animate-in fade-in slide-in-from-top-2">
          
          <div className="max-h-[320px] overflow-y-auto custom-scrollbar p-3">
            {searchError ? (
              <div className="flex flex-col items-center py-12 text-center">
                <FiAlertTriangle className="text-red-500 text-3xl mb-3" />
                <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{searchError}</p>
                <p className="text-muted text-xs mt-1">Please try searching for something else.</p>
              </div>
            ) : searchLoading ? (
              <div className="flex flex-col items-center py-12">
                {/* Replaced border color with primary */}
                <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-[10px] uppercase tracking-widest text-muted">Searching Galaxy...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.map((item) => (
                  <Link 
                    key={item.id} 
                    href={`/movie/${item.id}?type=${item.media_type || 'movie'}`}
                    onClick={() => setQuery("")}
                    className="flex gap-4 p-3 rounded-2xl hover:bg-foreground/5 transition-all group border border-transparent hover:border-border"
                  >
                    {/* Poster Image */}
                    <div className="relative w-16 h-24 flex-shrink-0 overflow-hidden rounded-xl shadow-lg shadow-black/40 bg-background">
                      <Image
                        src={item.poster_path ? `https://image.tmdb.org/t/p/w200${item.poster_path}` : "/api/placeholder/200/300"} 
                        alt={item.title || 'Poster'} 
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Metadata */}
                    <div className="flex-1 flex flex-col justify-center min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        {/* Replaced colors with foreground and primary */}
                        <h4 className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                          {item.title || item.name}
                        </h4>
                        <div className="flex items-center gap-1 bg-primary text-black px-1.5 py-0.5 rounded-md text-[10px] font-black">
                          <FiStar className="fill-current" />
                          {item.vote_average?.toFixed(1) || "N/A"}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mt-1 text-[10px] font-medium text-muted uppercase tracking-wider">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="text-primary" />
                          {(item.release_date || item.first_air_date || "N/A").split("-")[0]}
                        </span>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span className="text-primary">{item.media_type || "Video"}</span>
                      </div>
                    </div>

                    <div className="flex items-center pr-2">
                       <FiChevronRight className="text-muted/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-sm text-muted">No results found for <span className="text-foreground italic">{query}</span></p>
              </div>
            )}
          </div>

          {/* Footer */}
          {searchResults.length > 0 && !searchError && (
            <div className="bg-foreground/[0.02] p-3 text-center border-t border-border">
                <p className="text-[10px] text-muted uppercase tracking-widest">Showing top results</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}