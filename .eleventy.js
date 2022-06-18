const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require("markdown-it-anchor");
const markdownItEmoji = require("markdown-it-emoji");
const slugify = require("slugify");

let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true, 
}).use(markdownItAttrs, markdownItEmoji);

module.exports = function  (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy("./src/assets/images/");
    eleventyConfig.setLibrary("md", markdownLibrary);
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