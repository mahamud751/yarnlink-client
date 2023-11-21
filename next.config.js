/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: [
      "pixner.net",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "i.ibb.co",
      "images.unsplash.com",
      "plus.unsplash.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;
