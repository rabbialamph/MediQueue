"use client";

import { useState } from "react";

export default function TutorsFilterForm({ search, startDate }) {
  const [searchValue, setSearchValue] = useState(search || "");
  const [dateValue, setDateValue] = useState(startDate || "");

  return (
    <form className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">

      <div className="relative">
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search tutor by name..."
          className="w-full px-4 py-3 pr-28 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl outline-none"
        />

        {searchValue && (
          <button
            type="button"
            onClick={() => setSearchValue("")}
            className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 text-lg"
          >
            ✕
          </button>
        )}

        <button
          type="submit"
          name="searchBtn"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      <div className="relative">

        <input
          type="date"
          name="startDate"
          value={dateValue}
          onChange={(e) => setDateValue(e.target.value)}
          className="w-full px-4 py-3 pr-28 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl outline-none"
        />

        {dateValue && (
          <button
            type="button"
            onClick={() => setDateValue("")}
            className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-500 text-lg"
          >
            ✕
          </button>
        )}

        <button
          type="submit"
          name="filterBtn"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
        >
          Filter
        </button>
      </div>

    </form>
  );
}