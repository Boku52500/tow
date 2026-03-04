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
        <style
          dangerouslySetInnerHTML={{
            __html: `:root{--background:#f8f9fa;--foreground:#1a1a2e}html,body{height:100%}body{background:var(--background);color:var(--foreground);font-family:var(--font-georgian),system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;margin:0}.min-h-screen{min-height:100vh}.flex{display:flex}.items-center{align-items:center}.justify-center{justify-content:center}.px-4{padding-left:1rem;padding-right:1rem}.w-full{width:100%}.max-w-sm{max-width:24rem}.text-center{text-align:center}.mx-auto{margin-left:auto;margin-right:auto}.inline-flex{display:inline-flex}.gap-3{gap:.75rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.w-20{width:5rem}.h-20{height:5rem}.w-10{width:2.5rem}.h-10{height:2.5rem}.w-5{width:1.25rem}.h-5{height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.transition-colors{transition:background-color .15s ease,color .15s ease}.scroll-smooth{scroll-behavior:smooth}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bg-\\[\\#f8f9fa\\]{background-color:#f8f9fa}.bg-\\[\\#1a1a2e\\]{background-color:#1a1a2e}.bg-\\[\\#f5b800\\]{background-color:#f5b800}.hover\\:bg-\\[\\#e0a800\\]:hover{background-color:#e0a800}.text-\\[\\#1a1a2e\\]{color:#1a1a2e}.text-\\[\\#f5b800\\]{color:#f5b800}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
