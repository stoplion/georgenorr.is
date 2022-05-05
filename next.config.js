/** @type {import('next').NextConfig} */
const path = require("path");
const withYAML = require("next-yaml");

const config = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = withYAML(config);
