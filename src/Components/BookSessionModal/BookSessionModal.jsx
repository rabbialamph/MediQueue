"use client";

import { createBooking } from "@/lib/actions";
import { useSession } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

const BookSessionModal = ({ tutor }) => {
  const { data } = useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);

  const totalSlot = Number(tutor?.totalSlot);

  const sessionDate = new Date(tutor?.startDate);
  const today = new Date();

  today.setHours(0, 0, 0, 0);
  sessionDate.setHours(0, 0, 0, 0);

  const noSlotLeft = totalSlot <= 0;
  const bookingNotStarted = today < sessionDate;
  const bookingBlocked = noSlotLeft || bookingNotStarted;

  return (
    <>
      <Button
        onPress={() => {
          if (bookingBlocked) return;
          setOpen(true);
        }}
        disabled={bookingBlocked}
        className="px-5 py-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {noSlotLeft
          ? "No Slots Left"
          : bookingNotStarted
          ? "Booking Not Available"
          : "Book Session"}
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg rounded-[2rem] p-8 md:p-10 
            bg-white dark:bg-[#0B0F19]
            border border-neutral-200 dark:border-white/[0.08]
            shadow-[0_25px_80px_rgba(0,0,0,0.15)]
            dark:shadow-[0_25px_80px_rgba(0,0,0,0.5)]
            space-y-8 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <h2 className="text-3xl font-black text-neutral-900 dark:text-white">
                Book Session
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Confirm your tutoring session
              </p>
            </div>

            <form action={createBooking} className="space-y-6 relative z-10">

              <input type="hidden" name="tutorId" value={tutor?._id} />
              <input type="hidden" name="tutorName" value={tutor?.tutorName} />
              <input type="hidden" name="studentEmail" value={user?.email} />

              <TextField>
                <Label className="text-xs font-bold uppercase text-neutral-500">
                  Student Name
                </Label>
                <Input
                  required
                  name="studentName"
                  placeholder="Enter your name"
                  className="rounded-2xl w-full p-3 border border-neutral-200 dark:border-white/[0.08]"
                />
                <FieldError />
              </TextField>

              <TextField>
                <Label className="text-xs font-bold uppercase text-neutral-500">
                  Phone Number
                </Label>
                <Input
                  required
                  name="phone"
                  placeholder="+8801XXXXXXXXX"
                  className="rounded-2xl w-full p-3 border border-neutral-200 dark:border-white/[0.08]"
                />
                <FieldError />
              </TextField>

              <div className="rounded-2xl bg-neutral-50 dark:bg-white/[0.03] p-5 text-sm space-y-2">
                <p><b>Tutor:</b> {tutor?.tutorName}</p>
                <p><b>Subject:</b> {tutor?.subject}</p>
                <p><b>Email:</b> {user?.email}</p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onPress={() => setOpen(false)}
                  className="flex-1 py-6 rounded-2xl border"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={bookingBlocked}
                  className="flex-1 py-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white disabled:opacity-50"
                >
                  Confirm Booking
                </Button>
              </div>

              {noSlotLeft && (
                <p className="text-sm text-red-500 font-medium">
                  No available slots left.
                </p>
              )}

              {bookingNotStarted && (
                <p className="text-sm text-yellow-500 font-medium">
                  Booking is not available yet for this tutor.
                </p>
              )}

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookSessionModal;