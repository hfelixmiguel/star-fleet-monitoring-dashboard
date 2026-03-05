/** @type {import('vitest').VitestConfig} */
module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  restoreMocks: true,
  setupFiles: ['./setupTests.js'],
};
