import React from "react";
import axiosClient from "../axios-client";
import { useQuery } from "react-query";
import { CandidateCard, VoteHeader, VotedCard } from "../components";

const fetchNewsDetail = async (id) => {
    const response = await axiosClient.get(`/candidate/${id}`);
    return response.data.candidate;
};

const Vote = () => {
    const { data: user, isLoading } = useQuery("user", () =>
        axiosClient.get("/me").then(({ data }) => data)
    );

    const candidateId = user?.candidate_id;

    const { data: candidates } = useQuery("candidates", () =>
        axiosClient.get("/candidates").then(({ data }) => data.candidates)
    );

    const { data: candidate } = useQuery(
        ["candidateDetail", candidateId],
        () => (candidateId ? fetchNewsDetail(candidateId) : null),
        { enabled: !!candidateId }
    );

    return (
        <div>
            {user?.candidate_id ? null : <VoteHeader />}
            <div className="mx-20 my-5">
                <h1 className="text-3xl text-dark-blue">
                    Hello, {isLoading ? "Loading..." : user.name}
                </h1>
                <div className="flex justify-between items-center">
                    <p className="text-white bg-dark-blue inline py-1 px-2 rounded-md text-lg">
                        {user?.candidate_id
                            ? "You voted for"
                            : "You haven't voted yet"}
                    </p>
                    {user?.role == "admin" ? (
                        <button className="text-white bg-dark-blue inline py-1 px-2 rounded-md text-lg capitalize">
                            add candidate
                        </button>
                    ) : null}
                </div>
            </div>
            {user?.candidate_id ? (
                <div className="flex justify-center items-center">
                    <VotedCard candidate={candidate} isLoading={isLoading} />
                </div>
            ) : (
                <div className="flex justify-between mx-20 mt-5 items-center">
                    {candidates?.map((candidate) => (
                        <CandidateCard
                            key={candidate.id}
                            candidate={candidate}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Vote;
