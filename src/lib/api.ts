import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: process.env.NEXT_PUBLIC_ACCEPT || "application/json",
    Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION || "",
  },
});

instance.interceptors.request.use((config) => {
  let lang = "en";  

  if (typeof window !== "undefined") {
    const storage = localStorage.getItem("hotflix-language");
    if (storage) {
      try {
        const parsed = JSON.parse(storage);
        lang = parsed.state?.lang || "en";
      } catch (e) {
        console.error("Error parsing language from localStorage", e);
      }
    }
  }

  const tmdbLang = {
    am: "ru-RU",
    ru: "ru-RU",
    en: "en-US",
  }[lang] || "en-US";

  config.params = {
    ...config.params,
    language: tmdbLang,
  };

  return config;
});

export const API = {
  getMovies: (page = 1) => instance.get("discover/movie", { params: { page } }),
  getUpcoming: () => instance.get("movie/upcoming"),
  getNow_playing: () => instance.get("movie/now_playing"),
  getTVShows: () => instance.get("discover/tv"),
  getAnime: () =>
    instance.get("discover/tv", {
      params: { with_genres: 16, with_original_language: "ja" },
    }),
  getMovieDetails: (id: string) => instance.get(`movie/${id}`),
  getTVDetails: (id: string) => instance.get(`tv/${id}`),
  getRecommendations: (type: string, id: string) =>
    instance.get(`${type}/${id}/recommendations`),
  getSimilar: (type: string, id: string) =>
    instance.get(`${type}/${id}/similar`),
  getGenres: (type = "movie") => instance.get(`genre/${type}/list`),
  discover: (type: string, params: Record<string, any>) =>
    instance.get(`discover/${type}`, { params }),
  getTopRated: (type = "movie") => instance.get(`${type}/top_rated`),
  search: (query: string, page = 1) =>
    instance.get("search/multi", {
      params: {
        query,
        page,
        include_adult: false,
      },
    }),
};
