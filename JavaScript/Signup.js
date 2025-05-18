import { auth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "../fireBase.js"


let showPassword = () => {
  let changeIcon = document.getElementById("changeIcon");
  let signupPassword = document.getElementById("signupPassword");

  // console.log(signinPassword);

  if (signupPassword.type === "password") {
    signupPassword.type = "text";
    changeIcon.innerHTML = `<ion-icon name="lock-open-outline"></ion-icon>`;
  } else {
    signupPassword.type = "password";
    changeIcon.innerHTML = `<ion-icon name="lock-closed"></ion-icon>`;
  }
}

let passwordShow = document.querySelector(".passwordShow");
passwordShow.addEventListener('click', showPassword)


//  Only run this once to check if user is already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If user is logged in, go to dashboard
    window.location.replace("dashboard.html");
  } else {
    document.getElementById("custom-loader").style.display = "none";
    document.body.style.display = "block";
  }
});




export let signUp = () => {

  let userName = document.getElementById("userName");
  let signupEmail = document.getElementById("signupEmail");
  let signupPassword = document.getElementById("signupPassword");
  let name = userName.value.trim();
  let email = signupEmail.value.trim();
  let password = signupPassword.value.trim();


  // Validation
  if (!name || !email || !password) {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "All fields are required!",
    });
    return;
  }

  //  check if Email include @gamil.com or not
  if (!email.includes("@gmail.com")) {
    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid Gmail address!",
    });
    return;
  }




  // Sign up with Firebase
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        Swal.fire("Success", "Account Created", "success");
        setTimeout(() => window.location.href = "dashboard.html", 2000);
      });


    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: "Sign Up Failed",
        text: "Something went wrong. Try again",
        footer: `<code>${error.code}</code>`,
        confirmButtonText: 'Go to Login',
        confirmButtonColor: '#00f7ff',
        background: '#333',
        color: '#fff',
        backdrop: `rgba(0, 0, 0, 0.8)`
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = '/SignIn.html';
        }
      });
    });


}

document.getElementById("register").addEventListener("click", signUp);
