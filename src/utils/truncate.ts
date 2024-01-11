export function truncateString(
  str: string,
  maxLength: number,
  appendStr: string = "..."
): string {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - appendStr.length) + appendStr;
  } else {
    return str;
  }
}
