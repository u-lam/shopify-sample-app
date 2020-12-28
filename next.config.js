// shopify app has been configured to run on port 3000 through ngrok
// next step is to configure polaris so we can use next.js across the app
require("dotenv").config();
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");

const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = withCSS({
  webpack: config => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  }
});
