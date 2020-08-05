module.exports = {
  css: {
    loaderOptions: {
      scss: {
        sourceMap: true,
        prependData: `
          @import "@/assets/style/_mixins.scss";
          @import "@/assets/style/_variables.scss";
        `,
      },
    },
  },
};
