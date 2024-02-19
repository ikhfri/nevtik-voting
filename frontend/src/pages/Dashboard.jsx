import React from "react";
import { NavLink } from "react-router-dom";
import axiosClient from "../axios-client";
import { useQuery } from "react-query";
import Vote from "./Vote";

const Dashboard = () => {
    const { data: user } = useQuery("user", () =>
        axiosClient.get("/me").then(({ data }) => data)
    );
    const { data: students } = useQuery("dashboard", () =>
        axiosClient.get("/dashboard").then(({ data }) => data.students.data)
    );
    const { data: rate, isLoading } = useQuery("rate", () =>
        axiosClient.get("/rate").then(({ data }) => data)
    );

    var percentage = Math.round((rate?.not_voted / rate?.users) * 100);

    console.log(percentage);

    return (
        <div>
            {isLoading ? (
                <div className="flex items-center justify-center min-h-96 text-dark-blue">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : user?.role == "admin" ? (
                <div>
                    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 glassmorphism rounded-3xl">
                        <div className="w-full flex justify-center">
                            <div className="w-full h-10 flex items-center justify-end">
                                <button
                                    className="btn btn-outline bg-light-blue btn-md font-bold text-xl text-dark-blue hover:bg-dark-blue hover:text-light-blue"
                                    onClick={() =>
                                        document
                                            .getElementById("add")
                                            .showModal()
                                    }
                                >
                                    add candidate
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr className="border-b-dark-blue uppercase text-dark-blue text-xl">
                                        <th>no</th>
                                        <th>name</th>
                                        <th>nis</th>
                                        <th>role</th>
                                        <th>kelas</th>
                                        <th>selected candidate</th>
                                        <th>actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students?.map((student) => (
                                        <tr
                                            className="border-b-dark dark:border-b-lightOne text-xl text-dark-blue"
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
                                                            ? "bg-light-blue p-2 rounded-md text-dark-blue w-24"
                                                            : "bg-dark-blue p-2 rounded-md text-light-blue w-24"
                                                    }`}
                                                    disabled
                                                >
                                                    {student.candidate_id
                                                        ? "selected"
                                                        : "not selected"}
                                                </button>
                                            </th>
                                            <th className="flex gap-3">
                                                <button className="btn btn-outline bg-light-blue btn-sm font-bold text-xl text-dark-blue hover:bg-dark-blue hover:text-light-blue">
                                                    edit
                                                </button>
                                                <button className="btn btn-outline bg-red-600 btn-sm font-bold text-xl text-cream hover:bg-cream hover:text-red-600">
                                                    delete
                                                </button>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : user?.candidate_id ? (
                <Vote />
            ) : (
                <>
                    <div className="flex flex-col items-center justify-center gap-14">
                        <h1 className="text-4xl text-start text-dark-blue font-extrabold">
                            Civitas SMK Negeri 1 Cibinong sudah memberikan
                            suaranya!
                        </h1>
                        <div
                            className="radial-progress text-dark-blue text-3xl"
                            style={{ "--value": percentage, "--size": "17rem" }}
                            role="progressbar"
                        >
                            {percentage}%
                        </div>
                        <h1 className="text-4xl text-start text-dark-blue font-extrabold">
                            Tunggu apa lagi? Ayo tentukan pilihanmu!
                        </h1>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <NavLink
                            to="/vote"
                            className="text-light-blue py-2 px-16 bg-dark-blue text-2xl rounded-3xl font-bold"
                        >
                            vote
                        </NavLink>
                    </div>
                </>
            )}
        </div>
    );
};

export default Dashboard;
