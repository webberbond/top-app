module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      loader: '@svgr/webpack',
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
          titleProp: true,
        },
      },
    });
    return config;
  },
};
