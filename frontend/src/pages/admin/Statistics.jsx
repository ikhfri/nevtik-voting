import React, { useEffect, useState, useMemo } from "react";
import axiosClient from "../../axios-client";
import { Doughnut } from "react-chartjs-2";
import { Alert } from "../../components";
import { useQuery } from "react-query";

const Statistics = () => {
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState(null);
    const [statistics, setStatistics] = useState(null);
    const [showingTime, setShowingTime] = useState(null);
    const [detailTime, setDetailTime] = useState(null);
    const [endTime, setEndTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [countdown, setCountdown] = useState(10); // Countdown value in seconds
    const [countdownIntervalId, setCountdownIntervalId] = useState(null);
    const [endTimeIntervalId, setEndTimeIntervalId] = useState(null);
    const [countdownStarted, setCountdownStarted] = useState(false);
    const [chartColors, setChartColors] = useState([]);
    const [mostVotedCandidate, setMostVotedCandidate] = useState(null);

    const {
        data: statistic,
        refetch: refetchStatistics,
        isLoading,
        isError,
    } = useQuery("statistic", () =>
        axiosClient.get("/showstatistics").then(({ data }) => {
            setStatistics(data);
            const now = new Date().getTime();
            const endTime = new Date(
                data.time.deadline + " " + data.time.started
            ).getTime();
            const distance = endTime - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setEndTime({ days, hours, minutes, seconds });

                const interval = setInterval(() => {
                    const now = new Date().getTime();
                    const distance = endTime - now;
                    if (distance <= 0) {
                        clearInterval(endTimeIntervalId);
                        setEndTime({
                            days: 0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0,
                        });
                        return;
                    }
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(
                        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    );
                    const minutes = Math.floor(
                        (distance % (1000 * 60 * 60)) / (1000 * 60)
                    );
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    setEndTime({ days, hours, minutes, seconds });
                }, 1000);
                setEndTimeIntervalId(interval);
            }

            const colors = data.candidate_names.map(() => getRandomColor());
            setChartColors(colors);

            return data;
        })
    );

    useEffect(() => {
        if (statistics) {
            setShowingTime(statistics.time);
        }
    }, [statistics]);

    useEffect(() => {
        if (countdown === 0) {
            clearInterval(countdownIntervalId);
            console.log("Countdown reached 0!");
        }
    }, [countdown, countdownIntervalId]);

    const startCountdown = () => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        setCountdownIntervalId(interval);
        setCountdownStarted(true);
    };

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = {
            "showing-time": showingTime,
            "detail-time": detailTime,
        };
        axiosClient
            .post("/statistics", payload)
            .then(({ data }) => {
                setMessage(data.message);
                refetchStatistics();
                if (countdownIntervalId) {
                    clearInterval(countdownIntervalId);
                }
                if (endTimeIntervalId) {
                    clearInterval(endTimeIntervalId);
                }
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 500) {
                    setErrors(response.data.error);
                }
            });
    };

    const getRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    };

    const chartData = useMemo(
        () => ({
            labels: statistics?.candidate_names,
            datasets: [
                {
                    label: "Voters",
                    data: statistics?.n_candidate_voters,
                    backgroundColor: chartColors,
                    hoverOffset: 4,
                },
            ],
        }),
        [statistics, chartColors]
    );

    const chartOptions = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Voters per Candidate",
            },
        },
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

    useEffect(() => {
        if (statistics) {
            // Finding the index of the maximum value in the n_candidate_voters array
            const maxVotesIndex = statistics.n_candidate_voters.indexOf(
                Math.max(...statistics.n_candidate_voters)
            );
            // Setting the most voted candidate name
            setMostVotedCandidate(statistics.candidate_names[maxVotesIndex]);
        }
    }, [statistics]);

    return (
        <div className="p-2 md:p-10 glassmorphism rounded-3xl w-10/12">
            <div className="mb-10">
                <p className="text-lg text-main-bg font-medium">voting</p>
                <p className="text-3xl font-extrabold tracking-tight text-dark-blue dark:text-lightOne">
                    statistics
                </p>
            </div>
            <div className="w-full flex flex-col justify-start items-center my-10">
                {isError && <Alert text="Failed to fetch statistics." error />}
                {isLoading && <p>Loading...</p>}
                {errors &&
                    Object.keys(errors).map((error) => (
                        <Alert key={error} text={errors} error />
                    ))}
                {message && <Alert text={message} />}
                <form
                    onSubmit={onSubmit}
                    className="flex justify-between items-center gap-3 mb-2"
                >
                    <input
                        type="date"
                        name="showing-time"
                        onChange={(e) => setShowingTime(e.target.value)}
                        id="showing-time"
                        className="bg-gray-600 rounded-xl text-gray-50 hover:bg-gray-700 py-3 px-5"
                        required
                    />
                    <input
                        type="time"
                        name="detail-time"
                        onChange={(e) => setDetailTime(e.target.value)}
                        id="detail-time"
                        className="bg-gray-600 rounded-xl text-gray-50 hover:bg-gray-700 py-3 px-5"
                        required
                    />
                    <button
                        type="submit"
                        className="inline-block text-red-700 hover:text-white border border-red-700 bg-red-200 transition-all ease-in-out hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
                    >
                        Set End Time
                    </button>
                </form>
                <div className="relative flex gap-5 px-5 justify-center items-center w-4/5 h-36 text-gray-50 font-extrabold bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 rounded-3xl">
                    <div className="absolute top-1 font-normal text-xs">
                        End Time :{" "}
                    </div>
                    <div className="text-2xl text-center">
                        The voting will be end in{" "}
                    </div>
                    <p className="text-2xl text-center">{endTime.days} Days</p>
                    <p className="text-2xl text-center">
                        {endTime.hours} Hours
                    </p>
                    <p className="text-2xl text-center">
                        {endTime.minutes} Minutes
                    </p>
                    <p className="text-2xl text-center text-red-500">
                        {endTime.seconds} Seconds
                    </p>
                </div>
                {endTime.days === 0 &&
                endTime.hours === 0 &&
                endTime.minutes === 0 &&
                endTime.seconds === 0 ? (
                    <button
                        type="button"
                        id="chart-button"
                        className={`${
                            countdownStarted ? "hidden" : "inline-block"
                        } text-blue-700 bg-blue-200 mt-5 transition-all ease-in-out hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800`}
                        onClick={startCountdown}
                    >
                        Start Countdown
                    </button>
                ) : (
                    <h1 className="block text-3xl mt-5 text-center text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400 font-bold">
                        Statistics will appear after voting time ends
                    </h1>
                )}
                {countdownStarted && countdown > 0 && (
                    <div className="text-9xl font-bold mt-5 text-red-700">
                        {countdown}
                    </div>
                )}
            </div>
            {countdown === 0 && (
                <>
                    <div className="my-5 text-center">
                        <h1 className="text-5xl font-bold text-dark-blue">
                            Congratulations To
                        </h1>
                        <p className="text-4xl font-semibold text-main-bg">
                            {mostVotedCandidate}
                        </p>
                        <p className="text-2xl font-semibold text-main-blue">
                            Voters:{" "}
                            {
                                statistics.n_candidate_voters[
                                    statistics.candidate_names.indexOf(
                                        mostVotedCandidate
                                    )
                                ]
                            }
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        {statistics &&
                            statistics.candidate_names.map(
                                (candidate, index) => {
                                    if (
                                        index !==
                                        statistics.candidate_names.indexOf(
                                            mostVotedCandidate
                                        )
                                    ) {
                                        return (
                                            <div
                                                key={index}
                                                className="text-center"
                                            >
                                                <p className="text-3xl font-bold text-main-bg">
                                                    {candidate}
                                                </p>
                                                <p className="text-2xl font-semibold text-main-blue">
                                                    Voters:{" "}
                                                    {
                                                        statistics
                                                            .n_candidate_voters[
                                                            index
                                                        ]
                                                    }
                                                </p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }
                            )}
                    </div>
                    <div className="w-full h-screen">
                        <Doughnut data={chartData} options={chartOptions} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Statistics;
