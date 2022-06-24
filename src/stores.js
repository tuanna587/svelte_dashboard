import { writable } from 'svelte/store';

const toggle_sidebar_mobile = writable(false);
const hide_sidebar = writable(false);
const open_search = writable(false);

export {toggle_sidebar_mobile, hide_sidebar, open_search};