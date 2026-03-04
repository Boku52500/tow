import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const alkSanet = localFont({
  src: "../../public/ALK-Sanet.ttf",
  variable: "--font-georgian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evakuatori",
  description: "Evakuatori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka" className="scroll-smooth">
      <body className={`${alkSanet.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
