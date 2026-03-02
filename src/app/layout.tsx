import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const alkSanet = localFont({
  src: "../../public/ALK-Sanet.ttf",
  variable: "--font-georgian",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ევაკუატორი 24/7 | სწრაფი და საიმედო ევაკუატორის მომსახურება თბილისში და მთელ საქართველოში",
  description:
    "პროფესიონალური ევაკუატორის მომსახურება 24 საათის განმავლობაში. ავტომობილის ევაკუაცია, ავარიული დახმარება გზაზე, აკუმულატორის დაქოქვა, საბურავის შეცვლა. დაგვირეკეთ: 577 07 38 89",
  keywords:
    "ევაკუატორი, ევაკუატორი თბილისი, ავტომობილის ევაკუაცია, ავარიული დახმარება, tow truck tbilisi, evacuator",
  openGraph: {
    title: "ევაკუატორი 24/7 | თბილისი",
    description: "სწრაფი და საიმედო ევაკუატორის მომსახურება მთელ საქართველოში. დაგვირეკეთ: 577 07 38 89",
    locale: "ka_GE",
    type: "website",
  },
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
