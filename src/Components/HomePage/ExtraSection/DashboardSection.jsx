"use client";

import Link from "next/link";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaCalendarCheck,
  FaStar,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Students",
    value: "1,240+",
    icon: FaUserGraduate,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Expert Tutors",
    value: "320+",
    icon: FaChalkboardTeacher,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Sessions Booked",
    value: "5,600+",
    icon: FaCalendarCheck,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Average Rating",
    value: "4.9/5",
    icon: FaStar,
    color: "from-yellow-500 to-orange-500",
  },
];

const DashboardSection = () => {
  return (
    <div className="  text-gray-900 dark:text-white">

      <div className="container mx-auto px-4 py-14 space-y-10">

        <div className="text-center space-y-3">

          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            Welcome to{" "}
            <span className="text-blue-600">MediQueue</span>
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            A modern tutoring platform to connect students with expert tutors worldwide.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative p-6 rounded-3xl border border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-3xl" />

                <div className="relative flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.title}
                    </p>

                    <h2 className="text-2xl font-black mt-1">
                      {item.value}
                    </h2>
                  </div>

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r ${item.color} shadow-lg`}
                  >
                    <Icon size={20} />
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-8 rounded-3xl border border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-xl space-y-4">

            <h2 className="text-xl font-bold">
              🚀 Start Teaching Today
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Share your knowledge and earn flexible income by becoming a tutor on our platform.
            </p>
            <Link href='/add-tutors'>
            <button className="px-6 py-3 cursor-pointer rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:scale-105 transition">
              Become a Tutor
            </button>
            </Link>

          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl shadow-xl space-y-4">

            <h2 className="text-xl font-bold">
              📅 Book Your First Session
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Find expert tutors and start learning with personalized 1-on-1 sessions.
            </p>
            
              <Link href='/tutors'>
               <button className="px-6 py-3 cursor-pointer rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 dark:bg-white text-white dark:text-black font-semibold hover:scale-105 transition">
                Explore Tutors
              </button>             
              </Link>

          </div>

        </div>

        <div className="relative overflow-hidden rounded-3xl p-10 text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-2xl">

          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

          <div className="relative text-center space-y-4">

            <h2 className="text-2xl md:text-3xl font-black">
              Build Your Learning Journey with MediQueue
            </h2>

            <p className="text-white/80 text-sm max-w-xl mx-auto">
              Join thousands of students and tutors in a modern learning ecosystem.
            </p>

            <button className="mt-4 px-8 py-3 bg-white text-blue-600 font-bold rounded-2xl hover:scale-105 transition">
              Get Started Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardSection;