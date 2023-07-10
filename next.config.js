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
                destination: "https://discord.gg/uB4dcpsMSR",
                permanent: true
            },
            {
                source: "/instagram",
                destination: "https://instagram.com/BeenhamOW",
                permanent: true
            },
            {
                source: "/twitter",
                destination: "https://twitter.com/ElBeenMachine",
                permanent: true
            },
            {
                source: "/threads",
                destination: "https://threads.net/@beenhamow",
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig