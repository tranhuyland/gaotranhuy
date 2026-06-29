import {
  Logo,
  MobileMenu,
  SearchBox,
  CartButton,
} from "@/components/layout";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <div className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-3">
          <SearchBox />

          <CartButton count={2} />

          <MobileMenu />
        </div>
      </div>

      <h2 className="mt-10 text-3xl font-bold">
        Gạo Trần Huy
      </h2>

      <p>Starter V1.0</p>
    </main>
  );
}
