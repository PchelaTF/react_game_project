module.exports = {
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "auto",
  printWidth: 120,
  singleQuote: true,
  overrides: [
    {
      files: ["**.*.scss", "*.scss"],
      options: {
        singleQuote: false,
      },
    },
  ],
};
