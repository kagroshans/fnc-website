module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", function (dateObj) {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  eleventyConfig.addFilter("htmlDateString", function (dateObj) {
    return new Date(dateObj).toISOString().slice(0, 10);
  });

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/posts/*.md")
      .filter(function (post) {
        return !post.data.draft;
      })
      .sort(function (a, b) {
        return a.date - b.date;
      });
  });

  eleventyConfig.addCollection("navPages", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/pages/*.md")
      .filter(function (page) {
        return page.data.nav === true;
      })
      .sort(function (a, b) {
        return (a.data.navOrder ?? 999) - (b.data.navOrder ?? 999);
      });
  });

  eleventyConfig.addCollection("sitemapPages", function (collectionApi) {
    return collectionApi.getAll().filter(function (item) {
      return item.outputPath && item.outputPath.endsWith(".html");
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
