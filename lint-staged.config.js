module.exports = {
  '**/*.ts?(x)': () => ['tsc -p tsconfig.json --noEmit', 'eslint --fix'],
};
