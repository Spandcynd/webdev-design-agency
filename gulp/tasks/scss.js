import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

import groupCssMediaQueries from 'gulp-group-css-media-queries';
//import webpCss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

export function scss() {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: true })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'SCSS',
            message: 'Error: <%= error.message %>',
          })
        )
      )
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      .pipe(
        sass({
          outputStyle: 'expanded',
        })
      )
      /*.pipe(
      webpCss({
        webpClass: '.webp',
        noWebpClass: '.no-webp',
      })
    )*/
      .pipe(
        autoPrefixer({
          grid: true,
          overrideBrowserslist: ['last 3 versions'],
          cascade: true,
        })
      )
      .pipe(groupCssMediaQueries())
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(cleanCss())
      .pipe(
        app.plugins.rename({
          extname: '.min.css',
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream())
  );
}
