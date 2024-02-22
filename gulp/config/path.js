import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    index: {
      html: `${buildFolder}/index/`,
      css: `${buildFolder}/index/css/`,
      js: `${buildFolder}/index/js/`,
      img: `${buildFolder}/index/img/`,
      fonts: `${buildFolder}/index/fonts/`,
    },
    about: {
      html: `${buildFolder}/about/`,
      css: `${buildFolder}/about/css/`,
      js: `${buildFolder}/about/js/`,
      img: `${buildFolder}/about/img/`,
      fonts: `${buildFolder}/about/fonts/`,
    },
    services: {
      html: `${buildFolder}/services/`,
      css: `${buildFolder}/services/css/`,
      js: `${buildFolder}/services/js/`,
      img: `${buildFolder}/services/img/`,
      fonts: `${buildFolder}/services/fonts/`,
    },
    devEntry: `${buildFolder}/`,
  },
  src: {
    index: {
      html: `${srcFolder}/pages/index/html/index.html`,
      scss: `${srcFolder}/pages/index/scss/style.scss`,
      js: `${srcFolder}/pages/index/js/script.js`,
      img: `${srcFolder}/pages/index/img/**/*.*`,
      fonts: `${srcFolder}/fonts/**/*.*`,
    },
    about: {
      html: `${srcFolder}/pages/about/html/index.html`,
      scss: `${srcFolder}/pages/about/scss/style.scss`,
      js: `${srcFolder}/pages/about/js/script.js`,
      img: `${srcFolder}/pages/about/img/**/*.*`,
      fonts: `${srcFolder}/fonts/**/*.*`,
    },
    services: {
      html: `${srcFolder}/pages/services/html/index.html`,
      scss: `${srcFolder}/pages/services/scss/style.scss`,
      js: `${srcFolder}/pages/services/js/script.js`,
      img: `${srcFolder}/pages/services/img/**/*.*`,
      fonts: `${srcFolder}/fonts/**/*.*`,
    },
    devEntry: `${srcFolder}/index.html`,
  },
  watch: {
    index: {
      html: `${srcFolder}/pages/index/html/*.*`,
      scss: `${srcFolder}/pages/index/scss/*.*`,
      js: `${srcFolder}/pages/index/js/*.*`,
    },
    about: {
      html: `${srcFolder}/pages/about/html/*.*`,
      scss: `${srcFolder}/pages/about/scss/*.*`,
      js: `${srcFolder}/pages/about/js/*.*`,
    },
    services: {
      html: `${srcFolder}/pages/services/html/*.*`,
      scss: `${srcFolder}/pages/services/scss/*.*`,
      js: `${srcFolder}/pages/services/js/*.*`,
    },
    common: {
      html: `${srcFolder}/common/html/*.*`,
      scss: `${srcFolder}/common/scss/*.*`,
      js: `${srcFolder}/common/js/*.*`,
    },
  },
  clean: {
    index: [
      `${buildFolder}/index/index.html`,
      `${buildFolder}/index/css`,
      `${buildFolder}/index/js`,
    ],
    about: [
      `${buildFolder}/about/index.html`,
      `${buildFolder}/about/css`,
      `${buildFolder}/about/js`,
    ],
    services: [
      `${buildFolder}/services/index.html`,
      `${buildFolder}/services/css`,
      `${buildFolder}/services/js`,
    ],
    devEntry: `${buildFolder}/index.html`,
  },
  fullClean: `${buildFolder}/**`,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
