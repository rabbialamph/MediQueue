


import TutorsCard from "@/Components/TutorsCard/TutorsCard";
import TutorsFilterForm from "@/Components/TutorsFilterForm/TutorsFilterForm";
import { getTutorsData } from "@/lib/data-fetch";

export const metadata = {
  title: "Tutors - Find Expert Tutors Worldwide | MediQueue",
  description:
    "Discover expert tutors worldwide with MediQueue. Find verified professionals in various subjects and connect with them for personalized learning.",
};

const Tutors = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const startDate = params?.startDate || "";

  const tutors = await getTutorsData(null, search, startDate);

  const hasSearch = search.length > 0;
  const hasDate = startDate.length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden transition-colors duration-500">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">

        <div className="text-center mb-10 md:mb-14">

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


        <TutorsFilterForm startDate={startDate} search={search}></TutorsFilterForm>


        {tutors?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7">
            {tutors.map((tutor) => (
              <TutorsCard key={tutor._id} tutor={tutor} />
            ))}
          </div>
        ) : (
          <div className="py-28 flex flex-col items-center justify-center rounded-[40px] border border-dashed border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl shadow-inner">

            <div className="w-20 h-20 rounded-3xl bg-white/50 dark:bg-white/[0.04] flex items-center justify-center text-4xl border border-white/10">
              🔍
            </div>

            <h3 className="mt-6 text-2xl font-black text-gray-900 dark:text-white">
              {hasSearch && !hasDate
                ? "No Search Results Found"
                : hasDate && !hasSearch
                ? "No Tutors Available for This Date"
                : hasSearch && hasDate
                ? "No Results Found for Search & Date"
                : "No Tutors Found"}
            </h3>

            <p className="mt-3 max-w-md text-center text-gray-500 dark:text-gray-400 leading-7 font-medium">
              {hasSearch && !hasDate
                ? "Try searching with a different tutor name."
                : hasDate && !hasSearch
                ? "Try selecting another session date."
                : hasSearch && hasDate
                ? "No tutors match your search & date filter."
                : "We couldn’t find any tutors right now. Try adjusting filters or check back later."}
            </p>

          </div>
        )}

      </div>
    </div>
  );
};

export default Tutors;