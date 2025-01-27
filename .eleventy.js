const { DateTime } = require("luxon");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/output.css");
  eleventyConfig.addPassthroughCopy("./src/index.js");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("it")
      .toFormat("dd MMMM yyyy");
  });

  return {
    dir: {
      input: "src",
      output: "public",
      data: "_data",
    },
  };
};
