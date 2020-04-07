module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@navigators': './src/navigators',
          '@styleTypes': './src/styles/styleTypes.ts',
          '@styles': './src/styles/index.ts',
          '@components': './src/components',
          '@constant': './src/constant',
          '@screens': './src/screens',
          '@context': './src/context',
          '@hooks': './src/hooks',
          '@util': './src/util',
          '@type': './src/type',
          '@api': './src/api',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console', 'transform-remove-debugger'],
    },
  },
};
