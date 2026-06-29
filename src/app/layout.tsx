import type { Metadata } from "next";
import "./globals.css";

import {
  Header,
  Footer,
} from "@/components/layout";

export const metadata: Metadata = {
  title: "Gạo Trần Huy",
  description: "Website bán gạo sạch chất lượng cao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gray-50 text-gray-900">

        <Header />

        {children}

        <Footer />

      </body>
    </html>
  );
}
