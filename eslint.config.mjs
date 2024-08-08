import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Node.jsのグローバル変数を追加
        ...globals.jest, // Jest のグローバル変数を追加
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: 'detect', // ここにReactのバージョンを設定
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // JSX使用時のReactインポート不要エラーを無効化
      'no-unused-vars': 'warn',
    },
  },
];
