import WP from './config/webpack.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '/wp-content/themes/default',
    basePath: '/wp-content/themes/default',
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    trailingSlash: true,
    webpack: (config, {webpack}) => WP(config, webpack),
};

export default nextConfig;
