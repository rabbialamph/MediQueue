import BookSessionModal from "@/Components/BookSessionModal/BookSessionModal";
import { getTutorId } from "@/lib/data-fetch";

export async function generateMetadata({ params }) {

  const { id } = await params;

  const tutor = await getTutorId(id);

  if (!tutor) {
    return {
      title: "Tutor Not Found",
    };
  }

  return {
    title: `${tutor.tutorName} | Tutor Details`,
    description: `${tutor.subject} tutor profile - book sessions, view details and availability.`,
  };
}

const TutorDetails = async ({ params }) => {

  const { id } = await params;

  const tutor = await getTutorId(id);

  if (!tutor) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B0F19] flex items-center justify-center text-neutral-500 transition-colors duration-500">
        Tutor not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B0F19] text-neutral-900 dark:text-white py-12 px-4 transition-colors duration-500">

      <div className="max-w-5xl mx-auto bg-white dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/[0.06] rounded-3xl shadow-xl overflow-hidden transition-colors duration-500">

        {/* IMAGE */}
        <div className="relative">
          <img
            src={tutor?.photo}
            alt={tutor?.tutorName}
            className="w-full h-[350px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold tracking-tight">
              {tutor?.tutorName}
            </h1>

            <p className="text-lg opacity-90 mt-1 font-medium">
              {tutor?.subject} • {tutor?.mode}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8 grid md:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-6">

            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                About Tutor
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {tutor?.institution}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-white/[0.01] border border-neutral-100 dark:border-white/[0.04] transition-colors duration-500">
                <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
                  Availability
                </p>

                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                  {tutor?.availability}
                </h4>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-white/[0.01] border border-neutral-100 dark:border-white/[0.04] transition-colors duration-500">
                <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
                  Total Slots
                </p>

                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                  {tutor?.totalSlot}
                </h4>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-white/[0.01] border border-neutral-100 dark:border-white/[0.04] transition-colors duration-500">
                <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
                  Start Date
                </p>

                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                  {tutor?.startDate}
                </h4>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-white/[0.01] border border-neutral-100 dark:border-white/[0.04] transition-colors duration-500">
                <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
                  Location
                </p>

                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                  📍 {tutor?.location}
                </h4>
              </div>

            </div>
          </div>

          {/* RIGHT / SIDEBAR */}
          <div className="bg-neutral-50 dark:bg-white/[0.01] border border-neutral-200/60 dark:border-white/[0.05] rounded-3xl p-6 h-fit space-y-6 shadow-sm transition-colors duration-500">

            <div>
              <p className="text-sm font-medium text-neutral-400 dark:text-neutral-500">
                Hourly Fee
              </p>

              <h2 className="text-4xl font-black text-blue-600 dark:text-blue-400 mt-1">
                ${tutor?.hourlyFee}
              </h2>
            </div>

            <div className="space-y-3 text-sm font-medium">

              <div className="flex justify-between items-center pb-2 border-b border-neutral-100 dark:border-white/[0.04]">
                <span className="text-neutral-500 dark:text-neutral-400">
                  Subject
                </span>

                <span className="text-neutral-800 dark:text-neutral-200">
                  {tutor?.subject}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-neutral-500 dark:text-neutral-400">
                  Mode
                </span>

                <span className="text-neutral-800 dark:text-neutral-200">
                  {tutor?.mode}
                </span>
              </div>

            </div>

            {/* BOOK BUTTON */}
            <div className="pt-2">
              <BookSessionModal tutor={tutor} />
            </div>

          </div>

          {/* RIGHT END */}

        </div>
      </div>
    </div>
  );
};

export default TutorDetails;