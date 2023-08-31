export function generateTwitterShareLink(url, title) {
  const encodedURL = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  return `https://twitter.com/share?url=${encodedURL}&text=${encodedTitle}`;
}
