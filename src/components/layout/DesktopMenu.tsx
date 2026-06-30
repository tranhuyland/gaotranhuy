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
            className={`transition ${
              active
                ? "font-semibold text-green-700"
                : "text-gray-700 hover:text-green-700"
            }`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
