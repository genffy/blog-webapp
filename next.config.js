/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    // OSS 中域名的地址
    domains: ["blog-genffy.oss-cn-hangzhou.aliyuncs.com"],
  },
}

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
module.exports = (phase, { defaultConfig }) =>{
  if(phase === PHASE_DEVELOPMENT_SERVER){
    nextConfig.images.domains.push('localhost');
  }
  return {
    ...nextConfig
  } 
}
