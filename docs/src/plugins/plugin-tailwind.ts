import type { LoadContext, Plugin } from "@docusaurus/types";

export default function tailwindPlugin(context: LoadContext): Plugin | null {
  return {
    name: "plugin-tailwind",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins.push(require("@tailwindcss/postcss"));
      return postcssOptions;
    },
  };
}
