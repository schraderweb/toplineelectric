module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/public/css/");
  eleventyConfig.addPassthroughCopy("src/public/images/");
  eleventyConfig.addPassthroughCopy("src/public/js/");

  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/css/custom.min.css");
  eleventyConfig.addWatchTarget("src/css/custom.min.css.map");
  eleventyConfig.addWatchTarget("src/scss/");
  eleventyConfig.addWatchTarget("src/scss/custom.scss/");
  eleventyConfig.addWatchTarget("src/js/");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
