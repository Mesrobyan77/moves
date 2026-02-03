import { create } from "zustand";
import { API } from "../lib/api";
import { IMovie, IMovieDetails } from "../types";

interface MovieState {
  movies: IMovie[];
  tabContent: IMovie[];
  upcoming: IMovie[];
  currentMovie: IMovieDetails | null; 
  trailerKey: string | null;
  loading: boolean;
  error: string | null;
  getMovies: () => Promise<void>;
  fetchUpcoming: () => Promise<void>;
  fetchContentByTab: (tab: string) => Promise<void>;
  fetchMovieDetails: (id: string) => Promise<void>;

}

export const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  tabContent: [],
  upcoming: [],
  currentMovie: null,
  loading: false,
  error: null,
  trailerKey: null,

  getMovies: async () => {
    set({ loading: true, error: null });
    try {
      const res = await API.getMovies();
      set({ movies: res.data.results, loading: false });
    } catch {
      set({ error: "Error fetching movies", loading: false });
    }
  },

  fetchUpcoming: async () => {
    try {
      const res = await API.getUpcoming();
      set({ upcoming: res.data.results });
    } catch {
      set({ error: "Error fetching upcoming" });
    }
  },

  fetchContentByTab: async (tab: string) => {
    set({ loading: true, error: null });
    try {
      const apiMap: Record<string, () => Promise<any>> = {
        "Movies": API.getMovies,
        "TV Shows": API.getTVShows,
        "Anime": API.getAnime,
        "New items": API.getNowPlaying,
      };
      const fetchFn = apiMap[tab] || API.getNowPlaying;
      const res = await fetchFn();
      set({ tabContent: res.data.results, loading: false });
    } catch {
      set({ error: "Error fetching tab content", loading: false });
    }
  },

  fetchMovieDetails: async (id: string) => {
    set({ loading: true, error: null, currentMovie: null });  
    try {
      const res = await API.getMovieDetails(id);
      set({ currentMovie: res.data, loading: false });
    } catch {
      set({ error: "Error fetching details", loading: false });
    }
  },

  // fetchTrailer: async (id: string) => {
  //   try {
  //     const res = await API.getVideos(id);
      
  //     const videos = res.data.results;
  //     const officialTrailer = videos.find(
  //       (vid: any) => vid.type === "Trailer" && vid.site === "YouTube" && vid.official === true
  //     );
      
  //     const fallbackTrailer = videos.find(
  //       (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
  //     );

  //     set({ trailerKey: officialTrailer?.key || fallbackTrailer?.key || videos[0]?.key || null });
  //   } catch (error) {
  //     console.error("Error fetching videos:", error);
  //     set({ trailerKey: null });
  //   }
  // },
}));