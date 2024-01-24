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
import { devEntry } from './gulp/tasks/devEntry.js';
import { tasks as indexTasks } from './gulp/tasks/index/tasks.js';
import { tasks as aboutTasks } from './gulp/tasks/about/tasks.js';
import { fonts } from './gulp/tasks/fonts.js';

const development = gulp.series(
  clean,
  devEntry,
  indexTasks.html,
  indexTasks.scss,
  indexTasks.js,
  aboutTasks.html,
  aboutTasks.scss,
  aboutTasks.js
);
const build = gulp.series(
  fullClean,
  devEntry,
  indexTasks.html,
  indexTasks.scss,
  indexTasks.js,
  indexTasks.img,
  aboutTasks.html,
  aboutTasks.scss,
  aboutTasks.js,
  aboutTasks.img,
  fonts
);

function watcher() {
  gulp.watch(path.watch.index.html, indexTasks.html);
  gulp.watch(path.watch.index.scss, indexTasks.scss);
  gulp.watch(path.watch.index.js, indexTasks.js);
  gulp.watch(path.watch.about.html, aboutTasks.html);
  gulp.watch(path.watch.about.scss, aboutTasks.scss);
  gulp.watch(path.watch.about.js, aboutTasks.js);
  gulp.watch(path.watch.common.html, gulp.series(indexTasks.html, aboutTasks.html));
  gulp.watch(path.watch.common.scss, gulp.series(indexTasks.scss, aboutTasks.scss));
  gulp.watch(path.watch.common.js, gulp.series(indexTasks.js, aboutTasks.js));
}

gulp.task('default', gulp.series(development, gulp.parallel(watcher, server)));
gulp.task('build', build);
gulp.task('clean', clean);
gulp.task('fullclean', fullClean);
