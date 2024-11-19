/** @type {import('next').NextConfig} */
const nextConfig = {
    //updated
    images : {
       remotePatterns: [
        {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            pathname: '**',
        },
       ],
    },
};

export default nextConfig;
