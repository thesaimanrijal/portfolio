import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the build root to this directory. Without it, Turbopack walks up and
  // finds the stray package-lock.json in ~/Desktop and warns about it.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
