import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-[#020617] dark:via-[#020617] dark:to-black text-gray-700 dark:text-gray-300">

      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div className="space-y-4">

          <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
            Medi<span className="text-indigo-500">Queue</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-sm">
            Find expert tutors, book sessions, and level up your learning journey with a modern, seamless experience.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-2 text-lg">

            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/40 dark:bg-white/5 hover:bg-indigo-500/10 hover:text-indigo-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/40 dark:bg-white/5 hover:bg-indigo-500/10 hover:text-indigo-500 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/40 dark:bg-white/5 hover:bg-indigo-500/10 hover:text-indigo-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/40 dark:bg-white/5 hover:bg-indigo-500/10 hover:text-indigo-500 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* LINKS */}
        <div className="space-y-4">

          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
            Tutor Services
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <Link href="/tutors" className="hover:text-indigo-500 transition">
                Find Tutors
              </Link>
            </li>

            <li>
              <Link href="/my-booked-sessions" className="hover:text-indigo-500 transition">
                My Sessions
              </Link>
            </li>

            <li>
              <Link href="/my-tutors" className="hover:text-indigo-500 transition">
                My Tutors
              </Link>
            </li>

            <li>
              <Link href="/add-tutors" className="hover:text-indigo-500 transition">
                Become a Tutor
              </Link>
            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div className="space-y-4">

          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
            Contact
          </h3>

          <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">

            <p>Email: support@mediqueue.com</p>
            <p>Phone: +880 123 456 789</p>
            <p>Location: Bangladesh</p>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">

          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} MediQueue. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Built with ❤️ for modern learning
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;