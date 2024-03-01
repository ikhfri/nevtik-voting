import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { useQuery } from "react-query";
import {
    AddCandidate,
    Alert,
    CandidateCard,
    Closed,
    Thanks,
    VoteHeader,
} from "../components";

const Vote = () => {
    const [errors, setErrors] = useState(null);
    const [message, setMessage] = useState(null);
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
    const { data: user } = useQuery("user", () =>
        axiosClient.get("/me").then(({ data }) => data)
    );

    const {
        data: candidates,
        isLoading,
        refetch,
    } = useQuery("candidates", () =>
        axiosClient.get("/candidates").then(({ data }) => data.candidates)
    );

    const handleDelete = (id) => {
        axiosClient
            .delete(`/candidate/${id}`)
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

    const onAddSuccess = () => {
        refetch();
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

    return (
        <div>
            {distance > 0 || user?.role === "admin" ? (
                <>
                    {!user?.candidate_id && (
                        <>
                            <VoteHeader />
                            <div className="md:mx-20 m-5">
                                {message && <Alert text={message} />}
                                <h1 className="text-xl md:text-3xl text-dark-blue">
                                Hello,{" "}
                                    {isLoading
                                        ? "Loading..."
                                        : user.name === "NAURA AULIA ERYAZTI"
                                        ? "Bayinya Rafie"
                                        : user.name}
                                </h1>
                                <div className="flex justify-between items-center">
                                    {user?.role === "admin" ? (
                                        <AddCandidate
                                            onAddSuccess={onAddSuccess}
                                        />
                                    ) : (
                                        <p className="text-white bg-dark-blue inline py-1 px-2 rounded-md text-lg">
                                            {user?.candidate_id
                                                ? "You voted for"
                                                : user.name ===
                                                  "NAURA AULIA ERYAZTI"
                                                ? "I Love You"
                                                : "You haven't voted yet"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                    {user?.candidate_id ? (
                        <div className="flex justify-center items-center">
                            <Thanks />
                        </div>
                    ) : (
                        <div className="flex justify-between md:flex-row flex-col mx-20 my-5 items-center flex-wrap">
                            {candidates?.map((candidate) => (
                                <CandidateCard
                                    key={candidate.id}
                                    candidate={candidate}
                                    user={user}
                                    handler={handleDelete}
                                />
                            ))}
                        </div>
                    )}
                </>
            ) : distance < 0 ? (
                <Closed />
            ) : (
                <div className="flex items-center justify-center min-h-[50vh] text-dark-blue">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}
        </div>
    );
};

export default Vote;
