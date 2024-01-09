export function server(done) {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.index.html}`,
    },
    port: 3000,
  });
}
