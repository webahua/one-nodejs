/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects:async() => {
    return [
      {
        source:'/checkout',
        destination:'/login',
        permanent:true
      },
      {
        source:'/pricing',
        destination:'/login',
        permanent:false
      }
    ]
  },
}

module.exports = nextConfig
