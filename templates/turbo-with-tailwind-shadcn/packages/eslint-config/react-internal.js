import { defineConfig } from "eslint/config";
import baseConfig from "./base.js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default defineConfig([
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs.flat["recommended-latest"],
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: globals.browser,
    },
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
]);
