import Link from "next/link";

import { navigation } from "@/config/navigation";

export function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="
            text-sm
            font-medium
            text-gray-700
            transition-colors
            hover:text-green-600
            hover:underline
            underline-offset-4
          "
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
