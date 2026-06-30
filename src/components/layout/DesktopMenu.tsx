"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";

export function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative text-sm font-medium transition-colors duration-200 ${
              active
                ? "text-green-700"
                : "text-gray-700 hover:text-green-700"
            }`}
          >
            {item.title}

            <span
              className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-green-600 transition-all duration-300 ${
                active ? "w-full" : "w-0"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
