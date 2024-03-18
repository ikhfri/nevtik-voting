import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import User from "./User";
import axiosClient from "../axios-client";
import { useQuery } from "react-query";
import { Icon } from "@iconify/react";
import Title from "./Title";

const Navbar = ({ title, logo }) => {
    const location = useLocation();
    const isVotedPage = location.pathname === "/voted";
    const [distance, setDistance] = useState(0);
    const { data: statistic } = useQuery("statistic", () =>
        axiosClient.get("/showstatistics").then(({ data }) => {
            return data;
        })
    );

    useEffect(() => {
        if (statistic) {
            const now = new Date().getTime();
            const endTime = new Date(
                statistic?.time.deadline + " " + statistic?.time.started
            ).getTime();
            setDistance(endTime - now);
        }
    }, [statistic]);

    const { data: user, isLoading } = useQuery("user", () =>
        axiosClient.get("/me").then(({ data }) => data)
    );
    return (
        <div className="z-50 glassmorphism w-full">
            <nav className="flex justify-between p-2 h-24 md:ml-6 md:mr-6 relative ">
                <div className="ml-5 flex items-center">
                    {logo ? (
                        <>
                            <img
                                src="/images/nevtik.png"
                                alt="logo-kampak"
                                width={80}
                            />
                            {/* <img
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
                            /> */}
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
                            className="text-2xl capitalize text-white"
                        >
                            login
                        </NavLink>
                    ) : (
                        <>
                            <NavLink
                                to="/"
                                className="text-2xl capitalize text-white md:inline hidden"
                            >
                                dashboard
                            </NavLink>
                            {user?.candidate_id || distance < 0 ? null : (
                                <NavLink
                                    to="/vote"
                                    className="text-2xl capitalize text-white md:inline hidden"
                                >
                                    vote
                                </NavLink>
                            )}

                            <div
                                className="flex items-center gap-2 cursor-pointer p-1 hover:bg-[#FF0000] rounded-lg"
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
                                    <span className="text-white text-xl ">
                                        Hi,
                                    </span>{" "}
                                    <span className="text-white font-bold ml-1 text-xl ">
                                        {isLoading
                                            ? "Loading..."
                                            : user?.name ==
                                              "MUHAMMAD HAFIZH"
                                            ? "Tupai"
                                            : user?.name?.split(" ")[0] ||
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
