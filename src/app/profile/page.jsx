'use client'

import { useSession } from "@/lib/auth-client";

const page = () => {
  const { data } = useSession();
  const user = data?.user;

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B0F19] text-neutral-900 dark:text-white flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* PROFILE CARD */}
      <div className="w-full max-w-md rounded-[2.5rem] border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] shadow-[0_25px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl p-8 md:p-10 space-y-6 relative">

        {/* Avatar */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[3px]">
            <div className="w-full h-full rounded-full bg-white dark:bg-[#0B0F19] flex items-center justify-center text-3xl font-black">
                  <img
                    src={user?.image}
                    name={user?.name?.[0]}
                    className="h-26 w-26 rounded-full"
                  />
            </div>
          </div>

          <h1 className="text-2xl font-black tracking-tight">
            {user?.name || "No Name"}
          </h1>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Manage your account information
          </p>
        </div>

        {/* INFO CARD */}
        <div className="space-y-3 text-sm">

          <div className="flex justify-between p-3 rounded-2xl bg-neutral-100 dark:bg-white/[0.03]">
            <span className="text-neutral-500">Name</span>
            <span className="font-semibold">
              {user?.name || "N/A"}
            </span>
          </div>

          <div className="flex justify-between p-3 rounded-2xl bg-neutral-100 dark:bg-white/[0.03]">
            <span className="text-neutral-500">Email</span>
            <span className="font-semibold">
              {user?.email || "N/A"}
            </span>
          </div>

          <div className="flex justify-between p-3 rounded-2xl bg-neutral-100 dark:bg-white/[0.03]">
            <span className="text-neutral-500">Role</span>
            <span className="font-semibold text-blue-500">
              {user?.role || "Student"}
            </span>
          </div>

        </div>

        {/* ACTION BUTTON */}
        <button className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-bold text-white shadow-lg shadow-blue-500/20">
          Edit Profile
        </button>

      </div>
    </div>
  );
};

export default page;