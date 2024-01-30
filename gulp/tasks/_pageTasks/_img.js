export function img(srcPath, buildPath) {
  return function () {
    return app.gulp.src(srcPath).pipe(app.gulp.dest(buildPath));
  };
}
