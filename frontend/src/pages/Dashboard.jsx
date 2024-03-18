import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { useQuery } from "react-query";
import Vote from "./Vote";
import Welcome from "./Welcome";
import Admin from "./admin/Admin";
import { Closed } from "../components";

const Dashboard = () => {
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
        <div className="  " >
            {distance < 0 && user?.role !== "admin" ? (
                <Closed />
            ) : user?.role == "admin" ? (
                <Admin />
            ) : user?.candidate_id ? (
                <Vote />
            ) : !user?.candidate_id && distance > 0 ? (
                <Welcome />
            ) : (
                <div className="flex items-center justify-center min-h-[80vh] text-dark-blue ">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
