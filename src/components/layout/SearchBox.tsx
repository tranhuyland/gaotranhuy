"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export function SearchBox() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="hidden lg:flex items-center">
      <input
        type="search"
        placeholder="Tìm gạo ST25, Jasmine..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="
          w-64 xl:w-80
          rounded-l-xl
          border
          border-gray-300
          border-r-0
          px-4
          py-2.5
          text-sm
          outline-none
          transition
          focus:border-green-600
        "
      />

      <button
        type="button"
        aria-label="Tìm kiếm"
        className="
          rounded-r-xl
          border
          border-green-600
          bg-green-600
          px-4
          py-2.5
          text-white
          transition
          hover:bg-green-700
        "
      >
        <Search size={18} />
      </button>
    </div>
  );
}
