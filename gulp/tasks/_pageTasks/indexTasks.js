import { html } from './_html.js';
import { scss } from './_scss.js';
import { js } from './_js.js';
import { img } from './_img.js';
import { fonts } from './_fonts.js';
import { clean } from './_clean.js';
import { path } from '../../config/path.js';

export const indexHtml = html(path.src.index.html, path.build.index.html);
export const indexScss = scss(path.src.index.scss, path.build.index.css);
export const indexJs = js(path.src.index.js, path.build.index.js);
export const indexImg = img(path.src.index.img, path.build.index.img);
export const indexFonts = fonts(path.src.index.fonts, path.build.index.fonts);
export const indexClean = clean(path.clean.index);
