export function server(done) {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.devEntry}`,
    },
    port: 3000,
  });
}
