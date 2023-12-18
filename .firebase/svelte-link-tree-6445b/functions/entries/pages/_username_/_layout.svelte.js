import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="navbar bg-base-100"><div class="navbar-start"><div class="dropdown"><div tabindex="0" role="button" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></div> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li><a data-svelte-h="svelte-1urhroj">Profile</a></li> <li><a data-svelte-h="svelte-118lnes">Edit</a></li></ul></div> <a class="btn btn-active btn-primary" href="/" data-svelte-h="svelte-nt4bz5">Connector</a></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li class="btn btn-outline btn-accent"><a href="${"/" + escape(data.username, true)}">👀Profile</a></li> <li><p data-svelte-h="svelte-fvwk2t"> </p></li> ${data.check ? `<li class="btn btn-outline btn-secondary"><a href="${"/" + escape(data.username, true) + "/edit"}">🍳 Edit</a></li>` : ``}</ul></div> <div class="navbar-end">${data.check ? `<a class="btn btn-outline btn-error" data-svelte-h="svelte-wrer4i">LogOut</a>` : ``}</div></div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
