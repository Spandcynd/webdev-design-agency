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
  },
  src: {
    img: `${srcFolder}/img/**/*.*`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    html: `${srcFolder}/index.html`,
  },
  watch: {
    img: `${srcFolder}/**/*.{img,jpg,png,gif,webp,svg}`,
    scss: `${srcFolder}/**/*.scss`,
    js: `${srcFolder}/**/*.js`,
    html: `${srcFolder}/**/*.html`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
