'use client'
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

import {
  FaMapMarkerAlt,
  FaClock,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa";

const TutorsCard = ({ tutor }) => {

  const router = useRouter();
  const { data: session } = useSession();

  const handleDetails = () => {
    if (!session) {
      router.push(`/auth/login?redirect=/tutors/${tutor._id}`);
    } else {
      router.push(`/tutors/${tutor._id}`);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">

      {/* IMAGE */}
      <div className="relative h-32 overflow-hidden">

        <img
          src={tutor?.photo}
          alt={tutor?.tutorName}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* SUBJECT */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 rounded-full bg-white/15 backdrop-blur text-white text-[9px] font-bold uppercase">
            {tutor?.subject}
          </span>
        </div>

        {/* RATING */}
        <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 text-white text-[10px]">
          <FaStar className="text-yellow-400 text-[10px]" />
          4.9
        </div>

        {/* NAME */}
        <div className="absolute bottom-2 left-2 right-2">
          <h2 className="text-sm font-black text-white truncate">
            {tutor?.tutorName}
          </h2>
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-3 space-y-2">

        <div className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-300">
          <FaUserGraduate className="text-blue-500 text-[10px]" />
          <span className="truncate">{tutor?.institution}</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-300">
          <FaMapMarkerAlt className="text-rose-500 text-[10px]" />
          <span className="truncate">{tutor?.location}</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-gray-300">
          <FaClock className="text-amber-500 text-[10px]" />
          <span className="truncate">{tutor?.availability}</span>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10">

          <div className="text-left">
            <p className="text-[9px] uppercase text-gray-400 font-bold">
              Fee
            </p>
            <p className="text-sm font-black text-gray-900 dark:text-white">
              ${tutor?.hourlyFee}
            </p>
          </div>

          <button
            onClick={handleDetails}
            className="px-3 py-1.5 cursor-pointer rounded-lg text-[10px] font-bold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-105 transition"
          >
            View
          </button>

        </div>

      </div>
    </div>
  );
};

export default TutorsCard;