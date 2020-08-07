module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/style/_mixins.scss";
          @import "@/assets/style/_variables.scss";
        `,
      },
    },
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].[contenthash].js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: 'vendors'
          }
        }
      }
    }
  },
};
