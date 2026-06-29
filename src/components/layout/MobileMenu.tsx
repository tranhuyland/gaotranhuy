"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/config/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Mở menu"
        className="rounded-lg border border-gray-300 p-2"
      >
        ☰
      </button>

      {open && (
        <div className="absolute left-0 top-16 z-50 w-full border-t border-gray-200 bg-white shadow-lg">
          <nav className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-gray-100 px-5 py-4 text-gray-700 hover:bg-green-50 hover:text-green-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
