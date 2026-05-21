'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { headers } from "next/headers";

export const createTutor = async (formData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const tutor = Object.fromEntries(formData.entries());

  const tutorData = {
    ...tutor,
    ownerEmail: session?.user?.email,
    totalSlot: Number(tutor.totalSlot),
    hourlyFee: Number(tutor.hourlyFee),
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tutorData),
  });

  const data = await res.json();

  if (data.insertedId) {
    revalidatePath("/tutors");
    revalidatePath("/my-tutors");
    redirect("/tutors");
  }

  return data;
};

export const createBooking = async (formData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const booking = Object.fromEntries(formData.entries());

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(booking),
  });

  const data = await res.json();

  if (data.success) {
    revalidatePath("/tutors");
    revalidatePath(`/tutors/${booking.tutorId}`);
    revalidatePath("/my-booked-sessions");
    redirect("/my-booked-sessions");
  }

  return data;
};


export const cancelBooking = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (data.success) {
    revalidatePath("/my-booked-sessions");
    revalidatePath("/tutors");
  }

  return data;
};


export const deleteTutor = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  revalidatePath("/my-tutors");

  return data;
};

export const updateTutor = async (id, formData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const updatedData = Object.fromEntries(formData.entries());

  const cleanData = {
    ...updatedData,
    totalSlot: updatedData.totalSlot
      ? Number(updatedData.totalSlot)
      : undefined,
    hourlyFee: updatedData.hourlyFee
      ? Number(updatedData.hourlyFee)
      : undefined,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cleanData),
  });

  const data = await res.json();

  revalidatePath("/my-tutors");

  return data;
};
