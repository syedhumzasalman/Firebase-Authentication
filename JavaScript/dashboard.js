import { auth, onAuthStateChanged } from "../fireBase.js"



onAuthStateChanged(auth, (user) => {
  if (!user) {
    document.body.style.display = "block";
    setTimeout(() => {
      window.location.replace("index.html");
    }, 0);
  } else {
    document.getElementById("custom-loader").style.display = "none";
    document.body.style.display = "block";
  }
});



// *************************************************************************************************


const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

// *************************************************************************************************


onAuthStateChanged(auth, (user) => {
  // console.log(user);
  const creationTime = user.metadata.creationTime;
  const formattedDate = moment(creationTime).format('MMMM Do YYYY');

  const lastLoginAt = user.metadata.lastLoginAt;
  const formattedTime = moment(Number(lastLoginAt)).format('MMMM Do YYYY, h:mm:ss a');

  if (user) {
    document.getElementById("photo").src = user.photoURL;
    document.getElementById("userName").innerText = user.displayName || "No Name Available";
    document.getElementById("userEmail").innerText = user.email || 'No Email Available';
    document.getElementById("userPhone").innerText = user.phoneNumber || "No Phone Number";
    document.getElementById("userAddress").innerText = user.address || "No Address Available";
    document.getElementById("lastLogin").innerText = 'User created on: ' + formattedDate || "No Date Available";
    document.getElementById("lastLoginAt").innerText = 'lastLoginAt : ' + formattedTime || "No Date Available";

    const emailVerifiedEl = document.getElementById("emailVerified");

    if (user.emailVerified) {
      emailVerifiedEl.innerText = "Email Verified";
      emailVerifiedEl.classList.add("text-green-500");
    } else {
      emailVerifiedEl.innerText = "Email Not Verified";
      emailVerifiedEl.classList.add("text-red-500");
    }

  }
});