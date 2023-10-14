import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
};

import { server } from './gulp/tasks/server.js';
import { reset } from './gulp/tasks/reset.js';
import { img } from './gulp/tasks/img.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { html } from './gulp/tasks/html.js';
import { fonts } from './gulp/tasks/fonts.js';

// const mainTasks = gulp.series(reset, img, scss, js, html, fonts);
const mainTasks = gulp.series(reset, scss, html);

function watcher() {
  //gulp.watch(path.watch.img, img);
  gulp.watch(path.watch.scss, scss);
  // gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.html, html);
  // gulp.watch(path.watch.fonts, fonts);
}

export default gulp.series(mainTasks, gulp.parallel(watcher, server));
// gulp.task('default', dev);
