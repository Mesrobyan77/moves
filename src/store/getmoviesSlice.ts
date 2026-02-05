import { create } from "zustand";
import { API } from "../lib/api";
import { IMovie, IMovieDetails, TMDBResponse } from "../types";
import { AxiosResponse } from "axios";

interface MovieState {
  movies: IMovie[];
  tabContent: IMovie[];
  upcoming: IMovie[];
  cache: Record<string, IMovie[]>;
  currentMovie: IMovieDetails | null;
  recommendations: IMovie[];
  similar: IMovie[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  searchResults: IMovie[];
  searchLoading: boolean;
  getMovies: () => Promise<void>;
  fetchUpcoming: () => Promise<void>;
  fetchContentByTab: (tab: string) => Promise<void>;
  fetchByIdAndType: (id: string, type: string | null) => Promise<void>;
  fetchRecommendations: (id: string, type?: string) => Promise<void>;
  fetchSimilar: (id: string, type?: string) => Promise<void>;
  fetchCatalog: (
    type?: string,
    filters?: {
      genreId?: string;
      sortBy?: string;
      rating?: number;
      page?: number;
    },
  ) => Promise<void>;
  searchContent: (query: string) => Promise<void>;
}

export const useMovieStore = create<MovieState>((set, get) => ({
  movies: [],
  tabContent: [],
  upcoming: [],
  cache: {},
  recommendations: [],
  similar: [],
  searchResults: [],
  currentMovie: null,
  loading: false,
  error: null,
  totalPages: 1,
  currentPage: 1,
  searchLoading: false,

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
    const { cache } = get();
    if (cache[tab]) {
      set({ tabContent: cache[tab], loading: false });
      return;
    }
    set({ loading: true, error: null });
    try {
      const apiMap: Record<string, () => Promise<AxiosResponse<TMDBResponse>>> =
        {
          Movies: API.getMovies,
          "TV Shows": API.getTVShows,
          Anime: API.getAnime,
          "New items": API.getNow_playing,
        };
      const fetchFn = apiMap[tab] || API.getNow_playing;
      const res = await fetchFn();
      set((state) => ({
        tabContent: res.data.results,
        cache: { ...state.cache, [tab]: res.data.results },
        loading: false,
      }));
    } catch {
      set({ error: "Error fetching tab content", loading: false });
    }
  },

  fetchByIdAndType: async (id: string, type: string | null) => {
    set({ loading: true, error: null, currentMovie: null });
    const isTVHelper = type === "tv" || type === "anime";
    try {
      const res = isTVHelper
        ? await API.getTVDetails(id)
        : await API.getMovieDetails(id);
      set({ currentMovie: res.data, loading: false });
    } catch {
      set({ error: "Not found", loading: false });
    }
  },

  fetchRecommendations: async (id: string, type: string = "movie") => {
    try {
      const res = await API.getRecommendations(type, Number(id));
      set({ recommendations: res.data.results });
    } catch (error) {
      console.error(error);
    }
  },

  fetchSimilar: async (id: string, type: string = "movie") => {
    try {
      const res = await API.getSimilar(type, Number(id));
      set({ similar: res.data.results });
    } catch (error) {
      console.error(error);
    }
  },

  fetchCatalog: async (type = "movie", filters = {}) => {
    set({ loading: true, error: null });
    try {
      const { genreId, sortBy, rating, page } = filters;
      const queryParams: Record<string, string | number> = {
        page: page || 1,
        sort_by: sortBy || "popularity.desc",
        language: "en-US",
      };

      if (genreId) queryParams.with_genres = genreId;
      if (rating) queryParams["vote_average.gte"] = rating;

      const response = await API.discover(type, queryParams);

      set({
        movies: response.data.results,
        totalPages: Math.min(response.data.total_pages, 500), // TMDB limit
        currentPage: response.data.page,
        loading: false,
      });
    } catch (error) {
      set({ error: "Error fetching catalog", loading: false });
    }
  },

  searchContent: async (query: string) => {
    if (!query) {
      set({ searchResults: [] });
      return;
    }
    set({ searchLoading: true, error: null });
    try {
      const res = await API.search(query);
      console.log(res.data.results, "gtnel typeyyyyy");
      const filteredResults = res.data.results.filter(
        (item: IMovie) => item.media_type !== "person",
      );
      set({ searchResults: filteredResults, searchLoading: false });
    } catch {
      set({ error: "Search failed", searchLoading: false });
    }
  },
}));
