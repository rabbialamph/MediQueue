import React from "react";
import TutorsCard from "./TutorsCard";
import { getTutorsDataHome } from "@/lib/data-fetch";
import Link from "next/link";
import { FaFire } from "react-icons/fa";

const Cards = async () => {
  const tutors = await getTutorsDataHome();

  return (
    <div className="container mx-auto my-10 px-4">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        {/* LEFT TITLE */}
        <div className="flex items-center gap-2">

          <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md">
            <FaFire />
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white">
              Popular Tutors
            </h2>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Top rated experts this week
            </p>
          </div>

        </div>

        {/* VIEW ALL */}
        <Link
          href="/tutors"
          className="px-5 py-2 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg hover:scale-105 active:scale-95 transition"
        >
          View All
        </Link>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-5">

        {tutors.map((tutor) => (
          <TutorsCard key={tutor._id} tutor={tutor} />
        ))}

      </div>

    </div>
  );
};

export default Cards;