export function imageUrl(path: string) {
  if (!path) {
    return "/images/placeholder.webp";
  }

  return path;
}
