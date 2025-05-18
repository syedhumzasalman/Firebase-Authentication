const firebaseDocs = {
  "1": {
    title: "Create User",
    method: "createUserWithEmailAndPassword(auth, email, password)",
    description: "Registers a new user using the provided email and password. The password must be at least 6 characters long. Returns a user credential object upon successful registration.",
    code: `createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User created:', user);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "2": {
    title: "Sign In User",
    method: "signInWithEmailAndPassword(auth, email, password)",
    description: "Authenticates an existing user using their email and password. Returns a user credential object if authentication is successful.",
    code: `signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('Signed in:', userCredential.user);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "3": {
    title: "Send Email Verification",
    method: "sendEmailVerification(user)",
    description: "Sends a verification email to the user's registered email address. Useful for confirming email ownership after account creation.",
    code: `sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log('Verification email sent.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "4": {
    title: "Update Profile",
    method: "updateProfile(user, { displayName, photoURL })",
    description: "Updates the current user's profile information including display name and profile picture URL.",
    code: `updateProfile(auth.currentUser, {
  displayName: 'New Name',
  photoURL: 'https://example.com/photo.jpg'
})
  .then(() => {
    console.log('Profile updated.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "5": {
    title: "Update Password",
    method: "updatePassword(user, newPassword)",
    description: "Changes the user's password. The new password must meet Firebase's security requirements. The user must have recently signed in.",
    code: `updatePassword(auth.currentUser, 'newPassword123')
  .then(() => {
    console.log('Password updated.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "6": {
    title: "Sign Out",
    method: "signOut(auth)",
    description: "Signs out the currently authenticated user from the application.",
    code: `signOut(auth)
  .then(() => {
    console.log('User signed out.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "7": {
    title: "Delete User",
    method: "deleteUser(user)",
    description: "Permanently deletes the currently signed-in user account. The user must have recently signed in.",
    code: `deleteUser(auth.currentUser)
  .then(() => {
    console.log('User deleted.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "8": {
    title: "Reset Password (Send Reset Email)",
    method: "sendPasswordResetEmail(auth, email)",
    description: "Sends a password reset email to the user's email address. Allows users to securely reset their forgotten password.",
    code: `sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log('Password reset email sent.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "9": {
    title: "Sign In with Google",
    method: "signInWithPopup(auth, provider)",
    description: "Allows users to sign in using their Google account via a popup window.",
    code: `import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log('Signed in with Google:', user);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "10": {
    title: "Sign In with Facebook",
    method: "signInWithPopup(auth, provider)",
    description: "Allows users to sign in using their Facebook account via a popup window.",
    code: `import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new FacebookAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log('Signed in with Facebook:', user);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "11": {
    title: "Sign In with GitHub",
    method: "signInWithPopup(auth, provider)",
    description: "Allows users to sign in using their GitHub account via a popup window.",
    code: `import { GithubAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GithubAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log('Signed in with GitHub:', user);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "12": {
    title: "Sign In with Twitter",
    method: "signInWithPopup(auth, provider)",
    description: "Allows users to sign in using their Twitter account via a popup window.",
    code: `import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new TwitterAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log('Signed in with Twitter:', user);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "13": {
    title: "Sign In with Phone Number",
    method: "signInWithPhoneNumber(auth, phoneNumber, appVerifier)",
    description: "Sends an SMS message to the user's phone with a verification code and signs them in upon successful verification.",
    code: `import { signInWithPhoneNumber } from "firebase/auth";

// Set up reCAPTCHA verifier
const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

signInWithPhoneNumber(auth, '+1234567890', appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message
    const code = window.prompt('Enter the verification code');
    return confirmationResult.confirm(code);
  })
  .then((result) => {
    const user = result.user;
    console.log('Signed in with phone number:', user);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "14": {
    title: "Sign In Anonymously",
    method: "signInAnonymously(auth)",
    description: "Signs in a user without requiring credentials, creating a temporary anonymous account.",
    code: `import { signInAnonymously } from "firebase/auth";

signInAnonymously(auth)
  .then((result) => {
    const user = result.user;
    console.log('Signed in anonymously:', user);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "15": {
      title: "Update Email",
  method: "updateEmail(user, newEmail)",
  description: "Updates the email address of the currently signed-in user. The user must have recently signed in, and their current email must be verified. Useful when a user changes their email address.",
  code: `updateEmail(auth.currentUser, "newemail@example.com")
  .then(() => {
    console.log("Email updated successfully.");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });`

  },
  "16": {
    title: "Reauthenticate User",
    method: "reauthenticateWithCredential(user, credential)",
    description: "Reauthenticates a user with a fresh credential. Useful for sensitive operations.",
    code: `import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

const credential = EmailAuthProvider.credential(email, password);
reauthenticateWithCredential(auth.currentUser, credential)
  .then(() => {
    console.log('User reauthenticated.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "17": {
    title: "Fetch Sign-In Methods for Email",
    method: "fetchSignInMethodsForEmail(auth, email)",
    description: "Returns the list of sign-in methods that can be used to sign in with the given email address.",
    code: `import { fetchSignInMethodsForEmail } from "firebase/auth";

fetchSignInMethodsForEmail(auth, email)
  .then((methods) => {
    console.log('Sign-in methods:', methods);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
  "18": {
    title: "Set Persistence",
    method: "setPersistence(auth, persistence)",
    description: "Sets the persistence type for the authentication session.",
    code: `import { setPersistence, browserLocalPersistence } from "firebase/auth";

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Persistence set to local.');
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });`
  },
}





   function showDoc(id) {
  const data = firebaseDocs[id];
  document.getElementById("main-content").innerHTML = `
    <div class="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-full md:max-w-3xl mx-auto">
      <h2 class="text-xl sm:text-2xl font-bold text-gray-800 mb-2">${data.title}</h2>
      <p class="text-sm sm:text-base text-gray-600 mb-4"><strong>Method:</strong> ${data.method}</p>
      <p class="text-sm sm:text-base text-gray-700 mb-4">${data.description}</p>
      <pre class="bg-gray-100 p-3 sm:p-4 rounded text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap break-words">
<code>${data.code}</code>
      </pre>
    </div>
  `;
}