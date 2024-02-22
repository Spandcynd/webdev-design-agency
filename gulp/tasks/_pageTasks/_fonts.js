export function fonts(srcPath, buildPath) {
  return function fonts() {
    return app.gulp.src(srcPath).pipe(app.gulp.dest(buildPath));
  };
}
