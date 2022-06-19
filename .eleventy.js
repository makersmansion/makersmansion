const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require("markdown-it-anchor");
const markdownItEmoji = require("markdown-it-emoji");
const slugify = require("slugify");
const pluginRss = require("@11ty/eleventy-plugin-rss");

let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true, 
}).use(markdownItAttrs, markdownItEmoji);

module.exports = function  (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy("./src/assets/images/");
    eleventyConfig.setLibrary("md", markdownLibrary);
    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
        closingSingleTag: "default"
        }
    });
    
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