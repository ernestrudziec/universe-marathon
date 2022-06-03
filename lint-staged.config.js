module.exports = {
  "*.{spec,test}.{ts,tsx}": ["jest"],
  "*.{ts,tsx}": [() => "tsc --noEmit"],
  "./**/*.{js,jsx,ts,tsx,json,yml,yaml,css,scss,md,mdx,html}":
    ["prettier --write"],
  "src/**/*.{js,jsx,ts,tsx}": ["eslint --fix"],
};
