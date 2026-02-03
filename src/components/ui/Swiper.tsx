"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IMovie } from "@/src/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/src/hooks/useTranslation";

export default function MovieCarousel({
  movies,
  title,
  viewAll,
}: {
  movies: IMovie[];
  title?: string[];
  viewAll?: boolean;
}) {
  const router = useRouter();
  const { t } = useTranslation();
  
  return (
    <div className="w-full py-6 md:py-10 container mx-auto px-4 transition-colors duration-300">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bebas tracking-wider text-foreground font-bold leading-none uppercase">
          {title ? title[0] : t('home.expected')}{" "}
          <span className="text-muted font-normal">
            {title ? title[1] : new Date().getFullYear()}
          </span>
        </h2>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          {viewAll && (
            <button
              onClick={() => router.push("/catalog")}
              className="hidden sm:flex items-center justify-center px-5 h-10 text-foreground rounded-xl bg-card border border-border text-[12px] font-bebas tracking-widest cursor-pointer uppercase hover:text-primary hover:border-primary/50 transition-all active:scale-95"
            >
              {t('home.view_all')}
            </button>
          )}
          
          <button className="swiper-prev-btn p-2 border border-border rounded-xl text-foreground bg-card hover:bg-primary hover:text-black transition-all cursor-pointer">
            <ChevronLeft size={20} />
          </button>
          <button className="swiper-next-btn p-2 border border-border rounded-xl text-foreground bg-card hover:bg-primary hover:text-black transition-all cursor-pointer">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={15}
        slidesPerView={2}
        navigation={{ nextEl: ".swiper-next-btn", prevEl: ".swiper-prev-btn" }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 24 },
          1024: { slidesPerView: 5, spaceBetween: 24 },
          1280: { slidesPerView: 6, spaceBetween: 24 },
        }}
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