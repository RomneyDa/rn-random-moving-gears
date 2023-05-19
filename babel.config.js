module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    alias: {
      '^@src/(.+)': './src/\\1',
      '^@assets/(.+)': './src/assets/\\1',
      '^@components/(.+)': './src/components/\\1',
      '^@contexts/(.+)': './src/contexts/\\1',
      '^@models/(.+)': './src/models/\\1',
      '^@navigation/(.+)': './src/navigation/\\1',
      '^@screens/(.+)': './src/screens/\\1',
      '^@services/(.+)': './src/services/\\1',
      '^@utils/(.+)': './src/utils/\\1',
    },
  }
}
