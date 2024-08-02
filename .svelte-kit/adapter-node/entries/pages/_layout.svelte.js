import { c as create_ssr_component, b as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, g as each, v as validate_component, h as add_attribute } from "../../chunks/ssr.js";
const DevicePhoneMobile = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" }] }, "micro": { "a": { "viewBox": "0 0 16 16", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M7.25 11.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" }, { "fill-rule": "evenodd", "d": "M6 1a2.5 2.5 0 0 0-2.5 2.5v9A2.5 2.5 0 0 0 6 15h4a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 10 1H6Zm4 1.5h-.5V3a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z", "clip-rule": "evenodd" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" }, { "fill-rule": "evenodd", "d": "M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z", "clip-rule": "evenodd" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "d": "M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" }, { "fill-rule": "evenodd", "d": "M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z", "clip-rule": "evenodd" }] } };
const MapPin = { "default": { "a": { "fill": "none", "viewBox": "0 0 24 24", "stroke-width": "1.5", "stroke": "currentColor", "aria-hidden": "true" }, "path": [{ "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" }, { "stroke-linecap": "round", "stroke-linejoin": "round", "d": "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" }] }, "micro": { "a": { "viewBox": "0 0 16 16", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z", "clip-rule": "evenodd" }] }, "mini": { "a": { "viewBox": "0 0 20 20", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z", "clip-rule": "evenodd" }] }, "solid": { "a": { "viewBox": "0 0 24 24", "fill": "currentColor", "aria-hidden": "true" }, "path": [{ "fill-rule": "evenodd", "d": "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", "clip-rule": "evenodd" }] } };
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let $$restProps = compute_rest_props($$props, ["src", "size", "solid", "mini", "micro"]);
  let { src } = $$props;
  let { size = "100%" } = $$props;
  let { solid = false } = $$props;
  let { mini = false } = $$props;
  let { micro = false } = $$props;
  if (size !== "100%") {
    if (size.slice(-1) != "x" && size.slice(-1) != "m" && size.slice(-1) != "%") {
      try {
        size = parseInt(size) + "px";
      } catch (error) {
        size = "100%";
      }
    }
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0) $$bindings.solid(solid);
  if ($$props.mini === void 0 && $$bindings.mini && mini !== void 0) $$bindings.mini(mini);
  if ($$props.micro === void 0 && $$bindings.micro && micro !== void 0) $$bindings.micro(micro);
  icon = src?.[solid ? "solid" : mini ? "mini" : micro ? "micro" : "default"];
  return `<svg${spread(
    [
      escape_object(icon?.a),
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { "aria-hidden": "true" },
      escape_object($$restProps)
    ],
    {}
  )}>${each(icon?.path ?? [], (a) => {
    return `<path${spread([escape_object(a)], {})}></path>`;
  })}</svg>`;
});
const logo = "/_app/immutable/assets/logo.Ct2IODpp.jpg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="md:flex w-full h-20 hidden text-white header-text-regular"><div class="grid gap-2 grid-cols-2 w-full h-full content-center bg-flag-green">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: MapPin,
      solid: true,
      class: "w-12 h-12 justify-self-end"
    },
    {},
    {}
  )} <a href="https://maps.app.goo.gl/3Uh1LhDJCWmfg6Qz7" target="_blank" data-svelte-h="svelte-ita4v9"><div class="justify-self-start"><span>875 E Main St.</span><br><span>Quincy, CA</span></div></a></div> <div class="w-full h-full" data-svelte-h="svelte-1bv34ig"><img${add_attribute("src", logo)} alt="Lucio's Mexican and American Restaurant" class="h-20 mx-auto"></div> <div class="grid gap-2 grid-cols-2 w-full h-full content-center bg-flag-red">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: DevicePhoneMobile,
      solid: true,
      class: "w-12 h-12 justify-self-end"
    },
    {},
    {}
  )} <div class="justify-self-start" data-svelte-h="svelte-vyf6kc"><h6 class="uppercase">Call Us</h6> <span>530-283-1949</span></div></div></div>  <div class="navbar bg-neutral text-neutral-content h-20 " data-svelte-h="svelte-1dq8bcn"> <div class="navbar-start bg-neutral text-neutral-content md:hidden fixed"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div>  <ul tabindex="0" class="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase header-text-regular"><li><a href="/">Home</a></li> <li><a href="/menu">Menu &amp; Pricing</a> </li> <li><a href="/about">About Us</a></li></ul></div></div> <img${add_attribute("src", logo)} alt="Lucio's Mexican and American Restaurant" class="h-20 mx-auto md:hidden z-10">  <div class="hidden md:flex w-full"><ul class="menu menu-horizontal px-1 header-text-bold text-2xl mx-auto uppercase"><li><a href="/">Home</a></li> <li><a href="/menu">Menu &amp; Pricing</a> </li> <li><a href="/about">About Us</a></li></ul></div></div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
