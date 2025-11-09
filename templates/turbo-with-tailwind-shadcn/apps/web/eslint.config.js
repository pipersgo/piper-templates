import { defineConfig, globalIgnores } from "eslint/config";
import config from "@repo/eslint-config/react-internal";

export default defineConfig([globalIgnores(["dist"]), ...config]);
