"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/config/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Đóng menu" : "Mở menu"}
        className="rounded-xl border border-gray-200 p-2 transition hover:bg-gray-100"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute right-0 top-14 z-50 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
          <nav className="flex flex-col">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-gray-100 px-5 py-4 transition ${
                    active
                      ? "bg-green-50 font-semibold text-green-700"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
