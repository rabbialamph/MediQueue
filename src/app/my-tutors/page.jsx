import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getTutorsData } from "@/lib/data-fetch";
import { UpdateMyTutors } from "@/Components/UpdateMyTutors/UpdateMyTutors";
import { DeleteMyTutors } from "@/Components/DeleteMyTutors/DeleteMyTutors";
import Link from "next/link";

export const metadata = {
  title: "My Tutors | MediQueue",
  description:
    "Discover expert tutors worldwide with MediQueue. Find verified professionals in various subjects and connect with them for personalized learning.",
};

const MyTutors = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const email = user?.email;

  let tutors = [];

  try {
    tutors = await getTutorsData(email);
  } catch (error) {
    console.error("Failed to fetch tutors:", error);
    tutors = [];
  }

  return (
    <div className="min-h-screen px-4 py-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-black">

      <div className="container mx-auto space-y-10">

        {/* HEADER */}
        <div className="space-y-2">

          <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            My Tutors
          </h1>

          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
            Manage your tutors, update details, or remove listings anytime.
          </p>

        </div>

        {/* EMPTY STATE */}
        {tutors.length === 0 ? (
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl shadow-xl p-16 text-center">

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-4">

              <div className="text-5xl">🎓</div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                No Tutors Found
              </h2>

              <p className="text-gray-500 dark:text-gray-400">
                Create your first tutor profile to start receiving students.
              </p>

              <Link
                href="/add-tutors"
                className="inline-flex mt-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:scale-105 transition"
              >
                Add Tutor
              </Link>

            </div>

          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur-2xl shadow-2xl overflow-hidden">

            {/* TABLE WRAPPER */}
            <div className="overflow-x-auto">

              <table className="w-full text-sm">

                {/* HEADER */}
                <thead className="bg-white/70 dark:bg-slate-950/60 backdrop-blur-xl border-b border-white/10">
                  <tr className="text-left text-gray-600 dark:text-gray-300">
                    <th className="p-5 font-semibold">Photo</th>
                    <th className="p-5 font-semibold">Tutor</th>
                    <th className="p-5 font-semibold">Subject</th>
                    <th className="p-5 font-semibold">Fee</th>
                    <th className="p-5 font-semibold">Slots</th>
                    <th className="p-5 font-semibold text-right">Actions</th>
                  </tr>
                </thead>

                {/* BODY */}
                <tbody>
                  {tutors.map((tutor, i) => (
                    <tr
                      key={tutor._id}
                      className="group border-b border-white/5 hover:bg-white/40 dark:hover:bg-white/5 transition-all duration-300 hover:scale-[1.01]"
                    >

                      {/* PHOTO */}
                      <td className="p-5">
                        <img
                          src={tutor.photo}
                          className="h-10 w-10 rounded-full object-cover border border-white/20 shadow-sm"
                          alt={tutor.tutorName}
                        />
                      </td>

                      {/* NAME */}
                      <td className="p-5 font-semibold text-gray-900 dark:text-white">
                        {tutor.tutorName}
                      </td>

                      {/* SUBJECT */}
                      <td className="p-5 text-gray-600 dark:text-gray-300">
                        {tutor.subject}
                      </td>

                      {/* FEE */}
                      <td className="p-5">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          ${tutor.hourlyFee}
                        </span>
                      </td>

                      {/* SLOTS */}
                      <td className="p-5 text-gray-600 dark:text-gray-300">
                        {tutor.totalSlot}
                      </td>

                      {/* ACTIONS */}
                      <td className="p-5 text-right">
                        <div className="flex justify-end gap-2">
                          <UpdateMyTutors tutor={tutor} />
                          <DeleteMyTutors tutor={tutor} />
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MyTutors;