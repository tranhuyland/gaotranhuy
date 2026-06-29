import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaotranhuy.vercel.app"),

  title: {
    default: "Gạo Trần Huy",
    template: "%s | Gạo Trần Huy",
  },

  description:
    "Chuyên cung cấp các loại gạo chất lượng cao.",

  openGraph: {
    title: "Gạo Trần Huy",
    description: "Website bán gạo sạch.",
    images: ["/images/og-image.jpg"],
  },
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
