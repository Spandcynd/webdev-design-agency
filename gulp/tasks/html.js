import fileinclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import removeEmptyLines from 'gulp-remove-empty-lines';
import gulpVersionNumber from 'gulp-version-number';
import gulpPrettier from 'gulp-prettier';

export function html() {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'HTML',
            message: 'Error: <%= error.message  %>',
          })
        )
      )
      .pipe(fileinclude())
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      // .pipe(webpHtmlNosvg())
      .pipe(removeEmptyLines({ removeComments: true }))
      .pipe(
        gulpVersionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        })
      )
      .pipe(gulpPrettier())
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream())
  );
}
