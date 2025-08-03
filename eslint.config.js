import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        document: "readonly",
        console: "readonly",
      },
    },
    rules: {
      semi: "error",
      quotes: ["error", "single"],
    },
  },
];
