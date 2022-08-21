module.exports = {
  'rules': {
    '@atlantisexist/feature-name': 'error',
    'object-curly-spacing': [
      'error', 'never',
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
    'quote-props': [
      'error', 'as-needed',
    ],
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    '@typescript-eslint/object-curly-spacing': [
      'error', 'never',
    ],
  },
};
