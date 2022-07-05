const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require("markdown-it-anchor");
const markdownItEmoji = require("markdown-it-emoji");
const slugify = require("slugify");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pageAssetsPlugin = require('eleventy-plugin-page-assets');

const filters = require('./utils/filters.js');

let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true, 
}).use(markdownItAttrs, markdownItEmoji);

module.exports = function  (eleventyConfig) {

    // Plugins
    eleventyConfig.addPlugin(pluginRss);

    // Filters
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName])
    });

    // Asset Watch Targets
    eleventyConfig.addWatchTarget("./src/assets/");

    // Markdown Parsing
    eleventyConfig.setLibrary("md", markdownLibrary);

    // Pass-through files
    eleventyConfig.addPassthroughCopy("./src/assets/images/");
    eleventyConfig.addPassthroughCopy("./src/site.webmanifest");

    // Deep-Merge
    eleventyConfig.setDataDeepMerge(true);
    
    return {
        dir: {
            input: "src",
            output: "public",
            layouts: '_layouts',
        },
        templateFormats: [ "md", "njk", "html", ],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    }
}