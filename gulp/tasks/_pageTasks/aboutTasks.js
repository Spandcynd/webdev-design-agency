import { html } from './_html.js';
import { scss } from './_scss.js';
import { js } from './_js.js';
import { img } from './_img.js';
import { fonts } from './_fonts.js';
import { clean } from './_clean.js';
import { path } from '../../config/path.js';

export const aboutHtml = html(path.src.about.html, path.build.about.html);
export const aboutScss = scss(path.src.about.scss, path.build.about.css);
export const aboutJs = js(path.src.about.js, path.build.about.js);
export const aboutImg = img(path.src.about.img, path.build.about.img);
export const aboutFonts = fonts(path.src.about.fonts, path.build.about.fonts);
export const aboutClean = clean(path.clean.about);
