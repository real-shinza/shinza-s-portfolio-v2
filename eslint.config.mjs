import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      'indent': ['warn', 2, { 'SwitchCase': 1 }],
      'quotes': ['warn', 'single'],
      'jsx-quotes': ['warn', 'prefer-single'],
      'semi': ['warn', 'always'],
      'comma-dangle': ['warn', 'always-multiline'],
      'eol-last': ['warn', 'always'],
      'no-trailing-spaces': ['warn', { 'skipBlankLines': false, 'ignoreComments': false }],
      'react/jsx-indent': ['warn', 2],
      'react/jsx-indent-props': ['warn', 2],
      'react/display-name': 'off',
      'import/no-anonymous-default-export': 'off',
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);
