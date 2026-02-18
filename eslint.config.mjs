import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";

export default tseslint.config({
  ignores: ["dist/**", "node_modules/**"],
  files: ["**/*.ts"],
  extends: [...tseslint.configs.recommended],
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
        semi: false,
      },
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": [
      "error",
      { allow: ["constructors"] },
    ],
  },
});
