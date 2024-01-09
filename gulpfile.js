import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
};

import { server } from './gulp/tasks/server.js';
import { clean, fullClean } from './gulp/tasks/clean.js';
import { tasks as indexTasks } from './gulp/tasks/index/tasks.js';
import { fonts } from './gulp/tasks/fonts.js';

const development = gulp.series(clean, indexTasks.html, indexTasks.scss, indexTasks.js);
const build = gulp.series(
  fullClean,
  indexTasks.html,
  indexTasks.scss,
  indexTasks.js,
  indexTasks.img,
  fonts,
);

function watcher() {
  gulp.watch(path.watch.index.html, indexTasks.html);
  gulp.watch(path.watch.index.scss, indexTasks.scss);
  gulp.watch(path.watch.index.js, indexTasks.js);
  gulp.watch(path.watch.common.html, gulp.series(indexTasks.html));
  gulp.watch(path.watch.common.scss, gulp.series(indexTasks.scss));
  gulp.watch(path.watch.common.js, gulp.series(indexTasks.js));
}

gulp.task('default', gulp.series(development, gulp.parallel(watcher, server)));
gulp.task('build', build);
gulp.task('clean', clean);
gulp.task('fullclean', fullClean);
