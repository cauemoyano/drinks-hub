export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const replaceSpaceByUnderline = (s: string) => {
  return s.replace(/\s+/g, "_");
};
export const replaceUnderlineBySpace = (s: string) => {
  return s.replace(/_/g, " ");
};
export const encodeSpaceForUrl = (url: string | undefined) => {
  return url && url.replace(" ", `%20`);
};
