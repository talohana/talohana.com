module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn build && yarn start',
      url: ['http://localhost:3000/'],
      numberOfRuns: 2,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
