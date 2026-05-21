import { headers } from "next/headers";
import { auth } from "./auth";

export const getTutorsData = async (email) => {
  const url = email
    ? `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?email=${email}`
    : `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`;

  const res = await fetch(url, { cache: "no-store" });
  return res.json();
};


export const getTutorsDataHome = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?limit=6`,
    { cache: "no-store" }
  );

  return res.json();
};

export const getTutorId = async (_id) =>{
    const {token} = await auth.api.getToken({
        headers: await headers()
    });
    console.log(token);

    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${_id}`,{

        headers: {
           authorization: `Bearer ${token}`
        }, 
         cache: "no-store" 
    });
    const tutorsData = await req.json();
    console.log(tutorsData)
    return tutorsData;
};



export const getBookingData = async (email) => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    });
    console.log(token);

  const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking?email=${email}`,{
        headers: {
           authorization: `Bearer ${token}`
        }, 
         cache: "no-store" 
    });
  return req.json();
};
