const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return mergeConfig(defaultConfig, {
    transformer: {
      babelTransformerPath: path.resolve(__dirname, 'csv-transformer/index.js'), // 👉 직접 만든 transformer 사용
    },
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'csv'),
      sourceExts: [...defaultConfig.resolver.sourceExts, 'csv'],
    },
  });
})();
