import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1 style="font-size: larger; color:red">${escape($page.status)}: ${escape($page.error?.message)}</h1> <img src="/tenor.gif" height="800" width="800">`;
});
export {
  Error as default
};
