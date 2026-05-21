"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";

import {
  IoChevronDownOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import NavLinks from "./NavLinks";
import { Button } from "@heroui/react";

const Navbar = () => {
  const { data } = useSession();
  const user = data?.user;

  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await signOut();
    setOpen(false);
  };

  const closeMobileMenu = () => setMobileOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl">

      <div className="container mx-auto px-2">
        <div className="h-20 flex items-center justify-between">

          <div className="flex items-center gap-8">

            <Link href="/" className="flex items-center gap-3 group">
              <div className=" leading-tight">
                <h2 className="text-xl font-black tracking-tight text-gray-900 dark:text-white">
                  Medi <span className="text-blue-600">Queue</span> 
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Tutor Booking System
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 px-3 py-2 rounded-full border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-sm">
              <NavLinks />
            </nav>
          </div>

          <div className="flex items-center gap-3">

            <div className="hidden md:flex items-center gap-2">

              <div className="h-10 w-10 rounded-full border border-white/10 bg-white/60 dark:bg-white/5 flex items-center justify-center hover:scale-105 transition">
                <ThemeToggle />
              </div>

              <button className="relative h-10 w-10 rounded-full border border-white/10 bg-white/60 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:scale-105 transition">
                <IoNotificationsOutline size={19} />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-slate-950" />
              </button>
            </div>

            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-3 pl-2 pr-4 py-2 rounded-full border border-white/10 bg-white/60 dark:bg-white/5 hover:shadow-lg hover:shadow-indigo-500/10 transition"
                >
                  <img
                    src={user?.image}
                    className="h-8 w-8 rounded-full object-cover border border-white/20"
                  />

                  <div className="hidden sm:block text-left">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-none">
                      {user?.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Student
                    </p>
                  </div>

                  <IoChevronDownOutline
                    className={`text-gray-500 transition duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl shadow-2xl overflow-hidden">

                    <div className="p-4 border-b border-white/10">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {user?.email}
                      </p>
                    </div>

                    <div className="p-2">

                      <Link
                        href="/profile"
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 cursor-pointer rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                      >
                        My Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full cursor-pointer text-left px-3 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition"
                      >
                        Logout
                      </button>

                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">

                <Link
                  href="/auth/login"
                >
                  <Button variant="outline" className="px-5 rounded-xl text-sm font-semibold hover:scale-105 transition">
                     Login
                  </Button>
                </Link>

                <Link
                  href="/auth/register"
                  className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md hover:scale-105 transition"
                >
                  Register
                </Link>

              </div>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden h-10 w-10 rounded-xl border border-white/10 bg-white/60 dark:bg-white/5 flex items-center justify-center"
            >
              {mobileOpen ? <IoCloseOutline size={22} /> : <IoMenuOutline size={22} />}
            </button>

          </div>
        </div>
      </div>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeMobileMenu}
          />

          <div
            className="fixed top-20 left-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl"
            onClick={closeMobileMenu}
          >
            <div
              className="px-5 py-6 flex flex-col gap-5"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Menu
                </p>

                <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/60 dark:bg-white/5 flex items-center justify-center">
                  <ThemeToggle />
                </div>
              </div>

              <NavLinks mobile onClose={closeMobileMenu} />

              {!user && (
                <div className="grid grid-cols-2 gap-3 mt-2">

                  <Link
                    href="/auth/login"
                    onClick={closeMobileMenu}
                  >
                  <Button variant="outline" className="px-5 py-2.5 rounded-xl text-sm font-semibold text-center">
                    Login
                  </Button>
                  </Link>

                  <Link
                    href="/auth/register"
                    onClick={closeMobileMenu}
                    className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 text-center"
                  >
                    Register
                  </Link>

                </div>
              )}

            </div>
          </div>
        </>
      )}

    </header>
  );
};

export default Navbar;