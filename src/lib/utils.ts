export function cn(
  ...classes: Array<string | false | null | undefined>
) {
  return classes.filter(Boolean).join(" ");
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isEmpty(value: unknown) {
  return (
    value === null ||
    value === undefined ||
    value === ""
  );
}
