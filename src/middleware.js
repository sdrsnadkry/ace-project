import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const cookie = request.cookies.get("authToken")?.value;

  if (request.url?.includes("dashboard")) {
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (cookie?.length > 0) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
