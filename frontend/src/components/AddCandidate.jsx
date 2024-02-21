import React, { useState } from "react";
import InputText from "./InputText";
import { Icon } from "@iconify/react";
import axiosClient from "../axios-client";

const AddCandidate = ({}) => {
    const [name, setName] = useState("");
    const [vision, setVision] = useState("");
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            "add-voter": 1,
            name,
            photo,
            vision,
            missions,
        };
        axiosClient
            .post("/adduser", payload)
            .then(({ data }) => {
                setMessage(data.message);
                setName("");
                setVision("");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 500) {
                    setErrors(response.data.error);
                }
            });
        document.getElementById("add").close();
    };
    return (
        <>
            <button
                onClick={() => document.getElementById("add").showModal()}
                className="text-white bg-dark-blue inline py-1 px-2 rounded-md text-lg capitalize"
            >
                add candidate
            </button>
            <dialog id="add" className="modal">
                <div className="modal-box glassmorphism max-h-[40rem]">
                    <div className="flex justify-between items-center text-dark-blue">
                        <h3 className="font-bold text-lg">Add User</h3>
                        <form method="dialog">
                            <button className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full">
                                <Icon icon="ic:round-close" />
                            </button>
                        </form>
                    </div>
                    <form onSubmit={onSubmit}>
                        <InputText
                            label="Nama"
                            name="name"
                            type="text"
                            placeholder={"Masukkan Nama"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <InputText
                            label="Vision"
                            name="vision"
                            type="text"
                            placeholder={"Masukkan Visi"}
                            value={vision}
                            onChange={(e) => setVision(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-light-blue text-dark-blue p-2 hover:drop-shadow-xl rounded-md capitalize"
                        >
                            submit
                        </button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default AddCandidate;
