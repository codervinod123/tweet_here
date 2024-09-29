import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  // temporarly ignoreing the test to be linted
  { ignores: ["tests/*"] },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      indent: ["error", 2],
      "require-await": "error",
      "space-before-blocks": ["error", "always"],
      "space-in-parens": ["error", "never"],
      "no-multi-spaces": ["error"],
      "keyword-spacing": ["error", { before: true, after: true }],
    },
  },
  
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
