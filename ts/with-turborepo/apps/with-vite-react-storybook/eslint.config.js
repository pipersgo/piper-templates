import { defineConfig, globalIgnores } from "eslint/config";
import config from "@repo/eslint-config/react-internal";
import pluginStorybook from "eslint-plugin-storybook";

export default defineConfig([
  globalIgnores([".storybook", "storybook-static", "vite.config.ts"]),
  ...config,
  pluginStorybook.configs["flat/recommended"],
]);
