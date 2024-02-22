import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { useQuery } from "react-query";
import {
    AddCandidate,
    Alert,
    CandidateCard,
    VoteHeader,
    VotedCard,
} from "../components";

const fetchNewsDetail = async (id) => {
    const response = await axiosClient.get(`/candidate/${id}`);
    return response.data.candidate;
};

const Vote = () => {
    const [errors, setErrors] = useState(null);
    const [message, setMessage] = useState(null);
    const { data: user, isLoading } = useQuery("user", () =>
        axiosClient.get("/me").then(({ data }) => data)
    );

    const candidateId = user?.candidate_id;

    const { data: candidates, refetch } = useQuery("candidates", () =>
        axiosClient.get("/candidates").then(({ data }) => data.candidates)
    );

    const { data: candidate } = useQuery(
        ["candidateDetail", candidateId],
        () => (candidateId ? fetchNewsDetail(candidateId) : null),
        { enabled: !!candidateId }
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
                    console.log(response.data.errors);
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
            {user?.candidate_id ? null : <VoteHeader />}
            <div className="md:mx-20 my-5">
                {message && <Alert text={message} />}
                <h1 className="text-xl md:text-3xl text-dark-blue">
                    Hello,{" "}
                    {isLoading
                        ? "Loading..."
                        : user.name == "NAURA AULIA ERYAZTI"
                        ? "Calon Istri Rafie"
                        : user.name}
                </h1>
                <div className="flex justify-between items-center">
                    {user?.role == "admin" ? (
                        <AddCandidate onAddSuccess={onAddSuccess} />
                    ) : (
                        <p className="text-white bg-dark-blue inline py-1 px-2 rounded-md text-lg">
                            {user?.candidate_id
                                ? "You voted for"
                                : "You haven't voted yet"}
                        </p>
                    )}
                </div>
            </div>
            {isLoading ? (
                <div className="flex items-center justify-center min-h-[50vh] text-dark-blue">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : user?.candidate_id ? (
                <div className="flex justify-center items-center">
                    <VotedCard candidate={candidate} isLoading={isLoading} />
                </div>
            ) : (
                <div className="flex justify-between md:flex-row flex-col mx-20 mt-5 items-center">
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
        </div>
    );
};

export default Vote;
