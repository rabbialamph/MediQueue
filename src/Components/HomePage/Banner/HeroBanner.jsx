"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroBanner({ slide }) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#020617]">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}

          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-500/10 text-violet-600 text-sm font-medium">
              Trusted by 15,000+ Students
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white leading-tight">
              {slide.title}
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl">
              {slide.description}
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/tutors"
                className="px-8 py-4 cursor-pointer rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:scale-105 transition"
              >
                Explore Tutors
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="relative h-[350px] md:h-120 rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}