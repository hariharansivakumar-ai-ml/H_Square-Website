import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '9xy3tg1p',
  dataset: 'production', // Default dataset name for Sanity
  useCdn: true, // `false` if you want to bypass CDN caching for instant updates
  apiVersion: '2026-05-19', // Use current date for stable API version
});

const builder = imageUrlBuilder(client);

/**
 * Helper function to generate builder URLs for Sanity images
 * @param {object} source - The Sanity image asset source object
 * @returns {object} The image URL builder instance
 */
export function urlFor(source) {
  return builder.image(source).format('webp');
}
