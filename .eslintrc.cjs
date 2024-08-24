const prettierConfig = require('./.prettierrc.cjs');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  globals: { React: true, JSX: true },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules/',
    'tailwind.config.cjs',
    'postcss.config.cjs'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react-refresh',
    'react',
    'react-hooks',
    'prettier',
    'unicorn',
    'import'
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports'
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        selector: ['typeLike', 'enumMember']
      },
      {
        format: ['PascalCase'],
        selector: 'interface'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/default': 'off',
    'import/export': 'off',
    'import/first': 'error',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false
        }
      }
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'unicorn/prefer-node-protocol': 'warn'
  },
  overrides: [
    {
      files: ['vite.config.ts'],
      rules: {
        'no-unused-vars': 'off',
        'import/no-default-export': 'off'
      }
    }
  ]
};
