module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '$ui': './src/components/ui',
            '$store': './src/state/store.ts',
          },
        },
      ],
    ],
  };
};
