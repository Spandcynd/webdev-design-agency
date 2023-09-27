import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    img: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
  },
  src: {
    img: `${srcFolder}/img/**/*.*`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    html: `${srcFolder}/index.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: `${srcFolder}/**/*.*`,
  // html: `${srcFolder}/**/*.html`,
  // files: `${srcFolder}/files/**/*.*`,
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
