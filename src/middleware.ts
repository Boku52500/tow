import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const pathname = req.nextUrl.pathname;

  const isOnlineHost = host.startsWith("online.evakuatoritbilisshi.ge");

  if (isOnlineHost) {
    if (pathname === "/online" || pathname.startsWith("/online/")) {
      return NextResponse.next();
    }

    const url = req.nextUrl.clone();
    url.pathname = "/online";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
