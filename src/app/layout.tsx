import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Gạo Trần Huy",
    template: "%s | Gạo Trần Huy",
  },
  description:
    "Chuyên cung cấp gạo ST25, Jasmine, Bắc Hương, Nàng Thơm và nhiều loại gạo chất lượng cao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
