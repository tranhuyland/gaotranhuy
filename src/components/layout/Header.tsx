import { TopBar } from "./TopBar";
import { Logo } from "./Logo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { SearchBox } from "./SearchBox";
import { CartDrawer } from "@/features/cart/components";

export function Header() {
  return (
    <>
      {/* TopBar chỉ hiện Desktop */}
      <TopBar />

      {/* Header cố định */}
      <header
        className="
          fixed
          left-0
          right-0
          top-0
          lg:top-10
          z-50
          border-b
          border-gray-200
          bg-white/95
          shadow-sm
          backdrop-blur
        "
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          <Logo />

          <DesktopMenu />

          <div className="flex items-center gap-2 sm:gap-3">
            <SearchBox />

            <CartDrawer />

            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 lg:h-[120px]" />
    </>
  );
}
