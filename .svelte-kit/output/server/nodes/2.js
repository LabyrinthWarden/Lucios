

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CYaQExxQ.js","_app/immutable/chunks/scheduler.aL-20r-A.js","_app/immutable/chunks/index.C1KdMX0O.js"];
export const stylesheets = [];
export const fonts = [];
