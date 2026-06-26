/**
 * Google Drive URL utility functions.
 *
 * Supports share link patterns:
 *   https://drive.google.com/file/d/FILE_ID/view
 *   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *   https://drive.google.com/open?id=FILE_ID
 */

/**
 * Extracts the Google Drive file ID from any standard share URL.
 */
export function extractDriveId(url: string): string | null {
  if (!url) return null;

  // Pattern 1: /file/d/FILE_ID/
  const filePattern = /\/file\/d\/([a-zA-Z0-9_-]+)/;
  const fileMatch = url.match(filePattern);
  if (fileMatch) return fileMatch[1];

  // Pattern 2: ?id=FILE_ID or &id=FILE_ID
  const idPattern = /[?&]id=([a-zA-Z0-9_-]+)/;
  const idMatch = url.match(idPattern);
  if (idMatch) return idMatch[1];

  return null;
}

/**
 * Converts a Google Drive share URL to a clean, embeddable preview URL.
 * Returns the original URL unchanged if it cannot be parsed.
 */
export function toEmbedUrl(driveUrl: string): string {
  const id = extractDriveId(driveUrl);
  if (!id) return driveUrl;
  return `https://drive.google.com/file/d/${id}/preview`;
}
