module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@vue/typescript/recommended',
        'plugin:vue/vue3-recommended',
        'eslint:recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
          legacyDecorators: true,
        }
    },
    rules: {
        'indent': 'off',
        'vue/html-indent': 'off',
        'vue/html-self-closing': ['off'],
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/singleline-html-element-content-newline': 'off',
    }
}
  