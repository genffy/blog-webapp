/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: "default",
    // OSS 中域名的地址
    domains: ["blog-genffy.oss-cn-hangzhou.aliyuncs.com"],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return defaultPathMap;
  },
}

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig.images.domains.push('localhost');
  }
  return {
    ...nextConfig
  }
}
