module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-typescript'];
  const plugins = ['@babel/plugin-transform-object-assign'];

  return {
    presets,
    plugins
  };
}
