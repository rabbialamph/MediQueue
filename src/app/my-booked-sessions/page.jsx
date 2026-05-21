import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getBookingData } from "@/lib/data-fetch";
import BookingTable from "@/Components/BookingTable/BookingTable";

export const metadata = {
  title: "My Booked Sessions | MediQueue",
  description:
    "Discover expert tutors worldwide with MediQueue. Find verified professionals in various subjects and connect with them for personalized learning.",
};

const MyBookedSessions = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const email = user?.email || "";

  let bookings = [];

  try {
    bookings = await getBookingData(email);
  } catch (error) {
    console.error("Failed to fetch bookings:", error);
    bookings = [];
  }

  return (
    <div className="min-h-screen px-4 py-10 bg-[#F9FAFB] dark:bg-[#0B0F19]">

      <div className="container mx-auto space-y-8">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-black text-neutral-900 dark:text-white">
            My Booked Sessions
          </h1>

          <p className="text-neutral-500 dark:text-neutral-400 mt-2">
            View and manage your booked tutoring sessions
          </p>
        </div>

        {/* EMPTY STATE */}
        {!bookings || bookings.length === 0 ? (
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-2xl shadow-xl p-16 text-center">

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 space-y-4">

              <div className="text-5xl">🎓</div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              No Bookings Yet
              </h2>

              <p className="text-gray-500 dark:text-gray-400">
              You haven’t booked any tutoring sessions yet.
              </p>

            </div>

          </div>
        ) : (
          <BookingTable bookings={bookings} />
        )}

      </div>
    </div>
  );
};

export default MyBookedSessions;