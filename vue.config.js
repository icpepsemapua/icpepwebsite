module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/scaffolding/sass/_variables.scss";
            @import "@/scaffolding/sass/_functions.scss";
            @import "@/scaffolding/sass/_mixins.scss";
          `
      }
    }
  }
};
