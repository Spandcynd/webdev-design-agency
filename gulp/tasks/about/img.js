export function img() {
  return app.gulp.src(app.path.src.about.img).pipe(app.gulp.dest(app.path.build.about.img));
}
