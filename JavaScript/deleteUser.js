import { auth, deleteUser } from "../fireBase.js";

const deleteUserFun = () => {
    const user = auth.currentUser;

    swal({
        title: "Are you sure?",
        text: "You won't be able to recover this account!",
        icon: "warning",
        buttons: {
            cancel: "Cancel",
            confirm: {
                text: "Yes, delete it!",
                value: true,
                closeModal: false,
            },
        },
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            deleteUser(user)
                .then(() => {
                    swal({
                        title: "User Deleted Successfully 🎉",
                        text: "Your account has been permanently deleted.",
                        icon: "success",
                        buttons: false,
                        timer: 4000,
                    }).then(() => {
                        setTimeout(() => {
                            window.location.href = "index.html";
                        }, 10000);
                    });
                })
                .catch((error) => {
                    swal("Failed to Delete", error.message, "error");
                });
        }
    });
};

const userDelete = document.getElementById("userDelete");
userDelete.addEventListener("click", deleteUserFun);
