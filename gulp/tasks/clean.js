import { deleteAsync } from 'del';

export function clean() {
  return deleteAsync(app.path.clean);
}

export function fullClean() {
  return deleteAsync(app.path.fullClean);
}
