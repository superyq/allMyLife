const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

export const isObject = value => typeof value === 'object' && value !== null;

export const isArray = value => Array.isArray(value);

// 深拷贝
export const deepCloneObject = src => {
  if(!isObject(src)) return src;
  const target = isArray(src) ? [] : {};

  for(const key in src) {
    if(!hasOwn(src, key)) continue;
    const v = src[key];

    target[key] = v && isObject(v) ? deepCloneObject(v) : v;
  }

  return target;
}

