module.exports = {
  husky: {
    hooks: {
      'pre-commit': 'lint-staged',
      'pre-push': 'npm run build-types',
    },
  },
};
