import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export function Button({
  href,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
    >
      {children}
    </Link>
  );
}
