"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

export function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
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

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-xl border border-gray-200 p-2 transition hover:bg-gray-100"
          aria-label="Mở tìm kiếm"
        >
          <Search size={20} />
        </button>
      </div>

      {/* Popup Search */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed left-0 right-0 top-0 z-50 bg-white p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <input
                autoFocus
                type="search"
                placeholder="Tìm sản phẩm..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="
                  flex-1
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  outline-none
                  focus:border-green-600
                "
              />

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-xl p-2 hover:bg-gray-100"
              >
                <X size={22} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
