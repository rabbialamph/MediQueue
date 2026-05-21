"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Tutors", path: "/tutors" },
  { name: "Add Tutor", path: "/add-tutors" },
  { name: "My Tutors", path: "/my-tutors" },
  { name: "Booked Sessions", path: "/my-booked-sessions" },
];

const NavLinks = ({ mobile = false, onClose }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const active = pathname === link.path;

        return (
          <Link
            key={link.name}
            href={link.path}
            onClick={mobile ? onClose : undefined}
            className={`
              relative font-medium transition-all duration-300
              ${mobile
                ? `
                  px-4 py-3 rounded-xl text-sm flex items-center justify-between
                  border border-white/10 dark:border-white/10
                  ${
                    active
                      ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/20"
                      : "bg-white/60 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10"
                  }
                `
                : `
                  px-4 py-2.5 rounded-full text-sm
                  ${
                    active
                      ? "bg-white/80 dark:bg-white/10 text-blue-600 shadow-sm border border-white/20"
                      : "text-gray-600 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-white/10 hover:text-blue-600"
                  }
                `
              }
            `}
          >

            {link.name}

            {mobile && active && (
              <span className="h-2 w-2 rounded-full bg-white/90" />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;