const separateSlash = (routeString: string) => {
  const [slash, result] = routeString.split('/');
  return result;
};

const createKeyPair = (key: string, value: string | number) => {
  const result: any = {};
  result[key] = value;
  return result;
};

const getStringValue = (data: any, callback: any) => {
  const keys = Object.keys(data);
  return keys.map(callback).join('\n');
};

export { separateSlash, createKeyPair, getStringValue };
