export function devEntry() {
  return app.gulp.src(app.path.src.devEntry).pipe(app.gulp.dest(app.path.build.devEntry));
}
