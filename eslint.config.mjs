import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    env: {
      mocha: true,
    }
  },
];

