/** @type {import('next').NextConfig} */



const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/redirect?r=https://github.com/ElBeenMachine",
                permanent: false
            },
            {
                source: "/discord",
                destination: "/redirect?r=https://discord.gg/uB4dcpsMSR",
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig