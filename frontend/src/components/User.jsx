import React from "react";
import axiosClient from "../axios-client.js";
import { Icon } from "@iconify/react";
import { useStateContext } from "../context/ContextProvider";
import { useQuery, useQueryClient } from "react-query";

const User = () => {
    const { setToken } = useStateContext();
    const queryClient = useQueryClient();

    const { data: user, isLoading } = useQuery("user", () =>
        axiosClient.get("/me").then(({ data }) => data)
    );

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then(() => {
            queryClient.invalidateQueries("user");
            setToken(null);
        });
    };

    return (
        <dialog id="profile" className="modal">
            <div className="modal-box bg-white md:w-96 absolute top-16 right-5 transition duration-300">
                <div className="flex justify-between items-center">
                    <p className="font-semibold text-2xl text-black transition duration-300">
                        User Profile
                    </p>
                    <form method="dialog">
                        <button className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full">
                            <Icon icon="ic:round-close" color="#99abb4" />
                        </button>
                    </form>
                </div>
                {isLoading ? (
                    <div className="flex items-center justify-center h-screen">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
                        <div className="avatar static">
                            <div className="w-24 h-24 rounded-full">
                                <img
                                    src={"/images/placeholder-profile.png"}
                                    alt="user-profile"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-black text-lg transition duration-300">
                                {" "}
                                {user?.name || "Loading..."}{" "}
                            </p>
                            <p className="text-neutral-500 text-base font-semibold transition duration-300">
                                {" "}
                                {user?.class || "Loading..."}{" "}
                            </p>
                            <p className="text-neutral-500 text-base font-semibold transition duration-300">
                                NIS/NIP: {user?.nis || ""}{" "}
                            </p>
                        </div>
                    </div>
                )}
                <div className="mt-5">
                    <button
                        className="w-full rounded-xl bg-main-blue text-xl text-white p-3 hover:drop-shadow-xl"
                        onClick={onLogout}
                    >
                        logout
                    </button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default User;
