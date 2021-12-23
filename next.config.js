const withPlugins = require('next-compose-plugins');

// next.config.js
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  // assetPrefix: '.',
});