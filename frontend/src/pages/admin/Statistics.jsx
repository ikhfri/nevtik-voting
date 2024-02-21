import React, { useState } from "react";
import { useQuery } from "react-query";
import axiosClient from "../../axios-client";
import ReactPaginate from "react-paginate";
import { Dropdown } from "../../components";

const Statistics = () => {
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
            <div className="mb-10">
                <p className="text-lg text-main-bg font-medium">voting</p>
                <p className="text-3xl font-extrabold tracking-tight text-dark-blue dark:text-lightOne">
                    statistics
                </p>
            </div>
        </div>
    );
};

export default Statistics;
