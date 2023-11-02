export function isAnyConfigMissing(
  configList: Array<{ [key: string]: string | undefined }>
) {
  return !configList.every(
    (config) =>
      Object.keys(config).length > 0 &&
      Object.values(config).every((value) => value !== undefined)
  );
}
