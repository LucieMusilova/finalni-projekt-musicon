const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("*.js");

// vlastní filtr na vytahování např. jen 3 novinek na HP
  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });
  
// filtr na formát datumu
  eleventyConfig.addFilter("czDateTime", function(value) {
    return DateTime.fromJSDate(value).toFormat('d.L.y H:mm');
  });

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
