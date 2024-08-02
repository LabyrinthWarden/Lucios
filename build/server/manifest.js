const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.dkY9MO15.js","app":"_app/immutable/entry/app.C3-Bh6Cu.js","imports":["_app/immutable/entry/start.dkY9MO15.js","_app/immutable/chunks/entry.87YOewAd.js","_app/immutable/chunks/scheduler.aL-20r-A.js","_app/immutable/entry/app.C3-Bh6Cu.js","_app/immutable/chunks/scheduler.aL-20r-A.js","_app/immutable/chunks/index.C1KdMX0O.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-C4YVSgJ1.js')),
			__memo(() => import('./chunks/1-BfZnwtLw.js')),
			__memo(() => import('./chunks/2-3krvlWnx.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
