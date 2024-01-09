import webpackStream from 'webpack-stream';

export function js() {
  return (
    app.gulp
      .src(app.path.src.index.js, { sourcemaps: true })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'JS',
            message: 'Error: <%= error.message %>',
          }),
        ),
      )
      // .pipe(
      //   webpackStream({
      //     mode: 'development',
      //     output: {
      //       filename: 'app.min.js',
      //     },
      //   })
      // )
      .pipe(app.gulp.dest(app.path.build.index.js))
      .pipe(app.plugins.browserSync.stream())
  );
}
