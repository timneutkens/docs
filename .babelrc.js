const env = {
  VERSION: require('./package').version,
  'process.env.NODE_ENV': process.env.NODE_ENV,
  IMAGE_ASSETS_URL: 'https://assets.zeit.co/image/upload/front',
  VIDEO_ASSETS_URL: 'https://assets.zeit.co/video/upload/front',
  RAW_ASSETS_URL: 'https://assets.zeit.co/raw/upload/front'
}

module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define', env], 'markdown-in-js/babel']
}
