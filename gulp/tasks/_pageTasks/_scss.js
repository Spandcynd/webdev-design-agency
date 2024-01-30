import * as sass from 'sass';
import gulpSass from 'gulp-sass';

import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

const gSass = gulpSass(sass);

export function scss(srcPath, buildPath) {
  return function () {
    return app.gulp
      .src(srcPath, { sourcemaps: true })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'SCSS',
            message: 'Error: <%= error.message %>',
          }),
        ),
      )
      .pipe(
        gSass({
          outputStyle: 'expanded',
        }),
      )
      .pipe(
        webpCss({
          webpClass: '.webp',
          noWebpClass: '.no-webp',
        }),
      )
      .pipe(
        autoPrefixer({
          grid: 'no-autoplace',
          overrideBrowserslist: ['last 3 versions'],
        }),
      )
      .pipe(groupCssMediaQueries())
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      .pipe(app.gulp.dest(buildPath))
      .pipe(cleanCss())
      .pipe(
        app.plugins.rename({
          suffix: '.min',
        }),
      )
      .pipe(app.gulp.dest(buildPath))
      .pipe(app.plugins.browserSync.stream());
  };
}
