import { auth, updateProfile } from "../fireBase.js";

let mainContent = document.getElementById("main-content");


let passwordUpdate = () => {
    const user = auth.currentUser;

    if (!user) {
        swal("Error", "User not signed in.", "error");
        return;
    }



    mainContent.innerHTML = `
<div class="bg-white rounded-lg shadow-lg p-8 w-96 ml-8">
            <h3 class="text-xl font-semibold text-gray-700 text-center mb-4">Update Profile</h3>
            <div class="mb-4">
              <label class="block text-gray-600 text-sm mb-1">Display Name</label>
              <input id="updateName" type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter new display name">
            </div>
            <div class="mb-4">
              <label class="block text-gray-600 text-sm mb-1">Photo URL</label>
              <input id="updatePhoto" type="url"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter photo URL">
            </div>
            <button id="update-profile-btn"
              class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Update Profile</button>
          </div>
`



    document.getElementById("update-profile-btn").addEventListener("click", () => {
        let name = document.getElementById("updateName").value.trim();
        let url = document.getElementById("updatePhoto").value.trim();

        if (!name || !url) {
            swal("Warning", "Both name and photo URL are required.", "warning");
            return;
        }

        updateProfile(user, {
            displayName: name,
            photoURL: url
        }).then(() => {
            swal("Success", "Profile updated successfully.", "success")
                .then(() => location.reload());
        }).catch((error) => {
            swal("Error", error.message, "error");
        });
    });


}


document.getElementById("passwordUpdated").addEventListener("click", passwordUpdate);