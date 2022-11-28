module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './components',
            '@navigation': './navigation',
            '@ui': './components/ui/index.ts',
            '@state': './state',
            '@features': './features',
            '@store': './state/store.ts',
          },
        },
      ],
    ],
  };
};
