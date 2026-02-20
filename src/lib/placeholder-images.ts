import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const withBasePath = (url: string) => {
  if (!url.startsWith('/')) return url;
  if (!basePath) return url;
  return `${basePath}${url}`;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages.map((item) => ({
  ...item,
  imageUrl: withBasePath(item.imageUrl),
}));
