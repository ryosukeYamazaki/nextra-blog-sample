const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.watchOptions.ignored.push('**/.#*');
    return config;
  }
})
