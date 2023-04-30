export const isEmpty = <T,>(obj: T) => {
  return (!obj || (Array.isArray(obj) && obj.length === 0) || (typeof obj === 'object' && Object.keys(obj).length === 0))
};