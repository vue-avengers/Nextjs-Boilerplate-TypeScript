/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withPlugins = require('next-compose-plugins');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const { i18n } = require('./i18n');

const isProd = process.env.NODE_ENV === 'production';
// ESBUILD LOADER

function useEsbuildMinify(config, options) {
  const terserIndex = config.optimization.minimizer.findIndex(
    minimizer => minimizer.constructor.name === 'TerserPlugin'
  );
  if (terserIndex > -1) {
    config.optimization.minimizer.splice(
      terserIndex,
      1,
      new ESBuildMinifyPlugin(options)
    );
  }
}

function useEsbuildLoader(config, options) {
  const tsxLoader = config.module.rules.find(
    rule => rule.test && rule.test.test(/\.tsx?$/)
  );

  if (tsxLoader) {
    tsxLoader.use.loader = 'esbuild-loader';
    tsxLoader.use.options = options;
  }
}

module.exports = withPlugins(
  [withPWA, withBundleAnalyzer], // All next plugins go here
  // Below is the main Next.js config object
  {
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'tsx', 'mdx'],
    eslint: {
      dirs: ['src', 'e2e', 'docs'],
    },
    webpack: (config, { dev, isServer }) => {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      });

      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      useEsbuildMinify(config);

      useEsbuildLoader(config, {
        loader: 'tsx',
        target: 'es2017',
      });

      if (!dev && !isServer) {
        // Replace React with Preact only in client production build
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        });
      }

      return config;
    },
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      runtimeCaching,
      disable: !isProd,
    },
    i18n,
  }
);
