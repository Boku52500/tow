"use client";

import { Phone, Truck } from "lucide-react";

const PHONE = "577 07 38 89";
const PHONE_LINK = "tel:+995577073889";

export default function OnlinePage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto w-20 h-20 rounded-2xl bg-[#1a1a2e] flex items-center justify-center shadow-lg">
          <Truck className="w-10 h-10 text-[#f5b800]" />
        </div>

        <h1 className="mt-6 text-2xl font-extrabold text-[#1a1a2e]">
          ევაკუატორი
        </h1>

        <a
          href={PHONE_LINK}
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f5b800] px-6 py-4 text-lg font-bold text-[#1a1a2e] shadow-md hover:bg-[#e0a800] transition-colors"
        >
          <Phone className="w-5 h-5" />
          Gamodzaxeba
        </a>

        <p className="mt-4 text-sm text-[#6b7280]">{PHONE}</p>
      </div>
    </main>
  );
}
