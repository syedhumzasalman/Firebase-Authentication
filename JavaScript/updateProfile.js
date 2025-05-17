import { auth, updateProfile } from "../fireBase.js";

let mainContent = document.getElementById("main-content");


let ProfileUpdate = () => {
    const user = auth.currentUser;

    if (!user) {
        swal("Error", "User not signed in.", "error");
        return;
    }



    mainContent.innerHTML = `
         <div class="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl shadow-2xl p-8 w-96 ml-8 border border-gray-200 hover:shadow-indigo-500/40 transition-shadow duration-300">
  <h3 class="text-2xl font-extrabold text-indigo-700 text-center mb-6 tracking-wide">Update Profile</h3>
  
  <div class="mb-6">
    <label for="updateName" class="block text-gray-700 font-semibold mb-2">Display Name</label>
    <input id="updateName" type="text" placeholder="Enter new display name"
      class="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition" />
  </div>
  
  <div class="mb-6">
    <label for="updatePhoto" class="block text-gray-700 font-semibold mb-2">Photo URL</label>
    <input id="updatePhoto" type="url" placeholder="Enter photo URL"
      class="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition" />
  </div>
  
  <button id="update-profile-btn"
    class="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/50 transition duration-300">
    Update Profile
  </button>
</div>

`



    document.getElementById("update-profile-btn").addEventListener("click", () => {
        let name = document.getElementById("updateName").value.trim();
        let url = document.getElementById("updatePhoto").value.trim();

        if (!name && !url) {
            swal("Warning", "At Least one field Must Required name and photo URL.", "warning");
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


document.getElementById("profileUpdated").addEventListener("click", ProfileUpdate);