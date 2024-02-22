import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import User from "./User";
import axiosClient from "../axios-client";
import { useQuery } from "react-query";
import { Icon } from "@iconify/react";
import Title from "./Title";

const Navbar = ({ title, logo }) => {
    const location = useLocation();
    const isVotedPage = location.pathname === "/voted";

    const { data: user, isLoading } = useQuery("user", () =>
        axiosClient.get("/me").then(({ data }) => data)
    );
    return (
        <div className="z-50 glassmorphism w-full ">
            <nav className="flex justify-between p-2 h-24 md:ml-6 md:mr-6 relative mb-5">
                <div className="ml-5 flex items-center">
                    {logo ? (
                        <>
                            <img
                                src="/images/kampak.png"
                                alt="logo-kampak"
                                width={38}
                            />
                            <img
                                src="/images/mppk.png"
                                alt="logo-mppk"
                                className="ml-2"
                                width={39}
                            />
                            <img
                                src="/images/osis.png"
                                alt="logo-osis"
                                className="mx-1"
                                width={40}
                            />
                        </>
                    ) : null}
                    <div className="lg:block hidden">
                        <Title title={title} />
                    </div>
                </div>
                <div className="flex gap-6 items-center mr-5">
                    {isVotedPage ? (
                        <NavLink
                            to="/login"
                            className="text-2xl capitalize text-dark-blue"
                        >
                            login
                        </NavLink>
                    ) : (
                        <>
                            <NavLink
                                to="/"
                                className="text-2xl capitalize text-dark-blue"
                            >
                                dashboard
                            </NavLink>
                            {user?.candidate_id ? null : (
                                <NavLink
                                    to="/vote"
                                    className="text-2xl capitalize text-dark-blue"
                                >
                                    vote
                                </NavLink>
                            )}

                            <div
                                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                                onClick={() =>
                                    document
                                        .getElementById("profile")
                                        .showModal()
                                }
                            >
                                <div className="avatar static">
                                    <div className="w-9 rounded-full">
                                        <img
                                            src={
                                                "/images/placeholder-profile.png"
                                            }
                                            alt={`Avatar of ${user?.name}`}
                                        />
                                    </div>
                                </div>
                                <p>
                                    <span className="text-dark-blue text-xl">
                                        Hi,
                                    </span>{" "}
                                    <span className="text-dark-blue font-bold ml-1 text-xl">
                                        {isLoading
                                            ? "Loading..."
                                            : user?.name == "NAURA AULIA ERYAZTI" ? "Cantik" : user?.name?.split(" ")[0] ||
                                              "Guest"}
                                    </span>
                                </p>
                                <Icon className="text-neutral text-14"></Icon>
                            </div>
                            <User />
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
