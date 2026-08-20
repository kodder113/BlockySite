import type { NextConfig } from "next";

// This site is fully static (prerendered, no server routes, no user input),
// so a nonce-based CSP isn't available -- nonces require per-request
// rendering. Next's hydration payload ships as inline <script> and the
// preview mockups use inline style attributes, so script/style need
// 'unsafe-inline'. CSP here is defense-in-depth rather than the primary
// control; the meaningful directives are frame-ancestors (clickjacking),
// object-src, base-uri, and form-action.
// React's dev build uses eval() for debugging features (rebuilding
// callstacks, hot reload). It never does in production, so 'unsafe-eval'
// is scoped to development only and never ships.
const isDev = process.env.NODE_ENV === "development";

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  // Redundant with frame-ancestors above, kept for older browsers.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i2c.seadn.io",
      },
    ],
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
