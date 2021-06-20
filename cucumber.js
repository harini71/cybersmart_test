require('@babel/register')({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ],
});

module.exports = {
  default: `--format-options '{"snippetInterface": "async-await"}'`,
};
