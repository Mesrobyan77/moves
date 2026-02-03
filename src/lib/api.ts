import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: process.env.NEXT_PUBLIC_ACCEPT || "application/json",
    Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION || "",
  },
});

export const API = {
  getMovies: () => instance.get("discover/movie"),
  getUpcoming: () => instance.get("movie/upcoming"),
  getNow_playing: () => instance.get("movie/now_playing"),
  getTVShows: () => instance.get("discover/tv"),
  getAnime: () =>
    instance.get("discover/tv", {
      params: { with_genres: 16, with_original_language: "ja" },
    }),
  getMovieDetails: (id: string) => instance.get(`movie/${id}`),
  getTVDetails: (id: string) => instance.get(`tv/${id}`),
  getRecommendations: (type: string, id: number) =>
    instance.get(`${type}/${id}/recommendations`),
  getSimilar: (type: string, id: number) =>
    instance.get(`${type}/${id}/similar`),
  getGenres: (type = "movie") => instance.get(`genre/${type}/list`),
  discover: (type: string, params: Record<string, string | number>) =>
    instance.get(`discover/${type}`, { params }), // Crucial for filtering
  getTopRated: (type = "movie") => instance.get(`${type}/top_rated`),
  search: (query: string, page = 1) =>
    instance.get("search/multi", {
      params: {
        query,
        page,
        include_adult: false,
        language: "en-US",
      },
    }),
};
