module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scaffolding/sass/abstracts/_variables.scss";
            @import "@/scaffolding/sass/abstracts/_functions.scss";
            @import "@/scaffolding/sass/abstracts/_mixins.scss";
          `
      }
    }
  }
};
