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
   },
   typescript:{
      ignoreBuildErrors: true
   }
}

module.exports = nextConfig
