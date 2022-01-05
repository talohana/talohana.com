export function getStrapiURL(path = ''): string {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }/${path}`;
}
