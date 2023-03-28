/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["lh3.googleusercontent.com", "images.unsplash.com"],
		formats: ["image/webp"]
	}
};

module.exports = nextConfig;
