module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
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
            '^@hooks/(.+)': './src/hooks/\\1',
            '^@types/(.+)': './src/types/\\1',
          },
        },
      ],
      [
        'react-native-reanimated/plugin',
        {
          globals: ['__scanCodes'],
        },
      ],
    ],
  }
}
