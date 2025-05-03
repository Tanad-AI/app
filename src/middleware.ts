import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import createMiddleware from "next-intl/middleware";
import { NextResponse, NextRequest } from "next/server";

/**
 * Configuration
 */
const LOCALES = ["en", "ar"];
const DEFAULT_LOCALE = "en";

// Define public paths that don't require authentication
const PUBLIC_PATHS = [
  "/",
  "/dashboard/*", // All dashboard routes are public
  "/create/*", // All create routes are public
  // Add other public paths here as needed
];

/**
 * Middleware for internationalization
 */
const intlMiddleware = createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "as-needed",
});

/**
 * Determines if a path should be publicly accessible
 * Handles both exact matches and wildcard patterns
 */
function isPublicPath(url: string): boolean {
  const pathname = new URL(url).pathname;

  return PUBLIC_PATHS.some((pattern) => {
    // Handle wildcard patterns (e.g., "/dashboard/*")
    if (pattern.endsWith("/*")) {
      const basePath = pattern.slice(0, -1); // Remove the "*"

      // Check direct path match
      if (pathname.startsWith(basePath)) {
        return true;
      }

      // Check with locale prefix (e.g., /en/dashboard/)
      for (const locale of LOCALES) {
        if (pathname.startsWith(`/${locale}${basePath}`)) {
          return true;
        }
      }

      return false;
    }

    // Handle exact path matches
    return [
      pattern, // Exact match
      `${pattern}/`, // With trailing slash
      ...LOCALES.map((loc) => `/${loc}${pattern}`), // With locale prefix
      ...LOCALES.map((loc) => `/${loc}${pattern}/`), // With locale prefix and trailing slash
    ].includes(pathname);
  });
}

/**
 * Main middleware function
 */
export default async function middleware(req: NextRequest) {
  // Skip auth for public paths, only apply i18n
  if (isPublicPath(req.url)) {
    const response = await intlMiddleware(req);
    response.headers.delete("x-middleware-next");
    return response;
  }

  // Apply both auth and i18n middleware for protected paths
  const authMiddleware = withAuth(
    // Success callback - apply i18n after successful auth
    function onSuccess(req: NextRequest) {
      return intlMiddleware(req);
    },
    { isReturnToCurrentPage: true },
  );

  // Execute the auth middleware
  const response = await (
    authMiddleware as unknown as (req: NextRequest) => Promise<NextResponse>
  )(req);
  response.headers.delete("x-middleware-next");
  return response;
}

/**
 * Configure which routes the middleware applies to
 */
export const config = {
  matcher: ["/((?!api|static|studio|.*\\..*|_next).*)"],
};
