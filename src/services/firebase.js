// Import the functions you need from the SDKs you need
import { tick } from 'svelte';
import { push } from 'svelte-spa-router';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, setPersistence, browserSessionPersistence } from 'firebase/auth';
import adminAuthStore from '@/stores/adminAuth';

//save to store
async function saveStore(user) {
  let isLoggedIn = user !== null;
  adminAuthStore.set({
    isLoggedIn: isLoggedIn,
    user,
  });
  await tick();
  if (isLoggedIn) {
    push('/admin/dashboard');
  }
}
//check state
function checkFirebaseAuthState(auth, provider, callback) {
  auth.onAuthStateChanged((user) => {
    // console.log('auth user', user);
    if (!user) {
      callback(user);
      return;
    }
    // console.log('user meta data:');
    // console.log('user uid:', user.uid);
    // console.log('user display name:', user.displayName);
    // console.log('user email:', user.email);
    // console.log('user photo:', user.photoURL);
    // console.log('callback', callback);
    if (typeof callback === 'function') {
      callback(user);
    }
  });
}
function loginWithGoogle(auth) {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('user', user);
      saveStore(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
async function logOut() {
  const { firebase_app } = initFirebaseApp();
  const auth = getAuth(firebase_app);
  if (/(google|facebook)/.test(user.provider)) {
    const prom = new Promise((resolve, reject) => {
      return signOut(auth)
        .then(() => {
          // Sign-out successful.
          return resolve(true);
        })
        .catch((error) => {
          // An error happened.
          return reject('signOut firebase fail');
        });
    });
    let resSignout = await prom;
  }
}
function loginWithFacebook(auth) {
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      saveStore(user);
      console.log('loginWithFacebook user', user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      console.log('loginWithFacebook error', error.message);
    });
}
function initFirebaseApp() {
  const firebaseConfig = {
    apiKey: 'AIzaSyBdi7KD4sE8v7qGTBf6zKCyfGa7LqsSqQk',
    authDomain: 'sveltedemo-30376.firebaseapp.com',
    projectId: 'sveltedemo-30376',
    storageBucket: 'sveltedemo-30376.appspot.com',
    messagingSenderId: '889665631226',
    appId: '1:889665631226:web:bf29a2a9043f1411e4ea43',
    measurementId: 'G-WGTGLEY5ZY',
  };

  // Initialize Firebase
  const firebase_app = initializeApp(firebaseConfig);
  const firebase_analytics = getAnalytics(firebase_app);
  console.log('initFirebase ->> initFirebaseApp');
  return { firebase_app, firebase_analytics };
}
function initFirebase(provider) {
  const { firebase_app } = initFirebaseApp();
  const auth = getAuth();
  auth.languageCode = 'vi';

  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      // return signInWithEmailAndPassword(auth, email, password);
      checkFirebaseAuthState(auth, provider, (user) => {
        console.log('initFirebase ->> checkFirebaseAuthState user', user);
        console.trace();

        // console.log('checkFirebaseAuthState', user);
        if (!user) {
          if (provider == 'google') {
            loginWithGoogle(auth);
          } else {
            loginWithFacebook(auth);
          }
        } else {
          let regex = new RegExp(provider, 'i');
          if (regex.test(user.providerData[0].providerId)) {
            saveStore(user);
          } else {
            if (provider == 'google') {
              loginWithGoogle(auth);
            } else {
              loginWithFacebook(auth);
            }
          }
        }
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export { initFirebase, initFirebaseApp, loginWithGoogle, checkFirebaseAuthState };
