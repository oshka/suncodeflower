module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  plugins: ['react', 'import'],
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  extends: 'airbnb',
  rules: {
    'function-paren-newline': [0],
    'react/jsx-no-bind': ['warn'],
    'jsx-a11y/html-has-lang': [0],
    'consistent-return': [0],
    'arrow-body-style': [0],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTaggedTemplates: true
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 0,
    'linebreak-style': 0,
    semi: [2, 'never'],
    'no-unexpected-multiline': 2, // for cases like syntactic sugar destructuring into variables
    quotes: ['error', 'single'],
    'react/prop-types': [
      1,
      {
        skipUndeclared: true,
        ignore: [
          'children',
          // the next two props are provided by react-final-form
          'input',
          'meta',
        ]
      }
    ],
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '}', '"']
      }
    ],
    'react/forbid-prop-types': [
      1,
      {
        forbid: ['any']
      }
    ],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'max-len': [
      'error',
      {
        code: 110
      }
    ]
  },
  globals: {}
}
