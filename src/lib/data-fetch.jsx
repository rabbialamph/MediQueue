import { headers } from "next/headers";
import { auth } from "./auth";

export const getTutorsData = async (email) => {
  const url = email
    ? `http://localhost:5000/tutors?email=${email}`
    : `http://localhost:5000/tutors`;

  const res = await fetch(url, { cache: "no-store" });
  return res.json();
};


export const getTutorsDataHome = async () => {
  const res = await fetch(
    "http://localhost:5000/tutors?limit=6",
    { cache: "no-store" }
  );

  return res.json();
};

export const getTutorId = async (_id) =>{
    const {token} = await auth.api.getToken({
        headers: await headers()
    });
    console.log(token);

    const req = await fetch(`http://localhost:5000/tutors/${_id}`,{

        headers: {
           authorization: `Bearer ${token}`
        }, 
         cache: "no-store" 
    });
    const tutorsData = await req.json();
    return tutorsData;
};



export const getBookingData = async (email) => {
    const {token} = await auth.api.getToken({
        headers: await headers()
    });
    console.log(token);

  const req = await fetch(`http://localhost:5000/booking?email=${email}`,{
        headers: {
           authorization: `Bearer ${token}`
        }, 
         cache: "no-store" 
    });
  return req.json();
};
