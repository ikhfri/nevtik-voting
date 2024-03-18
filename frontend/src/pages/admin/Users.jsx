import React, { createRef, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import axiosClient from "../../axios-client";
import ReactPaginate from "react-paginate";
import { Alert, Dropdown, InputText } from "../../components";
import { Icon } from "@iconify/react";

const Users = () => {
    const [name, setName] = useState("");
    const [nis, setNis] = useState("");
    const [userClass, setUserClass] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState(null);
    const [page, setPage] = useState(1);
    const [classStatus, setClassStatus] = useState(null);
    const [voteStatus, setVoteStatus] = useState(null);
    const { data: dashboard } = useQuery(
        ["dashboard", page, voteStatus, classStatus],
        () =>
            axiosClient
                .get(
                    `/dashboard?page=${page}${
                        voteStatus ? `&votestatus=${voteStatus}` : ""
                    }${classStatus ? `&class=${classStatus}` : ""}`
                )
                .then(({ data }) => data)
    );

    const { mutate } = useMutation(
        (payload) => axiosClient.put("/user/edit/{id}", payload),
        {
            onSuccess: () => {
                setMessage("User updated successfully");
                refetchUser();
            },
            onError: (err) => {
                const response = err.response;
                if (
                    response &&
                    (response.status === 401 || response.status === 422)
                ) {
                    setErrors(response.data.message);
                }
            },
        }
    );

    const handleDelete = (id) => {
        axiosClient
            .delete(`/dashboard/${id}`)
            .then(({ data }) => {
                setMessage(data.message);
                refetch();
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 500) {
                    setErrors(response.data.errors);
                }
            });
        document.getElementById(`delete${id}`).close();
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            "add-voter": 1,
            name,
            role,
            class: userClass,
            NIS: nis,
            password,
        };
        axiosClient
            .post("/adduser", payload)
            .then(({ data }) => {
                setMessage(data.message);
                setName("");
                setNis("");
                setUserClass("");
                setRole("");
                setPassword("");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 500) {
                    setErrors(response.data.error);
                }
            });
        document.getElementById("add").close();
    };

    useEffect(() => {
        if (message || errors) {
            const timeoutId = setTimeout(() => {
                setMessage(null);
                setErrors(null);
            }, 1500);
            return () => clearTimeout(timeoutId);
        }
    }, [message, setMessage, errors, setErrors]);

    const handlePageClick = ({ selected }) => {
        setPage(selected + 1);
    };

    const handleFilterByVoteStatus = (status) => {
        setVoteStatus(status);
    };

    const handleFilterByClassStatus = (status) => {
        setClassStatus(status);
    };
    return (
        <div className="p-2 md:p-10 bg-white rounded-3xl w-10/12">
            {errors &&
                Object.keys(errors).map((error) => (
                    <Alert text={errors} error />
                ))}
            {message && <Alert text={message} />}
            <div className="mb-10">
                <p className="text-lg text-black  font-medium">list</p>
                <p className="text-3xl font-extrabold tracking-tight text-black dark:text-lightOne">
                    users
                </p>
            </div>
            <div className="flex justify-center">
                <div className="w-full h-10 flex items-center justify-end gap-5 ">
                    <Dropdown
                        name="Kelas"
                        contents={dashboard?.classes}
                        select={handleFilterByClassStatus}
                    />
                    <Dropdown
                        name="Status Voting"
                        contents={["Voted", "Not Voted"]}
                        select={handleFilterByVoteStatus}
                    />
                    <button
                        className="btn btn-outline bg-red-400 btn-sm font-bold text-base text-red-800 hover:bg-red-500 hover:text-white"
                        onClick={() =>
                            document.getElementById("add").showModal()
                        }
                    >
                        add user
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="border-b-dark-blue uppercase text-black text-base">
                            <th>no</th>
                            <th>name</th>
                            <th>nis</th>
                            <th>role</th>
                            <th>kelas</th>
                            <th>voted candidate</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashboard?.students.data.map((student) => (
                            <tr
                                className="border-b-dark dark:border-b-lightOne text-base text-black"
                                key={student.id}
                            >
                                <th>{student.id}</th>
                                <th>{student.name}</th>
                                <th>{student.nis}</th>
                                <th>{student.role}</th>
                                <th>{student.class}</th>
                                <th>
                                    <button
                                        className={`uppercase text-sm ${
                                            student.candidate_id
                                                ? "bg-light-blue p-2 rounded-md text-white w-32"
                                                : "bg-dark-blue p-2 rounded-md text-white w-32"
                                        }`}
                                        disabled
                                    >
                                        {student.candidate_id
                                            ? "voted"
                                            : "not voted"}
                                    </button>
                                </th>
                                <th>
                                    <div className="flex justify-center gap-3">
                                        <button
                                            onClick={() => {
                                                document
                                                    .getElementById(
                                                        `delete${student?.id}`
                                                    )
                                                    .showModal();
                                            }}
                                            className="btn btn-outline bg-red-600 btn-sm font-bold text-cream hover:bg-cream hover:text-red-600"
                                        >
                                            delete
                                        </button>
                                    </div>
                                    <dialog
                                        id={`delete${student?.id}`}
                                        className="modal"
                                    >
                                        <div className="modal-box bg-[#D9D9D9]">
                                            <h3 className="font-bold text-2xl text-dark-blue">
                                                Are you sure
                                            </h3>
                                            <p className="py-4 text-xl text-dark-blue">
                                                You want to vote {student?.name}
                                                ?
                                            </p>
                                            <div className="modal-action">
                                                <button
                                                    onClick={() =>
                                                        handleDelete(student.id)
                                                    }
                                                    className="btn text-lg bg-cyan-600 text-white border-none"
                                                >
                                                    Confirm
                                                </button>
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn text-lg bg-red-700 text-white border-none">
                                                        Close
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col items-start justify-center text-red-500 font-medium">
                    <p>Total Users: {dashboard?.pagination?.total}</p>
                    <p>
                        Page: {dashboard?.pagination?.current_page} of{" "}
                        {dashboard?.pagination?.last_page}
                    </p>
                </div>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={dashboard?.pagination?.last_page}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    pageLinkClassName={"pagination__link"}
                    activeLinkClassName={"pagination__link--active"}
                    breakClassName={"pagination__break"}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                />
            </div>
            <dialog id="add" className="modal">
                <div className="modal-box bg-[#FF4242] max-h-[40rem]">
                    <div className="flex justify-between items-center text-white">
                        <h3 className="font-bold text-lg ">Add User</h3>
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
                            label="NIS"
                            name="nis"
                            type="text"
                            placeholder={"Masukkan NIS"}
                            value={nis}
                            onChange={(e) => setNis(e.target.value)}
                        />
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text text-white transition duration-300 text-base capitalize">
                                    Kelas
                                </span>
                            </label>
                            <select
                                name="class"
                                className="select select-bordered bg-white transition duration-300 dark:bg-main-dark-bg text-base"
                                value={userClass}
                                onChange={(e) => setUserClass(e.target.value)}
                            >
                                <option disabled>Pilih kelas</option>
                                {dashboard?.classes.map((kelas) => (
                                    <option key={kelas} value={kelas}>
                                        {kelas}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text text-white transition duration-300 text-base capitalize">
                                    Role
                                </span>
                            </label>
                            <select
                                name="role"
                                className="select select-bordered bg-white transition duration-300 dark:bg-main-dark-bg text-base"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option disabled>Pilih kelas</option>
                                <option value="admin">admin</option>
                                <option value="user">user</option>
                            </select>
                        </div>
                        <InputText
                            label="Password"
                            name="password"
                            type="password"
                            placeholder={"Masukkan Password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text text-dark-blue transition duration-300 text-base capitalize">
                                    Generate Password
                                </span>
                            </label>
                        </div> */}
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
        </div>
    );
};

export default Users;
