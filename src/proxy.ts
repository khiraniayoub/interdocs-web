import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy: injects the current pathname as a request header
 * so the root layout can read it to set the correct `lang` attribute
 * on the `<html>` element for multilingual SEO.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|woff2?|ttf)).*)",
  ],
};
