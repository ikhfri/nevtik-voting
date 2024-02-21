import React from "react";
import axiosClient from "../axios-client";
import { useQuery } from "react-query";
import Vote from "./Vote";
import Welcome from "./Welcome";
import Admin from "./admin/Admin";

const Dashboard = () => {
    const { data: user, isLoading } = useQuery("user", () =>
        axiosClient.get("/me").then(({ data }) => data)
    );

    return (
        <div>
            {isLoading ? (
                <div className="flex items-center justify-center min-h-[80vh] text-dark-blue">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : user?.role == "admin" ? (
                <Admin />
            ) : user?.candidate_id ? (
                <Vote />
            ) : (
                <Welcome />
            )}
        </div>
    );
};

export default Dashboard;
