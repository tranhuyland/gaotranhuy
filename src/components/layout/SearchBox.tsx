"use client";

import { useState } from "react";

export function SearchBox() {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="hidden md:flex items-center">
      <input
        type="text"
        placeholder="Tìm gạo ST25..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="
          w-64
          rounded-l-xl
          border
          border-gray-300
          px-4
          py-2
          text-sm
          outline-none
          focus:border-green-600
        "
      />

      <button
        className="
          rounded-r-xl
          bg-green-600
          px-4
          py-2
          text-white
          transition
          hover:bg-green-700
        "
      >
        🔍
      </button>
    </div>
  );
}
