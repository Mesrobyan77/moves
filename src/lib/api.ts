// lib/api.js
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  timeoutErrorMessage: "The request took too long - please try again later.",
  headers: {
    Accept: process.env.NEXT_PUBLIC_ACCEPT || "application/json",
    Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION || "",
  },
});


export const API = {
  getMovies: () => instance.get("discover/movie"),
  getUpcoming: () => instance.get("movie/upcoming"),
  getNowPlaying: () => instance.get("movie/now_playing"),
  getTVShows: () => instance.get("discover/tv"),
  getAnime: () =>
    instance.get("discover/tv", {
      params: { with_genres: 16, with_original_language: "ja" },
    }),
  getMovieDetails: (id: string) => instance.get(`movie/${id}`),
  getVideos: (id: string) => instance.get(`movie/${id}/videos`),
};
