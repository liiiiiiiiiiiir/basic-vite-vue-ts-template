module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-trailing-spaces": ["error"], // 不允许空行上的尾随空白
    "no-multi-assign": "error", // 禁止在单个语句中使用多个分配
    "no-multi-spaces": "error", // 禁止连续多个空格
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "max-len": ["error", {
      "code": 200,
      "ignorePattern": "svg"
    }],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 1,
      "maxBOF": 0
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/max-attributes-per-line": ["error", {
      "singleline": { "max": 5 },
      "multiline": { "max": 1 }
    }]
  }
};
