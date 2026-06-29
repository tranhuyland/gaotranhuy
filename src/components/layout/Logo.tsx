import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Trang chủ Gạo Trần Huy"
    >
      <Image
        src="/logo.svg"
        alt="Logo Gạo Trần Huy"
        width={48}
        height={48}
        priority
      />

      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-green-700">
          Gạo Trần Huy
        </h1>

        <p className="text-xs text-gray-500">
          Gạo sạch cho mọi gia đình
        </p>
      </div>
    </Link>
  );
}
