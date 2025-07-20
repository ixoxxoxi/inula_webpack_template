module.exports = {
  presets: [
    ['@babel/preset-env', {}],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: 'openinula',
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: 'openinula',
      },
    ],
    [
      'babel-plugin-react-scoped-css',
      {
        include: '.scoped.(css|less)$',
      },
    ],
  ],
};
