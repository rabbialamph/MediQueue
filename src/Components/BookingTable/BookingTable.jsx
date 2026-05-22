"use client";

import { cancelBooking } from "@/lib/actions";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingTable = ({ bookings }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [localBookings, setLocalBookings] = useState(bookings);

  const handleCancel = async () => {
    if (!selectedId) return;

    try {
      setLoading(true);

      const data = await cancelBooking(selectedId);

      if (data.success) {
        setLocalBookings((prev) =>
          prev.map((b) =>
            b._id === selectedId ? { ...b, status: "cancelled" } : b
          )
        );
        toast.success("Booking cancelled successfully");
        setSelectedId(null);
      } else {
        toast.error(data.message || "Failed to cancel booking");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl shadow-xl">

        <table className="w-full text-sm">

          <thead className="text-left border-b border-white/10 bg-white/40 dark:bg-white/5">
            <tr className="text-gray-600 dark:text-gray-300">
              <th className="p-5 font-semibold">Tutors</th>
              <th className="p-5 font-semibold">Students</th>
              <th className="p-5 font-semibold">Email</th>
              <th className="p-5 font-semibold">Status</th>
              <th className="p-5 font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {localBookings.map((booking, i) => (
              <tr
                key={booking._id}
                className={`border-b border-white/5 transition hover:bg-white/40 dark:hover:bg-white/5 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-white/20 dark:bg-white/[0.02]"
                }`}
              >

                <td className="p-5 font-medium text-gray-800 dark:text-gray-200">
                  {booking.tutorName}
                </td>

                <td className="p-5 text-gray-700 dark:text-gray-300">
                  {booking.studentName}
                </td>

                <td className="p-5 text-gray-500 dark:text-gray-400">
                  {booking.studentEmail}
                </td>

                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border
                      ${
                        booking.status === "cancelled"
                          ? "bg-red-500/10 text-red-500 border-red-500/20"
                          : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                      }`}
                  >
                    {booking.status || "confirmed"}
                  </span>
                </td>

                <td className="p-5">
                  {booking.status === "cancelled" ? (
                    <button
                      disabled
                      className="px-4 py-2 rounded-xl text-xs font-medium bg-gray-200 dark:bg-white/10 text-gray-500 cursor-not-allowed"
                    >
                      Cancelled
                    </button>
                  ) : (
                    <button
                      onClick={() => setSelectedId(booking._id)}
                      className="px-4 py-2 cursor-pointer rounded-xl text-xs font-semibold bg-red-500 text-white hover:bg-red-600 active:scale-95 transition"
                    >
                      Cancel
                    </button>
                  )}
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {selectedId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

          <div className=" rounded-3xl bg-white dark:bg-slate-900 shadow-2xl p-6 border border-white/10">

            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Cancel Booking?
            </h2>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setSelectedId(null)}
                disabled={loading}
                className="px-5 py-2 cursor-pointer rounded-xl border border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
              >
                No
              </button>

              <button
                onClick={handleCancel}
                disabled={loading}
                className="px-5 py-2 cursor-pointer rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 active:scale-95 transition"
              >
                {loading ? "Cancelling..." : "Yes, Cancel"}
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default BookingTable;