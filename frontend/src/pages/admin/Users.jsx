import React, { createRef, useEffect, useState } from "react";
import { useQuery } from "react-query";
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
    const { data: dashboard, refetch } = useQuery(
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
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            "add-voter": 1,
            name,
            role,
            "class": userClass,
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
        <div className="p-2 md:p-10 glassmorphism rounded-3xl w-10/12">
            {errors &&
                Object.keys(errors).map((error) => <Alert text={errors} error />)}
            {message && <Alert text={message} />}
            <div className="mb-10">
                <p className="text-lg text-main-bg font-medium">list</p>
                <p className="text-3xl font-extrabold tracking-tight text-dark-blue dark:text-lightOne">
                    users
                </p>
            </div>
            <div className="flex justify-center">
                <div className="w-full h-10 flex items-center justify-end gap-5">
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
                        className="btn btn-outline bg-light-blue btn-sm font-bold text-base text-dark-blue hover:bg-dark-blue hover:text-light-blue"
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
                        <tr className="border-b-dark-blue uppercase text-dark-blue text-base">
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
                                className="border-b-dark dark:border-b-lightOne text-base text-dark-blue"
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
                                                ? "bg-light-blue p-2 rounded-md text-dark-blue w-32"
                                                : "bg-dark-blue p-2 rounded-md text-light-blue w-32"
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
                                        <button className="btn btn-outline bg-light-blue btn-sm font-bold text-dark-blue hover:bg-dark-blue hover:text-light-blue">
                                            edit
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(student.id)
                                            }
                                            className="btn btn-outline bg-red-600 btn-sm font-bold text-cream hover:bg-cream hover:text-red-600"
                                        >
                                            delete
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col items-start justify-center text-main-bg font-medium">
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
                            label="NIS"
                            name="nis"
                            type="text"
                            placeholder={"Masukkan NIS"}
                            value={nis}
                            onChange={(e) => setNis(e.target.value)}
                        />
                        <div className="form-control w-full my-2">
                            <label className="label">
                                <span className="label-text text-dark-blue transition duration-300 text-base capitalize">
                                    Kelas
                                </span>
                            </label>
                            <select
                                name="class"
                                className="select select-bordered bg-dark-blue transition duration-300 dark:bg-main-dark-bg text-base"
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
                                <span className="label-text text-dark-blue transition duration-300 text-base capitalize">
                                    Role
                                </span>
                            </label>
                            <select
                                name="role"
                                className="select select-bordered bg-dark-blue transition duration-300 dark:bg-main-dark-bg text-base"
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
