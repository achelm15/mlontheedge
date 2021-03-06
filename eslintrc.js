module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:prettier/recommended"
    ],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
      parser: "babel-eslint"
    }
  };