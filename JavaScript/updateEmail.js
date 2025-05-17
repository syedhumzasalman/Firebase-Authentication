import { auth, updateEmail } from "../fireBase.js";

let mainContent = document.getElementById("main-content");


let emailUpdate = () => {
    const user = auth.currentUser;

    if (!user) {
        swal("Error", "User not signed in.", "error");
        return;
    }



    mainContent.innerHTML = `
<div class="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl shadow-2xl p-8 w-96 ml-8 border border-gray-200 hover:shadow-indigo-500/40 transition-shadow duration-300">
  <h3 class="text-2xl font-extrabold text-indigo-700 text-center mb-6 tracking-wide">Update Email</h3>
  
  <div class="mb-6">
    <label for="updateEmail" class="block text-gray-700 font-semibold mb-2">Updated Email</label>
    <input id="updateEmail" type="text" placeholder="Enter new display name"
      class="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition" />
  </div>
  
  <button id="update-profile-btn"
    class="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/50 transition duration-300">
    Update Profile
  </button>
</div>

`



    document.getElementById("update-profile-btn").addEventListener("click", () => {
        let newEmail = document.getElementById("updateEmail").value.trim();

        if (!newEmail || !newEmail.includes("@") || !newEmail.includes(".")) {
            swal("Warning", "Please enter a valid email address.", "warning");
            return;
        }

        updateEmail(user, newEmail)
        .then(() => {
            swal("Success", "Profile updated successfully.", "success")
                .then(() => location.reload());
        }).catch((error) => {
                swal("Error", error.message, "error");
        });
    });


}


document.getElementById("emailupdated").addEventListener("click", emailUpdate);