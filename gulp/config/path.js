import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = "./dist";
const srcFolder = "./src";

// export const path = {
//   build: {
//     img: `${buildFolder}/img/`,
//     css: `${buildFolder}/css/`,
//     js: `${buildFolder}/js/`,
//     html: `${buildFolder}/`,
//     fonts: `${buildFolder}/fonts`,
//   },
//   src: {
//     img: `${srcFolder}/img/**/*.*`,
//     scss: `${srcFolder}/scss/style.scss`,
//     js: `${srcFolder}/**/*.js`,
//     html: `${srcFolder}/index.html`,
//     fonts: `${srcFolder}/fonts/**/*.*`,
//   },
//   watch: {
//     img: `${srcFolder}/**/*.{img,jpg,png,gif,webp,svg}`,
//     scss: `${srcFolder}/scss/**/*.*`,
//     js: `${srcFolder}/**/*.js`,
//     html: `${srcFolder}/**/*.html`,
//     fonts: `${srcFolder}/fonts/**/*.*`,
//   },
//   clean: [`${buildFolder}/**`, `!${buildFolder}/img`, `!${buildFolder}/fonts`],
//   buildFolder: buildFolder,
//   srcFolder: srcFolder,
//   rootFolder: rootFolder,
//   ftp: ``,
// };

export const path = {
  build: {
    index: {
      html: `${buildFolder}/index/`,
      css: `${buildFolder}/index/css/`,
      js: `${buildFolder}/index/js/`,
      img: `${buildFolder}/index/img/`,
    },
    about: {
      html: `${buildFolder}/about/`,
      css: `${buildFolder}/about/css/`,
      js: `${buildFolder}/about/js/`,
      img: `${buildFolder}/about/img/`,
    },
    fonts: `${buildFolder}/fonts`,
  },
  src: {
    index: {
      html: `${srcFolder}/pages/index/html/index.html`,
      scss: `${srcFolder}/pages/index/scss/style.scss`,
      js: `${srcFolder}/pages/index/js/*.*`,
      img: `${srcFolder}/pages/index/img/**/*.*`,
    },
    about: {
      html: `${srcFolder}/pages/about/html/index.html`,
      scss: `${srcFolder}/pages/about/scss/style.scss`,
      js: `${srcFolder}/pages/about/js/script.js`,
      img: `${srcFolder}/pages/about/img/**/*.*`,
    },
    fonts: `${srcFolder}/fonts/**/*.*`,
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
    common: {
      html: `${srcFolder}/common/html/*.*`,
      scss: `${srcFolder}/common/scss/*.*`,
      js: `${srcFolder}/common/js/*.*`,
    },
  },
  clean: [
    `${buildFolder}/**`,
    `!${buildFolder}/**/img`,
    `!${buildFolder}/fonts`,
  ],
  fullClean: `${buildFolder}/**`,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
