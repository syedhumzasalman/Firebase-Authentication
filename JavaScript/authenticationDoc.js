
const firebaseDocs = {
      "1": {
        title: "Create User",
        method: "createUserWithEmailAndPassword(auth, email, password)",
        description: "Creates a new user account using email and password. Password must be at least 6 characters.",
        code: `createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User created:', user);
  })
  .catch((error) => {
    console.error(error.message);
  });`
      },
      "2": {
        title: "Sign In User",
        method: "signInWithEmailAndPassword(auth, email, password)",
        description: "Signs in an existing user using email and password.",
        code: `signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('Signed in:', userCredential.user);
  })
  .catch((error) => {
    console.error(error.message);
  });`
      },
      "3": {
        title: "Send Email Verification",
        method: "sendEmailVerification(user)",
        description: "Sends a verification email to the user's registered email address.",
        code: `sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log('Verification email sent.');
  });`
      },
      "4": {
        title: "Update Profile",
        method: "updateProfile(user, { displayName, photoURL })",
        description: "Updates the user profile including display name and photo URL.",
        code: `updateProfile(auth.currentUser, {
  displayName: 'New Name',
  photoURL: 'https://example.com/photo.jpg'
}).then(() => {
  console.log('Profile updated.');
});`
      },
      "5": {
        title: "Update Password",
        method: "updatePassword(user, newPassword)",
        description: "Updates the user password. Make sure the new password meets Firebase requirements.",
        code: `updatePassword(auth.currentUser, 'newPassword123')
  .then(() => {
    console.log('Password updated.');
  })
  .catch((error) => {
    console.error(error);
  });`
      },
      "6": {
        title: "Sign Out",
        method: "signOut(auth)",
        description: "Signs out the current user from the application.",
        code: `signOut(auth)
  .then(() => {
    console.log('User signed out.');
  });`
      },
      "7": {
        title: "Delete User",
        method: "deleteUser(user)",
        description: "Deletes the currently signed-in user permanently.",
        code: `deleteUser(auth.currentUser)
  .then(() => {
    console.log('User deleted.');
  });`
      }
    };


let loadDoc = (id)=> {
      const data = firebaseDocs[id];
    //   console.log(data);
      document.getElementById("main-content").innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">${data.title}</h2>
          <p class="text-sm text-gray-600 mb-4"><strong>Method:</strong> ${data.method}</p>
          <p class="text-gray-700 mb-4">${data.description}</p>
          <pre class="bg-gray-100 p-4 rounded text-sm overflow-x-auto"><code>${data.code}</code></pre>
        </div>
      `;
    }

    document.querySelectorAll(".doc-button").forEach(button => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    loadDoc(id);
  });
});