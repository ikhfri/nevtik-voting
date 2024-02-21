import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axiosClient from "../axios-client";

const Welcome = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const { data: rate } = useQuery("rate", () =>
        axiosClient.get("/rate").then(({ data }) => data)
    );

    console.log(rate);

    useEffect(() => {
        if (!rate) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type: "pie",
            data: {
                labels: ["Voted", "Haven't Voted"],
                datasets: [
                    {
                        data: [rate.users - rate.not_voted, rate.not_voted],
                        backgroundColor: [
                            "rgb(157, 198, 194)",
                            "rgb(66, 138, 162)",
                        ],
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            generateLabels: function (chart) {
                                return chart.data.labels.map(function (
                                    label,
                                    i
                                ) {
                                    if (i === 0) {
                                        return {
                                            text:
                                                label +
                                                " - " +
                                                Math.round(
                                                    ((rate.users -
                                                        rate.not_voted) /
                                                        rate.users) *
                                                        100
                                                ) +
                                                "%",
                                            fillStyle:
                                                chart.data.datasets[0]
                                                    .backgroundColor[i],
                                        };
                                    } else {
                                        return {
                                            text:
                                                label +
                                                " - " +
                                                Math.round(
                                                    (rate.not_voted /
                                                        rate.users) *
                                                        100
                                                ) +
                                                "%",
                                            fillStyle:
                                                chart.data.datasets[0]
                                                    .backgroundColor[i],
                                        };
                                    }
                                });
                            },
                        },
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return (
                                    context.label +
                                    ": " +
                                    Math.round(
                                        (context.raw / rate.users) * 100
                                    ) +
                                    "%"
                                );
                            },
                        },
                    },
                },
            },
        });
    }, [rate]);

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-4xl text-center text-dark-blue font-extrabold">
                    Civitas SMK Negeri 1 Cibinong sudah memberikan suaranya!
                </h1>
                <div>
                    <canvas ref={chartRef} />
                </div>
                <h1 className="text-4xl text-center text-dark-blue font-extrabold">
                    Tunggu apa lagi? Ayo tentukan pilihanmu!
                </h1>
            </div>
            <div className="flex justify-center items-center mt-5">
                <Link
                    to="/vote"
                    className="text-light-blue py-2 px-16 bg-dark-blue text-2xl rounded-3xl font-bold"
                >
                    vote
                </Link>
            </div>
        </>
    );
};

export default Welcome;
