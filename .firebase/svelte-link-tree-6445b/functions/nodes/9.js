import * as server from '../entries/pages/_username_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.hdEThw8v.js","_app/immutable/chunks/scheduler.QFVCaXZV.js","_app/immutable/chunks/index.5xRIlaLs.js","_app/immutable/chunks/UserLink.EGNBppHP.js"];
export const stylesheets = [];
export const fonts = [];
