const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/output.css");
  eleventyConfig.addPassthroughCopy("./src/index.js");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  // get the current year for copyright date
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add filter to format date in Italian locale
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("it") // Set locale explicitly to Italian
      .toFormat("dd MMMM yyyy"); // Format as medium date
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
