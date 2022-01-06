import { UploadFile } from '@models/generated';

export function getStrapiURL(path = ''): string {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
  }${path}`;
}

export function getStrapiMedia(media: UploadFile): string {
  const imageUrl = media.url.startsWith('/')
    ? getStrapiURL(media.url)
    : media.url;

  return imageUrl;
}
