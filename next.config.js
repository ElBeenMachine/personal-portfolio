/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "https://www.github.com/ElBeenMachine",
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
