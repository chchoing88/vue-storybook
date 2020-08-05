module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs', '@storybook/addon-links'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            prependData: `
          @import "./src/assets/style/_mixins.scss";
          @import "./src/assets/style/_variables.scss";
        `,
          },
        },
      ],
    });
    config.resolve.extensions.push('.vue', '.css', '.less', '.scss', '.sass', '.html');

    return config;
  },
};
