import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { getAuth, RecaptchaVerifier } from 'firebase/auth';
const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier(
  'sign-in-button',
  {
    size: 'invisible',
    callback: (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
    },
  },
  auth,
);

function onSignInSubmit() {
  const phoneNumber = getPhoneNumberFromUserInput();
  const appVerifier = window.recaptchaVerifier;

  const auth = getAuth();
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
      grecaptcha.reset(window.recaptchaWidgetId);
    });
}

// Or, if you haven't stored the widget ID:
window.recaptchaVerifier.render().then(function (widgetId) {
  grecaptcha.reset(widgetId);
});
