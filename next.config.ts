import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // This tells Turbopack to only look inside your current project folder
    root: path.join(__dirname),
  },
};

export default nextConfig;