const path = require("path");

const staticFilesRelativePath = "./../public";
const staticFilesPath = path.resolve(__dirname, staticFilesRelativePath);

const indexHtmlRelativePath = staticFilesRelativePath + "/index.html";
const indexHtmlPath = path.resolve(__dirname, indexHtmlRelativePath);

module.exports = {
    staticFiles: staticFilesPath,
    indexHtml: indexHtmlPath
}
