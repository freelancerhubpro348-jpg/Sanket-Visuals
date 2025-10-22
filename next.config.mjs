/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ensures static export
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },

  // ✅ Minify HTML/JS/CSS
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
