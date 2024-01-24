export function fonts() {
  return app.gulp
    .src(app.path.src.fonts)
    .pipe(app.gulp.dest(app.path.build.index.fonts))
    .pipe(app.gulp.dest(app.path.build.about.fonts));
}
