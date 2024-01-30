import webpackStream from 'webpack-stream';

export function js(srcPath, buildPath) {
  return function () {
    return (
      app.gulp
        .src(srcPath, { sourcemaps: true })
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
        .pipe(app.gulp.dest(buildPath))
        .pipe(app.plugins.browserSync.stream())
    );
  };
}
