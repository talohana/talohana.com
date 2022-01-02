module.exports = {
  schema: `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }/graphql`,
  documents: 'graphql/**/*.{graphql,js,ts,jsx,tsx}',
};
