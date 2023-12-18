

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.8wsCVqQ_.js","_app/immutable/chunks/scheduler.QFVCaXZV.js","_app/immutable/chunks/index.5xRIlaLs.js","_app/immutable/chunks/firebase.3aidnv6S.js","_app/immutable/chunks/index.nb3JogYc.js"];
export const stylesheets = [];
export const fonts = [];
