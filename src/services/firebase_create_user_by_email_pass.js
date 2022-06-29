// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import adminAuthStore from '@/stores/adminAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile, updatePassword ,sendEmailVerification } from 'firebase/auth';

//save to store
function saveStore(user) {
  adminAuthStore.set({
    isLoggedIn: user !== null,
    user,
  });
}

function updateUserName(user) {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName: 'Jane Q. User',
  })
    .then(() => {
      // Profile updated!
      // saveStore()
      console.log('user--',user,'auth.currentUser',auth.currentUser);

    })
    .catch((error) => {
      // An error occurred
    });
}

function initFirebase(email, password, fullname) {
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
  const auth = getAuth(firebase_app);
  auth.languageCode = 'vi';

  createUserWithEmailAndPassword(auth, email, password, fullname)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('registed user: ', user);
      updateUserName(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export { initFirebase };
