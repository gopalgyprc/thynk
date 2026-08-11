// @ts-check
// ESLint 9 Flat Config for @thynk/eslint-config
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
const thynkConfig = defineConfig([
  {
    name: "@thynk/eslint-config/base",
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      ".next/**",
      "out/**",
      "**/*.d.ts",
    ],
    rules: {
      "no-unused-vars": "off",
      "no-console": "warn",
    },
  },
  // TypeScript ESLint recommended config (spread at array level)
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    name: config.name
      ? `@thynk/eslint-config/${config.name}`
      : "@thynk/eslint-config/typescript",
    files: ["**/*.{ts,tsx}"],
    rules: {
      ...config.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  })),
  // React recommended config
  {
    name: "@thynk/eslint-config/react",
    files: ["**/*.{tsx,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
]);

export default thynkConfig;
