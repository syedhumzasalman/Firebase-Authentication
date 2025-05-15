import { auth, updateEmail } from "../fireBase.js";

let mainContent = document.getElementById("main-content");


let emailUpdate = () => {
    const user = auth.currentUser;

    if (!user) {
        swal("Error", "User not signed in.", "error");
        return;
    }



    mainContent.innerHTML = `
<div class="bg-white rounded-lg shadow-lg p-8 w-96 ml-8">
            <h3 class="text-xl font-semibold text-gray-700 text-center mb-4">Update Email</h3>
            <div class="mb-4">
              <label class="block text-gray-600 text-sm mb-1">Display Name</label>
              <input id="updateEmail" type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter new display name">
            </div>
            <button id="update-profile-btn"
              class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Update Profile</button>
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