import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
};

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { img } from './gulp/tasks/img.js';
import { js } from './gulp/tasks/js.js';

const mainTasks = gulp.series(reset, copy, html, scss, img, js);

function watcher() {
  gulp.watch(path.watch, mainTasks);
}

export default gulp.series(mainTasks, gulp.parallel(watcher, server));
// gulp.task('default', dev);
