/**
 * Basic Webpack configuration for the demo project.
 * - Entry: src/index.js
 * - Output: dist/main.js
 * - Mode: development by default (overridden via scripts)
 * - devServer: serves files from dist and opens browser
 * - HtmlWebpackPlugin: uses src/index.html as a template
 * 
 */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import("webpack").Configuration} */
module.exports = {
  // Main entry point of the application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // Clean the dist folder before each build
  },

  // Default mode (can be overridden from npm scripts)
  mode: "development",

  // Development server configuration
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist")
    },
    compress: true,
    port: 8080,
    open: true
  },

  // For Day 1 we do not configure loaders yet (only JS bundling).
  module: {
    rules: []
  },

  plugins: [
    // Generate an index.html in dist using src/index.html as a template
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Webpack Bundler Demo"
    })
  ]
};
