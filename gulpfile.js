import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  gulp: gulp,
  path: path,
  plugins: plugins,
};

import { server } from './gulp/tasks/server.js';
import { fullClean } from './gulp/tasks/fullClean.js';
import { devEntry } from './gulp/tasks/devEntry.js';
import {
  indexHtml,
  indexScss,
  indexJs,
  indexImg,
  indexFonts,
  indexClean,
} from './gulp/tasks/_pageTasks/indexTasks.js';
import {
  aboutHtml,
  aboutScss,
  aboutJs,
  aboutImg,
  aboutFonts,
  aboutClean,
} from './gulp/tasks/_pageTasks/aboutTasks.js';

const indexBuildTasks = gulp.series(indexHtml, indexScss, indexJs, indexFonts, indexImg);
const indexDevTasks = gulp.series(indexHtml, indexScss, indexJs);
const aboutBuildTasks = gulp.series(aboutHtml, aboutScss, aboutJs, aboutFonts, aboutImg);
const aboutDevTasks = gulp.series(aboutHtml, aboutScss, aboutJs);

const build = gulp.series(fullClean, devEntry, indexBuildTasks, aboutBuildTasks);
const development = gulp.series(indexClean, aboutClean, devEntry, indexDevTasks, aboutDevTasks);

function watcher() {
  gulp.watch(path.watch.index.html, indexHtml);
  gulp.watch(path.watch.index.scss, indexScss);
  gulp.watch(path.watch.index.js, indexJs);
  gulp.watch(path.watch.about.html, aboutHtml);
  gulp.watch(path.watch.about.scss, aboutScss);
  gulp.watch(path.watch.about.js, aboutJs);
  gulp.watch(path.watch.common.html, gulp.series(indexHtml, aboutHtml));
  gulp.watch(path.watch.common.scss, gulp.series(indexScss, aboutScss));
  gulp.watch(path.watch.common.js, gulp.series(indexJs, aboutJs));
}

gulp.task('default', gulp.series(development, gulp.parallel(watcher, server)));
gulp.task('build', build);
gulp.task('clean', gulp.series(indexClean, aboutClean));
gulp.task('fullclean', fullClean);
