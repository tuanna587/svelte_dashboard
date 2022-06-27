import { writable } from 'svelte/store';

const toggle_sidebar_mobile = writable(false);
const hide_sidebar = writable(false);
const open_search = writable(false);
const site_logged_in = writable(false);
const admin_logged_in = writable(false);

export {toggle_sidebar_mobile, hide_sidebar, open_search, site_logged_in, admin_logged_in};