import { writable, readable } from 'svelte/store';
import { push } from 'svelte-spa-router';

let user = {
  isLoggedIn: false,
  user: null,
};
function getAuthSessionData() {
  const ss_data = sessionStorage.getItem('adminAuthStore');
  if (ss_data) {
    try {
      user = JSON.parse(ss_data);
      // console.log('data auth success: ', ss_data);
    } catch (error) {
      // console.log('data auth error: ', error.message);
      sessionStorage.removeItem('adminAuthStore');
    }
  }
  return user;
}
// console.log('user_session',user_session);
const adminAuthStore = writable(user);
export default {
  subscribe: adminAuthStore.subscribe,
  set: (data) => {
    adminAuthStore.set(data);
    sessionStorage.setItem('adminAuthStore', JSON.stringify(data));
  },
  get: getAuthSessionData,
};
