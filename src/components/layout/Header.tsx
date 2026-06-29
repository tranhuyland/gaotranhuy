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

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

          <Logo />

          <DesktopMenu />

          <div className="flex items-center gap-3">
            <SearchBox />

            <CartButton />

            <MobileMenu />
          </div>

        </div>
      </header>
    </>
  );
}
