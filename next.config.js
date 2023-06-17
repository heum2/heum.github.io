const { withContentlayer } = require("next-contentlayer");

const debug = process.env.NODE_ENV !== "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: !debug ? "https://heum2.github.io" : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록,
};

module.exports = withContentlayer(nextConfig);
