import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gạo Trần Huy",

  description: "Website bán gạo sạch"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
