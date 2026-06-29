import { ThemeProvider } from "./theme-provider";
import { CartProvider } from "./cart-provider";

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
