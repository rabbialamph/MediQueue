'use client'
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
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
    <div className="group relative overflow-hidden rounded-[32px] border border-[#ECECFF] dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.03] backdrop-blur-2xl shadow-sm hover:shadow-[0_25px_80px_-12px_rgba(59,130,246,0.18)] dark:hover:shadow-[0_25px_80px_-12px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2">
      
      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.04] via-indigo-500/[0.02] to-transparent" />
      </div>

      {/* IMAGE */}
      <div className="relative h-60 overflow-hidden">
        
        <img
          src={tutor?.photo}
          alt={tutor?.tutorName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* SUBJECT */}
        <div className="absolute top-5 left-5">
          <span className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-xl border border-white/10 text-white text-[11px] font-bold tracking-wider uppercase">
            {tutor?.subject}
          </span>
        </div>

        {/* MODE */}
        <div className="absolute top-5 right-5">
          <span className="px-4 py-2 rounded-full bg-blue-600/90 backdrop-blur-xl border border-blue-400/20 text-white text-[11px] font-bold tracking-wider uppercase shadow-lg shadow-blue-500/20">
            {tutor?.mode}
          </span>
        </div>

        {/* BOTTOM INFO */}
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              {tutor?.tutorName}
            </h2>

            <p className="text-white/70 text-sm font-medium mt-1">
              Professional Tutor
            </p>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10">
            <FaStar className="text-yellow-400 text-xs" />

            <span className="text-white text-sm font-bold">
              4.9
            </span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 relative z-10">
        
        {/* DETAILS */}
        <div className="space-y-4">
          
          {/* INSTITUTION */}
          <div className="flex items-center gap-3">
            
            <div className="h-10 w-10 rounded-2xl bg-[#F4F7FF] dark:bg-white/[0.04] border border-[#ECECFF] dark:border-white/[0.05] flex items-center justify-center shrink-0">
              <FaUserGraduate className="text-blue-600 dark:text-blue-400 text-sm" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] dark:text-gray-500">
                Institution
              </p>

              <p className="text-sm font-semibold text-[#111827] dark:text-white truncate">
                {tutor?.institution}
              </p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-3">
            
            <div className="h-10 w-10 rounded-2xl bg-[#F4F7FF] dark:bg-white/[0.04] border border-[#ECECFF] dark:border-white/[0.05] flex items-center justify-center shrink-0">
              <FaMapMarkerAlt className="text-rose-500 text-sm" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] dark:text-gray-500">
                Location
              </p>

              <p className="text-sm font-semibold text-[#111827] dark:text-white truncate">
                {tutor?.location}
              </p>
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="flex items-center gap-3">
            
            <div className="h-10 w-10 rounded-2xl bg-[#F4F7FF] dark:bg-white/[0.04] border border-[#ECECFF] dark:border-white/[0.05] flex items-center justify-center shrink-0">
              <FaClock className="text-amber-500 text-sm" />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9CA3AF] dark:text-gray-500">
                Availability
              </p>

              <p className="text-sm font-semibold text-[#111827] dark:text-white truncate">
                {tutor?.availability}
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6 pt-5 border-t border-[#F1F3F9] dark:border-white/[0.05] flex items-center justify-between">
          
          {/* PRICE */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#9CA3AF] dark:text-gray-500">
              Hourly Fee
            </p>

            <h3 className="mt-1 text-3xl font-black tracking-tight text-[#111827] dark:text-white">
              ${tutor?.hourlyFee}
            </h3>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleDetails}
            className="px-5 py-3 cursor-pointer rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-bold tracking-wide shadow-xl shadow-indigo-500/20 hover:scale-[1.04] active:scale-95 transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorsCard;