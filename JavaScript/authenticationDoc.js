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
  }
};




   function loadDoc(id) {
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