import { html } from './_html.js';
import { scss } from './_scss.js';
import { js } from './_js.js';
import { img } from './_img.js';
import { fonts } from './_fonts.js';
import { clean } from './_clean.js';
import { path } from '../../config/path.js';

export const servicesHtml = html(path.src.services.html, path.build.services.html);
export const servicesScss = scss(path.src.services.scss, path.build.services.css);
export const servicesJs = js(path.src.services.js, path.build.services.js);
export const servicesImg = img(path.src.services.img, path.build.services.img);
export const servicesFonts = fonts(path.src.services.fonts, path.build.services.fonts);
export const servicesClean = clean(path.clean.services);
