import { push } from 'svelte-spa-router';
import adminAuthStore from '@/stores/adminAuth';

export default (location) => {
  let auth_data = adminAuthStore.get();
    // console.log('auth_data',auth_data);
  if (auth_data.isLoggedIn && /(login|register|forgotpass)/.test(location)) {
    push('/admin/dashboard');
  }
  if (!auth_data.isLoggedIn && !/(login|register|forgotpass)/.test(location)) {
    push('/admin/auth/login');
  }
  return true;
};
