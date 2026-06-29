import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        404
      </h1>

      <p>Không tìm thấy trang.</p>

      <Link href="/">
        Quay về Trang chủ
      </Link>
    </main>
  );
}
