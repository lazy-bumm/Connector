import { v as validate_store, s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { u as userData } from "../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userData, $$unsubscribe_userData;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  $$unsubscribe_userData();
  return `${$$result.head += `<!-- HEAD_svelte-18q9e1s_START -->${$$result.title = `<title>Connector - a place for links</title>`, ""}<meta name="description" content="Demo project SvelteKit"><!-- HEAD_svelte-18q9e1s_END -->`, ""} <main class="flex w-full min-h-screen"><div class="hero bg-base-200"><div class="hero-content text-center"><div class="w-full"><h1 class="text-7xl font-bold" data-svelte-h="svelte-77jjfh">Connector 🤝</h1> <p class="py-6 text-2xl" data-svelte-h="svelte-18180bf">One simple link to share your entire developer portfolio</p> ${$userData?.username ? `<a href="${"/" + escape($userData.username, true)}" class="btn btn-primary">View Profile</a> <a href="${"/" + escape($userData.username, true) + "/edit"}" class="btn btn-primary">Edit Profile</a>` : `<a href="/login" class="btn btn-primary" data-svelte-h="svelte-izohf9">Get Started</a> <a href="/razor" class="btn btn-secondary" data-svelte-h="svelte-1m9ovoo">Example Profile</a>`}</div></div></div></main>`;
});
export {
  Page as default
};
