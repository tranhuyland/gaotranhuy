import {
  Logo,
  MobileMenu,
  SearchBox,
} from "@/components/layout";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl p-6">

      <div className="flex items-center justify-between">

        <Logo />

        <SearchBox />

        <MobileMenu />

      </div>

      <h2 className="mt-10 text-3xl font-bold">
        Gạo Trần Huy
      </h2>

      <p>Starter V1.0</p>

    </main>
  );
}
