import { html } from './_html.js';
import { scss } from './_scss.js';
import { js } from './_js.js';
import { img } from './_img.js';
import { fonts } from './_fonts.js';
import { clean } from './_clean.js';

export const aboutHtml = html(app.path.src.about.html, app.path.build.about.html);
export const aboutScss = scss(app.path.src.about.scss, app.path.build.about.css);
export const aboutJs = js(app.path.src.about.js, app.path.build.about.js);
export const aboutImg = img(app.path.src.about.img, app.path.build.about.img);
export const aboutFonts = fonts(app.path.src.about.fonts, app.path.build.about.fonts);
export const aboutClean = clean(app.path.clean.about);
