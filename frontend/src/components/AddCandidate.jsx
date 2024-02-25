import React, { createRef, useEffect, useState } from "react";
import InputText from "./InputText";
import { Icon } from "@iconify/react";
import axiosClient from "../axios-client";
import Alert from "./Alert";

const AddCandidate = ({ onAddSuccess }) => {
    const [name, setName] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [vision, setVision] = useState("");
    const [missions, setMissions] = useState([]);
    const imageInputRef = createRef();
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState(null);

    const handleAddMission = (ev) => {
        ev.preventDefault();
        setMissions((prevMissions) => [...prevMissions, null]);
    };

    const resetForm = () => {
        setName("");
        imageInputRef.current.value = "";
        setVision("");
        setMissions([]);
    };

    const handleMissionChange = (index, value) => {
        const updatedMissions = [...missions];
        updatedMissions[index] = value;
        setMissions(updatedMissions);
    };

    const handleRemoveMission = (index) => {
        setMissions((prevMissions) => {
            const updatedMissions = [...prevMissions];
            updatedMissions.splice(index, 1);
            return updatedMissions;
        });
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        const formData = new FormData(); // Create a FormData object to send the file along with other form data
        formData.append("name", name);
        formData.append("photo", selectedImage);
        formData.append("vision", vision);
        formData.append("all_missions", missions); // Convert missions array to JSON string
        axiosClient
            .post("/voting/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Set Content-Type header for FormData
                },
            })
            .then(({ data }) => {
                setMessage(data.message);
                resetForm();
                onAddSuccess();
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 500) {
                    setErrors(response.data.error);
                }
            });
        document.getElementById("add").close();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        } else {
            setSelectedImage(null);
        }
    };
    console.log(missions)

    useEffect(() => {
        if (message || errors) {
            const timeoutId = setTimeout(() => {
                setMessage(null);
                setErrors(null);
            }, 1500);
            return () => clearTimeout(timeoutId);
        }
    }, [message, setMessage, errors, setErrors]);

    return (
        <>
            <button
                onClick={() => document.getElementById("add").showModal()}
                className="text-white bg-dark-blue inline py-1 px-2 rounded-md text-lg capitalize"
            >
                add candidate
            </button>
            {errors &&
                Object.keys(errors).map((error) => (
                    <Alert text={errors} error />
                ))}
            {message && <Alert text={message} />}
            <dialog id="add" className="modal glassmorphism">
                <div className="modal-box glassmorphism max-h-[40rem]">
                    <div className="flex justify-between items-center text-dark-blue">
                        <h3 className="font-bold text-lg">Add Candidate</h3>
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
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text text-dark-blue transition duration-300 text-base capitalize">
                                    Foto
                                </span>
                            </label>
                            <input
                                type="file"
                                name="photo"
                                accept="image/*"
                                onChange={handleImageChange}
                                filename={selectedImage}
                                ref={imageInputRef}
                                className="file-input file-input-bordered w-full bg-dark-blue transition duration-300"
                            />
                        </div>
                        <InputText
                            label="Visi"
                            name="vision"
                            type="text"
                            placeholder={"Masukkan Visi"}
                            value={vision}
                            onChange={(e) => setVision(e.target.value)}
                        />
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text text-dark-blue transition duration-300 text-base capitalize">
                                    Misi
                                </span>
                            </label>
                            <div id="mission_fields">
                                {missions.map((mission, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-2"
                                    >
                                        <input
                                            type="text"
                                            name="mission[]"
                                            className="input input-bordered w-full bg-dark-blue transition duration-300 mb-2"
                                            placeholder="Mission"
                                            value={mission || ""}
                                            onChange={(e) =>
                                                handleMissionChange(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                                            onClick={() =>
                                                handleRemoveMission(index)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button
                                id="add_mission_field"
                                onClick={handleAddMission}
                                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
                            >
                                Add Mission
                            </button>
                            <input
                                type="hidden"
                                id="all_missions"
                                name="all_missions"
                                value={missions.join(",")}
                            />
                        </div>
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
