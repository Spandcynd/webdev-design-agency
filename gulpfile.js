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

const development = gulp.series(reset, scss, js, html);
const build = gulp.series(reset, img, scss, js, html, fonts);

function watcher() {
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.html, html);
}

gulp.task('default', gulp.series(development, gulp.parallel(watcher, server)));
gulp.task('build', build);
