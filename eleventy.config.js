module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Collection: all digests sorted by date (newest first)
  eleventyConfig.addCollection("digests", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/digests/*.md").sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  // Collection: group digests by category
  eleventyConfig.addCollection("categories", function(collectionApi) {
    const digests = collectionApi.getFilteredByGlob("src/digests/*.md");
    const categories = {};
    
    digests.forEach(digest => {
      const cats = digest.data.categories || ["Uncategorized"];
      cats.forEach(cat => {
        if (!categories[cat]) categories[cat] = [];
        categories[cat].push(digest);
      });
    });
    
    // Sort each category by date
    Object.keys(categories).forEach(cat => {
      categories[cat].sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
    });
    
    return categories;
  });

  // Date formatting filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // Short date filter
  eleventyConfig.addFilter("shortDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    // Removed pathPrefix - handling paths via template filters and relative URLs
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
