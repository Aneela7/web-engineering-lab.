const js = require("@eslint/js");

module.exports = [
  {
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        document: "readonly",
      },
    },
  },
  js.configs.recommended,
];
