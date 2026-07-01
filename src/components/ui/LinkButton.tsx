import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function LinkButton({
  href,
  children,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700",
        className
      )}
    >
      {children}
    </Link>
  );
}
