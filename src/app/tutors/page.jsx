import TutorsCard from "@/Components/TutorsCard/TutorsCard";
import { getTutorsData } from "@/lib/data-fetch";
import Link from "next/link";

export const metadata = {
  title: "Tutors - Find Expert Tutors Worldwide | MediQueue",
  description:
    "Discover expert tutors worldwide with MediQueue. Find verified professionals in various subjects and connect with them for personalized learning.",
};

const Tutors = async () => {
  const tutors = await getTutorsData();

  return (
    <div className="relative min-h-screen overflow-hidden transition-colors duration-500">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">

        {/* CONTENT */}
        {tutors?.length > 0 ? (
        <div> 
        <div className="text-center mb-16 md:mb-20">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-600 dark:text-gray-300">
              Verified Global Tutors
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-indigo-600 to-blue-600 mt-2 bg-clip-text text-transparent">
              Expert Tutor
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg leading-8 text-gray-500 dark:text-gray-400 font-medium">
            Connect with world-class educators, learn faster, and grow your skills
            with personalized 1-on-1 tutoring sessions.
          </p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
            {tutors.map((tutor) => (
              <TutorsCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
          </div>
        ) : (
          <div className="py-28 flex flex-col items-center justify-center rounded-[40px] border border-dashed border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl shadow-inner">

            <div className="w-20 h-20 rounded-3xl bg-white/50 dark:bg-white/[0.04] flex items-center justify-center text-4xl border border-white/10">
              🔍
            </div>

            <h3 className="mt-6 text-2xl font-black text-gray-900 dark:text-white">
              No Tutors Found
            </h3>

            <p className="mt-3 max-w-md text-center text-gray-500 dark:text-gray-400 leading-7 font-medium">
              We couldn’t find any tutors right now. Try adjusting your filters
              or check back later.
            </p>

            <Link href="/add-tutors">
              <button className="mt-8 px-7 cursor-pointer py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-xl shadow-indigo-500/20 hover:scale-105 active:scale-95 transition-all">
                Browse Tutors
              </button>
            </Link>

          </div>
        )}

      </div>
    </div>
  );
};

export default Tutors;


