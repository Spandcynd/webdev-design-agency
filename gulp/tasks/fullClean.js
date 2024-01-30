import { deleteAsync } from 'del';

export function fullClean() {
  return deleteAsync(app.path.fullClean);
}
