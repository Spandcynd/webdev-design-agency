export function img(srcPath, buildPath) {
  return function img() {
    return app.gulp.src(srcPath).pipe(app.gulp.dest(buildPath));
  };
}
