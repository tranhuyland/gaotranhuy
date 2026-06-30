import { TopBar } from "./TopBar";
import { Logo } from "./Logo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { SearchBox } from "./SearchBox";
import { CartButton } from "./CartButton";

export function Header() {
  return (
    <>
      <TopBar />

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">

          {/* Logo */}
          <Logo />

          {/* Menu Desktop */}
          <DesktopMenu />

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            <SearchBox />

            <CartButton />

            <MobileMenu />

          </div>

        </div>
      </header>
    </>
  );
}
