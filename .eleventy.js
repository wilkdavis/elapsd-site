export default function (eleventyConfig) {
  // Copy assets through to _site/
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Optional: easier year in footer (uses JS Date)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk"
  };
}

