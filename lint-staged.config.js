module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '*.{css,scss}': ['stylelint --fix', 'stylelint'],
  '**/*.ts?(x)': () => 'npm run build-types',
  '*.json': [
    'prettier --write --config .prettierrc.json {src,e2e,docs}/**/*.{js,jsx,ts,tsx,json,md}',
  ],
};
