import { Header } from "@/components/layout";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-5xl font-bold text-green-700">
          Gạo Trần Huy
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Chuyên cung cấp gạo sạch, gạo ST25, Jasmine, Bắc Hương,
          Nàng Thơm và nhiều loại gạo chất lượng cao.
        </p>
      </main>
    </>
  );
}
