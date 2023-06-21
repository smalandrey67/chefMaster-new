/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["lh3.googleusercontent.com", "images.unsplash.com", "spoonacular.com"],
		formats: ["image/webp"]
	},
	eslint: {
		dirs: ["pages", "app"]
	}
};

module.exports = nextConfig;
