"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import HeroBanner from "./HeroBanner";


const slides = [
  {
    id: 1,
    title: "Find The Best Tutors For Your Future",
    description:
      "Connect with expert tutors and accelerate your learning journey.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Book Sessions Instantly",
    description:
      "Schedule one-on-one learning sessions anytime from anywhere.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Learn From Verified Experts",
    description:
      "Thousands of professional tutors ready to help you succeed.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      className="w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <HeroBanner slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}