import { deleteAsync } from 'del';

export function clean(cleanPath) {
  return function () {
    return deleteAsync(cleanPath);
  };
}
