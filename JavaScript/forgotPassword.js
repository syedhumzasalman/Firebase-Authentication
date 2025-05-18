import { auth, sendPasswordResetEmail } from "../fireBase.js";

let signinEmail = document.getElementById("signinEmail");
let forgotPassword = document.getElementById("forgotPassword");

let PasswordResetEmail = () => {
  const email = signinEmail.value.trim();

  if (!email) {
    Swal.fire({
      icon: 'warning',
      title: 'Email Required',
      text: 'Please enter your email before requesting a reset.',
    });
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Reset Email Sent ✉️',
        text: `A password reset email has been sent to ${email}.`,
        timer: 4000,
        showConfirmButton: false,
        timerProgressBar: true,
        position: 'center',
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Failed to Send Email',
        text: error.message,
      });
    });
};

forgotPassword.addEventListener('click', PasswordResetEmail);
