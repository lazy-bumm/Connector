import * as server from '../entries/pages/_username_/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.lzcwaR7Y.js","_app/immutable/chunks/scheduler.QFVCaXZV.js","_app/immutable/chunks/index.5xRIlaLs.js","_app/immutable/chunks/firebase.3aidnv6S.js","_app/immutable/chunks/index.nb3JogYc.js","_app/immutable/chunks/navigation.U5qjnJ0-.js","_app/immutable/chunks/singletons.NouJJTJ9.js"];
export const stylesheets = [];
export const fonts = [];
