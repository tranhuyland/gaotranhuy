import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />

      <main className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-3xl font-bold text-green-700">
          Gạo Trần Huy
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Chuyên cung cấp gạo ST25, Jasmine, Bắc Hương,
          Nàng Thơm và nhiều loại gạo sạch chất lượng cao.
        </p>
      </main>
    </>
  );
}
