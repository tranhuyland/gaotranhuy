"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1>Có lỗi xảy ra</h1>

      <button
        onClick={reset}
      >
        Thử lại
      </button>
    </main>
  );
}
