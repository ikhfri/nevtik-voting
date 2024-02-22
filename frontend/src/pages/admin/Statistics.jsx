import React, { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { Doughnut } from "react-chartjs-2";
import { Alert } from "../../components";

const Statistics = () => {
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState(null);
    const [statistics, setStatistics] = useState(null);
    const [showingTime, setShowingTime] = useState(null);
    const [detailTime, setDetailTime] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [countdownStarted, setCountdownStarted] = useState(false);

    useEffect(() => {
        if (statistics) {
            setShowingTime(statistics.time);
            setIsClicked(statistics.time.is_clicked === 1 ? true : false);
        }
    }, [statistics]);

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

                    setCountdown({ days, hours, minutes, seconds });
                    setCountdownStarted(true); // Countdown started
                }
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 500) {
                    setErrors(response.data.error);
                }
            });
    };

    // Function to start the countdown
    const startCountdown = (countdown) => {
        // Calculate the deadline based on current time and countdown values
        const now = new Date().getTime();
        const deadline =
            now +
            countdown.days * (1000 * 60 * 60 * 24) +
            countdown.hours * (1000 * 60 * 60) +
            countdown.minutes * (1000 * 60) +
            countdown.seconds * 1000;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = deadline - now;
            if (distance <= 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
            setCountdown({ days, hours, minutes, seconds });
        }, 1000);
    };

    // Chart data and options
    const chartData = {
        labels: statistics?.candidate_names, // Replace with your actual candidate names
        datasets: [
            {
                label: "Voters",
                data: statistics?.n_candidate_voters, // Replace with your actual data
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Replace with your colors
                hoverOffset: 4, // Replace with your hover colors
            },
        ],
    };

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

    return (
        <div className="p-2 md:p-10 glassmorphism rounded-3xl w-10/12">
            {countdownStarted &&
            countdown.days === 0 &&
            countdown.hours === 0 &&
            countdown.minutes === 0 &&
            countdown.seconds === 0 ? (
                <>
                    <h1 className="block text-3xl mt-5 text-center text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-orange-400 font-bold">
                        Statistics will appear after voting time ends
                    </h1>
                    <div className="w-full h-screen">
                        <Doughnut data={chartData} options={chartOptions} />
                    </div>
                </>
            ) : (
                <>
                    <div className="mb-10">
                        <p className="text-lg text-main-bg font-medium">
                            voting
                        </p>
                        <p className="text-3xl font-extrabold tracking-tight text-dark-blue dark:text-lightOne">
                            statistics
                        </p>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center my-10">
                        {errors &&
                            Object.keys(errors).map((error) => (
                                <Alert text={errors} error />
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
                                class="bg-gray-600 rounded-xl text-gray-50 hover:bg-gray-700 py-3 px-5"
                                required
                            />
                            <input
                                type="time"
                                name="detail-time"
                                onChange={(e) => setDetailTime(e.target.value)}
                                id="detail-time"
                                class="bg-gray-600 rounded-xl text-gray-50 hover:bg-gray-700 py-3 px-5"
                                required
                            />
                            <button
                                type="submit"
                                class="inline-block text-red-700 hover:text-white border border-red-700 bg-red-200 transition-all ease-in-out hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
                            >
                                Set End Time
                            </button>
                        </form>
                        <div className="relative countdown-timer flex gap-x-10 justify-evenly items-center w-4/5 h-36 text-gray-50 font-extrabold bg-gradient-to-bl from-blue-700 via-blue-800 to-gray-900 rounded-3xl">
                            <div class="absolute top-1 font-normal text-xs">
                                End Time :{" "}
                            </div>
                            <div class="text-2xl text-center">
                                The voting will be end in{" "}
                            </div>
                            <p id="days" class="text-2xl text-center">
                                {countdown.days} Days
                            </p>
                            <p id="hours" class="text-2xl text-center">
                                {countdown.hours} Hours
                            </p>
                            <p id="minutes" class="text-2xl text-center">
                                {countdown.minutes} Minutes
                            </p>
                            <p
                                id="seconds"
                                class="text-2xl text-center text-red-500"
                            >
                                {countdown.seconds} Seconds
                            </p>
                        </div>
                        <button
                            type="button"
                            className="inline-block text-blue-700 bg-blue-200 transition-all ease-in-out hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800 disabled:bg-slate-200 disabled:hover:bg-slate-200 disabled:text-blue-400"
                            disabled={!statistics}
                            onClick={() => startCountdown(countdown)}
                        >
                            Start Countdown
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Statistics;
