import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.mHskipSc.js","_app/immutable/chunks/scheduler.QFVCaXZV.js","_app/immutable/chunks/index.5xRIlaLs.js","_app/immutable/chunks/stores.wbY-AGIG.js","_app/immutable/chunks/singletons.NouJJTJ9.js","_app/immutable/chunks/index.nb3JogYc.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/navigation.U5qjnJ0-.js"];
export const stylesheets = [];
export const fonts = [];
