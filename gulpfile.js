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
import { devEntryHtml, devEntryClean } from './gulp/tasks/_pageTasks/devEntryTasks.js';
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
import {
  servicesHtml,
  servicesScss,
  servicesJs,
  servicesImg,
  servicesFonts,
  servicesClean,
} from './gulp/tasks/_pageTasks/servicesTasks.js';

const indexBuildTasks = gulp.series(indexHtml, indexScss, indexJs, indexFonts, indexImg);
const indexDevTasks = gulp.series(indexHtml, indexScss, indexJs);
const aboutBuildTasks = gulp.series(aboutHtml, aboutScss, aboutJs, aboutFonts, aboutImg);
const aboutDevTasks = gulp.series(aboutHtml, aboutScss, aboutJs);
const servicesBuildTasks = gulp.series(
  servicesHtml,
  servicesScss,
  servicesJs,
  servicesFonts,
  servicesImg,
);
const servicesDevTasks = gulp.series(servicesHtml, servicesScss, servicesJs);

const build = gulp.series(
  fullClean,
  devEntryHtml,
  indexBuildTasks,
  aboutBuildTasks,
  servicesBuildTasks,
);
const development = gulp.series(
  indexClean,
  aboutClean,
  devEntryHtml,
  indexDevTasks,
  aboutDevTasks,
  servicesDevTasks,
);

function watcher() {
  gulp.watch(path.watch.index.html, indexHtml);
  gulp.watch(path.watch.index.scss, indexScss);
  gulp.watch(path.watch.index.js, indexJs);
  gulp.watch(path.watch.about.html, aboutHtml);
  gulp.watch(path.watch.about.scss, aboutScss);
  gulp.watch(path.watch.about.js, aboutJs);
  gulp.watch(path.watch.services.html, servicesHtml);
  gulp.watch(path.watch.services.scss, servicesScss);
  gulp.watch(path.watch.services.js, servicesJs);
  gulp.watch(path.watch.common.html, gulp.series(indexHtml, aboutHtml, servicesHtml));
  gulp.watch(path.watch.common.scss, gulp.series(indexScss, aboutScss, servicesScss));
  gulp.watch(path.watch.common.js, gulp.series(indexJs, aboutJs, servicesJs));
}

gulp.task('default', gulp.series(development, gulp.parallel(watcher, server)));
gulp.task('build', build);
gulp.task('clean', gulp.series(indexClean, aboutClean, servicesClean, devEntryClean));
gulp.task('fullclean', fullClean);
