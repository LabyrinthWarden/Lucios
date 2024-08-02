

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BmEW1FbX.js","_app/immutable/chunks/scheduler.aL-20r-A.js","_app/immutable/chunks/index.C1KdMX0O.js","_app/immutable/chunks/entry.87YOewAd.js"];
export const stylesheets = [];
export const fonts = [];
