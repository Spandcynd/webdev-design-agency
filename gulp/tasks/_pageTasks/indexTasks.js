import { html } from './_html.js';
import { scss } from './_scss.js';
import { js } from './_js.js';
import { img } from './_img.js';
import { fonts } from './_fonts.js';
import { clean } from './_clean.js';

export const indexHtml = html(app.path.src.index.html, app.path.build.index.html);
export const indexScss = scss(app.path.src.index.scss, app.path.build.index.css);
export const indexJs = js(app.path.src.index.js, app.path.build.index.js);
export const indexImg = img(app.path.src.index.img, app.path.build.index.img);
export const indexFonts = fonts(app.path.src.index.fonts, app.path.build.index.fonts);
export const indexClean = clean(app.path.clean.index);
