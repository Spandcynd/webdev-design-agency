export function img() {
  return app.gulp
    .src(app.path.src.index.img)
    .pipe(app.gulp.dest(app.path.build.index.img));
}
