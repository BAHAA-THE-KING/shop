/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'neurosciencenews.com',
         },
         {
            protocol: 'https',
            hostname: 'www.kingsford.com',
         },
      ]
   }
}

module.exports = nextConfig
