import { getAuth, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

// Construct the email link credential from the current URL.
const credential = EmailAuthProvider.credentialWithLink(
  email, window.location.href);

// Re-authenticate the user with this credential.
const auth = getAuth();
reauthenticateWithCredential(auth.currentUser, credential)
  .then((usercred) => {
    // The user is now successfully re-authenticated and can execute sensitive
    // operations.
  })
  .catch((error) => {
    // Some error occurred.
  });