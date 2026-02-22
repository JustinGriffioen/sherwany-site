import { NextRequest, NextResponse } from "next/server"

const locales = ["nl", "en"]

function getLocaleFromPath(pathname: string): string | null {
  const segment = pathname.split("/")[1]
  return locales.includes(segment) ? segment : null
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip API, static files, etc.
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/apple") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/manifest") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  const locale = getLocaleFromPath(pathname)

  // Has locale prefix (e.g. /en, /en/contact)
  if (locale) {
    return NextResponse.next()
  }

  // No locale – rewrite to /nl/... so / stays /, /contact stays /contact
  const rewritePath = pathname === "/" ? "/nl" : `/nl${pathname}`
  const url = request.nextUrl.clone()
  url.pathname = rewritePath
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|icon|apple|images|manifest).*)"],
}
