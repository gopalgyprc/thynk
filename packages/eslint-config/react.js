const baseConfig = require("./index.js");

module.exports = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...baseConfig.rules,
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
