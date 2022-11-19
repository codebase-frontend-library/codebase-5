const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");

  const markdownLib = markdownIt({ html: true }).use(markdownItAnchor);
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["*"]
  });

  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/dist");
  eleventyConfig.addPassthroughCopy("src/prism");
  eleventyConfig.addPassthroughCopy({"src/favicon": "/"});

  return {
    dir: {
      input: "src",
      output: "docs"
    },
    pathPrefix: "/codebase-5/"
  };
}