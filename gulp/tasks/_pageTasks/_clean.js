import { deleteAsync } from 'del';

export function clean(cleanPath) {
  return function clean() {
    return deleteAsync(cleanPath);
  };
}
