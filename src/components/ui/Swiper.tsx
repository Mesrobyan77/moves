"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IMovie } from "@/src/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";

export default function MovieCarousel({
  movies,
  title,
  viewAll,
}: {
  movies: IMovie[];
  title?: string[];
  viewAll?: boolean;
}) {
  return (
    <div className="w-full py-6 md:py-10 container mx-auto px-4">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas tracking-wider text-white font-bold leading-none">
          {title ? title[0] : "EXPECTED PREMIERE"}{" "}
          <span className="text-white font-light">
            {title ? title[1] : "2024"}
          </span>
        </h2>

        <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
          <div>
            {viewAll && (
              <button className="flex flex-row justify-center items-center min-w-[70px] px-[15px] h-[36px] text-white rounded-[8px] bg-[#222028] text-[14px]  cursor-pointer uppercase hover:text-primary">
                View All
              </button>
            )}
          </div>
          <button className="swiper-prev-btn p-1.5 md:p-2 border border-border rounded-lg text-white hover:bg-primary hover:border-primary transition-all cursor-pointer active:scale-95">
            <ChevronLeft size={18} className="md:w-5 md:h-5" />
          </button>
          <button className="swiper-next-btn p-1.5 md:p-2 border border-border rounded-lg text-white hover:bg-primary hover:border-primary transition-all cursor-pointer active:scale-95">
            <ChevronRight size={18} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={15}
        slidesPerView={2}
        navigation={{
          nextEl: ".swiper-next-btn",
          prevEl: ".swiper-prev-btn",
        }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Card movies={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
