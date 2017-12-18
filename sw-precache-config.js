module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.json',
    'dist/**.css',
    'dist/assets/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /http/,
    handler: 'networkFirst'
  }],
  importScripts: ["./push-notification.js"]
};
