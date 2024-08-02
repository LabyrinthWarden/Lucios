

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CWqVQo2J.js","_app/immutable/chunks/scheduler.aL-20r-A.js","_app/immutable/chunks/index.C1KdMX0O.js"];
export const stylesheets = ["_app/immutable/assets/0.D6yUA2_z.css"];
export const fonts = [];
