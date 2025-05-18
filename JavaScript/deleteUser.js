import { auth, deleteUser } from "../fireBase.js";

const deleteUserFun = () => {
    const user = auth.currentUser;


    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to recover this account!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
        if (result.isConfirmed) {
            deleteUser(user)
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'User Deleted Successfully 🎉',
                        text: 'Your account has been permanently deleted.',
                        showConfirmButton: false,
                        timer: 4000,
                        timerProgressBar: true,
                        position: 'center',
                        background: '#f0f9ff',
                        color: '#333',
                    }).then(() => {
                        setTimeout(() => {
                            window.location.href = "index.html";
                        }, 10000);
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to Delete',
                        text: error.message,
                    });
                });
        }
    });
};

const userDelete = document.getElementById("userDelete");
userDelete.addEventListener("click", deleteUserFun);
