module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~': './src',
            '$ui': './src/components/ui',
            '$store': './src/state/store.ts',
          },
        },
      ],
    ],
  };
};
