import { html } from './_html.js';
import { clean } from './_clean.js';
import { path } from '../../config/path.js';

export const devEntryHtml = html(path.src.devEntry, path.build.devEntry);
export const devEntryClean = clean(path.clean.devEntry);
